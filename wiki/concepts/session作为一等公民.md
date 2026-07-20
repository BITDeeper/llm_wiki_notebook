---
type: concept
title: Session 作为一等公民
created: 2026-06-16
updated: 2026-06-16
tags: [多智能体系统, 状态管理, 架构设计]
related: [openrath, mams-多智能体多会话, session-graph, 多agent协作架构]
sources: ["rss/别再只堆agent了：清华团队把session重新做成了多智能体系统的核心.md"]
---
# Session 作为一等公民

“Session 作为一等公民”是 [[openrath|OpenRath]] 框架提出的核心设计哲学。在传统的多智能体系统中，系统通常围绕 Agent 构建状态，而 Session 仅被视为一串聊天历史。

该理念主张将多智能体系统中的“会话”提升为**持久化、可路由、承载执行证据的核心状态对象**。当 Agent 执行了检索、规划、调用工具、读文件、写代码等动作后，这些动作的参数、结果、代码 diff、沙箱身份和失败路径等“证据”必须被完整记录在 Session 中，形成一条可追溯的“证据链”。

通过将 Session 作为一等公民，系统能够解决多智能体集群规模扩大时的状态失控问题，使得工作单位从一个 prompt 或一个 Agent 角色，转移到了一份持久、可路由的 Session 状态上。