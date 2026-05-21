---
type: concept
title: 后处理优化
tags: [optimization, inference, computer-vision, model-performance]
related: [rankseg, semantic-segmentation, argmax]
created: 2026-01-05
updated: 2026-01-05
sources: ["语义分割别无脑用argmax！港中文新算法：三行代码，推理速度提升10倍.md"]
---

# 后处理优化

[[后处理优化]] (Post-processing Optimization) 指在不改变模型训练参数或架构的前提下，仅对模型输出结果进行处理以提升最终性能指标的技术手段。

## 核心价值
- **零训练成本**：无需重新训练模型，节省了大量的计算资源和时间。
- **即插即用**：通常可以无缝集成到现有的推理流程中。
- **榨干性能**：对于已经训练好的模型，后处理优化是进一步提升其在特定指标上表现的有效途径。

## 在语义分割中的应用
传统的语义分割流程通常以 `argmax` 或固定阈值作为后处理步骤。然而，这种方法优化的是像素级准确率，而非评估任务真正关心的全局指标（如 Dice 或 IoU）。

[[RankSEG]] 是后处理优化的一个典型案例。它通过替换 `argmax` 步骤，直接针对 Dice/IoU 指标进行数学上的最优求解，从而在不改变模型权重的情况下显著提升了分割质量。

## 常见技术
- **阈值调整**：手动或自动调整分类阈值。
- **CRF/MRF**：利用条件随机场或马尔可夫随机场进行边缘平滑。
- **Test Time Augmentation (TTA)**：在测试时对输入进行变换（如翻转、缩放）并平均结果。
- **数学后处理**：如 RankSEG 基于排序性质和期望最大化的后处理。