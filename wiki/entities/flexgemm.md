---
type: entity
title: FlexGEMM
created: 2026-06-06
updated: 2026-06-06
origin_date: 2025-12-18
tags: [triton, sparse-convolution, gemm, gpu-optimization]
related: [trellis-2, split-k-优化]
sources: ["cvpr-2026-最佳学生论文奖！微软&清华等提出trellis.2：原生3d大模型新标杆，17秒生成超高精度pbr资产.md"]
---
# FlexGEMM

**FlexGEMM** 是 [[trellis-2|TRELLIS.2]] 研究团队使用 Triton 语言手写的高性能稀疏卷积后端。

## 设计动机与优势

为了摆脱对特定 CUDA 库（如 Spconv）的平台依赖，并进一步压榨硬件性能，FlexGEMM 相比主流稀疏卷积库实现了高达 2 倍的训练速度提升。由于基于 Triton 编写，它天然具备跨平台运行在 NVIDIA 和 AMD GPU 上的潜力。

## 核心技术

1. **Masked Implicit GEMM**：将特征收集（im2col）和矩阵乘法（GEMM）步骤融合进单个算子中，极大减少了全局显存的 I/O 开销。
2. **Gray Code 排序**：利用格雷码排序重新组织激活体素，提高了 GPU 的 SIMD 计算效率。
3. **[[split-k-优化|Split-K] 技术**：引入 Split-K 技术来提升并行度。值得注意的是，这里的 Split-K 作为提升稀疏卷积性能的正面优化手段，与 [[批次不变性]] 讨论中的权衡场景形成互补视角。