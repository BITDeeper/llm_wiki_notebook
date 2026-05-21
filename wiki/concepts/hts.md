---
type: concept
title: Hierarchical Trajectory Search (HTS)
tags: [algorithm, inference, search-strategy, prism]
related: [prism, dllm, best-of-n, local-branching]
created: 2026-05-11
updated: 2026-05-11
sources: ["icml-2026｜拒绝大力出奇迹，prism框架让dllm也能高效test-time-scaling.md"]
---

# Hierarchical Trajectory Search (HTS)

**Hierarchical Trajectory Search (HTS)**（层次化轨迹搜索）是 [[prism]] 框架的核心组件之一，旨在优化 [[dllm]] 在推理时的计算分配。

## 核心思想
传统的 [[best-of-n]] 方法对所有候选轨迹一视同仁，即使某些轨迹在中途已经明显质量不佳，也会消耗完整的计算预算。HTS 通过将推理过程划分为不同的阶段，动态调整资源分配，从而实现“先广泛探索，再集中火力”。

## 工作流程
HTS 将去噪过程分为三个阶段：

1.  **早期随机探索**：
    *   在高噪声阶段，模型输出极不稳定。
    *   策略：保持较宽的候选集合（较大的 N），以保留答案的多样性。

2.  **中期渐进裁剪**：
    *   随着去噪步数增加，答案的“逻辑骨架”开始形成。
    *   策略：利用自验证信号（如 [[self-verified-feedback]]）识别并裁剪低质量轨迹，将计算资源重新分配给更有前景的候选。

3.  **后期精修**：
    *   只保留较小数量（K 个）的高潜力轨迹。
    *   策略：集中剩余预算对这些候选进行精细化去噪，以获得最终答案。

## 效率优势
这种分阶段策略使得 PRISM 的实际计算复杂度接近 **O(N + KT)**，其中 K 是最终保留的候选宽度（K << N）。相比传统 Best-of-N 的 **O(NT)**，HTS 避免了在低质量轨迹上浪费算力，实现了显著的效率提升。

## 参考来源
*   [ICML 2026｜拒绝大力出奇迹，PRISM框架让dLLM也能高效Test-Time Scaling](https://mp.weixin.qq.com/s/ADd96lqUpkKYRyeBUk4GUA)