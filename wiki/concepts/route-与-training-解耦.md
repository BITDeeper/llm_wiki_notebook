---
type: concept
title: Route 与 Training 解耦
tags: [system-design, architecture, modularity]
related: [llmrouter, llm-routing]
created: 2026-02-12
updated: 2026-02-12
sources: ["千星项目llmrouter：多模型路由，16+策略优化推理.md"]
---

# Route 与 Training 解耦

[[Route 与 Training 解耦]] 是 [[LLMRouter]] 框架提出的一种核心架构设计理念，旨在解决 LLM Routing 领域实现碎片化、难复现、难对比的问题。

## 定义
该理念将路由系统拆分为两个相对独立、可灵活组合的子模块：
- **Route 模块**：负责**推理时**的决策逻辑。它读取 Router Backbone 的输出，执行具体的路由动作（如选择模型、分配预算、聚合结果）。
- **Training 模块**：负责**训练时**的优化过程。它处理数据构建、定义损失函数（监督学习、强化学习等）以及反馈闭环。

## 价值
1.  **领域统一**：不同论文提出的路由方法可以被对齐到统一抽象下进行公平比较。
2.  **开发友好**：开发者可以专注于改进 Route 逻辑或 Training 算法，而无需重写整个系统。
3.  **高扩展性**：新增路由策略变成了“搭积木”的过程，选择 Backbone + Route 规则 + Training 配方即可快速组合。

## 意义
这种解耦不仅是工程上的优化，更体现了将复杂 AI 系统模块化的设计哲学。它类似于 [[runtime-agent-os]] 中的分层思想，通过明确的边界定义，降低了系统复杂度，加速了技术创新的迭代。