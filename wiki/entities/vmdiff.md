---
type: entity
title: VMDiff
tags: [ai, model, diffusion, image-generation, visual-mixing]
related: [跨物体融合, iiof, 南京理工大学, 南京大学, Hybrid Sampling Process, Efficient Adaptive Adjustment]
created: 2026-04-02
updated: 2026-04-02
sources: ["跨物体融合新突破！从拼贴到创造：ai学会「生」出新物体.md"]
---

# VMDiff

**VMDiff** (Visual Mixing Diffusion) 是一种视觉混合扩散模型，由 [[南京理工大学]] 和 [[南京大学]] 的研究团队联合提出。该模型的核心目标是实现高质量的 [[跨物体融合]]，即从两个不同的输入物体生成一个结构连贯、语义平衡且视觉统一的新实体。

## 核心特性
VMDiff 区别于传统多概念生成模型的关键在于其分阶段处理策略，旨在解决 [[coexistent-generation]]（共存不融合）和 [[bias-generation]]（偏向生成）两大难题。

### 1. 分阶段生成策略
模型将生成过程拆解为两个目标明确的阶段，构成了 [[Hybrid Sampling Process]] (HSP)：
*   **信息保留阶段 (BNoise)**：在噪声构造初期，为了防止细节丢失，模型采用 **拼接** 方式处理两个输入的特征，而非传统的插值。这确保了双方的重要视觉信息都被注入到语义噪声中。
*   **整体融合阶段 (MDeNoise)**：在最终生成阶段，为了形成统一的整体，模型切换策略，使用 **[[spherical-interpolation]] (球面插值)** 混合表征。这使得生成结果能沿着潜空间的自然路径过渡，形成一个和谐的新实体。

### 2. 自适应平衡机制
为了防止生成结果偏向某一个输入物体，VMDiff 引入了 [[Efficient Adaptive Adjustment]] (EAA) 模块。
*   **Similarity Score (SS)**：定义了一个综合目标函数，同时考量视觉相似度、语义相似度以及两者的平衡性。
*   **参数搜索**：通过轻量级的分层搜索算法（如黄金分割搜索），自动寻找最佳的融合参数（$\alpha, \beta$），无需昂贵的梯度计算。

## 评估与数据集
VMDiff 在团队自建的 [[IIOF]] (Image-Image Object Fusion) 数据集上进行了验证。该数据集包含 780 个图像对。实验结果显示，VMDiff 在语义一致性、单实体连贯性、相似度和平衡性等客观指标上均优于基线方法。

## 应用场景
该技术在创意设计领域具有广泛应用潜力，包括：
*   角色设计与概念艺术
*   潮玩与盲盒设计
*   电影动画预演
*   工业外观探索

## 外部链接
*   论文链接：https://arxiv.org/abs/2509.23605
*   项目主页：https://xzr52.github.io/VMDiff_index/
*   代码仓库：https://github.com/xzr52/VMDiff_code