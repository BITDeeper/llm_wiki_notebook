---
type: concept
title: Prompt Cache
tags: [技术机制, 成本优化, 缓存失效]
related: [claude-code, ai-subscription-crisis]
created: 2026-04-01
updated: 2026-04-01
sources: ["claude终于承认乱扣费！最高多收你20倍，一句「你好」干掉13%额度.md"]
---

# Prompt Cache

**提示词缓存**（Prompt Cache）是一种在大语言模型（LLM）应用中用于降低计算成本和延迟的技术。

## 工作原理
LLM 的处理成本主要取决于输入和输出的 Token 数量。在多轮对话或长上下文任务中，系统往往需要重复处理大量相同的上下文信息（如系统提示词、历史记录或代码库）。Prompt Cache 机制通过缓存这些重复部分的计算结果，避免在每次请求时重新进行矩阵乘法运算，从而显著降低计费 Token 数量和响应延迟。

## 失效后果
当 Prompt Cache 机制失效时，系统会将本应缓存的上下文视为新输入进行重复计费。这会导致：
- **成本激增**：用户账面上的 Token 消耗量可能膨胀 10-20 倍。
- **体验下降**：响应速度变慢，且额度消耗速度远超预期。

## Claude Code 事件案例
在 2026 年 4 月的 [[claude-code]] 乱扣费事件中，正是由于两个独立 Bug（Sentinel 替换机制和 Resume 参数问题）导致 Prompt Cache 持续失效，使得用户在无感知的情况下承担了巨额的额外计算成本。这一事件凸显了缓存机制在 AI 产品成本控制中的核心地位。

## 参见
- [[claude-code]]：因缓存失效导致计费灾难的产品案例。
- [[ai-subscription-crisis]]：成本失控引发的订阅制危机。