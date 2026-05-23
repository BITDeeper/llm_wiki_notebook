---
type: entity
title: Grok 4.3
tags: [ai-models, xai, llm, grok]
related: [xai, gpt-5-5, claude-opus-4-7, intelligence-index, gdpval-aa, 幻觉率, 首-token-延迟, hermes-agent, openclaw, 订阅转api]
created: 2026-05-02
updated: 2026-05-22
sources: ["马斯克的grok-4.3悄悄上线，跑分评测出炉.md", "20刀月费秒变api！hermes一行命令就能用上claude、chatgpt订阅.md"]
---

# Grok 4.3

## 概述
[[Grok 4.3]] 是由 [[xAI]] 发布的大语言模型。相较于前代，它并未追求单一维度的性能极致，而是采取了务实的 [[性价比模型策略]]，通过大幅降低价格和提升工具调用能力，旨在成为能够处理实际工作流（如文档、表格、PPT 生成）的高性价比助手。2026年5月通过 [[hermes-agent]] 和 [[openclaw]] 全面接入 Agent 生态。

## 核心特性

### 性能指标
- **Intelligence Index**：得分 53，超过自家前代及部分竞品，但落后于 [[GPT-5.5]] (60) 和 [[Claude Opus 4.7]] (57)。
- **GDPval-AA (代理任务)**：Elo 分数达到 1500，较前代提升 321 分，显示出在执行多步骤、工具化任务方面的显著进步。
- **速度与延迟**：输出速度极快（约 196 Tokens/s），但 [[首-token-延迟]] 较高，呈现"先思考后输出"的特性。

### 模型能力
- **100万 token 上下文窗口**：可将整个代码仓库或全套研究语料塞进一个 prompt，无需切片或摘要。
- **全模态能力栈**：文本对话、语音合成、图片和视频生成、音频转录。
- **跨请求 prompt 缓存**：同一会话中重复的 system prompt 不重复计费。
- **准确率 vs. 幻觉率**：模型的准确率有所提升，但 [[幻觉率]]（非幻觉率）下降了 8 分。这意味着它在知识面更广的同时，也更容易出现逻辑通顺但事实错误的输出（即 [[高阶幻觉]]）。
- **语言风格**：得益于 X 平台数据的训练，在口语化表达、语气把握和非正式沟通场景中表现自然。

## Agent 生态接入

- [[xAI]] 官方发布专门接入指南（x.ai/news/grok-hermes）。
- 在 [[hermes-agent]] 中通过 `hermes model` 选择 xAI Grok OAuth 即可使用。
- [[openclaw]] v5.18 修复了 OAuth PKCE 认证兼容问题，实现丝滑接入。
- 通过 SuperGrok 订阅的 OAuth 授权，被 Agent 框架直接调用。
- 支持 reasoning effort 参数适配。

## 适用场景
- **推荐场景**：高频内容生成、办公自动化（周报、表格、PPT）、语音产品、客服场景、对成本敏感的批量任务。
- **不推荐场景**：需要深度推理、严谨事实核查、复杂代码调试、高风险专业判断（如医疗、法律）的任务。

## 市场定位
Grok 4.3 并非旨在取代 GPT-5.5 或 Claude Opus 4.7 成为"最强模型"，而是通过"够强、够快、够便宜"的组合，抢占中低端应用市场和大量实际工作流。