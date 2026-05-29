---
type: entity
title: TextPro-SLM
created: 2026-05-27
updated: 2026-05-27
tags: [语音大模型, 多模态架构, 语义韵律解耦, 香港中文大学]
related: [模态代沟, 语义-韵律解耦, whisperpro, 全局前置注入, 交织注入, 香港中文大学]
sources: ["speech-llm-的下一个突破口：你的语音大模型可以是个「带韵律的文本模型」.md"]
origin_date: 2026-05-01
---
# TextPro-SLM

TextPro-SLM 是香港中文大学提出的语音大模型新架构，全称为"Minimizing Modality Gap from the Input Side: Your Speech LLM can be a Prosody-Aware Text LLM"。该架构通过从输入端进行 [[语义-韵律解耦]]，将语音拆分为纯文本 Token 和韵律 Embedding 的双流输入，以近乎消除 [[模态代沟]]。

## 核心设计理念

TextPro-SLM 的核心洞察是：既然语音大模型的输出端已经通过 Thinker-Talker 架构与文本大模型保持一致（Thinker 只输出文本 Token），那输入端也应该向文本大模型靠拢。不需要逼着大模型去理解原声杂乱的语音信号，只需将其变成一个"听得懂语气的文本大模型"。

## 架构组成

1. **[[whisperpro]]**：基于 Whisper-large-v3 改造的统一语音编码器，通过 [[重构损失]] 实现文本转录与韵律特征保留的双流输出。
2. **韵律注入模块**：提供两种注入方式——[[全局前置注入]]（极简高效）和 [[交织注入]]（保留细粒度情绪变化）。

## 关键实验结果

| 指标 | TextPro-SLM-7B | 对比模型 |
|------|----------------|----------|
| 平均 Modality Gap | **0.7%** | Qwen2.5-Omni 3.1%, SALAD 7.1% |
| 高中数学 Modality Gap | **1.8%** | Kimi-Audio-7B 17.5% |
| 训练数据量 | **~1000 小时** | 主流模型百万至千万小时 |

## 行业意义

TextPro-SLM 的出现挑战了"数据量决定一切"的 Scaling 信念，证明通过巧妙的输入端特征解耦，可以用极少量数据实现超越海量数据训练模型的性能。其设计哲学体现了 [[第一性原理]]——巧妙的特征解耦优于暴力的特征融合。

## 开放问题

- 在非英语/中文语种下的表现如何？
- 强噪声环境下的韵律压缩信息损失边界在哪里？
- 实时流式对话场景下的延迟表现如何？