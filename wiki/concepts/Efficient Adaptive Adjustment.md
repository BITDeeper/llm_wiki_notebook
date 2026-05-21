---
type: concept
title: 高效自适应调整
tags: [algorithm, optimization, diffusion-model]
related: [vmdiff, Hybrid Sampling Process, bias-generation]
created: 2026-04-02
updated: 2026-04-02
sources: ["跨物体融合新突破！从拼贴到创造：ai学会「生」出新物体.md"]
---

# 高效自适应调整

**高效自适应调整** (Efficient Adaptive Adjustment, EAA) 是 [[VMDiff]] 模型中用于优化融合结果平衡性的模块。

## 目标
解决 [[bias-generation]]（偏向生成）问题，确保生成的图像既像输入物体 A，也像输入物体 B，且两者在视觉和语义上保持平衡，不出现“偏科”。

## 工作原理

### 1. 定义目标函数 (Similarity Score)
EAA 首先定义了一个综合评分函数，包含四个部分：
*   **Visual Similarity**：生成结果在视觉上与两个输入图像的相似度。
*   **Semantic Similarity**：生成结果在语义上与两个类别标签的符合度。
*   **Visual Balance**：惩罚视觉上只偏向其中一方的结果。
*   **Semantic Balance**：惩罚语义上只保留一个概念的结果。

### 2. 分层参数搜索
为了优化上述目标函数，EAA 不使用昂贵的梯度反向传播，而是采用轻量级的搜索策略：
*   **调整参数**：控制融合比例的 $\alpha$、控制噪声侧影响的 $\beta_1, \beta_2$，以及随机噪声 $\epsilon$。
*   **搜索算法**：使用如 **黄金分割搜索** (Golden Section Search) 等分层搜索方法。
*   **重采样**：必要时结合少量噪声重采样来微调结果。

## 优势
这种方法使得模型能够在不显著增加计算成本的前提下，自动找到“最像两边、又最平衡”的融合点，是实现高质量跨物体融合的关键技术环节。