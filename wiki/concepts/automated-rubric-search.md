---
type: concept
title: Automated Rubric Search
tags: [technique, optimization, training, evaluation, training-signal]
related: [train-on-future, echoz-1-0, unipat-ai, echoz-1.0]
created: 2026-03-30
updated: 2026-05-08
sources: ["黑马ai横扫预测市场！预测未来胜率已超过人类.md", "预测这件事，人类越犹豫，这个大模型越有优势.md"]
---

# Automated Rubric Search

Automated Rubric Search（自动评分标准搜索）是一种自动搜索和优化评分标准的技术，旨在将训练信号从“结果对错”转移到“推理过程质量”。它是 [[Train-on-Future]] 范式中用于评估推理过程质量的核心机制。

## 工作原理

传统的模型评估往往基于最终结果的对错，但在预测领域，噪声极高，结果导向的评估容易产生偏差。Automated Rubric Search 试图将评估重点转移到“推理过程”上。

其工作流程如下：
1.  **生成候选**：由 LLM 生成候选的评分维度（或评分标准）。
2.  **迭代反馈**：每一轮基于上一轮的反馈进行迭代。
3.  **搜索目标**：目标是让基于 Rubric 产生的模型排名与真实 Elo 排名之间的 Spearman ρ（相关系数）最大化。

## 评估维度示例

文章披露了两个具体的评估维度：

- **Precursor and External Catalyst Evaluation**：评估模型是否利用了具体的、可验证的先行信号或外部驱动因素（如关键球员回归、政策变化），而非泛泛而谈。
- **Multi-Factor Causal Synthesis**：评估模型是否整合了至少三个相互独立的因素，并解释其相互作用，将多个独立因素整合为一个有因果结构的预测结论。

## 意义与效果

这项技术解决了“如何定义好的推理过程”这一难题，使得模型训练可以聚焦于提升分析质量，从而在预测任务中获得超越单纯拟合结果的能力。

实验数据显示，随着 Rubric 质量的提升，其评估排名与 Elo 排名的相关系数持续攀升。这使得系统能够自动识别并奖励高质量的推理过程，而不仅仅是正确的猜测。