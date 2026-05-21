---
type: entity
title: PMI
tags: [算法, 反演, rectified-flow, 稳定性]
related: [rectified-flow, 反演, 平均流结构, mimic-cfg, 西湖大学]
created: 2026-03-01
updated: 2026-03-01
sources: ["西湖大学破解rectified-flow反演不稳定难题，实现零成本稳定增强｜iclr'26.md"]
---

# PMI (Prox-Mean-Inversion)

PMI 是由 [[西湖大学]] 张驰团队提出的一种用于稳定 [[rectified-flow]] 模型反演过程的算法。全称为 Prox-Mean-Inversion（近端均值反演）。

## 核心功能
解决 Rectified Flow 模型在逆向 ODE 求解时对误差敏感、轨迹发散导致的 **[[数值不稳定]]** 问题。

## 工作原理
利用 RF 模型内部固有的 **[[平均流结构]]**，在逆向积分的每一步引入一个基于 proximal operator 的修正项。该修正项将当前潜在向量向模型的平均流估计值进行轻量投影，使其贴近高密度区域，从而抑制偏移与震荡。

## 关键特性
- **即插即用**：无需修改模型结构或重新训练。
- **零成本**：不增加推理时间复杂度，不引入额外参数。
- **通用性**：可直接应用于 [[Flux.1]]、[[Stable Diffusion 3]] 等主流 RF 架构。

## 相关技术
- **[[mimic-cfg]]**：PMI 团队同时提出的策略，用于解决图像编辑中 CFG 导致的身份丢失问题。

## 实验表现
在 PIE-Bench 评测中，PMI 在 PSNR（重建保真度）和 LPIPS（感知相似度）上均显著优于基线方法，实现了近乎“零失真”的重建。