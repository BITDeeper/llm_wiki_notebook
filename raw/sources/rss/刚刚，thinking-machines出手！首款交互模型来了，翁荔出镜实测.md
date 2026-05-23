---
title: "刚刚，Thinking Machines出手！首款交互模型来了，翁荔出镜实测"
date: 2026-05-12
source: "机器之心"
url: "https://mp.weixin.qq.com/s/0VNL5A9Bu3spdtbu91Ti0Q"
rss_id: "2651032372_2"
---
编辑｜冷猫
从遥远的 iPhone 4S 时代开始，人和机器的对话始终是单轮的「你来我往」。哪怕智能体如此发达的今天也是如此。
为什么和机器的对话总是一问一答，而从始至终不能像和人对话那样自然呢？
业界主流方案，仍然是在传统的 turn-based 大模型外面套一层 VAD（语音活动检测）外壳，硬把它逼进实时场景。
就在刚刚，大名鼎鼎的
Thinking Machines Lab 终于拿出了成立以来首个大模型 TML-Interaction-
Smal
l
，这是第一个
同时具备强智能 / 指令遵循和交互性
的模型。
出场即炸场，彻底打破了传统「一问一答」的人机交互模式，真正实现同时输出语音，内容，代码，全自然交互。
「人们在同一时间交谈、倾听、观看、思考和协作，实时进行。我们设计了一种
与人类以相同方式协同工作的 AI
。」
更值得一提的是，OpenAI 前应用研究 VP、Thinking Machines 联合创始人翁荔（Lilian Weng）亲自出镜，用一段连贯的故事演示了这款模型的核心能力。
按照 Thinking Machines 官方的描述：「Lilian 在讲故事的过程中，交互模型可以追踪她到底是在思考、在让出话语权、在自我纠正，还是在邀请回应；整个过程中没有任何专门的对话管理系统在工作。」
她在社交平台上写道：
「过去几个月，我们经历了大量的乐趣（和压力），最终产出了 12 个版本（外加大量子版本）和 137 页的训练日志。事实证明，要让人和 AI 协作得更好，先要靠人和人之间的协作。」
Thinking Machines 发布了技术博客，详细解读了模型的技术细节。
博客链接：https://thinkingmachines.ai/blog/interaction-models/
#introduction
核心创新：把「时间」缝进模型架构里
从评测数据看，TML-Interaction-Small 在交互质量与智能度的综合指标上压过了 GPT Realtime 2.0、Gemini 3.1 Flash Live 等一众闭源对手；在新提出的时间感知与视觉主动性评测上，
与第二名拉开了一个数量级的差距
。
智能与交互前沿。模型在交互质量上表现卓越，同时比任何非思考模型都更加智能。实现了最佳响应速度，以用户与模型之间的轮次延迟来衡量。
这一交互模型之所以能做到这种程度，根本原因在于它的
训练范式与传统大模型完全不同
。
200ms 一拍：时间对齐的 micro-turn
传统 LLM 的输入输出是被「拍平」成一个单线 token 序列的：人说一句，模型答一句，再人说一句，再模型答。模型对真实世界的时间没有任何感知。
Thinking Machines 的做法是：把音频、视频、文本三种模态都
按 200ms 一个 chunk 切成连续的「微回合」（micro-turn）
。每个 200ms 里，模型同时处理输入并产出输出，也就是说，模型一边在听你说，一边可能在生成回应、保持沉默、或者插入一句反馈。
200ms 这个数字并不随便。它接近人类听觉感知与口头反应的最短自然窗口，也是 backchannel（嗯嗯、对对这类小口癖）能够自然嵌入的时间粒度。
这种设计带来的直接好处是：「沉默」「重叠」「打断」这些过去被脚本特殊处理的场景，全部回归为模型本身的常规输出。需要说话就生成语音 token，不需要说话就生成「沉默」token，跟模型决定下一个文字 token 是什么没有本质区别。
抛掉编码器，从零训练
第二个关键设计，是
「encoder-free early fusion」
。
主流的 omni 多模态模型，往往要先训一个 Whisper 类的音频编码器、一个 TTS 类的解码器，再把它们拼到 LLM 主干上。这一套组合拳的代价是：每个组件都要单独优化、单独维护，模态之间的信息很容易在边界处丢失。
Thinking Machines 直接抛弃了这种思路：
音频用 dMel 表示，经过一个轻量级 embedding 层进入主干；
图像被切成 40x40 的 patch，由 hMLP 模块完成编码；
音频解码端用一个 flow head 直出 mel 频谱；
所有这些组件，连同 transformer 主干，全部从零开始联合训练。
这意味着模型从训练第一秒起，就在同一个梯度流里学习如何协调音频、视频、文本三种信号。早期融合带来的好处是显而易见的：声音里的笑意、画面里的表情、文字里的犹豫，可以在同一层被模型捕捉到，而不是在三个独立模块里各自损耗。
双模型协同：实时门面 + 后台大脑
第三层巧思，是
系统级的双模型架构
。
交互模型负责「现场」，要求严格的实时响应。而真正需要深度推理、检索、工具调用的任务，会被打包成完整的上下文，派发给一个异步运行的 background model 去做。结果回来之后，交互模型再选一个合适的时机，把信息自然插进当前对话。
「让用户同时享受 thinking 模型的智能和 non-thinking 模型的响应延迟」，这是 Thinking Machines 给这套架构的定位。
为了把 200ms 的延迟控制做到极致，他们还做了几件硬核工程：
自研 streaming session 推理机制，已经把一个版本上游合入了 SGLang；
MoE kernel 用 gather+gemv 替代标准 grouped gemm，更适合 bidirectional serving 的张量形状；
实现了 trainer 与 sampler 的 bitwise 级对齐，做到 batch-invariant 训练，端到端开销不到 5%。
最后这一条尤其值得一提。在大模型训练里，trainer 和 sampler 之间的浮点不一致，长期以来是 RL 调试的「玄学黑盒」。Thinking Machines 在 NVLS 通信、Attention Split-KV 等关键路径上重写了 kernel，把它彻底变成了确定性问题。
实验结果
具体数据很能说明问题。
在衡量交互质量的 FD-bench v1.5 上，TML-Interaction-Small 拿到 77.8 分，第二名 Gemini-3.1-flash-live (minimal) 只有 54.3 分；GPT-Realtime-2.0 (minimal) 是 46.8 分。
在衡量端到端响应延迟的 FD-bench v1 上，TML 把简单转换的延迟做到了 0.40 秒，对比 GPT-Realtime-2.0 (minimal) 1.18 秒、Gemini-3.1-flash-live (minimal) 0.57 秒，更智能的同时还更快。
加上后台 agent 之后，FD-bench v3（Audio + Tools）上的 Pass@1 是 68.0%，对比 GPT-2.0 (minimal) 的 52.0%、GPT-2.0 (xhigh) 的 58.0%，依然是榜首。
智能度方面，TML-Interaction-Small 在 Audio MultiChallenge 拿到 43.4 分，超过所有 instant 模型；BigBench Audio 在启用后台 agent 后达到 96.5%，与 GPT-Realtime-2.0 (xhigh) 的 96.6% 几乎打平。
主流 benchmark 之外，Thinking Machines 自己设计了几项专门衡量「时间感知」与「视觉主动性」的新评测。在这些任务上，TML-Interaction-Small 与第二名的差距，可以说是数量级的：
TimeSpeak（按用户指定时间主动开口）：64.7 vs 4.3
CueSpeak（在合适的语义时点主动接话）：81.7 vs 2.9
RepCount-A（视觉计数）：35.4 vs 1.3
Charades（视觉动作时段定位）：mIoU 32.4 vs 0
「目前没有任何已有模型能够有意义地完成这些任务。」
官方在博客里直接写道。所有评测过的对照模型，要么沉默不语，要么给出错误回答，包括开了 high reasoning 的 thinking 版本。
写在最后
2025 年 7 月，Thinking Machines Lab 完成了一笔轰动硅谷的融资：约 20 亿美元种子轮，估值约 120 亿美元。这是有公开记录以来最大的种子轮之一，由 a16z 领投，英伟达、Accel、ServiceNow、Cisco、AMD、Jane Street 等纷纷跟进。一家成立不到半年、还没有任何产品的公司，凭借创始团队的研究信誉，直接拿到独角兽十倍门槛的估值，本身就是 AI 行业的一件标志性事件。
此后近一年时间里，Thinking Machines 的对外动作并不多，主要通过自家研究博客 Connectionism 释出阶段性成果。其中最广为讨论的一篇是 Horace He 主笔的《Defeating Nondeterminism in LLM Inference》，把大模型推理的不确定性问题拆得相当透彻，也为这次 Interaction Models 提到的 trainer-sampler bitwise 对齐打下了铺垫。
而这次的 Interaction Models 发布，是 Thinking Machines
第一次拿出真正意义上的
「自研旗舰
大模型」
。120 亿美元估值压在身上一年多之后，他们终于交出了第一份对外答卷。
TML-Interaction-Small 只是起点。官方明确表示，更大尺寸的模型今年内会陆续推出，background agent 的协同方式也「刚开始挖掘」。
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com