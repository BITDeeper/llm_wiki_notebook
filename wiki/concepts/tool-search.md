---
type: concept
title: Tool Search
tags: [optimization, agent, efficiency, 工具调用, claude, 可扩展性]
related: [gpt-5.4, openclaw, ai-subscription-crisis, claude-4-7-system-prompt, anthropic, ai工作操作系统, 任务执行范式]
created: 2026-03-06
updated: 2026-05-22
sources: ["gpt-5.4「原生操控电脑」实测封神！openclaw天选模型来了.md", "23个隐藏工具曝光！anthropic公开claude驯化手册.md"]
origin_date: 2026-04-18
---

# Tool Search（工具搜索）

Tool Search 是一种针对 AI Agent 的上下文优化与按需工具发现机制。它允许模型在需要时检索工具的定义，而不是在每次对话轮次中将所有可用工具的定义加载到上下文窗口中。Claude 4.7 引入了该机制，是 [[claude-4-7-system-prompt|Claude 4.7 系统提示词]] 中的关键新增特性。

## 背景与问题

在 Agent 应用（如 [[openclaw]]）中，系统可能集成了数十种甚至成百上千种工具。传统的做法是将所有工具的描述、参数和示例都塞入 Prompt，这导致：

- **Token 消耗巨大**：每次请求都携带大量冗余信息。
- **成本高昂**：直接导致 API 费用飙升。
- **延迟增加**：处理超长上下文导致推理变慢。
- **可扩展性瓶颈**：工具数量增长与上下文窗口限制之间的矛盾，使得"预加载所有工具"的方案无法扩展。

## 工作原理

Tool Search 机制通过向量检索或其他搜索技术，根据用户的当前意图，动态地从工具库中筛选出最相关的几个工具，仅将这几个工具的定义注入模型上下文。

在 Claude 的实现中，当 Claude 断定自己缺少某项能力之前，会先调用 `tool_search` 检查是否存在相关但尚未启用的工具。只有在 `tool_search` 确认不存在匹配工具之后，"我无法访问 X"这样的说法才是成立的。

## 效果

根据 [[GPT-5.4]] 的实测数据，Tool Search 机制能降低约 47% 的 Token 消耗。这对于 7x24 小时运行的 Agent 来说，意味着显著的成本节约和效率提升。

## 技术意义

- **可扩展性**：当一个 AI 系统挂载了成百上千个工具时，不可能在每次对话中都全部加载，按需发现、按需调用才是可扩展的方案。
- **[[anthropic|Anthropic]] 官方文档证实**：tool search 让 Claude 可以扩展到处理数百甚至数千个工具，并在需要时发现和调用相关工具。
- **范式转变**：从"预加载所有工具"转向"按需搜索工具"，是 [[任务执行范式]] 从理论到工程实现的关键一步。

## 意义

Tool Search 解决了 [[ai-subscription-crisis]] 中提到的 Agent 高消耗问题，使得复杂 Agent 系统在商业上更加可行。同时，它解决了 Agent 能力扩展的核心瓶颈，使得 Claude 能够支撑 [[ai工作操作系统|AI 工作操作系统]] 的产品愿景，覆盖设计、办公、浏览器等全场景。