---
type: concept
title: Cache-TTL 剪枝
created: 2026-01-28
updated: 2026-01-28
tags: [optimization, cost-reduction, api]
related: [clawdbot, 上下文压缩]
sources: ["ai记忆革命爆发！clawdbot如何像大脑般记住一切.md"]
---

# Cache-TTL 剪枝

Cache-TTL 剪枝是一种针对 LLM 提示词缓存（Prompt Caching）特性的优化策略。它通过检测缓存的过期时间（TTL），智能修剪旧的工具结果，以减少重新缓存带来的计算成本和延迟。

## 背景问题
LLM 提供商（如 Anthropic）通常会缓存提示词前缀几分钟（如 5 分钟）以降低成本。如果会话闲置时间超过 TTL，缓存就会失效。下次请求时，系统必须按全价“缓存写入”费率重新缓存整个对话历史，导致成本激增。

## 解决方案
Cache-TTL 剪枝机制会在检测到缓存过期后，自动修剪掉旧的工具结果（如长日志输出），只保留最近的关键上下文。

## 效果
- **降低成本**：需要重新缓存的内容量显著减少。
- **保持性能**：通过 `keepLastAssistants` 等参数，保护最近的工具结果不被误剪，确保对话连贯性。
- **透明度**：被剪枝的内容在发送给模型时会被替换为 `[Old tool result content cleared]` 占位符，但硬盘上的原始记录保持完整。