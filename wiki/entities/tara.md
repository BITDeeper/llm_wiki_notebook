---
type: entity
title: TARA (Taxonomy-Aware Representation Alignment)
tags: [algorithm, fine-grained-recognition, representation-alignment, cvpr-2026]
related: [pku-mipl, hierarchical-visual-recognition, taxonomy-tree-prior, bioclip]
created: 2026-03-21
updated: 2026-03-21
sources: ["精准识别「界门纲目科属种」！北大彭宇新团队用细粒度树先验提升泛化，破解生物类别分层识别难题.md"]
---

# TARA (Taxonomy-Aware Representation Alignment)

**TARA**（分类感知表征对齐）是由 [[北京大学彭宇新团队]] 提出的一种用于提升多模态大模型分层视觉识别能力的方法。该方法的核心思想是利用判别式生物基础模型（如 [[BioCLIP]]）的类别树先验知识，来指导生成式大模型的学习。

## 核心机制
TARA 包含两个主要的对齐模块：
1.  **分层视觉表征对齐**：
    通过可学习的映射层，将大语言模型中间层的视觉特征映射到生物基础模型的特征空间。这使得大模型能够提取出包含完整分类学结构（如父子关系）的视觉特征，解决了传统模型只关注最终类别而忽略层级结构的问题。

2.  **自由粒度类别表征对齐**：
    将大模型输出答案的首个词元表征，与经生物基础模型编码后的真实类别文本表征进行对齐。这使得模型能够根据用户的指令（如“识别到科”或“识别到种”），动态地将视觉特征映射到对应层级的类别名称上。

## 训练与推理
-   **训练阶段**：采用 [[No Thinking RFT]]（无需思考的强化微调）与 TARA 的对齐损失进行交替优化。
-   **推理阶段**：生物基础模型和映射层均不参与计算，仅由优化后的大模型进行推理，保证了部署的效率。

## 性能表现
在 iNaturalist 和 TerraIncognita 等数据集上的实验表明，TARA 不仅提升了细粒度类别的识别准确率，还显著增强了模型在未见过的稀有物种（新类别）上的泛化能力。