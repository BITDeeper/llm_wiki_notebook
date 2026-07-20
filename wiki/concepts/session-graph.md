---
type: concept
title: Session Graph 会话图
created: 2026-06-16
updated: 2026-06-16
tags: [多智能体系统, 动态图, 可观测性, 架构设计]
related: [openrath, session作为一等公民, pytorch抽象映射]
sources: ["rss/别再只堆agent了：清华团队把session重新做成了多智能体系统的核心.md"]
---
# Session Graph 会话图

Session Graph（会话图）是 [[openrath|OpenRath]] 框架的核心组件，借鉴了 PyTorch 的动态图（define-by-run）设计。

它是由 Agent 运行时的 fork（分叉）和 merge（合并）动作动态生成的血缘图谱。Session Graph 不要求事先画死计算图，而是代码跑到哪、图就长到哪。

对于大规模 Agent Cluster，Session Graph 具有决定性意义：它从实现细节升格成了集群的**可观测层与控制层**。通过这张带血缘的动态图，开发者可以清晰回答“某个结论到底来自哪个 Agent、走哪条分支、调哪次工具、在哪个 workspace 产出”等问题。路由、复现、回滚和审计等操作全在同一张图上完成。