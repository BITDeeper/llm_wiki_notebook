---
title: "首篇「Attention Sink」综述：从利用、理解到消除，Transformer中的注意力「汇聚」全景解析"
date: 2026-04-23
source: "机器之心"
url: "https://mp.weixin.qq.com/s/lu8qvvJujGShtM7eHLeyBA"
rss_id: "2651029762_3"
---
几乎所有 Transformer 都在做一件反常的事：把大量注意力集中到少数几个特定 Token 上。这不是 bug，而是 Transformer 固有的「注意力汇聚」（Attention Sink）。首篇系统性综述，带你从利用、理解到消除，全面掌握这一核心现象。
过去几年，研究者在 Transformer 的「黑盒」里发现了一个普遍却反常的现象：无论输入什么内容，模型总是把大量注意力集中到第一个 Token、[SEP] 或图像背景补丁这类毫无信息量的位置上。传统语言模型有，大语言模型有，ViT 有，多模态大模型也有。
这一注意力汇聚（Attention Sink）模式，深刻影响了模型的训练、推理动态，给注意力机制的理解带来了挑战，并且还会引发幻觉等问题。尽管 Attention Sink 引发了众多讨论和前沿的研究，但这一领域始终缺乏系统的全面梳理。
来自清华大学、香港大学、美团 LongCat 团队等机构的研究者联合发布了首篇 Attention Sink 系统综述，系统梳理了超过 180 篇相关研究。通过统计这些研究的发表时间和主题，综述勾勒出这一领域的清晰演进轨迹：
初期（2023 年起）—— 基本利用
：早期研究的重点是对 Attention Sink 的实证利用，关注如何利用其固有特性或应对其直接影响。这一阶段将 Attention Sink 视为可被利用的实际现象。
中期（2024 年起）—— 机制理解
：随着实证应用成熟，研究重点开始深入探究 Attention Sink 背后的成因。这一阶段聚焦于可解释性，旨在精细理解驱动这一现象的内部机制。
近期（2025 年起）—— 策略性消除
：基于机理洞察，最新的研究重点转向直接的结构性消除。开发系统的消除框架已成为当前研究的前沿。
这一从「基本利用」到「机制理解」再到「策略性消除」的演进，正是综述核心框架的由来。文章通过三段式框架，系统梳理了这一现象的成因、价值与完整解法。
论文标题：Attention Sink in Transformers: A Survey on Utilization, Interpretation, and Mitigation
论文链接：https://arxiv.org/abs/2604.10098
GitHub 项目：https://github.com/ZunhaiSu/Awesome-Attention-Sink
基本利用：初步驾驭 Attention Sink
在利用 Attention Sink 的多种策略中，最直接的方式是
Sink Token 保留（Sink Token Preservation）
：将 Sink 作为永久性的注意力锚点加以保留，在压缩中稳定注意力分布。
注意力重分配（Attention Redistribution）
则更进一步，主动识别 Sink 并将其占用的权重转移到真正承载语义的
Token
上。
可学习前缀 token（Learnable Prefix Tokens）
不再依赖自然形成的
Sink
，而是在输入序列前端插入可训练的前缀，成为显式、可控的替代性
Sink
。至于
Sink Token 重利用（Sink Token Repurposing）
，则另辟蹊径，利用
Sink
稳定、高注意力的固有属性，完成原始注意力管理之外的专门任务，如攻击植入、防御检测等。
从策略逻辑看：Sink Token 保留采取被动方式；注意力重分配实施主动干预；可学习前缀 Token 采用更主动的构造策略；Sink Token 重利用则借助
Sink
的固有属性完成基础注意力管理之外的专门任务。
机制理解：洞悉 Attention Sink 根源
Attention Sink 为何必然出现？现有解释从不同层面给出了答案。
Softmax 限制与空操作理论（Softmax Limitations & No-Op Theory）
：Softmax 求和为 1 的刚性约束，使得当查询与所有键都不相关时，模型没有「什么都不选」的选项。于是被迫将注意力集中到语义无关的
Token
上，同时将这些
Token
的值向量学得极小，从而使注意力输出趋近于零，实现空操作。
异常值电路（Outlier Circuits）
则揭示了模型内部存在系统性的离群值，它们相互关联，共同导致了
Sink
的产生。
隐式注意力偏置（Implicit Attention Bias）
发现，
Sink
Token
对每个查询的贡献几乎恒定，本质上充当了固定偏置项。
几何锚点（Geometric Anchoring）
进一步表明，
Sink
在高维表示空间中充当稳定参考点，起到锚定和稳定表示空间的作用。此外，还包括 Anti-Overmixing、Active-Dormant Attention、Mix-Compress-Refine 等其他理论。
从分析层面看：Softmax 限制与空操作理论阐明的是数学根源，异常值电路揭示的是数值机制，隐式注意力偏置刻画的是功能角色，几何锚点描述的是表示空间中的功能特点。多个层面彼此互补，共同勾勒出
Sink
的全貌。
策略性消除：系统消除 Attention Sink
基于对成因的深刻理解，研究者开始从架构上系统消除 Attention Sink。
门控注意力（Gated Attention）
在注意力输出后添加可学习的门控单元，模型需要空操作时直接关门，无需制造极端 Logits 和
Sink
Token
。
改良 Softmax（Modified Softmax Functions）
则直接修改 Softmax 函数，从根本上消除求和为 1 的约束。
可学习注意力偏置（Learnable Attention Bias）
显式引入偏置参数，让模型用干净的显式偏置替代隐式
Sink
。
预训练干预（Pre-training Interventions）
不修改架构，而是在训练过程中施加干预，从训练抑制
Sink
的形成。此外，其他消除技术还包括离群值驱动重缩放（Outlier-Driven Rescaling）、架构隔离（Architectural Isolation）等。
从策略类型看，这些消除方法可以归为两类。第一类是提供显式替代品，使 Attention Sink 不再必要，包括门控注意力和可学习注意力偏置。第二类是切断因果链，从根源消除 Attention Sink，包括改良 Softmax 和预训练干预。
未来方向
基于对 180 多篇论文的系统梳理，综述指出了多个值得投入的未来方向。在
高效轻量级处理（Efficient Lightweight Processing）
方面，需要开发低延迟的注意力重分配、与高效内核兼容的改良 Softmax，避免
Sink
处理本身成为推理瓶颈。
预训练模型轻量适配（Lightweight Adaptation for Pretrained Models）
则利用参数高效迁移技术，将
Sink
抑制能力注入已训练好的模型中，从而避免从头训练的高昂成本。此外，
新兴架构探索（Emerging Architectures Exploration）
也值得关注，研究混合线性注意力、3D Transformer 等新架构中
Sink
的表现与应用。其他方向还包括：训练动态研究、统一理论框架、标准化评测基准、跨架构迁移、多技术协同集成等。
Paper List 指南
综述团队已将 180 多篇论文按三大板块和应用场景分类整理，每篇标注了类别，方便快速定位。
完整 Paper List 请访问原文或 GitHub 项目：
论文链接：https://arxiv.org/abs/2604.10098
GitHub 项目：https://github.com/ZunhaiSu/Awesome-Attention-Sink
结语
本综述通过基本利用 → 机制理解 → 策略性消除的框架，首次系统梳理了 Attention Sink 从现象到解决方案的完整路线图。这一领域既有理论深度，也具备明确的工程价值。
综述与配套的 Paper List 旨在为社区提供一份实用的参考，帮助读者快速把握领域全貌与演进逻辑，推动 Transformer 从被动接受
Sink
走向主动驾驭
Sink
的新阶段。
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com