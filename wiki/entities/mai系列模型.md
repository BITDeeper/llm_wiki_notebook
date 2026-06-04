---
type: entity
title: MAI系列模型
created: 2026-06-03
updated: 2026-06-03
tags: [微软, 大模型, 自研, 全模态]
related: [微软, 苏莱曼, mai-thinking-1, mai-code-1-flash, anthropic, openai]
sources: ["16亿windows用户，一夜冲进agent时代！.md"]
---
# MAI系列模型

微软自研的全模态模型家族，由微软AI掌门人[[苏莱曼]]在Build 2026大会上发布，共七款模型覆盖推理、编程、图像、语音、转录。

## 核心卖点：零蒸馏

苏莱曼反复强调，MAI系列模型没有从任何第三方前沿模型中蒸馏知识，完全从零训练，使用企业级商用授权的干净数据。这一声明既宣示了技术独立性，也规避了版权风险。

## 模型清单

| 模型 | 定位 | 关键指标 |
|------|------|----------|
| [[mai-thinking-1]] | 推理模型 | MoE架构，约1T总参数/35B激活参数，SWE-bench Pro 53% |
| [[mai-code-1-flash]] | 编码模型 | 5B参数，SWE-bench Pro 51%，已在VS Code运行 |
| MAI Image 2.5 | 文生图+编辑 | Arena排行榜第三（文生图）、第二（编辑） |
| MAI Image 2.5 Flash | 高效图像生成 | 走高效生产路线 |
| MAI Transcribe 1.5 | 转录 | 43种语言，声称全球第一准确率，5倍速度 |
| MAI Voice 2 | 语音合成 | 15种语言，支持细粒度情绪 |
| MAI Voice 2 Flash | 超低延迟语音 | 专为语音Agent设计 |

## 分发渠道

全部模型同步进入Foundry平台、OpenRouter、Fireworks AI和Base 10。开发者可在自己习惯的生态里直接调用。

## 竞争格局

MAI系列的发布标志着微软不再只是[[openai]]模型的分销商。[[mai-thinking-1]]直接对标Anthropic Opus 4.6，MAI Transcribe 1.5声称超越OpenAI和Gemini旗舰转录模型。
