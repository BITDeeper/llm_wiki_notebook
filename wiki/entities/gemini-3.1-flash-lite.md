---
type: entity
title: Gemini 3.1 Flash-Lite
tags: [google, model, multimodal, efficiency]
related: [google-deepmind, gemini, gpt-5-mini, claude-4.5-haiku, thinking-levels]
created: 2026-03-04
updated: 2026-03-04
sources: ["谷歌gemini-3.1新模型深夜掀桌,-每秒狂飙363-token!-14价格暴击claude.md"]
---

# Gemini 3.1 Flash-Lite

Gemini 3.1 Flash-Lite 是 [[Google DeepMind]] 于 2026 年 3 月发布的轻量级多模态大模型。该模型主打极致性价比和高速推理，旨在以极低的成本提供接近旗舰模型的性能表现。

## 核心特性

### 极致性价比
- **输入价格**：0.25 美元/百万 Token。
- **输出价格**：1.50 美元/百万 Token。
- 相比 [[Claude 4.5 Haiku]]（输出 5.00 美元），价格仅为其 1/4 左右。

### 极速推理
- **输出速度**：高达 363 tokens/s。
- 这一速度是 [[GPT-5 mini]] (71 tokens/s) 的 5 倍，是 Claude 4.5 Haiku (108 tokens/s) 的 3.4 倍。

### 性能表现
尽管定位为“轻量级”模型，但在多项基准测试中表现出越级挑战的能力：
- **GPQA Diamond** (科学推理)：86.9%，超越 GPT-5 mini (82.3%) 和 Gemini 2.5 Flash (82.8%)。
- **SimpleQA Verified** (事实准确性)：43.3%，远超 Gemini 2.5 Flash (28.1%) 和 GPT-5 mini (9.5%)。
- **Chatbot Arena**：Elo 分数 1432，与 OpenAI 的旗舰推理模型 o3 持平。

### 技术创新：Thinking Levels
Flash-Lite 标配了 [[thinking-levels]] 功能，允许开发者根据任务复杂度动态调整模型的推理资源分配：
- **浅思考模式**：适用于翻译、审核、分类等高频低复杂度任务，最大化速度和成本优势。
- **深度推理模式**：适用于 UI 生成、复杂指令执行等场景，效果媲美大型模型。

## 局限性
在代码生成领域，Flash-Lite 表现稍弱。在 LiveCodeBench 测试中得分为 72.0%，低于 GPT-5 mini 的 80.4% 和 Grok 4.1 Fast 的 76.5%。

## 市场定位
Flash-Lite 被视为“穷人版旗舰”，其发布标志着 AI 行业竞争焦点从单纯追求“最强性能”转向“最高性价比”。它特别适合对成本和延迟敏感的大规模应用场景，如内容生成、数据分析和 SaaS 智能体。