---
type: entity
title: "Qwen3.5-Omni"
tags: [qwen, multimodal, llm, real-time]
related: [原生理解生成统一, vibe-coding, thinker-talker-架构, aria-技术, gemini-3-1-pro]
created: 2026-03-31
updated: 2026-03-31
sources: ["实测拿215项sota的qwen3.5-omni：摄像头一开，ai给我现场讲论文、撸代码.md"]
---

# Qwen3.5-Omni

Qwen3.5-Omni 是阿里通义千问团队发布的最新一代全模态原生大模型。该模型主打实时多模态交互能力，支持文本、图片、音频及视频的无缝理解与生成。

## 核心特性

- **全模态原生**：在同一架构中无缝处理多种模态，能够生成带时间戳的音视频脚本。
- **实时视频交互**：支持通过摄像头进行实时视频通话，具备 [[语义打断]] 能力，能过滤背景噪音。
- **长上下文与多语言**：支持 256K 上下文窗口和 113 种语言识别，可处理 10 小时音频或 1 小时视频。
- **Vibe Coding**：具备自然涌现的实时编程能力，能根据视频画面逻辑生成代码（如 Python、HTML/CSS）。

## 性能表现

在 Benchmark 测试中，Qwen3.5-Omni 拿下了 **215 项 SOTA**。
- **对比 [[gemini-3-1-pro]]**：在通用音频理解、推理、识别、翻译、对话等指标上全面超越；音视频理解能力总体持平；视觉和文本能力与同尺寸 Qwen3.5 模型持平。

## 模型架构

采用 [[thinker-talker-架构]]，将系统分为“大脑”（Thinker）和“嘴巴”（Talker）两部分，并引入 [[hybrid-attention-moe]] 提升效率。配合 [[aria-技术]] 解决了语音合成中的节奏对齐问题。

## 体验平台

用户可通过 [[qwen-chat]] 平台体验视频通话功能，或通过阿里云百炼调用 API。