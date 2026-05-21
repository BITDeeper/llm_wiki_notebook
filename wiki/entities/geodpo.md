---
type: entity
title: GEODPO
tags: [算法, 强化学习, dpo, 几何推理]
related: [geoperceive, geodsl, translator-guided-reinforcement-learning, 几何感知错误]
created: 2026-04-30
updated: 2026-04-30
sources: ["vlm解几何题总翻车？geodpo从「看」入手：用结构化表示+dpo优化，让模型先看懂再推理丨iclr'26.md"]
---

# GEODPO

**GEODPO** 是一种基于结构化奖励的强化学习优化方法，由光明实验室与清华大学提出，旨在解决视觉语言模型（VLM）在几何任务中的感知错误问题。

## 核心机制
该方法采用 **Translator-Guided Reinforcement Learning** 范式。模型依然输出自然语言，但通过一个“翻译器”将输出转换为 [[geodsl]] 结构化代码，进而计算精确的结构级奖励信号。这些奖励信号用于构造偏好对，并通过 DPO（Direct Preference Optimization）优化模型。

## 优势
1. **保持输出空间**：不强制模型直接输出代码，避免了破坏其自然语言生成能力。
2. **可解释性**：奖励函数基于结构匹配（如点、线、关系的 F1 分数），具有明确的物理意义。
3. **稳定性**：相比直接监督微调（SFT），GEODPO 在分布外（OOD）数据上表现出更好的泛化稳定性和抗波动能力。

## 实验效果
在 [[geoperceive]] 评测和 MathVista 等下游推理任务中，GEODPO 显著提升了模型的几何结构识别准确率，并证明了感知能力的提升能直接带动推理表现的改善。