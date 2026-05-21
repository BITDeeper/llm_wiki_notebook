---
type: entity
title: KernelBench
tags: [benchmark, cuda, gpu-optimization, performance, gpu, code-generation, evaluation]
related: [glm-5-1, cuda-kernel-优化, cuda-agent, torch.compile, claude-opus-4-5, gemini-3-pro]
created: 2026-04-08
updated: 2026-05-08
sources: ["开源模型首超opus4.6！智谱glm-5.1登场，14小时后cuda专家被冲了.md", "字节清华智能体自动写cuda内核，比torch.compile加速2.11倍.md"]
---

# KernelBench

[[KernelBench]] 是一个专注于评估 AI 模型 GPU 内核优化能力的基准测试集。它旨在还原真实的机器学习计算负载场景，衡量模型生成高性能 CUDA 内核以加速 PyTorch 算子的能力。

## 测试等级与难度

KernelBench 包含不同难度等级的测试任务（如 Level-1, Level-2, Level-3），难度逐级递增：

-   **Level 1 & Level 2**：相对基础的任务，主要考察模型对常见算子的优化能力。
-   **Level 3**：极具挑战性的高阶测试。它涵盖了 **50 个真实的机器学习计算负载**，要求模型具备端到端的完整优化能力，而非仅针对单一算子进行调试。

## 评测维度

该基准测试不仅考察最终的加速比，还关注优化策略的覆盖度与代码正确性。主要评估指标包括：

-   **通过率**：生成的代码能否正确编译并通过正确性检查。
-   **Faster Rate**：生成的内核性能是否优于基线（如 [[torch.compile]] 或 PyTorch eager 模式）。
-   **加速比**：生成内核相对于基线的几何平均速度提升倍数。
-   **优化策略**：包括高层算子融合、微架构级调优、自主编写定制化内核（如 Triton/CUDA Kernel）以及内存优化（如 Shared Memory Tiling）。

## 基线对比与测试结果

KernelBench 常用于对比不同优化方案及大模型的性能表现。

### 基线方案
-   **[[torch.compile]]**：PyTorch 的官方编译优化模式。
-   **Eager 模式**：PyTorch 的默认执行模式。
-   **商业大模型**：如 [[claude-opus-4-5]] 和 [[gemini-3-pro]]。

### 性能数据
根据 [[cuda-agent]] 及 [[GLM-5.1]] 的相关测试数据：

-   **通用模型表现**：
    -   Level-1 和 Level-2 任务相对 `torch.compile` 的 faster rate 均可达到 100%。
    -   Level-3（最难任务）的通过率为 94%，faster rate 为 90%。
    -   商业大模型在整体任务上的 faster rate 约为 66-69%，显著低于经过强化学习微调的专用模型。

-   **GLM-5.1 表现**：
    -   在针对 KernelBench Level 3 的测试中，[[GLM-5.1]] 在超过 24 小时的不间断迭代中，实现了 **3.6 倍**的几何平均加速比。
    -   该结果显著优于 `torch.compile` 的 max-autotune 模式（1.49倍）。