---
type: entity
title: AnyFlow
created: 2026-05-18
updated: 2026-05-18
tags: [视频生成, 扩散模型, 蒸馏, NVIDIA, 步数自由]
related: [流图蒸馏, 测试时扩展性, 视频扩散模型, nvidia, nus-show-lab, mit, wan2.1, far-模型, vbench]
sources: ["4-步生成高质量视频，还能越采样越好！nvidia、nus-show-lab、mit-提出-anyflow：迈向“步数自由”的视频扩散生成.md"]
origin_date: 2026-05-18
---
# AnyFlow

AnyFlow 是由 [[nvidia]]（NVLabs）、[[nus-show-lab]] 和 [[mit]] 联合提出的视频扩散蒸馏方法，实现了"步数自由"的视频生成。论文 arXiv 编号为 2605.13724，于2026年5月发布。

## 核心理念

AnyFlow 的核心目标是打破"少步优化 vs 多步质量"的二元对立：同一模型在4步即可生成高质量视频，且随着采样步数增加（16步、32步），质量持续提升，不出现 [[一致性蒸馏]] 方法的多步退化问题。

## 技术架构

AnyFlow 的方法由三个关键组件构成：

1. **前向流图训练**：将预训练视频扩散模型转为流图模型，为任意步采样提供稳定初始化。模型学习任意两个时间点之间的转换（z_t → z_r），而非仅学习到终点的映射。
2. **[[在策略流图蒸馏]]（OPD）**：让模型在自己的采样轨迹上被校正，解决前向训练与测试时轨迹展开不匹配的问题，消除少步离散化误差和 [[暴露偏差]]。
3. **[[流图反向模拟]]**：利用流图的组合性质，将完整欧拉轨迹分解为多个捷径跃迁片段，高效模拟不同推理步数下的采样轨迹，降低OPD的计算开销。

## 实验表现

### 评测基准
- 在 [[vbench]] 评测基准上进行了系统验证。
- AnyFlow-FAR-Wan2.1-14B 在4 NFEs下 I2V 达 87.87，接近 Wan2.1-I2V-14B 在50×2 NFEs下的87.71。

### 架构兼容性
- 在**因果（causal）**视频扩散架构上：结合 [[far-模型]] 形成 AnyFlow-FAR，统一支持 T2V、I2V、V2V。
- 在**双向（bidirectional）**视频扩散架构上：直接应用到 [[wan2.1]]-T2V 骨干模型。

### 规模扩展性
- 从1.3B到14B参数规模均可稳定扩展。

## 下游应用

AnyFlow 蒸馏后的模型可在下游数据上继续微调，同时保持少步采样能力。适用于机器人、自动驾驶、游戏场景等需要保持主体身份、运动轨迹或场景风格一致性的垂直领域。

## 核心作者

- Yuchao Gu, Guian Fang, Yuxin Jiang, Weijia Mao
- Song Han, Han Cai（NVIDIA NVLabs / MIT）
- Mike Zheng Shou（NUS Show Lab）

## 开源资源

- 项目主页：https://nvlabs.github.io/AnyFlow/
- 开源代码：https://github.com/NVLabs/AnyFlow