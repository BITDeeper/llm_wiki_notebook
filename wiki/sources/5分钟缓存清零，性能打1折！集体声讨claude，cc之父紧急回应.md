---
type: source
title: "5分钟缓存清零，性能打1折！集体声讨claude，cc之父紧急回应"
tags: [anthropic, claude-code, pricing, telemetry, controversy]
related: [anthropic, claude-code, prompt-caching, telemetry, experiment-gates, token-计费黑箱]
created: 2026-04-15
updated: 2026-04-15
authors: ["新智元", "KingHZ"]
year: 2026
url: "https://mp.weixin.qq.com/s/9p_fiTFUXFQuCgwiIqKfGA"
venue: "新智元"
sources: ["5分钟缓存清零，性能打1折！集体声讨claude，cc之父紧急回应.md"]
---

# 源文档摘要

本文报道了 2026 年 4 月围绕 [[claude-code]] 爆发的“缓存门”事件。开发者发现，关闭 [[telemetry]]（遥测）会导致 Prompt 缓存的 TTL（生存时间）从 1 小时骤降至 5 分钟，进而导致 API 成本飙升 12 倍。

## 核心争议

- **隐私换性能**：用户指控 Anthropic 通过将缓存策略与遥测绑定，变相惩罚注重隐私的用户。
- **数据证据**：开发者日志显示，开启遥测时缓存命中 `ephemeral_1h`，关闭后仅剩 `ephemeral_5m`。历史数据分析表明，2 月份（1小时 TTL）缓存浪费率仅 1.1%，而 3 月静默回退后浪费率飙升至 25.9%。
- **成本爆炸**：由于缓存写入成本是读取的 12.5 倍，5 分钟的 TTL 导致频繁重建，使得 Pro 用户额度消耗速度提升 12 倍。

## 官方回应

- **Boris Cherny** ([[claude-code]] 负责人)：承认存在架构耦合，解释 1 小时缓存是“实验性功能”，依赖遥测推送。否认恶意惩罚，归咎于技术副作用。
- **Jarred Sumner** (Anthropic 工程师)：声称 5 分钟 TTL 对一次性调用（如 subagent）更便宜，反驳了“总是更贵”的说法。

## 行业痛点

文章指出，AI 编程工具的计费缺乏透明度（[[token-计费黑箱]]）。与 AWS、Stripe 等工具相比，Claude Code 缺乏单次请求明细、实时成本追踪和缓存状态可见性，导致用户处于“盲飞”状态。