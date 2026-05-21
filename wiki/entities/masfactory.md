---
type: entity
title: MASFactory
tags: [multi-agent, framework, open-source, bupt]
related: [vibe-graphing, vibe-coding, 多智能体编排, 图中心架构, 北京邮电大学]
created: 2026-04-03
updated: 2026-04-03
sources: ["外网爆火，比vibe-coding便宜10倍！北邮重构多智能体编排范式.md"]
---

# MASFactory

[[MASFactory]] 是由 [[北京邮电大学]] 团队开源的基于图引擎的大语言模型（LLM）多智能体编排框架。它旨在解决构建健壮、可扩展的多智能体系统时所面临的工程复杂性挑战。

## 核心特性

### Vibe Graphing 范式
[[MASFactory]] 引入了 [[vibe-graphing]] 作为其核心交互模式。与传统 [[vibe-coding]] 直接生成代码不同，它通过将自然语言意图转化为结构化的中间表示（IR，即图拓扑配置），大幅降低了 Token 消耗（据称降低 90%）并提高了开发效率。

### 图中心架构
系统底层采用有向计算图模型，将工作流定义为节点和边的组合。其核心设计哲学是对协作信号进行物理隔离：
-   **控制流**：沿有向边传播，负责调度与依赖管理。
-   **消息流**：在节点间横向传递数据载荷。
-   **状态流**：在图层级间纵向同步上下文。

### 混合编排支持
[[MASFactory]] 支持在同一项目中混合使用三种开发方式：
1.  **代码开发**：声明式或命令式硬编码。
2.  **可视化拖拽**：通过图形界面构建流程。
3.  **Vibe Graphing**：通过自然语言生成结构化工作流。

### 异构组件兼容
通过适配器机制，[[MASFactory]] 能够无缝对接外部组件，如 Memory（记忆）、RAG（检索增强生成）和 MCP（模型上下文协议）。

## 性能表现
在 HumanEval、MBPP 等七大主流基准测试中，[[MASFactory]] 能够复现甚至超越 [[ChatDev]]、[[MetaGPT]]、[[AgentVerse]] 等业界代表性系统的性能。

## 开源信息
-   **开发机构**：北京邮电大学 (BUPT)
-   **代码仓库**：[GitHub - BUPT-GAMMA/MASFactory](https://github.com/BUPT-GAMMA/MASFactory)
-   **论文**：[arXiv:2603.06007](https://arxiv.org/abs/2603.06007)