---
title: "外网爆火，比Vibe Coding便宜10倍！北邮重构多智能体编排范式"
date: 2026-04-03
source: "新智元"
url: "https://mp.weixin.qq.com/s/zSBdC2usEgBDMDoTfg_gGA"
rss_id: "2652689456_3"
---
新智元报道
编辑：LRST
【新智元导读】
北京邮电大学团队开源的MASFactory框架，用Vibe Graphing重构多智能体系统编排。它将自然语言指令转化为结构化工作流，三步完成角色分配、拓扑设计与语义补全，API成本降为传统方式的十分之一，代码量暴减，开发效率飙升。系统以图为核心，支持混合编排与全栈可视化，已通过多项权威测试，性能全面超越同类方案。
外网爆火，比Vibe Coding便宜10倍！北邮重构多智能体编排范式
近日，YouTube等外网平台上一段名为《Vibe Graphing: 10x More Affordable than Vibe Coding (MAS-Factory)》的技术解析视频在开发者圈层中引发了强烈的共鸣与热议。
视频中给出的数据令人咋舌：在同等任务复杂度下，传统的Vibe Coding试错成本高达数美元，而采用一种名为「Vibe Graphing」的全新范式，API成本直接骤降至原来的十分之一，且成功率大幅跃升。
这支视频背后的主角，正是由北京邮电大学团队最新开源的LLM多智能体编排框架——
MASFactory
。
项目官网
: https://masfactory.dev
代码仓库
: https://github.com/BUPT-GAMMA/MASFactory
原版论文
: https://arxiv.org/abs/2603.06007
目前，该项目已在GitHub全面开源，学术论文也已同步发布。
Vibe Coding在多智能体编排水土不服
伴随着基础大模型能力的溢出，业界形成了一个明确的技术共识：通过角色特化、交叉验证和迭代协作，多智能体系统（MAS）能够解决单一 Agent 难以覆盖的长周期复杂任务。
然而，构建一个健壮、可扩展的 MAS，依然是一场令人筋疲力尽的工程「泥沼战」。
现有的编排框架主要分为两个派别：
一是
硬编码派（Imperative/Declarative）
，要求开发者学习特定的 DSL，手动维护极其复杂的通信逻辑与状态同步。这种方式灵活性高，但工程成本极其高昂。
二是端是
可视化拖拽派
，虽然大幅降低了门槛，但在面对需要深度定制的多层次复杂拓扑结构时，满屏蜘蛛网般的连线会让后续的维护和扩展形同灾难。
即使是当下备受瞩目的Vibe Coding范式，也难以弥补上述两种开发范式的缺陷。
由于大多数大语言模型在训练时缺乏对各类小众DSL（特定领域语言）的充分学习，当Vibe Coding工具面对硬编码框架时往往显得水土不服。
这不仅意味着开发者需要付出额外的Token成本来让模型预习DSL语法，还投入大量精力，去约束AI遵循DSL的拓扑规范与通信逻辑，导致开发体验大打折扣。对于可视化拖拽派，Vibe Coding工具更是难以入手。
Vibe Graphing
多智能体编排的一等公民
Vibe Graphing工具本质上是一个「自然语言意图 -> 结构化中间表示（IR） -> 可执行工作流」的编译器。
与Vibe Coding简单粗暴地让AI直接吐出底层代码不同，Vibe Graphing将MAS的构建抽象为一个极具秩序感的三阶段设计过程。在引擎内部，这被封装为由三个Agent驱动的Loop组件：
阶段一：角色分配（Role Assignment）
。
系统首先剥离所有的代码实现细节，只关注「人」。当开发者输入诸如「帮我构造一个文献综述工作流」的自然语言指令时，引擎会将任务意图映射为一组候选智能体（如检索员、阅读员、写作员、评审员），并划定严格的责任边界。
阶段二：拓扑设计（Topology Design）
。
确定角色后，系统开始构建一张有向图拓扑骨架。这个骨架只定义节点间的消息依赖和执行顺序（如串行、并行、循环），而不涉及任何具体的 Prompt 或工具调用。
阶段三：语义补全（Semantic Completion）
。
最后，系统对拓扑骨架进行参数化实例化，为每个节点精准配置指令、输入输出约束。
因为AI每次只需要生成或修改极其简短的JSON拓扑配置，而不是几千行的 Python 逻辑代码，Token消耗呈指数级下降；从而达到了比Vibe Coding节省10倍token的效果。
MASFactory
以图为中心的四层架构
Vibe Graphing 能够如此优雅地运行，是因为 MASFactory 拥有一个底层图引擎，它将多智能体工作流建模为有向计算图。整个系统被科学地划分为四个层次：
图骨架
在最底层，系统完全由 Node（节点）和 Edge（边）构成。MASFactory 极其硬核地对协作信号进行了物理隔离，拆分为三种流：
控制流（Control Flow）
：沿着有向边传播，严格推进调度与依赖，确保执行的因果时序。
消息流（Message Flow）
：横向传递，将节点的输出有效载荷精准投递给下游节点。
状态流（State Flow）
：在图与子图的树状层级结构间纵向传播，实现自治域的上下文和运行时状态同步。
组件层与可复用层
基础的节点被进一步抽象为丰富的组件库。除了遵循感知-推理-行动（Perception-Reasoning-Action）范式的基础
Agent
外，系统还提供了：
Graph
: 用于表达子图嵌套结构，方便进行模块化设计。
Loop
：用于表达循环结构，用语实现反思（Reflection）、多轮辩论等博弈模式。
Switch
：Switch 能够根据运行时状态动态选择并激活特定分支，实现了复杂的动态路由控制。
无缝嵌套机制
：任何一个 Graph 都可以作为子节点无限嵌套到更高维度的图中。通过 NodeTemplate 和 ComposedGraph 机制，开发者可以轻松实现分支级别的拓扑复用，减少代码冗余。
协议与上下文适配层
现代MAS应用不可避免地需要整合异构的外部组件（Memory、RAG、MCP等）。
MASFactory引入了两种适配器：
Message Adapter
：将底层图结构与具体的通信协议解耦。开发者可以在不修改拓扑的前提下，自由切换 JSON Schema、Markdown 或定制化的通信协议。
Context Adapter
：面对外部复杂的记忆系统、RAG、MCP，Context Adapter 提供了一个标准化的接口。它将异构上下文切片为标准单元，使得 MASFactory 能够像插拔 U 盘一样无缝对接到 LlamaIndex、Mem0 等前沿框架中。
混合编排与可视化交互层
在操作入口上，MASFactory 同时兼容代码开发（声明式、命令式）、可视化拖拽以及 Vibe Graphing。
值得注意的是，这三种方式不仅不冲突，反而可以在同一个大型项目中
混合嵌套使用
。你可以用代码硬编码一个底层极度严谨的工具子图，再用 Vibe Graphing 生成一个静态结构图，最后用可视化拖拽方式将他们组合在为一个完整的Workflow。
此外，MASFactory也提供一款深度集成的 VS Code 扩展工具——
MASFactory Visualizer
。它可以在代码编排阶段、拖拽式编排阶段、Vibe Graphing阶段、调试运行阶段提供全栈的可视化支持。
代码编排预览
拖拽式工作流设计
Vibe Graphing 交互
运行时监测与追踪
性能评估
MASFactory在 HumanEval、MBPP、BigCodeBench、SRDD、GAIA、MMLU-Pro 等七大覆盖代码生成与复杂推理的主流 Benchmark 上给出了具有说服力的数据。
实验表明，MASFactory 能够极为稳定且高效地复现当前业界最具代表性的系统（包括 ChatDev、MetaGPT、Agent Verse、CAMEL、HuggingGPT 等），且在多项指标上表现优于原始硬编码实现。
参考资料：
https://arxiv.org/abs/2603.06007
https://github.com/BUPT-GAMMA/MASFactory
秒追ASI
⭐点赞、转发、在看一键三连⭐
点亮星标，锁定新智元极速推送！