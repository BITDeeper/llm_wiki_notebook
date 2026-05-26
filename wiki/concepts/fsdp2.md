---
type: concept
title: FSDP2
created: 2026-05-26
updated: 2026-05-26
tags: [并行策略, pytorch, 大模型训练, 显存优化]
related: [rlinf, dreamzero, 算子融合与计算图优化]
sources: ["一个月的活一周干完！英伟达世界模型训练速度飙升400%.md"]
---
# FSDP2

FSDP2 是 PyTorch 官方团队推出的最新 ZeRO（Zero Redundancy Optimizer）实现，是面向中等规模大模型的默认并行方案。

## 核心特点

- PyTorch 官方推出的 DeepSpeed 替代方案
- 支持灵活的分片策略切换，适应不同显存配置需求
- 解决了 DeepSpeed 在反向传播阶段 post backward hook 产生的较高 CPU 侧开销

## 在 DreamZero 中的关键作用

DreamZero 官方代码使用 DeepSpeed 方案存在严重局限：

- **兼容性冲突**：ZeRO3 与 VAE 模块中 causal conv 的上下文维护机制不兼容，被迫回退至性能较低的 ZeRO2 offload 模式
- **性能瓶颈**：DeepSpeed 的 post backward hook 产生较高 CPU 侧开销，制约整体训练吞吐

[[rlinf|RLinf]] 通过向 FSDP2 训练后端迁移，彻底解决了上述架构冲突与性能瓶颈。

## 与 Recompute 的协同

RLinf 实现了 FSDP2 与 Recompute（激活重计算）的稳定解耦与协同：

- 以微小计算耗时换取显著显存空间释放
- 支持更大规模的并行任务
- DreamZero-5B 开启 Recompute 后，mbs 从 2 提升至 32，吞吐提升 158%