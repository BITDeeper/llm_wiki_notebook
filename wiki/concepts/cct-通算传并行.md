---
type: concept
title: CCT 通算传并行
created: 2026-05-21
updated: 2026-05-21
tags: [并行策略, MoE, 显存优化, 通信优化]
related: [loongforge, chunkpipe-流水线并行, 自适应-fp8]
sources: ["百度百舸开源全模态训练框架-loongforge：一套代码跑通-gpu-与昆仑芯，多模态训练提速-45%.md"]
---
# CCT 通算传并行

CCT（Computation-Communication-Transfer）通算传并行是 [[loongforge|LoongForge]] 提出的一种并行方案，旨在打破 MoE（混合专家）模型长序列训练中"显存-通信"的二选一困局。

## 问题背景

MoE 模型做长上下文训练时，专家并行（EP）引入的 All-to-All 通信带来显著通信开销。为隐藏这一开销，业界通常将计算模块细粒度拆分，但这与长序列训练必备的全层重计算存在根本冲突：

- **方案 A**：通信快但显存爆炸
- **方案 B**：显存省但通信慢
- 两者无法共存

## 解决方案

CCT 方案引入显存 offload 策略，并将计算（Computation）、通信（Communication）、数据传输（Transfer）进行统一调度与编排，实现极致的 overlap，从而打破上述僵局。

## 实测效果

- Qwen3-30B-A3B 32K 序列训练：A800 集群中性能提升 16%
- 社区同类方案在相同条件下因显存不足直接 OOM，通信优化无法启用