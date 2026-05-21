---
type: concept
title: Stealth 模型（幌子模型）
tags: [openai, strategy, leak, openrouter]
related: [hunter-alpha, healer-alpha, quasar-alpha, horizon-alpha, polaris-alpha, openai]
created: 2026-03-14
updated: 2026-03-14
sources: ["逮虾户注意！神秘模型点名openclaw，疑似是openai.md"]
---

# Stealth 模型（幌子模型）

Stealth 模型（Stealth Models），又称“幌子模型”，是指 AI 公司（特别是 [[openai]]）在第三方平台（如 OpenRouter）上匿名发布的大模型。这些模型通常不标明开发者身份，用于在正式发布前进行真实世界测试、收集反馈或进行市场预热。

## 典型特征
- **匿名发布**：模型名称通常不包含公司品牌（如 Alpha, Beta 后缀）。
- **前沿规格**：参数量、上下文长度等指标通常高于或异于现有公开模型。
- **短期存在**：通常在正式版本发布或测试结束后下线。

## [[openai]] 的历史案例
社区已多次通过技术指纹（如 tokenizer 错误、API 字段行为、特定术语）识别出 OpenAI 的 Stealth 模型：

1. **[[quasar-alpha]]** (2025年4月)
   - **特征**：100万 token 上下文，免费测试。
   - **破案证据**：出现了 OpenAI 特有的 tokenizer 错误和 API 字段行为。
   - **结果**：被证实为 GPT-4.1 的早期测试版本。

2. **[[horizon-alpha]]** (2025年7月)
   - **特征**：256K 上下文，创意写作能力极强。
   - **结果**：官方确认为 GPT-5 家族的早期 checkpoint。

3. **[[polaris-alpha]]** (2025年11月)
   - **特征**：256K 上下文，推理能力显著增强。
   - **结果**：随后 GPT-5.1 正式发布，Polaris 当天退场。

## 生命周期规律
通常遵循以下周期：
1. **幌子出现**：匿名模型上线。
2. **社区破案**：通过提取 system prompt、对比输出风格、跑 benchmark 等手段确认身份。
3. **正式发布**：官方发布对应模型。
4. **Stealth 版退场**：幌子模型下线。

## 2026 年的新变化
2026 年 3 月出现的 [[hunter-alpha]] 和 [[healer-alpha]] 标志着新趋势：**并行发布**。不同于以往每次只发布一个模型，这次同时发布了两个定位截然不同的模型（Agent 专用 vs 全模态通用），暗示产品策略的分化。