---
type: entity
title: BioCLIP
tags: [foundation-model, biology, computer-vision, discriminative-model]
related: [tara, bioclip2, biocap, hierarchical-visual-recognition]
created: 2026-03-21
updated: 2026-03-21
sources: ["精准识别「界门纲目科属种」！北大彭宇新团队用细粒度树先验提升泛化，破解生物类别分层识别难题.md"]
---

# BioCLIP

BioCLIP 是一种基于 CLIP 架构的生物领域基础模型。与通用的视觉-语言模型不同，BioCLIP 是在大规模生物分类数据集上，利用分层类别标签（如界、门、纲、目、科、属、种）进行对比学习训练而成的。

## 特点
-   **判别式模型**：BioCLIP 属于判别式模型，其表征空间能够充分编码类别树中的类间关系与类内关系。
-   **类别树先验**：由于其训练数据包含了丰富的层级结构信息，BioCLIP 天然具备“类别树先验”知识，能够理解不同生物类别之间的逻辑从属关系。

## 应用
在 [[TARA]] 方法中，BioCLIP 被用作“教师模型”，为生成式多模态大模型提供包含分类学结构的监督信号，帮助大模型修正其在生物分类上的逻辑错误和幻觉。

## 衍生模型
文中提到的相关模型还包括 [[BioCLIP2]] 和 [[BioCAP]]，它们同样具备处理生物分类层级结构的能力。