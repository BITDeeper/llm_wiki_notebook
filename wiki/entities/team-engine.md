---
type: entity
title: Team Engine
created: 2026-05-14
updated: 2026-05-14
tags: [agent, 状态机, 引擎, minimax, 架构]
related: [minimax, mavis-minimax, 多agent协作架构, worker-verifier对抗]
sources: ["重生之我在ai时代当老板：让一群agent互相pua.md"]
---
# Team Engine

[[minimax]] 开发的状态机引擎，是 [[mavis-minimax]] 多Agent协作架构的底层控制器。

## 核心功能

Team Engine控制Agent Team的整个协作流程，包括：
- 什么时候该验证
- 什么时候该重试
- 什么时候该停止

这些决策都是引擎层面的**硬性约束**，不靠模型自由发挥。这解决了单Agent对"任务何时算完成"判断模糊的根本问题。

## 按需调度

Team Engine的核心价值之一是判断何时需要多Agent、何时单Agent足够。这呼应了 [[cost-of-consensus]] 论文的发现：没有结构、没有验证、没有停止条件的"多Agent"只是在浪费Token。

## 设计哲学

- 协作关系不再是单次函数调用，而是主动推送、按需查询的多轮交互
- 通过工程框架把控ROI，正视多Agent成本更高的事实
- 预计将与MiniMax M3一起开源