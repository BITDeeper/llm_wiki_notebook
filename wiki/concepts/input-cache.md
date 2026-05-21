---
type: concept
title: 输入缓存
tags: [llm, optimization, infrastructure]
related: [cache-hit-rate, deepseek-v4, agi-for-everyone]
created: 2026-04-27
updated: 2026-04-27
sources: ["deepseek-v4永久降价！缓存命中再打1折，实测编程成本骤降83%.md"]
---

# 输入缓存

输入缓存（Input Cache）是大语言模型（LLM）推理服务中的一种关键优化技术。

## 工作原理
当模型处理包含大量重复或已处理上下文的请求时（例如长对话历史、代码库索引、Agent 任务链），输入缓存允许系统复用之前计算过的结果，而无需对重复的输入 Token 重新进行昂贵的矩阵乘法运算。

## 经济意义
在按 Token 计费的商业模式下，输入缓存的命中率直接决定了用户的实际成本。特别是对于 [[Agent]] 编程或长上下文任务，输入 Token 往往远多于输出 Token。

## DeepSeek 的应用
[[DeepSeek V4]] 通过极高的工程优化实现了极高的 [[缓存命中率]]（V4-Pro 约 95-96%）。结合 2026 年 4 月的“永久降价”策略（命中缓存的输入部分价格降至原价的 1 折），DeepSeek 极大地降低了此类任务的使用成本，实测显示编程任务成本可降低约 83%。