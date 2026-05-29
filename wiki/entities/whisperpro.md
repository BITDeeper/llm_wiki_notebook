---
type: entity
title: WhisperPro
created: 2026-05-27
updated: 2026-05-27
tags: [语音编码器, 语音识别, 韵律提取, TextPro-SLM]
related: [textpro-slm, 语义-韵律解耦, 重构损失]
sources: ["speech-llm-的下一个突破口：你的语音大模型可以是个「带韵律的文本模型」.md"]
origin_date: 2026-05-01
---
# WhisperPro

WhisperPro 是 [[textpro-slm]] 架构中的关键组件，是一个基于 Whisper-large-v3 改造的统一语音编码器。其核心创新在于实现了"文本声音双全"——在准确转录文本的同时，将韵律特征（情绪、语气等）保留在 hidden states 中。

## 技术实现

- 在 Whisper-large-v3 基础上额外加入一个 decoder 模块
- 引入 [[重构损失]]（Reconstruction Loss），迫使底层特征在输出文字的同时保留情绪、语气等信息
- 最终输出对齐的 Text Token + Prosody Embedding 双流信号

## 设计意义

WhisperPro 实现了 [[语义-韵律解耦]] 的第一步：将语音中"说了什么"（语义内容）和"怎么说的"（韵律/副语言信息）彻底分离，为后续的韵律注入模块提供干净的输入。