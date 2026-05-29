---
type: concept
title: Wgrad（权重梯度）
created: 2026-05-27
updated: 2026-05-27
tags: [反向传播, 梯度, 深度学习]
related: [fp4训练, 结构性微缩放误差, mxfp4]
sources: ["amd新论文颠覆认知：fp4训练不稳定，原因不是随机性不足.md"]
---
# Wgrad（权重梯度）

Wgrad（权重梯度）是反向传播中计算用于更新模型权重的梯度，计算公式为 ∇W = (∇Y)^T · X。

## 在 Transformer 线性层中的位置

一次完整的 Transformer 线性层计算涉及三个通用矩阵乘法操作：
1. **Fprop**（前向传播）：Y = XW^T，产出激活值
2. **Dgrad**（激活梯度）：∇X = ∇Y · W，将梯度回传给输入
3. **Wgrad**（权重梯度）：∇W = (∇Y)^T · X，产出用于更新权重的梯度

## 在 FP4 训练中的关键角色

AMD 联合 [[宾夕法尼亚州立大学]] 的控制变量实验揭示：
- Fprop 和 Dgrad 对 FP4 量化有相当容忍度，替换后仅带来温和的额外 token 开销
- **Wgrad 是 FP4 训练的唯一瓶颈**：一旦将 Wgrad 从 FP8 替换为 [[mxfp4]]，token 开销直接跳到 26-27%

Wgrad 对量化极度敏感，是 [[结构性微缩放误差]] 累积放大的关键路径。