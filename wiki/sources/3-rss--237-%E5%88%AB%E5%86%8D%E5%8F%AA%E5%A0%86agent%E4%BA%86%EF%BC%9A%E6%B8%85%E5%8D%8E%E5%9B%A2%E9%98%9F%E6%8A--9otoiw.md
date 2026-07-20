---
type: source
title: "别再只堆agent了：清华团队把session重新做成了多智能体系统的核心"
authors: [量子位, Rath Team]
year: 2026
url: "https://mp.weixin.qq.com/s/OL_i_ozTipjUc0cYSYMrPQ"
venue: 量子位（公众号 QbitAI）
created: 2026-06-16
updated: 2026-06-16
tags: [多智能体系统, session, 运行时框架, 清华大学, pytorch, 动态图]
related: [openrath, rath-team, session作为一等公民, mams-多智能体多会话, pytorch抽象映射, session-graph, selector-动态路由器]
sources: ["rss/别再只堆agent了：清华团队把session重新做成了多智能体系统的核心.md"]
---
# 别再只堆agent了：清华团队把session重新做成了多智能体系统的核心

本文是 [[量子位]] 发表的关于 [[rath-team]] 开源其多智能体运行时框架 [[openrath]] 的深度报道。

文章指出，当多智能体系统扩展到几十上百个 Agent 时，调试、复现和编排会全面失控。OpenRath 的核心主张是：**不应再围绕 Agent 构建系统，而应将 [[session作为一等公民|Session 作为一等公民]]**。Session 不再仅仅是聊天历史，而是承载执行证据（如工具调用参数、代码 diff、沙箱身份、失败路径等）的持久化、可路由的核心状态对象。

OpenRath 的核心设计哲学是 [[pytorch抽象映射|借鉴 PyTorch 的抽象]]，将深度学习的经典概念整套搬到 Agent 系统中：
- **Tensor → Session**：流动的数据载体。
- **Module → Workflow/Agent**：可组合的变换层（`forward(session) -> session`）。
- **Device → Sandbox/Backend**：可插拔的执行环境。
- **Parameter → Memory**：跨运行保留的长期记忆。
- **控制流 → [[selector-动态路由器|Selector]]**：由大模型驱动的运行时动态路由。

通过这种映射，OpenRath 能够管理 [[mams-多智能体多会话|多智能体多会话（MAMS）]] 这一最高复杂度象限。其核心架构支柱包括：Agent 作为纯变换层、Sandbox 与 Memory 作为可插拔后端，以及由 fork/merge 动态生成的 [[session-graph|Session Graph]]（会话图）作为控制平面和可观测层。

文章强调，OpenRath 代表了多智能体框架从“Prompt 工程”向“系统工程”演进的趋势。目前已在 PyPI 发布至 v1.2.1 版本。