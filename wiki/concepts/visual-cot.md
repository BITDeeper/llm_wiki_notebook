---
type: concept
title: Visual CoT（视觉思维链）
created: 2026-05-27
updated: 2026-05-27
tags: [多模态推理, 思维链, 视觉智能体]
related: [think-with-images-videos, ophiuchus, medscope]
sources: ["7b打败o3、gpt-5！医学ai智能体让模型学会“看哪里、怎么看”.md"]
origin_date: 2026-05-27
---
# Visual CoT（视觉思维链）

## 定义

Visual CoT（Visual Chain of Thought）是区别于纯文本 CoT 的多模态推理机制，将视觉工具调用和观察结果嵌入推理链。模型在推理过程中不仅生成文本 token，还会主动调用视觉工具获取新证据，并将观察结果作为后续推理的输入。

## 与 Textual CoT 的区别

- **Textual CoT**：模型在语言空间中展开逐步推理，视觉信息仅在初始输入时提供
- **Visual CoT**：模型在推理链中穿插视觉工具调用，持续获取新的视觉证据来修正判断

## 在医学AI中的应用

[[ophiuchus|Ophiuchus]] 和 [[medscope|MedScope]] 均采用 Visual CoT 作为核心推理机制：

- Ophiuchus 在图像诊断中调用分割、定位、放大工具，将观察结果纳入推理链
- MedScope 在视频理解中调用视频截取、关键帧获取工具，将时间维度的视觉证据纳入推理链

## 训练方法

在 [[medscope|MedScope]] 的三阶段训练中，Visual CoT 通过 cold-start SFT（第二阶段）教会模型何时需要更多证据、如何调用工具，再通过 [[ga-grpo|GA-GRPO]]（第三阶段）强化时序对齐的工具使用。

## 意义

Visual CoT 将推理从"语言链条"推进到"视觉证据参与的多模态思维链"，是 [[think-with-images-videos|Think with Images/Videos]] 范式的核心技术实现。