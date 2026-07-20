---
type: concept
title: PyTath 抽象映射
created: 2026-06-16
updated: 2026-06-16
tags: [架构设计, 多智能体系统, 深度学习]
related: [openrath, session作为一等公民, session-graph]
sources: ["rss/别再只堆agent了：清华团队把session重新做成了多智能体系统的核心.md"]
---
# PyTorch 抽象映射

PyTorch 抽象映射是 [[openrath|OpenRath]] 框架最核心的设计哲学。它将深度学习开发者（特别是 PyTorch 用户）最熟悉的抽象概念，整套搬到了 Agent 系统上，提供了一套可组合的系统工程直觉。

核心映射关系如下：
- **Tensor → Session**：Tensor 是流动的数据，Session 是承载 Agent 工作状态的流动数据。
- **Module/Linear → Workflow/Agent**：神经网络层是变换，Agent 也只是一层变换（`forward(session) -> session`）。
- **Device → Sandbox/Backend**：如同 `.to("cuda")` 决定算在哪，Sandbox 决定工具在哪运行。
- **Parameter → Memory**：如同模型参数持久保留，Memory 是跨运行保留的记忆层。
- **Function → Tool**：工具调用。
- **控制流 → [[selector-动态路由器|Selector]]**：动态决定下一步走向。

通过这种映射，OpenRath 让管理上百个 Agent 的工作从“拼提示词”变成了“搭模块”，实现了从 Prompt 工程向系统工程的跨越。