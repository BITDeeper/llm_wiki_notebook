---
type: entity
title: ROCm
tags: [hardware, software-platform, amd, gpu-computing]
related: [cuda-护城河, claude-code, amd, leelachesszero]
created: 2026-01-23
updated: 2026-01-23
sources: ["cuda要凉？claude-30分钟铲平英伟达护城河，amd要笑醒了.md"]
---

# ROCm

ROCm (Radeon Open Compute) 是 [[amd]] 开发的开源 GPU 计算平台，旨在对标 [[英伟达]] 的 [[cuda]] 生态系统。

## 生态挑战与突破
长期以来，ROCm 虽然在功能上强大，但面临生态兼容性差和开发者迁移成本高的问题，导致其难以撼动 CUDA 的垄断地位。然而，随着 [[claude-code]] 等 [[智能体式编程]] 工具的出现，这一局面正在改变。

## AI 辅助移植案例
2026 年初，开发者利用 [[claude-code]] 在 30 分钟内将 [[leelachesszero]] 的 CUDA 后端成功移植至 ROCm。这次移植没有使用传统的 Hipify 转换层，而是由 AI 直接理解逻辑并针对 RDNA 3.5 架构生成了优化的 FP16 代码。这一事件被视为 AI 填平 CUDA 与 ROCm 生态鸿沟的标志性信号。

## 技术组件
- **rocBLAS**：用于基本线性代数子程序（GEMM 运算）。
- **MIOpen**：用于卷积运算的加速库（类似 CUDA 的 cuDNN）。