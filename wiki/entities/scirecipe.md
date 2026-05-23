---
type: entity
title: SciRecipe
created: 2026-05-15
updated: 2026-05-15
tags: [数据集, 生物实验, ai-for-science]
related: [thoth, scirecipe-eval, score-reward]
sources: ["8b模型做生物实验：实验步骤顺序不乱、剂量无幻觉｜iclr-2026.md"]
origin_date: 2025-10-01
---
# SciRecipe

SciRecipe 是为支撑 [[thoth]] 模型训练而构建的大规模生物实验 protocol 数据集，覆盖27个生物学子领域、约12K条高质量结构化实验protocol数据。

## 数据来源

来源于 Nature Protocols、Bio-protocol、Protocols.io 等标准化实验流程平台。团队从超过23K份原始 protocol 中进行清洗、去重、结构化处理和质量控制，最终保留约12K条高质量数据。

## 覆盖领域

涵盖神经科学、分子生物学、癌症生物学等27个生物学子领域。

## 任务类型

SciRecipe 不仅包含传统的 protocol 理解任务，还覆盖真实实验工作流中的问题解决场景：

- **overview**：总结整体实验流程
- **specific**：分析局部实验步骤
- **retrieval**：检索所需实验信息
- **planning**：规划实验方案
- **troubleshooting**：处理实验异常
- **constraint**：满足约束条件
- **scaling**：进行剂量缩放
- **safety**：识别安全注意事项

## 设计理念

SciRecipe 不是只让模型"读懂 protocol"，而是让模型在理解、规划、纠错、缩放、安全等环节形成完整的"理解—应用"闭环。

## 关联

- [[scirecipe-eval]] 是基于 SciRecipe 构建的评测基准
- [[score-reward]] 奖励机制的设计与 SciRecipe 的结构化数据格式紧密配合