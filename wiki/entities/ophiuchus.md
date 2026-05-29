---
type: entity
title: Ophiuchus
created: 2026-05-27
updated: 2026-05-27
tags: [医学AI, 多模态模型, 视觉智能体, ICML-2026]
related: [medscope, think-with-images-videos, leapquest, visual-cot]
sources: ["7b打败o3、gpt-5！医学ai智能体让模型学会“看哪里、怎么看”.md"]
origin_date: 2026-05-27
---
# Ophiuchus

Ophiuchus 是面向医学图像的 Tool-augmented "Think with Images" 智能体，由 [[leapquest|LeapQuest]] 团队开发，论文被 ICML 2026 接收。

## 核心机制

Ophiuchus 将大模型改造成一个能与医学图像工具协同的视觉智能体。它可以根据当前推理状态，决定是否调用外部视觉工具：

- **SAM2**：做精细分割
- **BiomedParse**：根据文字提示定位医学结构
- **Zoom-in**：放大关键区域

工具调用后的输出以 observation 的形式回到推理链，驱动下一步判断。Ophiuchus 不是把工具"外挂"在模型外面，而是让工具成为推理链的一部分——模型要学会何时调用工具、选择哪个工具、如何解释工具输出，以及当工具结果不可靠时如何修正策略。

## 性能表现

Ophiuchus-7B 在 8 个 VQA benchmark 上取得 **68.0** 的平均分，超越多个闭源大模型：

| 模型 | 平均分 |
|------|--------|
| Ophiuchus-7B | 68.0 |
| OpenAI-o3 | 62.2 |
| Gemini 2.5 Pro | 61.8 |
| GPT-5 | 59.9 |

工具使用准确性评估中，Ophiuchus 达到 **97.9%** 的平均工具调用准确率。

## 核心意义

Ophiuchus 的价值不只是让医学大模型多了几个视觉工具，而是让模型学会在诊断过程中主动"看哪里、怎么看、看完如何修正"。当问题真正依赖局部结构、病灶边界和细胞级证据时，模型大小或语言推理并不是唯一瓶颈——医学AI需要一种能让视觉证据不断进入推理过程的机制。

## 关联

- 与 [[medscope|MedScope]] 共同构成 [[think-with-images-videos|Think with Images/Videos]] 范式的两个实例
- 推理过程天然具备可审查性，是 [[场景白盒化推理]] 在医学领域的具体实现
- 采用 [[visual-cot|Visual CoT]] 将视觉工具调用嵌入推理链