---
type: source
title: "VAST+清华提出3D生成新范式，空间智能密度控制「把算力花在刀刃上」| SIGGRAPH 2026"
created: 2026-05-21
updated: 2026-05-21
tags: [3d生成, 高斯表示, siggraph, 空间密度控制, 强化学习]
related: [density-sampled-gaussians-deg, 空间智能密度控制, vast, 清华大学, 机器之心]
sources: ["vast+清华提出3d生成新范式，空间智能密度控制「把算力花在刀刃上」-siggraph-2026.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/OPh4TtRDh-xXPlcuqu48Fg"
venue: 机器之心
---
# VAST+清华提出3D生成新范式，空间智能密度控制「把算力花在刀刃上」| SIGGRAPH 2026

## 摘要

本文报道了 VAST 与清华大学合作发表于 SIGGRAPH 2026 的论文《Generative 3D Gaussians with Learned Density Control》，提出了一种名为 **Density-Sampled Gaussians（DeG）** 的新 3D 表示方式。DeG 将高斯球中心位置从固定回归问题改写为从概率密度分布中采样的过程，首次实现了端到端可学习的空间密度控制。

## 核心内容

- **问题背景**：现有 3D 高斯生成方法（如 GaussianCube、TRELLIS、LGM 等）采用固定结构分配高斯球，丧失了 3D 高斯最珍贵的灵活性。
- **核心方法**：DeG 通过学习 3D 空间概率密度分布，实现"空间智能密度控制"——复杂区域密集采样，简单区域稀疏采样。
- **算法突破**：提出"渲染损失贡献梯度"，基于强化学习策略梯度，将不可微的采样过程转化为可优化的梯度下降问题。
- **关键能力**：任意数量采样（同一模型适配不同部署需求）和非均匀采样（自动将预算集中在重要区域）。
- **实验结果**：在相近高斯预算下视觉质量优于 TRELLIS、UniLat3D 等方法；达到相近视觉质量时所需高斯数量可不到 TRELLIS 的一半。

## 关键引用

- 论文链接：https://arxiv.org/abs/2605.16355
- 发表会议：SIGGRAPH 2026
- 合作单位：[[vast]]、[[清华大学]]

## 主题关联

本文提出的"按预算伸缩的活表示"理念，与 [[sim2real]]、[[具身智能数据困境]] 等主题存在间接联系——高效 3D 表示可降低仿真和数字孪生的计算成本。