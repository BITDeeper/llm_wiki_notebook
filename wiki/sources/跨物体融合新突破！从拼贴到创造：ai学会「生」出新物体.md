---
type: source
title: "跨物体融合新突破！从拼贴到创造：AI学会「生」出新物体"
tags: [ai, computer-vision, diffusion-model, image-generation]
related: [vmdiff, 跨物体融合, iiof, 南京理工大学, 南京大学]
created: 2026-04-02
updated: 2026-04-02
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/NVTM6YS6y687Gh0QhaAtTQ"
venue: "新智元"
sources: ["跨物体融合新突破！从拼贴到创造：ai学会「生」出新物体.md"]
---

# 跨物体融合新突破！从拼贴到创造：AI学会「生」出新物体

## 概述
本文报道了由 [[南京理工大学]] 和 [[南京大学]] 团队提出的 [[VMDiff]] 模型。该模型旨在解决 [[跨物体融合]] 生成中的核心难题——即如何将两个不同的物体概念结合，生成一个既包含两者特征、又在结构和视觉上统一的新实体，而非简单的图像拼接或风格迁移。

## 核心挑战
文章指出了现有多概念生成模型常见的两类失败模式：
1.  **[[coexistent-generation]] (共存生成)**：两个物体在图像中同时出现但彼此分离，未发生融合。
2.  **[[bias-generation]] (偏向生成)**：生成结果只保留了其中一个物体的特征，另一个物体特征消失。

## 解决方案：VMDiff
[[VMDiff]] 通过分阶段策略解决了上述问题，主要包含两个核心模块：

### 1. [[Hybrid Sampling Process]] (HSP)
HSP 采用了“反直觉但有效”的两步走策略：
*   **BNoise (Blending Noise)**：在噪声构造阶段，目标是保留信息。模型使用 **拼接** 而非插值来处理两个输入特征，以防止细节在平均过程中被抹平。
*   **MDeNoise (Mixing Denoise)**：在最终生成阶段，目标是形成整体。模型转而使用 **[[spherical-interpolation]] (球面插值)** 来混合视觉表征，使结果沿潜空间路径自然过渡，形成单一连贯的实体。

### 2. [[Efficient Adaptive Adjustment]] (EAA)
为了解决生成结果偏向某一方的“偏科”问题，VMDiff 设计了 **Similarity Score (SS)**，综合评估视觉相似度、语义相似度以及两者的平衡性。EAA 模块通过分层搜索（如黄金分割搜索）自动寻找最佳的融合参数（$\alpha, \beta$），无需昂贵的梯度反向传播。

## 评估与数据集
研究团队构建了 [[IIOF]] (Image-Image Object Fusion) 数据集，包含 780 个图像对，覆盖动物、水果、人造物体等类别。实验表明，VMDiff 在语义一致性、单实体连贯性、相似度和平衡性等指标上均优于基线方法。

## 应用价值
这项技术对于角色设计、潮玩设计、电影动画和工业外观探索等领域具有重要意义，它标志着 AI 生成从简单的“A+B 拼贴”走向了真正的“创造新物体 C”。