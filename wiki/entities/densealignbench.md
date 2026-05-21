---
type: entity
title: DenseAlignBench
tags: [benchmark, evaluation, text-to-image, prompt-following]
related: [promptecho, z-image, qwenimage-2512]
created: 2026-05-06
updated: 2026-05-06
sources: ["阿里开源promptecho：用冻结多模态大模型为文生图训练提供高质量reward.md"]
---

# DenseAlignBench

[[densealignbench]] 是由阿里巴巴团队构建的一个密集描述场景评测基准，旨在验证文生图模型在复杂指令遵循上的表现。

## 数据构成

该基准包含 2000 条样本，从与训练数据同源的数据集中划分出来，确保不在训练集中。这些样本主要包含涵盖对象、属性、空间关系、颜色、纹理等多维信息的详细描述（Dense Caption）。

## 评测意义

[[densealignbench]] 专注于测试模型处理高密度语义信息的能力。在 [[promptecho]] 的实验中，经过优化的模型在该基准上取得了显著优于 Baseline 的成绩，证明了该方法在提升模型细节捕捉和复杂指令遵循方面的有效性。