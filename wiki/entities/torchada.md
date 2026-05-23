---
type: entity
title: TorchAda
created: 2026-05-14
updated: 2026-05-14
tags: [适配层, 开发工具, CUDA迁移, 摩尔线程]
related: [摩尔线程, musa架构, mate算子库]
sources: ["国产gpu首获全球顶级推理框架「原生门票」：musa合入sglang主线.md"]
---
# TorchAda

TorchAda 是 [[摩尔线程]] 开发的 CUDA 到 [[musa架构|MUSA]] 的接口无缝桥接适配层。

## 核心功能

- **一次 import，全包搞定：** 开发者只需引入适配包，即可自动将大模型的显存管理、流处理等 CUDA 接口无缝桥接到 MUSA 平台。
- **消除手动改造：** 过去将代码迁移到国产 GPU 需要手动搜索和修改大量 `torch.cuda` 原语，TorchAda 从根本上解决了这一痛点。

## 设计理念

TorchAda 体现了摩尔线程 [[零学习成本迁移]] 的战略承诺，让习惯了 CUDA 编程的开发者无需学习新架构即可将代码迁移至国产 GPU。

## 局限

虽然 TorchAda 大幅降低了迁移成本，但部分无法直接迁移或性能不佳的算子仍需通过专用的 [[mate算子库|MATE]] 高性能算子库进行替换和加速。