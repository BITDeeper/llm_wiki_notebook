---
type: entity
title: SpeechGPT
created: 2026-03-27
updated: 2026-03-27
tags: [模型, 语音, 端到端]
related: [邱锡鹏, 模思智能, anygpt, speechtokenizer]
sources: ["从token到词元：全模态时代的基模与交互入口.md"]
---

# SpeechGPT

SpeechGPT 是 [[模思智能]] 团队（复旦大学 [[邱锡鹏]] 教授团队）于 2023 年 5 月发布的端到端语音大模型。

## 技术突破
- **离散化路径**：在业内较早验证了“离散化端到端语音大模型”这一路径的可行性。
- **统一计算**：首次将连续语音信号拆解并映射为离散 [[词元]] 序列，使得机器理解人“说的话”和理解人“写的话”能在同一套计算框架内完成。

## 衍生工具
基于 SpeechGPT 的技术积累，团队于同年 8 月发布了 [[speechtokenizer]]，这是一种融合语义 Token 与声学 Token 的音频离散化编码器，为后续的 [[anygpt]] 全模态架构奠定了底座。