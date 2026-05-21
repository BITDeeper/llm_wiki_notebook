---
type: entity
title: Audio MultiChallenge
tags: [benchmark, audio, evaluation, logic]
related: [scale-ai, multichallenge, gemini, gpt-4o-audio, 语音编辑, 时长驱动的崩溃]
created: 2026-01-06
updated: 2026-01-06
sources: ["真实音频场景，大模型集体挂科！首个原生语音基准multichallenge.md"]
---

# Audio MultiChallenge

Audio MultiChallenge 是由 [[Scale AI]] 发布的首个原生音频多轮对话基准。它是文本基准 [[MultiChallenge]] 的音频原声版本，旨在评估大模型在真实语音交互场景下的逻辑能力。

## 核心特征
- **数据来源**：包含 47 名真实说话者录制的原始音频，保留了吞吐、重复、琐碎停顿以及临时改口等自然口语特征。
- **评测维度**：
    1.  指令保留
    2.  推理记忆
    3.  自我一致性
    4.  [[语音编辑]]（Voice Editing，新增核心维度）

## 测试结果
在该基准的严苛测试下，顶尖模型的通过率普遍低于预期：
- **[[Gemini 3 Pro]]**：表现相对较好，勉强过半。
- **[[GPT-4o Audio]]**：通过率仅为 Gemini 的一半左右。

## 揭示的问题
该基准通过对比真实人声与 TTS 合成语音的测试结果，证实了合成音频掩盖了模型在现实世界中的失败模式，特别是暴露了模型在 [[语音编辑]]、[[时长驱动的崩溃]] 和非语义信号感知方面的严重缺陷。