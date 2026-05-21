---
type: concept
title: "ARIA 技术"
tags: [tts, audio, engineering]
related: [qwen3-5-omni, thinker-talker-架构]
created: 2026-03-31
updated: 2026-03-31
sources: ["实测拿215项sota的qwen3.5-omni：摄像头一开，ai给我现场讲论文、撸代码.md"]
---

# ARIA 技术

ARIA (Adaptive Rate Interleaved Alignment) 即**自适应速率交错对齐技术**，是一种用于解决多模态模型中语音生成节奏问题的工程技术。

## 背景问题

在传统的 TTS（文本转语音）与 LLM 结合的场景中，常出现“AI 说话不稳定”的现象，如漏读、读错、数字发音奇怪等。这通常是因为文本生成的逻辑节奏与语音生成的声学节奏不一致（一个说得快，一个说得慢）。

## 工作原理

ARIA 技术通过动态对齐文本和语音的生成节奏，将两者交错组合输出。它确保了语音输出与文本逻辑的同步，从而保证了说话的稳定性和清晰度。

## 效果

应用 ARIA 技术后，模型在实时对话中基本不会出现“嘴瓢”现象，语音输出的自然度和流畅度显著提升，更接近真人的说话习惯。