---
type: concept
title: MLP (多层感知机)
tags: [architecture, deep-learning]
related: [in-place-ttt, transformer]
created: 2026-04-10
updated: 2026-04-10
sources: ["大模型能“原地”改参数了！字节seed&北大新论文：测试时推理无需加层重训练.md"]
---

# MLP (多层感知机)

多层感知机，深度学习中最基础的前馈神经网络结构。

## 在 Transformer 中的作用
在 Transformer 架构（如 GPT、Llama、Qwen）中，MLP 通常作为每个 Transformer Block 中的前馈神经网络（FFN）部分存在。
*   **位置**：位于注意力层之后。
*   **功能**：对注意力层提取的特征进行非线性变换和投影，增强模型的表达能力。

## 在 In-Place TTT 中的复用
[[in-place-ttt]] 的核心创新在于发现了 MLP 模块的复用价值。
*   **作为快速权重载体**：In-Place TTT 将 MLP 的最后一个投影矩阵 $W_{down}$ 用作 [[快速权重]] 的存储和更新位置。
*   **意义**：这种复用使得模型无需增加新层即可实现测试时训练，实现了架构的“原地”升级。