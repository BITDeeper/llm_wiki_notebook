---
type: entity
title: Midasheng-audio-generate
tags: [audio-generation, xiaomi, text-to-audio, flow-matching]
related: [midasheng-tokenizer, flow-matching, xiaomi-da-model-team, openclaw]
created: 2026-04-08
updated: 2026-04-08
sources: ["小米ai语音新框架：人人都能当声音导演.md"]
---

# Midasheng-audio-generate

Midasheng-audio-generate 是由 [[小米大模型应用团队]] 提出的“沉浸式音频生成”框架。与专注于长语音合成的 [[Xiaomi Any2Speech]] 不同，该框架强调通过一句话生成包含人声、音效和音乐的完整音频场景，实现“声画同频”。

## 核心特性

- **一句话造世界**：仅需自然语言描述，无需后期拼接，即可生成包含语音、音乐、环境音的混合音频。
- **场景自适应语音**：根据描述的场景（如火车、森林）自动生成适配的混响和声学特性。
- **全平台支持**：支持 Hugging Face、[[OpenClaw]] Skill 和 Web Demo，无需本地部署。

## 技术实现

### Midasheng tokenizer
一种统一的语义-声学表示技术。它摒弃了主流方法中会损失语义信息的 VAE 声学分词器，旨在减少语义损失，从而突破生成质量的天花板，实现全场景（语音+音乐+音效）的高质量混合生成。

### Flow Matching 框架
作为模型的主体生成框架，接收文本指令并驱动全能编码器，直接合成复杂的混合音频。

### 结构化多视角标注
模型将音频场景解耦为五个独立标注字段：整体描述、说话人风格、音效、音乐、语音转写。这种结构化格式天然兼容 LLM 与 [[runtime-agent-os]]，允许智能体自动从高层描述填充字段并生成音频。
