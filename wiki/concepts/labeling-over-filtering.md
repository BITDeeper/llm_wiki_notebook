---
type: concept
title: Labeling over Filtering
tags: [data-processing, audio, training-strategy]
related: [xiaomi-any2speech, gst]
created: 2026-04-08
updated: 2026-04-08
sources: ["小米ai语音新框架：人人都能当声音导演.md"]
---

# Labeling over Filtering

Labeling over Filtering（标注胜过过滤）是 [[小米大模型应用团队]] 在开发 [[Xiaomi Any2Speech]] 时提出的一种数据处理与模型训练思路。

## 核心理念
传统 TTS 训练通常追求“纯净”，会刻意过滤掉嘈杂数据（如多人重叠的声音、背景杂音、录音质量参差的素材），认为这些数据会影响模型效果。

Labeling over Filtering 则反其道而行之：
1.  **保留数据**：保留这些传统意义上的“脏数据”。
2.  **精细标注**：利用 [[Global-Sentence-Token (GST)]] 等标注体系，对数据中的声学特征（如磁带损坏感、旧广播感、环境底噪）进行详细标注。
3.  **转化燃料**：将标注后的数据作为训练燃料输入模型。

## 效果
通过这种方式，模型学会了从复杂的人声背景中提炼和泛化各种特色声学效果。这使得生成的音频不再像是在真空的录音棚里念字，而是带有真实场景的质感和环境氛围，显著提升了音频的真实感和表现力。
