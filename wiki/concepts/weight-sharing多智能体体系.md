---
type: concept
title: Weight-sharing 多智能体体系
created: 2026-05-26
updated: 2026-05-26
tags: [多智能体, 模型架构, 权重共享]
related: [paravt, 多agent协作架构]
sources: ["paravt：走向并行-agentic-视频推理的多智能体强化学习训练框架.md"]
origin_date: 2026-05-26
---
# Weight-sharing 多智能体体系

Weight-sharing 多智能体体系是 [[paravt]] 的架构核心，指同一份模型权重同时扮演 Main Agent（总指挥）和 Sub-Agents（并行观察者）两种角色。

## 架构设计

- **Main Agent**：接收原始输入，生成并行工具调用指令，聚合 sub-agent 输出为最终答案
- **Sub-Agents**：共享同一份权重，各自独立处理被分配的子任务，互不干扰地给出局部结论
- **统一 Policy**：两种角色由同一 policy 网络 parameterize，端到端 RL 训练直接优化

## 优势

- **部署简洁**：不增加模型数量，单一模型实例即可完成并行调度
- **训练高效**：不依赖外挂模块，RL 信号可直接传播至共享权重
- **认知统一**：指挥与观察由同一"大脑"完成，避免多模型间的认知对齐问题

## 在多智能体范式中的位置

Weight-sharing 是 [[多agent协作架构]] 的一种轻量化子范式，区别于常见的多独立模型协作方式。它牺牲了角色专精化，换取了部署和训练的简洁性。