---
type: concept
title: HMN初始化
created: 2026-04-10
updated: 2026-04-10
tags: [初始化, 训练, 几何]
related: [hivg, 路径片段词元]
sources: ["svg性能比肩gptclaude，腾讯开源3b模型hivg，让token「懂几何」.md"]
---

# HMN初始化

HMN 初始化（层次化均值-噪声初始化，Hierarchical Mean-Noise Initialization）是 [[hivg]] 模型提出的一种用于初始化新 Token Embedding 的策略。

## 背景问题
在预训练 LLM 中引入全新的 SVG token（如 [[路径片段词元]]）时，面临两难选择：
- **随机初始化**：会破坏预训练空间的分布，导致训练不稳定。
- **全局均值初始化**：丢失了 token 之间的结构关系（如坐标的空间邻近性）。

## 策略组成
HMN 初始化通过结合以下四项来计算新 token 的 embedding $e_t$：
1. **全局均值 ($\mu$)**：保持与预训练词表的分布对齐。
2. **噪声 ($\epsilon$)**：增加 Token 间的区分度。
3. **语义先验 ($\Phi(desc_t)$)**：利用冻结模型权重编码 token 的文本描述。
4. **数值编码 ($d_t$)**：通过高斯径向基（RBF）与多项式特征映射，将归一化坐标值映射到 embedding 空间。

## 效果
特别是数值编码部分，使得相近的坐标在表示空间中保持邻近，从而赋予了模型初始的**空间感知能力**，使其在训练初期就能理解几何结构。