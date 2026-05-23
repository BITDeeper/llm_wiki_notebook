---
type: concept
title: ATLAS-178K
created: 2026-05-22
updated: 2026-05-22
tags: [数据集, 视觉推理, 多模态]
related: [atlas-视觉推理, functional-token]
sources: ["meta华人发布atlas，一个词搞定可泛化的视觉推理！.md"]
origin_date: 2026-05-22
---
# ATLAS-178K

ATLAS-178K 是 [[atlas-视觉推理|ATLAS]] 范式中用于监督微调（SFT）阶段的训练数据集。

## 数据集特征

- **规模**：约 178,000 条样本。
- **覆盖范围**：涵盖 40 多种视觉推理任务。
- **标注方式**：将复杂视觉操作映射为统一的 [[functional-token|Functional Token]] 表达。

## 作用

在 SFT 阶段，模型学习的不只是最终答案，而是包含 Functional Token 的完整推理轨迹。这一步类似于示范教学：
- 遇到画线场景 → 学习使用 `<|Line|>`
- 遇到空间区域操作 → 学习使用 `<|Shape|>`
- 遇到方向关系 → 学习使用 `<|Arrow|>`
- 遇到标注场景 → 学习使用 `<|Text|>`

## 设计理念

ATLAS-178K 的核心贡献在于将多样化的视觉操作统一映射为离散 Token 表达，使得模型可以在标准自回归框架下学习视觉推理能力，无需修改模型架构或引入额外的视觉监督信号。