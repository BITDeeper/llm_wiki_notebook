---
title: "LeCun预言成真？这有一份通往AGI的硬核路线图：从BERT到Genie，在掩码范式的视角下一步步构建真正的世界模型"
date: 2026-01-01
source: "量子位"
url: "https://mp.weixin.qq.com/s/i2HNtAZrdgSe5-cM9KHEJg"
rss_id: "2247859631_3"
---
非羊 整理自 凹非寺
量子位 | 公众号 QbitAI
从OpenAI的Sora到Google DeepMind的Genie，2025年无疑是世界模型
（World Model）
的爆发之年。
然而，繁荣的背后是概念的混战：世界模型究竟是什么？是强化学习里用来训练Agent的环境模拟器？是看过所有YouTube视频的预测模型？还是一个能生成无限3D资产的图形引擎？
近日，一篇题为
《From Masks to Worlds: A Hitchhiker’s Guide to World Models》
的论文在arXiv上引发关注。来自
MeissonFlow Research、Georgia Tech、UCLA和UC Merced
的联合研究团队提出了一份通往AGI的“建造指南”。
与罗列数百篇论文的传统综述不同，作者团队在文中专注于如何构建真正的世界模型，作者团队指出：正如LeCun所言，通往真正世界模型
（World Model）
的道路可能并非自回归，而是一条由“掩码
（Masking）
”铺就的窄路。
从BERT到MAE/MaskGIT，再到如今的Genie-3与离散扩散
（Discrete Diffusion）
模型，Masking正在统一不同模态之间的表征。
论文认为，从早期的掩码预训练
（Masked Modeling）
出发，经过统一架构与可交互式闭环，并通过设计持久的记忆系统，是构建真正的世界模型最有希望的技术路径。
这份“指南”将World Model的演进划分为五个阶段，并用一张全景图串联起了从BERT到Genie-3的十年AI进化史。本文将深度拆解这份“世界模型建造指南”，看Masking如何从一个预训练Trick，一步步进化为统治多模态世界的终极法则。
正本清源：世界模型不是模型，而是一个“系统”
在讨论技术路线之前，论文首先清理了地基：
到底什么是World Model？
行业内目前的共识往往是破碎的。有人认为它是一个视频生成器
（如Sora）
，有人认为它是一个交互环境
（如Genie）
。
但这篇论文认为，真正的世界模型
（True World Model）
不能是一个单体的黑盒，它需要是一个由
三大核心子系统
合成的有机整体：
1. 生成系统
（Generative Heart,$G$）
：这是造梦的引擎。它不仅要预测下一帧，还要模拟世界状态的演化
（Dynamics）
、将隐变量映射为观测
（Observation）
，并预测任务相关的回报
（Reward）
。它是世界的物理法则载体。
2. 交互系统
（Interactive Loop,$F,C$）
：这是让世界“活”起来的关键。世界不能只是一部放映的电影，它必须包含推断器
（Inference Filter）
来理解现状，以及策略
（Policy）
来做出行动。没有这个闭环，Sora再逼真也只是视频，不是模拟器。
3. 记忆系统
（Memory System,$M$）
：这是对抗熵增的防线。它负责通过循环状态更新，确保世界在时间轴上的持久连贯。没有记忆，世界就是一连串破碎的幻觉。
基于这个严格的定义，作者绘制了一张跨越五大阶段的进化路线图，将过去十年的AI进展精准归位。
而贯穿这五个阶段的灵魂线索，正是
Masking
。
Stage I：Masking范式——被低估的“创世法则”
为什么是Mask
（掩码）
？
在大多数人的认知里，Masking仅仅是BERT时代用来做“完形填空”的预训练技巧。但论文在Stage I部分提出了一个极其深刻的洞察：
Masking不仅仅是技巧，它是跨模态通用的“生成原则”，更是优于自回归的“创世法则”。
语言：从填空到“动态去噪”
在NLP领域，BERT确立了“双向上下文感知”的优势，但长期以来，生成任务一直被GPT系列的“从左到右”自回归
（AR）
统治。
然而，变局正在发生。
论文重点提及了
Discrete Diffusion
（离散扩散）
的崛起。
以Google的
Gemini Diffusion
和Inception Labs的
Mercury
为例，这些模型不再是简单的一次性填空，而是将Masking进化为一种
迭代去噪
（Iterative Denoising）
过程。
它们将固定比例的掩码替换为带时间索引的噪声调度。
模型学会了从完全的混沌
（全Mask）
中，一步步“雕刻”出清晰的文本。
这些工业级系统证明，这种动态掩码范式在生成质量和推理速度上已经可以比肩甚至超越传统的自回归基线。
视觉：并行生成的王者
在视觉领域，Masking的统治力更加稳固。
表征学习
：
MAE
（Masked Autoencoders）
证明了我们只需要看高比例遮挡的像素就能重构整张图片，这种高比例遮挡迫使模型学到了极强的语义表征。
高效生成
：
MaskGIT
和
MUSE
是这一领域的里程碑。它们利用Masked Generative Transformers
（MGT）
实现了
并行解码
。相比于逐像素生成的AR模型或计算沉重的连续扩散模型，Masking范式在保持高保真度的同时，带来了极致的效率。
最新的
Meissonic
更是证明，Masked Generative Transformers
（MGT）
可以在高分辨率文生图任务上，与最顶级的Diffusion模型掰手腕。
△ Figure 1由Meissonic生成的图像
多模态的普适性
从
VideoMAE
的时空管道掩码，到
wav2vec 2.0
的音频掩码，再到
Point-BERT
的3D点云掩码，Masking证明了自己是能统一所有数据形态的通用语言。
论文总结道：
Stage I确立了“Mask-Infill-Generalize（遮挡-补全-泛化）”作为构建世界模型的地基。
Stage II：统一架构——Masking让图文“同频共振”
地基打好后，下一步是架构的统一。目前的AI领域虽然号称多模态，但往往是“拼凑”的：用LLM处理文本，用Diffusion处理图像，中间用胶水层粘起来。
Stage II的目标是
Unified Models
（统一模型）
：
用同一个Backbone
（骨干）
，在同一个Paradigm
（范式）
下，处理和生成所有模态。
但在如何实现“统一”的路径上，论文清晰地梳理出了两大阵营的博弈：
Language-Prior
（语言先验）
与
Visual-Prior
（视觉
先验
）
。
1.语言先验建模
（Language-Prior Modeling）
这是目前最主流的路径，即“将视觉任务纳入语言模型框架”。但在这一阵营内部，正发生着一场范式迭代：
主流：Autoregressive（AR）路线：
这是Emu3、Chameleon、VILA-U等模型的选择。它们沿用了GPT式的
Next-Token Prediction
，试图用自回归逻辑统一一切。
局限：虽然逻辑推理强，但在视觉生成上，自回归的“单向性”往往难以处理图像的全局结构。
突围：Mask-based（Discrete Diffusion）路线：
这是论文重点标注的“新贵分支”。以
MMaDA、Lumina-DiMOO和LaviDa-O
为代表。
核心创新
：它们虽然坚持“语言优先”，但抛弃了自回归，转而采用
Mask-based（掩码）/Discrete Diffusion（离散扩散）
范式。
这意味着，它们在保持语言理解能力的同时，利用Masking的双向注意力机制来提升视觉生成的质量。这被作者视为Masking范式在语言建模内部的一次胜利。
2.视觉先验建模
（Visual-Prior Modeling）
：从看见到读写
另一条路则是从视觉模型出发，反向兼容文本。
基于潜在扩散模型
（Latent Diffusion）
的
UniDiffuser
。
基于掩码图像建模
（MIM）
的
Muddit
。
尽管AR-based模型目前声量巨大，但
Lumina-DiMOO
和
Muddit
等工作证明，这种架构不仅能理解图文，还能在双向上下文中实现更精细的生成控制，这才是真正能让“语言逻辑”与“视觉生成”完美兼容的那个最大公约数。
Stage III：交互式生成——Masking驱动的“模拟器”
这是World Model真正开始变得有趣的时刻。当模型不再只是预测下一帧，而是开始响应用户的Action
（动作）
时，它就从“放映机”变成了“模拟器”。
这就是
Stage III：Interactive Generative Models
。从这一阶段开始，作者不再局限于Masking范式，这是因为这阶段开始Masking范式相关的工作还比较少。
从GameGAN到Genie
GameGAN
：早期的尝试，用GAN模仿《吃豆人》，虽然能玩，但泛化性有限。
Genie-1：
DeepMind的突破之作。它从互联网视频中无监督地学习“潜在动作
（Latent Actions）
”。Genie-1的核心正是基于
MaskGIT
的离散掩码生成架构。它通过预测被Mask掉的未来帧，学会了物理规律。
Genie-2：
将能力扩展到了准3D空间，引入了更强的对象恒常性。
Genie-3：
这是目前的SOTA。它实现了
720p分辨率、24fps帧率
的实时交互，并能维持分钟级的连贯游玩。
为什么Masking对交互至关重要？
在实时交互场景下，效率就是一切。Mask-based架构
（如MaskGIT、Muse）
的
并行解码
能力，使得Genie等模型能够在极短时间内生成高质量的下一帧，从而闭合“感知-行动”的低延迟回路。
相比之下，传统的自回归视频生成模型
（逐Token预测）
在实时性上往往捉襟见肘。
论文还提到了
GameNGen
和
Matrix-Game
等基于扩散的实时引擎，它们共同证明了：
要造一个可玩的世界，Masking/Diffusion范式是目前最有希望的路线之一。
然而，尽管Genie-3看起来很美，但它依然患有严重的“健忘症”。玩了几分钟后，场景可能会莫名其妙地漂移，之前建好的房子可能回头就不见了。这引出了下一阶段的挑战。
Stage IV：记忆与一致性——对抗世界的崩塌
如果你在《我的世界》里造了一座塔，关掉游戏明天再来，它必须还在那里。
这就是
Stage IV
要解决的核心问题：
Memory & Consistency
（记忆与一致性）
。
论文指出，目前的视频生成模型
（包括Genie）
大多依赖隐式的KV Cache或有限的Context Window。
这种机制在长程推理中极其脆弱，容易导致
“灾难性遗忘（Catastrophic Forgetting）”和“状态漂移（State Drift）”
。
没有记忆，世界模型只能是“反应式”的，而非“持久”的。为了解决这个问题，论文梳理了三类解决方案：
1. 外部化记忆
（Externalized Memory）
：像
RAG
（检索增强生成）
和
MemGPT
那样，给模型外挂一个可读写的硬盘。这让知识变得可编辑、可追溯。
2. 架构级持久化
（Extending Capacity）
：仅仅拉长Context Window是不够的。论文探讨了
Mamba
这类线性时间状态空间模型
（SSM）
以及
Ring Attention
等技术，试图从架构底层实现“无限上下文”，让模型能读完一整本书或玩一整天游戏而不“断片”。
3.一致性治理
（Regulating Consistency）
：这是最难的一点。针对视频生成中的漂移，论文提到了
FramePack、Mixture of Contexts
（MoC）
以及
VMem
。这些技术试图利用显式的3D结构或稀疏注意力，为流动的像素世界打上稳固的“时空桩”。
“一致性不是把上下文拉长就能解决的。它需要明确的记忆策略——记住什么、遗忘什么、如何更新。”
Stage V：终极形态——从“模拟器”到“科学仪器”
当生成系统
（Masking驱动）
、交互系统
（实时响应）
和记忆系统
（持久一致）
完美融合，我们将跨越一道门槛，进入
Stage V：True World Models
（真正的世界模型）
。
此时模型将涌现出三大本质特征：
1. Persistence
（持久性）
：世界拥有独立的时间轴，历史独立于单次会话存在。世界在你离开后，依然在演化。
2. Agency
（主体性）
：世界中栖息着多智能体
（Agents）
，它们拥有目标、记忆和社交关系，而非简单的NPC。
3. Emergence
（涌现性）
：宏观的社会规律、经济周期、文明冲突，从微观的主体交互中自然涌现，而非脚本预设。
三大终极难题
要到达这里，论文列出了横亘在研究员面前的三座大山：
The Coherence Problem
（连贯性/评估难题）
：当世界是自生成的，谁来定义什么是“真”？我们需要新的评估体系来衡量一个虚构世界的逻辑自洽性。
The Compression Problem
（压缩/扩展难题）
：历史是无限增长的。世界模型必须学会像人类一样“抽象记忆”，只保留因果相关的状态，丢弃噪声，否则计算量将导致系统崩溃。
The Alignment Problem
（对齐/安全难题）
：这比对齐一个ChatGPT难上平方倍。我们不仅要对齐世界的“物理法则”
（生成器）
，还要对齐这个世界里涌现出的亿万智能体社会的“社会动态”。
我们为什么需要研究世界模型？
为什么要费尽心机，沿着Masking这条窄路构建一个True World Model？
这篇论文在结尾给出了一个极具浪漫色彩的答案：
我们建造世界，不是为了逃避现实，而是为了理解现实。
一旦跨越了Stage V的门槛，World Model将从娱乐工具升级为“
科学仪器
（Scientific Instrument）
”。
经济学家可以在其中运行会导致现实崩溃的货币政策实验；社会学家可以在其中观察文明的演化与衰亡；认知科学家可以在其中探寻意识诞生的瞬间。
从BERT的第一个[MASK]标签，到未来那个生生不息的数字宇宙，Masking范式始终贯穿其中。
对于所有致力于构建AGI的研究者来说，这篇论文提供了一个至关重要的视角：
回头看看Masking吧，通往未来的地图，也许就藏在那些被遮住的Token里。
参考资料
论文标题：From Masks to Worlds: A Hitchhiker’s Guide to World Models
论文链接：https://arxiv.org/abs/2510.20668
相关项目：https://github.com/M-E-AGI-Lab/Awesome-World-Models
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