---
type: entity
title: OneThinker-600k
tags: [数据集, 多模态, 视觉推理]
related: [onethinker, onethinker-sft-340k, seed1.5-vl]
created: 2025-12-12
updated: 2025-12-12
sources: ["港中文联手美团开源“视觉推理通才”！图像视频10类任务一网打尽.md"]
---

# OneThinker-600k

[[OneThinker-600k]] 是为训练 [[onethinker]] 模型而构建的大规模统一多模态任务数据集。

## 数据构成

该数据集包含 60 万个样本，具有以下特点：
*   **跨模态覆盖**：同时包含图像和视频数据。
*   **任务多样性**：涵盖 10 类核心视觉任务，包括图像问答、视频问答、时空定位、目标分割、目标跟踪等。

## 用途

OneThinker-600k 主要用于 [[onethinker]] 的强化学习（RL）训练阶段。通过在图像和视频任务上进行联合训练，模型能够在空间与时间维度上建立统一的推理能力，实现跨模态、多任务的通用理解。