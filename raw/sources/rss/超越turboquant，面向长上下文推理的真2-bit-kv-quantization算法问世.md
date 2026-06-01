---
title: "超越TurboQuant，面向长上下文推理的真2-bit KV Quantization算法问世"
date: 2026-05-29
source: "机器之心"
url: "https://mp.weixin.qq.com/s/DKiYunmj_YlvPpMjVgpK9Q"
rss_id: "2651035616_3"
---
本文作者 Zhongzhu Zhou 是 TogetherAI 的 Senior Research Scientist，悉尼大学博士，研究方向为高效机器学习系统，方向覆盖 模型训推算法与系统协同设计，LLM 压缩与量化。团队成员均来自 TogetherAI，悉尼大学以及伊利诺伊大学厄巴纳 — 香槟分校。
Together AI 于 2022 年 6 月创立，由苹果前高管 Vipul Ved Prakash、斯坦福大模型研究中心主任 Percy Liang、芝加哥大学副教授 Ce Zhang、Flash Attention 作者 Tri Dao 联合创办。
超越 TurboQuant，内存有救了
！TogetherAI 最新论文
OSCAR
直面冲击 TurboQuant，提出一个面向长上下文推理服务的真正的 2-bit KV Cache 系统，开盒即用。
论文标题：
OSCAR: Offline Spectral Covariance-Aware Rotation for 2-bit KV Cache Quantization
论文链接：https://arxiv.org/abs/2605.17757
项目主页：https://oscar-quantize.github.io/
代码：https://github.com/FutureMLS-Lab/OSCAR；
RotationZoo：https://huggingface.co/Zhongzhu/OSCAR-RotationZoo
作者：Zhongzhu Zhou, Donglin Zhuang, Jisen Li, Ziyan Chen, Shuaiwen Leon Song, Ben Athiwaratkun, Xiaoxia Wu
长上下文模型越来越强，但服务时的瓶颈往往不是算力，而是 KV Cache：每生成一个 token，都要从显存中读取越来越长的历史 key，value。上下文越长、batch 越大，KV Cache 越吃显存，也越吃带宽。把历史 KV 压到 2-bit，理论上可以让历史段显存减少约
8 倍
；但真正难的是，压完之后推理能力不能崩，系统也必须能在真实 serving 框架里跑起来。
为什么 2-bit KV Cache 这么难？INT2 只有 4 个量化等级，而 KV activation 中常常有少数幅值极大的 outlier channel。如果这些 outlier 主导量化尺度，大多数正常值会被挤到很少的有效等级里，注意力分布很快漂移。普通 Hadamard 旋转能把 outlier 摊平，但它不知道模型在 attention 里真正读哪些方向。OSCAR 的核心就是把旋转目标从「
重建原始 K/V 向量」改成「
保留 attention 消费 KV 的方式」。
相比之前量化的工作，
比如 TurboQuant 压缩的是向量，但忽略了真正影响模型的是 attention 的质量，OSCAR 保留的是 attention 真正会读的方向
。朴素 INT2 和全模型层的 3-bit K/V TurboQuant 都会在困难推理任务上明显掉分；OSCAR 在约
2.28 effective bits per KV element
下仍能接近 BF16，并在 Qwen3-4B-Thinking 上相对 3-bit K/V TurboQuant 最高提升
40.1 分
。
OSCAR 的动机
图 1：为什么只看 K/V 重建误差会误导判断
图 1 对比了 naive INT2、Hadamard-only、clip-only 和 OSCAR 在量化误差传播链路上的差异。关键点是，原始 K/V 的重建误差并不能完全解释模型最终表现；真正影响推理质量的是 attention-score KL、attention-block output MSE 以及后续 hidden-state error。OSCAR 的优势不只是让向量数值更平滑，而是把量化误差压到 attention 不敏感的方向上。
OSCAR 的设计
具体来说，对 key 来说，量化误差会进入 attention logits，也就是 QKᵀ，因此 OSCAR 用 query covariance（QᵀQ）构造 key 的旋转目标；对 value 来说，误差经过注意力权重进入输出，因此 OSCAR 使用 score-weighted value covariance（VᵀSᵀSV）。离线校准阶段，OSCAR 从少量校准样本中估计这些 attention-aware covariance，为每层、每个 head 生成固定旋转和 clipping 阈值。最终旋转写作
R = U・Hadamard・bit-reversal
：U 对准 attention 相关方向，Hadamard 分散 outlier，bit-reversal 平衡 INT2 分组，避免某个 group 被少数通道支配。
更重要的是，OSCAR 不是以往的量化论文，离线跑量化得到指标，而是已经接入
SGLang
，做到开箱即用的 2-bit KV serving。OSCAR 在 SGLANG 中维护一个 token 池:
BF16 sink (64 tokens) | INT2 history (~2.28 BPE) | BF16 recent (256 tokens)
其中 sink token 和 recent window 保持 BF16，用来保护 attention sink 与短期局部上下文；中间最长的历史段存成旋转后的 INT2。新 token 先写入 recent window，随着解码推进，最老的 recent token 再由融合 Triton kernel 执行 rotate /clip/quantize/pack，并 demote 到 INT2 history。每 4 个 2-bit 值打包进 1 个 byte。decode 阶段，OSCAR 在 GPU 上把缓存分成 BF16 段和 INT2 段：INT2 kernel 负责 unpack、scale/zero point 还原和浮点累加，BF16 kernel 处理 sink/recent，最后用 online softmax merge 合并结果。它同时兼容 paged KV、radix prefix cache 和 SGLang 的 fused kernel pipeline，因此可以直接用于长上下文 workload，而不是停留在论文图表里。
图 2：OSCAR 整体流程图
图 2 展示 OSCAR 从离线校准到在线 serving 的完整路径。左侧是离线阶段：OSCAR 从少量校准样本中估计 attention-aware rotation 和 clipping threshold，让 KV activation 在进入 INT2 前变得更适合量化。右侧是在线阶段：sink/recent token 继续保持 BF16，中间最长的 history KV 进入旋转后的 INT2 cache，并在 SGLang paged KV 中完成真实 serving。因此 OSCAR 不是单一量化技巧，而是一整套 2-bit KV Cache pipeline。
评估结果
OSCAR 在 Qwen3-4B-Thinking、Qwen3-8B、Qwen3-32B 和 GLM-4.7-FP8 上测试，任务覆盖 GPQA、HumanEval、LiveCodeBench v6、AIME25、MATH500，生成长度最高 32K，每个设置运行 5 次取均。
OSCAR 在
2.28 BPE
下，Qwen3-4B-Thinking 距 BF16 仅
3.78
分
，Qwen3-8B 距 BF16 仅
1.42 分
，Qwen3-32B 与 GLM-4.7-FP8 基本与 BF16 持平。相比之下，QuaRot-INT2 和 naive INT2 在这些 reasoning /coding 任务上大多直接崩溃；TurboQuant 在全层 3-bit K/V、无 mixed-precision 保护的公平设置下，也在小模型推理任务上掉分明显。
OSCAR
还在
128K
长上下文设置下对中 / 大规模模型做了 RULER-NIAH 测试：OSCAR 在 Qwen3-8B 和 GLM-4.7-FP8 上都保持了明显更稳定的检索性能，说明这种 attention-aware 旋转不仅能撑住短评测，也能抵抗超长历史中 KV 误差的累积。换句话说，OSCAR 是少数能在真近 2-bit 设置下仍保持现代 reasoning model 质量的方法。
系统收益也非常直接：相对 BF16 history storage，OSCAR 可减少约
8×
KV Cache memory；在 100k context、batch-size-1、full prefix-cache hit 设置下，decode 最高约
3×
加速；在大 batch、同显存预算下，job-level throughput 最高约
7×
。prefix cache 命中率越高，OSCAR 越能利用更小的 KV footprint 提升并发吞吐，这对共享系统提示、多轮 Agent、工具调用循环等长前缀复用场景尤其重要。
精度损失
图 3：完整主结果表，多种 KV 量化方法同场对比
图 4：AIME25 32K 生成，和 KIVI / Kitty 的专项对比
图 3 是论文主结果表，包含 BF16、Saw-INT4、TurboQuant、QuaRot-INT2、Naive INT2 和 OSCAR 在四个模型、五个任务上的完整对比。BF16 是精度上界；Saw-INT4 是强 4-bit 参考，BPE 为
4.25
；TurboQuant 在这里使用无 mixed-precision 保护的全层
3-bit K/V
设置，BPE 为
3.25
；QuaRot-INT2 和 Naive INT2 是接近 2-bit 的旋转 / 朴素基线，BPE 约
2.25
；OSCAR 则在
2.28 BPE
下运行。
这张表的重点不是单一模型，而是「
低比特能不能稳定」。在 Qwen3-4B-Thinking 上，TurboQuant mean 为
31.74
，QuaRot-INT2 只有
1.40
，Naive INT2 为
0.00
；OSCAR 达到
71.86
，距离 BF16 只差
3.78
，并相对 TurboQuant 提升
40.1 分
。在 Qwen3-8B 上，OSCAR mean 为
69.42
，距离 BF16 只差
1.42
，而 TurboQuant 为
56.88
。到 Qwen3-32B 和 GLM-4.7-FP8，OSCAR 基本与 BF16 持平。换句话说，在接近 2-bit 的 KV 预算下，OSCAR 是表中唯一能在多模型、多任务上稳定贴近 BF16 的 INT2 方法。
图 4 单独看 AIME25 这个高难数学推理任务，并对比 KIVI-KV2、Kitty 和 OSCAR。但由于 KIVI, KITTY 没有 framework 支持，无法进行 long context run，所以选取了他们方法唯一在 32K 汇报的结果 - AIME25。在 Qwen3-8B 上，OSCAR 以
2.38 BPE
达到
66.67
，基本追平 BF16 的
66.00
，明显高于 KIVI-KV2 和 Kitty；在 Qwen3-32B 上，OSCAR 达到
74.00
，甚至略高于 BF16 的
72.59
，也超过 Kitty 的
69.26
。这说明 OSCAR 不只是相对 TurboQuant 有优势，在已有 KV-cache 量化方法中，也能在接近 2-bit 的预算下保住困难数学推理能力。
系统加速
图 5：100k 长上下文下的 decode /batch throughput
图 5 展示 100k 上下文下的系统性能。OSCAR 在 batch-size-1、full prefix-cache hit 的纯 decode 场景下最高约
3×
加速；在固定显存预算下，batch size 增大时，INT2 history 带来的 KV footprint 降低可以显著提高 job-level throughput，最高约
7×
。这说明 OSCAR 不只是精度能保住，也能实打实降低显存带宽压力。
图 6：prefix cache 命中率越高，吞吐前沿越往外推
图 6 展示 prefix-cache hit ratio 对端到端 serving throughput 的影响。横轴是单用户吞吐，纵轴是单 GPU 吞吐；从 cache disabled 到 normal cache，再到接近 100% warmup replay，吞吐前沿逐步外扩。OSCAR 保持标准 paged KV /prefix cache 抽象，因此共享系统提示、多轮 Agent、工具调用循环等长前缀复用场景可以直接受益。
这些结果的一个重要含义是，OSCAR 并没有依赖「
挑选少数层保留高精度」来保住分数。很多低比特方法在真正部署时会借助混合精度：第一层、最后一层或若干敏感层仍然保留较高 bit，这会让平均 bit 数上升，也会让 kernel 和 cache layout 变复杂。OSCAR 的对比更严格：历史 KV 主体保持统一的 INT2 表示，只在 sink 和 recent 两个很小窗口保留 BF16。这样做的好处是，系统工程上更容易接入 paged cache、prefix cache 和批量调度，也更接近真实服务场景中的显存预算。
总结
另一个值得强调的点是，OSCAR 的收益不是只在小模型或短上下文上成立。论文同时测试了 4B、8B、32B 以及 GLM-4.7-FP8 这样的大模型；既看了数学、代码、知识问答等 32K 推理生成任务，也看了 128K RULER-NIAH 长上下文检索。短评测里，OSCAR 能接近 BF16；长上下文里，它也能让 attention 分布随上下文增长更稳定。这说明 attention-aware rotation 不是只在某个 benchmark 上调参有效，而是在缓解 KV 误差随历史长度累积这个根本问题。
从应用角度看，这对长上下文 Agent 特别关键。真实 Agent 往往包含很长的系统提示、工具说明、历史对话和检索内容，并且不同请求之间存在大量共享前缀。如果 KV Cache 只能用 BF16 存，系统很快会被显存卡住；如果直接做朴素 INT2，又可能让推理链条失真。OSCAR 的设计刚好夹在两者之间：长历史用 INT2 降显存和带宽，关键 sink/recent 用 BF16 兜住稳定性，再让 prefix cache 复用共享前缀。换句话说，它把「
能压到 2-bit」和「
能上线 serving」 放在同一个系统里考虑。
TurboQuant 是很强的通用 online vector quantization 方法；OSCAR 针对的是 attention-aware 2-bit KV serving。
二者不是简单替代关系，例如OSCAR 的 最新codebase中已经在attention-aware rotation 引入了更强的 Lloyd Max Codebook，将压缩推向极致。OSCAR 带来了一个独特的观点：
2-bit KV Cache 要能上线，旋转不只是「
有没有」，而是必须对准 attention，并且要有真实 serving 系统支撑
。
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com