---
type: concept
title: Embedded Context
tags: [memory-management, agent-feature, user-experience]
related: [ai专家团队, morphmind, runtime-agent-os]
created: 2026-03-13
updated: 2026-03-13
sources: ["你以为在用ai，其实在伺候ai？残酷数据揭穿打工人幻觉.md"]
---

# Embedded Context

Embedded Context（嵌入式上下文/持久记忆）是指 AI 智能体（特别是 [[AI专家团队]] 中的成员）维护自身持久状态记忆的能力。这使得智能体能够记住用户的偏好、标准、纠错历史和原则，并在后续交互中自动应用，无需用户重复解释。

## 核心价值
在传统的 AI 对话中，模型通常是“无状态”的，每次新对话都像面对一个失忆的实习生。Embedded Context 解决了这一痛点：
- **效率提升**：消除了重复解释背景信息的开销。
- **一致性**：确保长期交互中的输出风格和标准保持一致。
- **个性化**：随着使用次数增加，AI 越来越懂用户的具体需求。

## 技术关联
- 与 [[runtime-agent-os]] 中的“记忆”层概念相通，是支撑复杂智能体长期运行的基础设施。
- 区别于简单的“上下文窗口”，它通常涉及持久化存储和检索机制，而非仅依赖当前会话的 Token 限制。

## 应用实例
在 [[MorphMind]] 的定制绘本案例中，故事策划专家和画面描述专家通过 Embedded Context 记住了孩子的喜好和主角设定。当制作新故事时，无需重新输入这些设定，团队直接基于已有记忆生成内容，确保了角色形象和故事风格的连贯性。