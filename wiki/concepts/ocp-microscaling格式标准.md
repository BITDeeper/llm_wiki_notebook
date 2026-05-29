---
type: concept
title: OCP Microscaling格式标准
created: 2026-05-27
updated: 2026-05-27
tags: [开放标准, 数据格式, ocp, 跨平台]
related: [mxfp4, amd, nvidia, fp4训练]
sources: ["amd新论文颠覆认知：fp4训练不稳定，原因不是随机性不足.md"]
---
# OCP Microscaling格式标准

OCP（Open Compute Project）Microscaling 格式标准是由多家行业巨头联合支持的开放数据格式标准。

## 联合支持方

七家公司联合支持该标准：
- [[amd]]
- [[nvidia]]
- Intel
- Meta
- Microsoft
- Arm
- Qualcomm

## 核心内容

该标准定义了微缩放（Micro-scaling）系列数据格式，包括 [[mxfp4]] 等。核心设计是将张量切分为小块，为每块分配共享指数，块内元素使用低比特浮点数表示。

## 产业意义

基于开放标准意味着 [[fp4训练]] 方案在不同厂商的硬件上都具有可移植性，不会被锁定在单一生态里。这对于打破 NVIDIA 的生态垄断、促进 AI 芯片市场竞争具有重要意义。