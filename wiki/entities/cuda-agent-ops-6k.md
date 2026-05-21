---
type: entity
title: CUDA-Agent-Ops-6K
tags: [dataset, cuda, training-data, synthetic-data, bytedance, tsinghua-air]
related: [cuda-agent, kernelbench, torch.compile]
created: 2026-03-03
updated: 2026-03-03
sources: ["字节清华智能体自动写cuda内核，比torch.compile加速2.11倍.md"]
---

# CUDA-Agent-Ops-6K

[[cuda-agent-ops-6k]] 是由字节跳动和清华 AIR 团队构建并开源的大规模合成训练数据集，包含 6000 个样本。该数据集专门用于训练和评估 [[cuda-agent]] 系统，旨在提升模型生成和优化 CUDA 内核的能力。

## 数据构建流程

数据集的构建经历了严格的三个阶段，以确保质量和多样性：

1.  **种子算子挖掘**：
    -   来源：`torch` 和 `transformers` 库。
    -   表示：每个算子被表示为一个包含初始化方法和前向方法的 Python 类。

2.  **组合合成**：
    -   随机采样最多 5 个 torch 算子。
    -   按顺序拼接成融合任务。

3.  **执行驱动过滤**：
    -   只保留在 eager 模式和 compile 模式下都能正常运行的任务。
    -   去除含有随机算子的样本。
    -   **反作弊检查**：排除对不同输入产生常数输出或无法区分输出的任务。
    -   **运行时间控制**：eager 运行时间控制在 1 毫秒到 100 毫秒之间。
    -   **去污染**：移除与 KernelBench 高度相似的样本以降低数据泄露风险。

## 数据质量

通过层层筛选，最终留下的 6000 个样本具有以下特点：
-   **正确性**：确保在标准模式下可运行。
-   **多样性**：通过随机组合算子生成。
-   **安全性**：通过反作弊机制防止模型通过捷径（如输出常数）作弊。

## 开源价值

该数据集已对外开源，包含了完整的过滤流程和污染控制方案。它为后续研究基于强化学习的 CUDA 内核优化提供了重要的数据基础，有助于推动 AI 在底层系统编程领域的发展。
