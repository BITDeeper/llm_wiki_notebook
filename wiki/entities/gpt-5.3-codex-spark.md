---
type: entity
title: GPT-5.3-Codex-Spark
created: 2026-05-18
updated: 2026-05-18
tags: [openai, 大模型, 蒸馏模型, 推理速度]
related: [openai, cerebras, wse-3, gpt-5.5, 推理速度竞争]
sources: ["曝gpt-5.5用上「全球最快芯片」，claude慌了！.md"]
origin_date: 2026-02-01
---
# GPT-5.3-Codex-Spark

[[openai]] 于 2026 年 2 月发布的蒸馏小模型，是从完整版 GPT-5.3 Codex 蒸馏而来，参数量仅 120B（约原版十分之一）。

## 核心特点

- **极致速度**：在 [[cerebras]] [[wse-3]] 上实现 2000 token/s，比 GPU 快一个数量级
- **智能换速度**：通过大幅缩减参数量换取推理速度，是"够用但极快"策略的典型代表
- **引爆 246 亿美元合同**：其速度表现直接推动了 OpenAI 与 Cerebras 的巨额合作

## 速度对比

| 模型 | 硬件 | 速度 |
|------|------|------|
| GPT-5.3-Codex-Spark | Cerebras WSE-3 | ~2000 token/s |
| GPT-5 系列 | 英伟达 GPU | ~130 token/s |
| Opus 4.6 fast | Anthropic 基础设施 | 70-100 token/s |

## 意义

该模型的成功证明了[[推理速度竞争]]中"小模型+专用硬件"路线的可行性，也引发了关于速度与智能权衡的行业讨论。