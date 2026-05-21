---
type: concept
title: mHC (Manifold-Constrained Hyper-Connections)
tags: [deep-learning, architecture, deepseek, ai-research, training-stability, algorithms]
related: [deepseek-v4, engram, liang-wenfeng, sinkhorn-knopp-algorithm, scaling-law, residual-connections, kimi]
created: 2026-03-01
updated: 2026-05-07
sources: ["deepseek-v4下周登场，美股再次颤抖！「跳过」英伟达，便宜50倍.md", "deepseek-v4爆春节登场！四大杀招突袭全球编程王座，claude危.md", "deepseek-v4报告太详尽了！484天换代之路全公开.md"]
---

# mHC (Manifold-Constrained Hyper-Connections)

[[mHC]] (Manifold-Constrained Hyper-Connections，流形约束超连接) 是 [[DeepSeek]] 团队（包括 CEO [[梁文锋]]）提出的一种神经网络架构创新，被视为 [[DeepSeek V4]] 的基石技术之一。该技术旨在解决大模型训练中的不稳定性问题，突破阻碍大语言模型架构创新的根本性约束。

## 背景与动机
在传统的神经网络训练中，信号在层与层之间传递时会出现放大效应。在不受约束的情况下，信号可能被放大 **3000 倍**。这种失控的放大会导致训练崩溃、梯度爆炸等一系列问题，是阻碍大模型规模化（[[scaling-law]]）的根本性瓶颈之一。

此前，[[Kimi]] 团队提出的 Hyper-Connections (HC) 通过增加并行通道改善了残差连接的信号传递问题。然而，DeepSeek 在实践中发现，标准的 HC 机制在超深模型中仍会出现数值不稳定。mHC 正是为了解决这一遗留问题而诞生的增强版本。

## 核心原理
mHC 改变了传统 Transformer 架构中信息在模型层间流动的方式。其核心思想是利用 **[[Sinkhorn-Knopp-算法]]**，将神经网络的连接矩阵投影到一个数学流形上，从而精确控制信号放大。

### 数学约束：双随机矩阵
mHC 将 HC 中的混合矩阵 $B$ 约束到「双随机矩阵」流形上（数学上称为 Birkhoff polytope）：
1.  **归一化约束**：矩阵的行和列都归一化为 1。
2.  **谱范数限制**：矩阵的谱范数天然不超过 1，为残差传播套上了硬上限，从数学上防止了梯度爆炸。
3.  **封闭性**：这种矩阵在乘法下是封闭的，即使堆叠很多层也能保持数值稳定。

### 实现细节
-   **输入/输出映射**：通过 Sigmoid 函数保证非负且有界，避免信号互相抵消。
-   **迭代算法**：使用 Sinkhorn-Knopp 迭代，交替进行行归一化和列归一化（通常迭代 20 次收敛）。
-   **工程优化**：DeepSeek 通过 fused kernel 和选择性 recomputation，将 mHC 的 wall-time 开销控制在 overlapped pipeline 的 **6.7%**。

## 效果数据
mHC 在保持训练稳定性的同时，带来了显著的性能提升：
-   **信号控制**：原本可能放大 3000 倍的信号被压缩至仅放大 **1.6 倍**。
-   **性能提升**：在 **BIG-Bench Hard** 推理基准上提升了 **2.1%**。
-   **训练开销**：仅增加 **6.7%** 的训练开销。
-   **验证规模**：已在高达 **270 亿参数** 的模型上得到验证。

## 在 DeepSeek V4 中的作用
作为 V4 架构的核心组件，mHC 配合 [[Engram]] 条件记忆技术，共同支撑了 V4 在实现 [[原生多模态]] 能力和百万 token 上下文处理时的性能需求。这体现了 DeepSeek 在算力受限环境下，通过 [[架构创新 vs. 硬件蛮力]] 来提升模型性能的技术路径。

## 行业影响
业内专家评价认为，这项研究可能重塑整个行业构建基础模型的方式。虽然 mHC 本身不是一个颠覆性的架构创新，但作为一个关键的“工程补丁”，它解决了一个限制大语言模型架构创新的根本性约束，使得在无需按比例增加芯片数量的情况下，能够 Scaling 更大规模的模型（甚至万亿参数级别）。

## 参见
-   [[Engram]] — 支撑 V4 长上下文能力的另一项关键技术。
-   [[Sinkhorn-Knopp-算法]] — 实现 mHC 技术落地的数学工具。
-   [[Residual-Connections]] — mHC 所基于的基础架构组件。