---
type: source
title: "7B打败o3、GPT-5！医学AI智能体让模型学会“看哪里、怎么看”"
created: 2026-05-27
updated: 2026-05-27
tags: [医学AI, 多模态推理, ICML-2026, 视觉智能体, 强化学习]
related: [ophiuchus, medscope, think-with-images-videos, ga-grpo, leapquest, clinvideosuite]
sources: ["7b打败o3、gpt-5！医学ai智能体让模型学会“看哪里、怎么看”.md"]
authors: [量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/MRnLu-3FxqRMxnH68tbtLA"
venue: 量子位
---
# 7B打败o3、GPT-5！医学AI智能体让模型学会"看哪里、怎么看"

## 摘要

本文报道了上海创智学院 [[leapquest|LeapQuest]] 团队两篇被 ICML 2026 接收的论文，首次将 [[think-with-images-videos|Think with Images/Videos]] 范式系统化应用于医学AI领域。两篇工作分别为：

1. **[[ophiuchus|Ophiuchus]]**：面向医学图像的 Tool-augmented "Think with Images" 智能体，其 7B 参数版本在 8 个 VQA benchmark 上以 68.0 的平均分击败 OpenAI-o3（62.2）、Gemini 2.5 Pro（61.8）和 GPT-5（59.9）。
2. **[[medscope|MedScope]]**：面向临床长视频的 "Think with Videos" 智能体，配套发布 [[clinvideosuite|ClinVideoSuite]] 大规模训练数据集和 [[ga-grpo|GA-GRPO]] 强化学习算法。

## 核心论点

- 现有医学多模态模型被动接收视觉上下文，容易看错区域、漏看病灶，解释看起来完整不代表模型真的看到了关键证据。
- 视觉证据应成为模型思考过程的一部分，而非仅仅是输入——提出"Think with Images/Videos"范式。
- 小模型通过视觉交互机制可以击败大模型，证明视觉交互机制比模型规模更重要。

## 关键数据

- Ophiuchus-7B 平均分 68.0，工具调用准确率 97.9%
- ClinVideoSuite 包含 635K 时间戳 caption、254K 证据关联 QA、34K 视觉 CoT 轨迹
- 去掉 evidence reward 后 R@0.5 从 40.1 降至 33.2，mIoU 从 43.8 降至 38.8

## 关联

- 与 [[医疗视频理解]] 概念直接相关，从被动理解推进到主动证据检索
- 与 [[场景白盒化推理]] 高度相关，推理过程天然具备可审查性
- 与 [[MedGRPO]] 同属 GRPO 家族的医学强化学习方法