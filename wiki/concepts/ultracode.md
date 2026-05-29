---
type: concept
title: Ultracode
created: 2026-05-29
updated: 2026-05-29
tags: [技术, claude, 编码模式, agent]
related: [claude-opus-4-8, claude-code, effort-control, dynamic-workflows]
sources: ["刚刚，claude-opus-4.8来了！两个史上首次改写历史.md"]
origin_date: 2026-05-29
---
# Ultracode

Ultracode 是 [[claude-opus-4-8]] 中隐藏的超级编码模式，当 [[effort-control]]（思考力度）达到 xhigh 档位时自动激活。

## 工作机制

- 模型自行评估当前任务是否值得调用整支 Agent 大军
- 如果判断值得，则启动 [[dynamic-workflows]]，将任务拆解为上百个子任务并行执行
- 整个过程对用户透明，用户只需将思考力度拉满即可触发

## 定位

Ultracode 代表了 AI 编程从"单 Agent 单任务"到"工厂级并行生产"的跃迁。它不是独立功能，而是 Effort Control 和 Dynamic Workflows 之间的桥梁——当用户给足推理资源，模型自主决定是否启动工业化编码流程。