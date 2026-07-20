---
type: concept
title: Selector 动态路由器
created: 2026-06-16
updated: 2026-06-16
tags: [多智能体系统, 动态路由, 大模型驱动]
related: [openrath, session-graph, pytorch抽象映射]
sources: ["rss/别再只堆agent了：清华团队把session重新做成了多智能体系统的核心.md"]
---
# Selector 动态路由器

Selector（动态路由器）是 [[openrath|OpenRath]] 框架中实现动态工作流的核心机制。

传统的多智能体框架通常将流程提前编排死（如 if 走 A，else 走 B）。OpenRath 的 Selector 是一个由大模型驱动的路由器，它在若干个“会自我描述”的 Workflow 之间做选择，返回下一个该执行的 Workflow，任务结束则返回一个空操作。

这种设计使得 Agent 之间的 `if`/`while` 控制流依然是普通的 Python 代码，但实现了运行时的动态决策。它取代了写死的指令编排，让系统具备“学会拐弯”的能力，是 OpenRath 被称为“dynamic multi-agent workflow”的底气所在。