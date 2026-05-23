---
type: entity
title: DrawMotion
created: 2026-05-22
updated: 2026-05-22
tags: [motion-generation, diffusion-model, research-framework, tpami-2026]
related: [中间特征引导, 多条件模块, 手绘条件运动生成, 北京邮电大学, EVOL创新团队]
sources: ["tpami-2026-drawmotion：让角色沿着你的手绘轨迹动起来.md"]
origin_date: 2026-05-22
---
# DrawMotion

DrawMotion 是由 [[北京邮电大学]] 和 [[EVOL创新团队]] 联合提出的面向手绘条件的3D人体运动生成框架，论文发表于 TPAMI 2026。

## 核心定位

DrawMotion 不只是传统的 [[文本到运动]] 系统，而更接近一个交互式运动创作工具。用户可以通过手绘2D轨迹和火柴人姿态，结合文本语义，精确控制3D人体运动的空间路径和关键姿态。

## 框架架构

DrawMotion 包含三大核心组件：

1. **手绘条件编码（Freehand Drawing Condition）**：将用户手绘的轨迹（控制全局移动）和 stickman（控制局部姿态）编码为可参与扩散生成的条件特征。
2. **[[多条件模块]]（MCM）**：在扩散模型训练过程中统一处理文本、轨迹、姿态等多种条件组合，将不同条件映射为运动特征的偏移并通过 latent encoder 融合。
3. **[[中间特征引导]]（IFG）**：训练无关的推理引导方法，在 DDIM 采样过程中优化 MCM 的中间特征，配合 [[马氏距离裁剪]] 在"轨迹准确"与"动作自然"之间取得平衡。

## 关键性能指标

| 指标 | 数值 |
|------|------|
| KIT-ML 轨迹误差 | 从 0.126 降至 0.069 |
| KIT-ML FID | 保持在 0.141 左右 |
| 用户创作时间节省 | 约 46.7% |

## 技术意义

DrawMotion 展示了一条可迁移的控制思路：用 MCM 找到适合融合多条件的中间表示，再用 IFG 在推理阶段进行训练无关优化。这种"在分布边界内优化中间特征"的方法，为已训练好的生成模型提供了更轻量、更通用的精细控制方案。

论文预印本：arXiv (abs/2605.20955)，代码已开源：github.com/InvertedForest/DrawMotion