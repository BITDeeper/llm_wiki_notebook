---
type: concept
title: TTS (Text-to-Speech)
tags: [audio, synthesis, technology]
related: [原生音频基准, audio-multichallenge]
created: 2026-01-06
updated: 2026-01-06
sources: ["真实音频场景，大模型集体挂科！首个原生语音基准multichallenge.md"]
---

# TTS (Text-to-Speech)

TTS（Text-to-Speech，文本转语音）是一种将书面文本转换为口头语音的技术。

## 在 AI 评测中的双刃剑效应
虽然 TTS 技术在语音合成领域应用广泛，但在大模型评测中，过度依赖 TTS 转换的合成语音可能会产生误导：
- **“无菌”环境**：TTS 生成的语音通常平滑、规律且高度标准化，缺乏人类自然语言中的吞吐、重复、琐碎停顿以及临时改口。
- **掩盖缺陷**：这种完美的合成环境给模型加了一层滤镜，使得模型在评测中的得分虚高，掩盖了其在真实世界面对充满杂质的口语时的失败模式。

## 局限性
[[原生音频基准]] 的出现正是为了对抗这种“评测滤镜”，强调必须使用真实人声来评估模型在复杂交互场景下的真实鲁棒性。