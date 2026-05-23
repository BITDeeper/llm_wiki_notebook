---
type: entity
title: MATE (MUSA AI Tensor Engine)
created: 2026-05-14
updated: 2026-05-14
tags: [算子库, 高性能计算, 摩尔线程, AI基础设施]
related: [摩尔线程, musa架构, torchada, deepgemm]
sources: ["国产gpu首获全球顶级推理框架「原生门票」：musa合入sglang主线.md"]
---
# MATE (MUSA AI Tensor Engine)

MATE 是 [[摩尔线程]] 开发的开源高性能算子库，全称为 MUSA AI Tensor Engine。

## 核心功能

- **高性能算子：** 提供 Attention 与 GEMM 算子，针对 [[musa架构]] 进行深度优化。
- **主流接口对接：** 已对接 FlashAttention、FlashMLA、[[deepgemm|DeepGEMM]] 等主流接口。
- **替换与加速：** 针对无法通过 [[torchada]] 直接迁移或性能不佳的算子，MATE 提供替换和加速方案。

## 在生态中的定位

MATE 与 TorchAda 形成互补：TorchAda 解决接口层面的无缝迁移，MATE 则在算子层面提供性能保障。两者共同支撑摩尔线程「零学习成本 + 高性能」的迁移承诺。