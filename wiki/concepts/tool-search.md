---
type: concept
title: Tool Search
tags: [optimization, agent, efficiency]
related: [gpt-5.4, openclaw, ai-subscription-crisis]
created: 2026-03-06
updated: 2026-03-06
sources: ["gpt-5.4「原生操控电脑」实测封神！openclaw天选模型来了.md"]
---

# Tool Search

Tool Search 是一种针对 AI Agent 的上下文优化机制。它允许模型在需要时检索工具的定义，而不是在每次对话轮次中将所有可用工具的定义加载到上下文窗口中。

## 背景与问题
在 Agent 应用（如 [[openclaw]]）中，系统可能集成了数十种工具。传统的做法是将所有工具的描述、参数和示例都塞入 Prompt，这导致：
- **Token 消耗巨大**：每次请求都携带大量冗余信息。
- **成本高昂**：直接导致 API 费用飙升。
- **延迟增加**：处理超长上下文导致推理变慢。

## 工作原理
Tool Search 机制通过向量检索或其他搜索技术，根据用户的当前意图，动态地从工具库中筛选出最相关的几个工具，仅将这几个工具的定义注入模型上下文。

## 效果
根据 [[GPT-5.4]] 的实测数据，Tool Search 机制能降低约 47% 的 Token 消耗。这对于 7x24 小时运行的 Agent 来说，意味着显著的成本节约和效率提升。

## 意义
Tool Search 解决了 [[ai-subscription-crisis]] 中提到的 Agent 高消耗问题，使得复杂 Agent 系统在商业上更加可行。