---
type: concept
title: Perceive-then-Reason
tags: [paradigm, multimodal, reasoning]
related: [ca-tts, 感知钝化, chain-of-thought]
created: 2026-03-22
updated: 2026-03-22
sources: ["浙大团队破解多模态模型「盲目自信」：先校准置信度，再分配算力丨cvpr'26.md"]
---

# Perceive-then-Reason (先感知后推理)

Perceive-then-Reason 是一种针对多模态大模型的新兴推理范式，强调在进行复杂逻辑推理之前，必须先确保感知的可靠性和置信度的准确性。

## 背景与动机
传统的多模态研究往往默认模型已经充分利用了视觉信息，因此侧重于增强推理链条（如 [[Chain-of-Thought]]）。然而，[[感知钝化]] 现象表明，模型可能根本没有“看懂”图像，却依然能给出高度自信的回答。如果感知基础不可靠，后续的推理再复杂也是建立在沙堆之上。

## 核心思想
[[CA-TTS]] 框架体现了这一范式：
1.  **先感知**：通过 [[CDRL]] 训练，建立对视觉证据变化敏感、且与准确性一致的置信度评估。
2.  **后推理**：利用校准后的置信度指导推理资源的分配（如动态调度 Self-Reflection 和 Self-Check）。

## 意义
这一范式转变纠正了“先推理后感知”的误区，将置信度校准提升到了与推理能力同等重要的地位。它要求 AI 系统首先解决“知道自己不知道”的问题，再进行决策。