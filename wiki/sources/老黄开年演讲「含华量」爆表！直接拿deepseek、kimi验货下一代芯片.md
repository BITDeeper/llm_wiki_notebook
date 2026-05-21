---
type: source
title: "老黄开年演讲「含华量」爆表！直接拿DeepSeek、Kimi验货下一代芯片"
tags: [nvidia, ces, deepseek, kimi, qwen, moe, scaling-law]
related: [jensen-huang, nvidia, deepseek-v4, kimi-k2, qwen3, rubin-architecture, moe]
created: 2026-01-06
updated: 2026-01-06
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/9_i_G-DXrCRiJKl0fGTSQw"
venue: "新智元"
sources: ["老黄开年演讲「含华量」爆表！直接拿deepseek、kimi验货下一代芯片.md"]
---

# 老黄开年演讲「含华量」爆表！直接拿DeepSeek、Kimi验货下一代芯片

## 概述
本文报道了英伟达 CEO 黄仁勋在 CES 2026 主题演讲中，重点展示了中国 AI 模型（DeepSeek、Kimi、Qwen）在下一代 Rubin 架构和 Blackwell 平台上的卓越表现。这标志着中国开源模型已成为全球算力霸主验证新硬件性能的“御用标准”，并预示着 AI 推理成本进入“平价时代”。

## 核心要点

### 中国模型成为英伟达“御用”验货标准
- **DeepSeek V3.2/R1** 与 **Kimi K2 Thinking** 被选为展示下一代 [[rubin-architecture]] 性能的标杆。
- 在 [[GB200 NVL72]] 平台上，Kimi K2 Thinking 的推理吞吐量提升了 **10 倍**，Token 成本降至原来的 **1/10**。
- DeepSeek-R1 在 InferenceMax 测试中，每百万 Token 成本降低 10 倍以上。

### MoE 架构主导开源生态
- 统计显示，自 2025 年以来，超过 **60%** 的开源 AI 采用了 [[MoE (混合专家模型)]] 架构。
- 权威榜单 Top 10 开源模型全部采用 MoE 结构。
- MoE 架构通过激活少量参数处理特定任务，大幅减少了计算量和 HBM 显存带宽压力。

### Scaling Law 的持续验证
- **Qwen3** (480B 参数) 和 **Kimi K2** (1TB) 成为验证 [[scaling-law]] 的代表性模型。
- 参数规模呈现每年十倍级的增长趋势。

### 中国开源模型的独特竞争优势
1. **唯快不破**：发布速度惊人，大幅缩短与闭源模型的代差。
2. **体验至上**：从单纯“冲榜”转向追求实际好用（如 Qwen 的进化）。
3. **工具调用突破**：Kimi K2 Thinking 支持数百步稳定工具调用及“交错思考”能力，标志着开源模型在 Agentic 能力上的成熟。
4. **心智份额**：尽管收入暂未占优，但在全球开发者心中的影响力迅速扩大。

## 关键数据
- **性能提升**：Kimi K2 Thinking 在 GB200 NVL72 上性能暴增 10 倍。
- **成本下降**：Token 成本暴降至 1/10。
- **市场占比**：2025 年以来超 60% 开源 AI 采用 MoE 架构。

## 相关评价
- **Anthropic 评测**：Kimi K2 Thinking 被评为“表现最佳的非美国模型”。
- **Marc Andreessen**：公开盛赞中国 AI 模型。
- **Nathan Lambert**：高度评价中国开源 AI 在发布速度和实际体验上的优势。

## 意义
此次演讲不仅是对中国 AI 技术实力的最高级别背书，也宣告了 AI 推理“平价时代”的到来。随着推理成本的指数级下降，复杂的“思考型”MoE 模型部署到日常应用已成为现实。