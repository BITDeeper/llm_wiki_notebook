---
type: entity
title: SemiAnalysis
created: 2026-05-18
updated: 2026-05-18
tags: [分析机构, 芯片分析, ai工具]
related: [cerebras, wse-3, 推理速度竞争, anthropic]
sources: ["曝gpt-5.5用上「全球最快芯片」，claude慌了！.md"]
---
# SemiAnalysis

硅谷最硬核的芯片分析机构，以深度技术拆解著称。

## 关键数据

- 2026 年 4 月 AI 工具订阅费达年化 1000 万美元
- 其中 80% 花在 [[anthropic]] 的 Opus 4.6 fast 模式（比标准模式贵 6 倍，但 token 输出速度快 2.5 倍）
- 工程师集体拒绝升级到更聪明的 Opus 4.7（因为无 fast 模式）

## 对 Cerebras 的拆解

2026 年 5 月发布两万字技术拆解报告，核心发现：

1. [[cerebras]] 公开云最大生产模型仅 120B（GPT-OSS），预览模型最大 355B
2. 曾经上架的 Llama 70B 和 405B 被悄悄下架，DeepSeek 等大模型从未出现
3. 44GB SRAM 和 150GB/s 对外带宽构成物理天花板
4. 从 Claude Code、Cursor 等工具采集 43.2 万条真实请求，近 50% 超过 128K 上下文

## 行业影响

SemiAnalysis 的实际支出行为（80% 预算花在 fast 模式）成为[[推理速度竞争]]中最有力的证据：用户用脚投票选择速度而非智能。