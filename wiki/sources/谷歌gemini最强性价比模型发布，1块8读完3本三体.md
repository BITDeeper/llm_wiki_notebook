---
type: source
title: "谷歌Gemini最强性价比模型发布，1块8读完3本三体"
tags: [google, gemini, llm, pricing, benchmark]
related: [gemini-3-1-flash-lite, gpt-5-3-instant, code-arena, google-deepmind]
created: 2026-03-04
updated: 2026-03-04
authors: ["鹭羽"]
year: 2026
url: "https://mp.weixin.qq.com/s/DFDeVI2IAHlpFjbtfmYQQg"
venue: "量子位"
sources: ["谷歌gemini最强性价比模型发布，1块8读完3本三体.md"]
---

# 谷歌Gemini最强性价比模型发布，1块8读完3本三体

## 概述
本文报道了谷歌发布 [[gemini-3-1-flash-lite]] 模型以及 OpenAI 随后迅速推出 [[gpt-5-3-instant]] 的市场动态。文章重点分析了 Gemini 3.1 Flash-Lite 的极致性价比（输入 $0.25/百万 tokens，输出 $1.5/百万 tokens）及其在 [[code-arena]] 等基准测试中的表现，并与 GPT-5.3 Instant 进行了编程和推理能力的实测对比。

## 核心要点

### Gemini 3.1 Flash-Lite 特性
- **定价**：每百万输入 token 仅需 0.25 美元，百万输出 token 1.5 美元。约 1.8 元人民币即可处理 3 本《三体》。
- **性能**：在 Arena 测评中获得 1432 分，与 Grok-4.1-fast 相当；在 [[code-arena]] 中与 Qwen3-coder 并列第 35 名。
- **速度**：首次响应时间比 [[gemini-2-5-flash]] 快 2.5 倍，输出速度提升 45%。
- **高级能力**：在 GPQA Diamond (86.9%) 和 MMMU Pro (76.8%) 上超越了前几代更大的模型。
- **新特性**：支持 [[可调思考层级]]，允许开发者根据任务复杂度调整模型推理深度。

### 竞争对比：GPT-5.3 Instant
- **发布时机**：在 Gemini 发布仅两小时后推出。
- **定位差异**：GPT-5.3 Instant 更关注用户交互体验和日常会话优化。
- **实测表现**：
    - **编程**：Gemini 倾向于简洁的单文件实现（快速原型）；GPT 倾向于完整的工程化方案（如自动刷新仪表盘）。
    - **推理**：两者表现相当，均能正确推导，GPT 的解释通常更通俗详细。

## 市场分析
- **策略**：谷歌通过 Flash-Lite 主打大规模智能应用和批量部署，试图通过低价策略抢占市场。
- **对比陷阱**：谷歌官方将 Flash-Lite 与旧一代 Gemini 2.5 Flash 对比，而非同代的 Gemini 3 Flash，暗示了其在产品矩阵中的特定定位（低成本/高并发）。
- **行业趋势**：厂商开始通过“Lite/Instant”版本解决高昂推理成本问题，验证了 [[ai-subscription-crisis]] 中提到的行业转向分层定价的趋势。