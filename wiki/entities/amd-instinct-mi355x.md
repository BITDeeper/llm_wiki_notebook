---
type: entity
title: AMD Instinct MI355X
created: 2026-05-27
updated: 2026-05-27
tags: [gpu, 硬件, ai芯片, amd]
related: [amd, nvidia, fp4训练, mxfp4]
sources: ["amd新论文颠覆认知：fp4训练不稳定，原因不是随机性不足.md"]
---
# AMD Instinct MI355X

AMD Instinct MI355X 是 AMD MI350 系列的旗舰 GPU 产品，原生支持 FP4 张量核心运算。

## 关键特性

- **原生 FP4 支持**：硬件层面直接支持 FP4 精度的张量运算，不依赖软件模拟
- **定位**：面向大模型训练和推理的高性能计算卡

## 研究验证

2026年5月，AMD 联合 [[宾夕法尼亚州立大学]] 在 MI355X 上完成了首次原生 FP4 硬件上的大模型全流程 [[fp4训练]] 实验。使用 [[mxfp4]] 格式预训练 Llama 3.1-8B，端到端训练速度比 FP8 基线快 9-10%。

## 行业定位

与 [[nvidia]] Blackwell 架构（B200）形成竞争，两者均在硬件层面原生支持 FP4 运算。此前 FP4 主要用于推理场景，AMD 的研究将其推向训练可用。