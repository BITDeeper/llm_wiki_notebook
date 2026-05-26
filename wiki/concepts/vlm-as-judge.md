---
type: concept
title: VLM-as-judge
created: 2026-05-25
updated: 2026-05-25
tags: [奖励模型, 视觉语言模型, 评估方法]
related: [verl-omni, 多模态生成rl后训练, 医疗llm评审, vlm质检闭环]
sources: ["verl-omni：面向扩散和全模态生成模型的通用rl后训练框架.md"]
---
# VLM-as-judge

VLM-as-judge 是一种使用视觉语言模型（VLM）作为评审/奖励模型，对生成内容进行多维度评估的方法。这是 [[verl-omni]] 奖励引擎的核心机制之一。

## 工作原理

在多模态生成 RL 训练中，奖励函数本身需要具备多模态理解能力。VLM-as-judge 利用视觉语言模型对生成结果进行质量评估，例如：

- **OCR 评分**：读取生成图像中的渲染文字，与数据集 ground truth 比对，对文字渲染质量评分
- **视觉质量评估**：从多个维度评估生成图像的视觉质量

## 应用实例

在 VeRL-Omni 的 Qwen-Image OCR [[flowgrpo]] Demo 中，使用 Qwen3-VL-8B-Instruct 作为 VLM 奖励模型，通过 OCR 方式评估生成图像中的文字渲染质量。

## 与相关概念的联系

- 与 [[医疗llm评审|医疗 LLM 评审]] 在方法论上相通，均使用模型作为评审来评估生成内容质量
- 与 [[vlm质检闭环|VLM 质检闭环]] 在架构理念上类似，都利用 VLM 的理解能力进行质量把关