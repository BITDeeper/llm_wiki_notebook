---
type: entity
title: OpenClaw (ZJU)
tags: [agent-framework, eda, 编排层, 浙江大学]
related: [fluxeda, zhuo-cheng-team, eda-agent]
created: 2026-04-06
updated: 2026-04-06
sources: ["agent接管EDA工作流，不只写脚本！浙大打通真实芯片设计闭环.md"]
---

# OpenClaw (ZJU)

OpenClaw 是浙江大学卓成团队开发的大模型 Agent 编排层，在 OpenClaw + FluxEDA 联合架构中扮演“大脑”角色。

## 核心功能
- **任务编排**：基于 [[Skills]] 组织复杂的 EDA 流程。
- **策略决策**：维持全局上下文，根据工具反馈动态调整优化策略。
- **能力管理**：通过 [[MCP (Model Context Protocol)]] 机制调用底层工具能力。

## 与现有 Wiki 中 OpenClaw 的区别
**注意**：本页面描述的是浙江大学开发的 EDA 领域 Agent 框架。Wiki 中已存在的 [[openclaw]] 页面描述的是一个曾发生安全事故的通用 AI 智能体工具。两者极大概率是同名不同物，请勿混淆。

## 实战表现
在 Post P&R 自动化 ECO 任务中，OpenClaw 展现了清晰的战术意识，能够自主判断修复优先级（先 Setup 后 Hold），并决定何时止损或切换策略。