---
type: concept
title: Harness + Agent Loop
created: 2026-05-26
updated: 2026-05-26
tags: [agent, 自动化编码, ai编写, 训练框架]
related: [forgetrain, 锻造工程, ai制造ai, vibe-coding, agentic-engineering]
sources: ["不用人类手写训练框架了！ai自己写代码，训出1b端侧「小钢炮」.md"]
---
# Harness + Agent Loop

Harness + Agent Loop 是 [[forgetrain|ForgeTrain]] 使用的开发技术，AI Agent 在闭环中自主编写代码，无需人类介入。

## 与 Vibe Coding 的区别

[[vibe-coding|Vibe Coding]] 是人类用自然语言描述需求，AI 辅助生成代码，人类仍然在循环中扮演指导和审查角色。Harness + Agent Loop 则不同：一旦 Agent 开始编写代码，不需要人类介入，AI 独立完成从设计到实现的全过程。

## 技术特点

- **闭环运行**：Agent 在自主闭环中持续编写、测试、优化代码
- **无人类介入**：区别于人机协作模式，实现真正的自主编码
- **生产级质量**：生成的代码需要支撑分布式训练、并行策略、显存管理、通信效率等复杂工程需求

## 应用验证

该技术在 [[forgetrain|ForgeTrain]] 中得到生产级验证，生成的训练框架在 H100 上效果对齐 [[megatron|Megatron]]、速度领先 10%，证明了 AI 自主编码在基础设施层面的可行性。