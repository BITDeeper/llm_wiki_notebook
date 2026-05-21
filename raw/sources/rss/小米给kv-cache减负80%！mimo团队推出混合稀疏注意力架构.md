---
title: "小米给KV Cache减负80%！MiMo团队推出混合稀疏注意力架构"
date: 2026-02-07
source: "量子位"
url: "https://mp.weixin.qq.com/s/2sWf8rwLUS9WpJC3p2mm2A"
rss_id: "2247867475_2"
---
小米Mimo大模型团队投稿
量子位 | 公众号 QbitAI
小米MiMo大模型团队，加入AI拜年战场——
推出
HySparse，一种面向Agent时代的混合稀疏注意力架构
。
HySparse创新使用极少的全注意力
（Full Attention）
层提供“token选择+KV Cache”，其余稀疏注意力
（Sparse Attention）
层直接复用这些信息，实现高效精准的长上下文建模。
在总共49层的80B-A3BMoE模型实验中，
仅保留5层Full Attention仍能保持甚至提升模型能力，同时显著降低KVCache存储与计算开销
，实现效果与效率的兼顾，展示出混合稀疏注意力在超长上下文建模中的巨大潜力。
HySparse的设计灵感来源于学术界已有研究工作的经验和观察之上
。
一部分是显著token在相邻层之间相对稳定。
已有工作如TidalDecode等，观察到连续层的 “重要 token” 会高度重合，因此可以在某层识别重要token并在后续层复用。
HySparse将这一观察提升用于模型结构设计并直接训练。
还有部分受启发于跨层KV Cache共享能显著省显存且不显著伤性能
，YOCO、Gemma3n等架构层面工作已经证明了跨层共享KV的可行性。
HySparse将共享直接落在“Full Attention层 → 其后Sparse Attention层” 的hybrid block内共享上。
背景：Sparse Attention的 “两朵乌云”
多数Sparse Attention方法都遵循同一基本范式：先选择，再计算。
在真正计算注意力之前，先用一个“选择器” 决定哪些重要token是值得注意的，只在这些位置上进行注意力计算。
这一范式降低了计算量，但始终绕不开两个根本问题。
一个问题是重要 Token 的选择依赖代理
（Proxy）
。
Sparse Attention的核心在于 “选哪些重要token”。
但现实中，这一选择往往依赖proxy信号：固定模式、启发式规则、近似估计，或额外的轻量化选择模块。
这些proxy本质上都是对真实注意力分布的近似，无法保证能完全精准地识别最重要的token；在长上下文、持续生成的场景下，这种近似误差还会不可避免地累积。
即便是可训练的Sparse Attention方法，往往也只是将人工设计的选择规则替换为可学习的轻量化选择代理模块，通过训练来对齐选择行为。
这在一定程度上缓解了选择误差，但同时显著增加了训练复杂度，难以从根本上摆脱这一“代理瓶颈”。
第二个问题是计算量降低，但KV Cache存储未减
。
目前，主流的动态Sparse Attention注意力方法主要减少的是计算开销。
这类做法不再对所有token执行注意力计算；但为了避免在生成过程中不可逆地错误丢弃KV Cache
（因为token的重要性会随生成动态变化）
，推理阶段通常仍需保留全量KV Cache。
带来的结果就是计算量确实下降了，但显存与带宽这一主要瓶颈依然存在。
HySparse：把 “选择” 和 “缓存”交给Full Attention
HySparse做的事是
把 “选择” 和 “缓存” 这两件对Sparse Attention来说最难的事，交给Full Attention来做
。
为此，HySparse采用hybrid block结构。
每个hybrid block由1层Full Attention+N层Sparse Attention组成。
Hybrid block内部的Sparse Attention层并不再独立做token选择和维护全量KV，而是直接复用前置Full Attention层产生的重要token索引和 KV Cache。
这背后的动机是
Full Attention在完成自身计算的同时，已经生成了KV Cache，并且计算出了最准确的token重要性信息，自然可以供后续N个Sparse Attention层直接复用。
这一设计表面上非常简洁，却巧妙地同时解决了上述 Sparse Attention 的两大核心问题，
选择不再依赖proxy；
Sparse层不引入额外KV Cache开销。
同时，HySparse稀疏层不是单一路径，稀疏层内部也做了一次 “全局稀疏 + 局部窗口” 的混合结构。
HySparse 的每一层 Sparse Attention 包含两条分支：
块级稀疏注意力分支
（全局）
：在TopK索引对应的共享KV Cache上进行全局Sparse Attention计算；
滑动窗口注意力分支
（局部）
：维护一个很小的本地窗口KV Cache
（默认窗口大小为128）
以保证局部建模能力。
两分支输出通过轻量门控
（sigmoid gate）
进行融合。
直观地看，HySparse
并不是用Sparse Attention取代Full Attention ，而是将全局信息通路拆解为 “少量昂贵但可靠的全注意力”+“多次廉价而高效的全局稀疏检索与局部建模”。
实验结果：整体更优
为了验证HySparse的有效性，研究团队将其与两类主流架构进行对比：
Full-Attn
：所有层均为Full Attention；
Hybrid SWA
：按比例混合Full Attention和Sliding Window Attention；
HySparse
：采用与Hybrid SWA相同的Full Attention比例，但将滑动窗口层升级为“全局稀疏 + 局部窗口”的Sparse Attention。
研究人员分别在7B的Dense模型和80B的MoE模型上进行了实验。
结果显示，7B模型共有36层，其中9层是Full Attention；80B MoE模型共有49层，只有5层是Full Attention，这
为HySparse带来了接近10×的KV Cache存储降低。
在多项通用、数学、代码和中文评测中，HySparse在7B Dense和80B MoE两种规模均带来稳定提升。
特别是在80B MoE的激进混合比例下，HySparse通过全局稀疏检索通路有效保持长距离信息访问，维持了全局推理能力，还在部分任务上超越了全注意力基线，充分体现了全局稀疏通路的重要作用。
RULER长文测试表明，HySparse
即便将Full Attention层压到极少，也能稳定保持长距离关键信息访问
，充分展现了其混合稀疏结构的优势。
小米MiMo表示，计划在更大规模模型上进一步验证HySparse的极限和潜力，并持续探索降低Full Attention层数量的可能性，让超长上下文更高效。
arXiv链接：
https://arxiv.org/abs/2602.03560
一键三连
「点赞」「转发」「小心心」
欢迎在评论区留下你的想法！
—
完
—
我们正在招聘一名眼疾手快、关注AI的
学术编辑实习生
🎓
感兴趣的小伙伴欢迎关注 👉
了解详情
🌟 点亮星标 🌟
科技前沿进展每日见