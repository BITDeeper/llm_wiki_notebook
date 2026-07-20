---
type: concept
title: MAMS 多智能体多会话
created: 2026-06-16
updated: 2026-06-16
tags: [多智能体系统, 架构设计, 复杂度象限]
related: [openrath, session作为一等公民, 多agent协作架构]
sources: ["rss/别再只堆agent了：清华团队把session重新做成了多智能体系统的核心.md"]
---
# MAMS 多智能体多会话

MAMS（Multi-Agent Multi-Session，多智能体多会话）是多智能体系统按“Agent 数量 × Session 数量”两个维度划分出的四象限中的最高复杂度象限。

四个象限分别为：
1. **单 Agent 单 Session**：如 ChatGPT 式聊天。
2. **多 Agent 单 Session**：如子代理协作。
3. **单 Agent 多 Session**：如 [[openclaw|OpenClaw]] 式分支扇出。
4. **多 Agent 多 Session（MAMS）**：多个专业 Agent 围绕多个动态产生、可路由的 Session 进行协作。

[[openrath|OpenRath]] 框架正是专门面向 MAMS 场景设计的运行时。在 MAMS 场景中，真正需要被 fork（分叉）、merge（合并）、复用、追踪的，是整条 Session 数据流，而非某个 Agent 内部各自维护的消息列表。