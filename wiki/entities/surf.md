---
type: entity
title: SURF
created: 2026-05-28
updated: 2026-05-28
tags: [视频生成, 加速框架, 扩散模型, 研究项目]
related: [快手可灵团队, 香港大学, noise-reshifting, 轻量级refiner精修, wan2-1-14b, hunyuanvideo, 高分辨率视频生成加速]
sources: ["高分辨率视频生成不再慢半拍：让大模型保留“原味”的同时提速十余倍.md"]
origin_date: 2026-03-01
---
# SURF

SURF（Speed Up high-Resolution video generation via Feature-preserving acceleration）是由[[香港大学]]与[[快手可灵团队]]联合提出的高分辨率视频生成加速框架。其核心目标是在保留基础模型生成signature（语义、运动、构图和整体布局）的同时，实现高分辨率视频生成10倍以上的推理加速。

## 设计理念

SURF的核心思路是"聪明分工"而非"硬省计算"：将视频生成过程拆分为不同阶段，让每个阶段由最适合的分辨率和模型完成。整体流程概括为 **OptimRes → LowRes → HighRes** 三阶段：

1. **最优分辨率阶段（OptimRes）**：基础模型在最擅长的分辨率上完成早期去噪，确定全局内容、布局、语义和运动
2. **低分辨率阶段（LowRes）**：将latent下采样到低分辨率，快速完成预览
3. **高分辨率阶段（HighRes）**：轻量级Refiner将低分辨率预览提升至目标高清输出

## 两项核心技术

### Noise Reshifting（噪声重移位）
解决直接在低分辨率运行高分辨率训练模型导致的先验损失问题。先在最优分辨率完成早期去噪稳定全局结构，到达转折步k后，估计干净latent、下采样并重新注入匹配噪声，在低分辨率上继续后续去噪。消融实验显示转折步k在10-30步区间为最优平衡点。

### 轻量级Refiner
约1B参数的精修模型，从线性上采样后的预览latent出发，学习低分辨率latent到高分辨率latent的flow mapping。训练使用10万组低清-高清视频帧对，结合像素级和latent级退化。模型结构强调局部时序建模与跨帧信息连接。

## 实验结果

| 基础模型 | 分辨率 | 原始耗时 | SURF耗时 | 加速比 |
|---------|--------|---------|---------|--------|
| Wan2.1 14B | 720p | ~58分钟 | 278秒 | ~12.58x |
| Wan2.1 14B | 1080p | — | — | ~43x |
| HunyuanVideo | — | — | — | ~8.7x |

在Quality Score、Aesthetic Quality、Dynamic Degree、Motion Smoothness、Overall Consistency等指标上与原始模型持平或更优。

## 兼容性

SURF具备[[插件式兼容]]能力，可接入不同基础模型（Wan2.1、HunyuanVideo）和其他加速方法（AccVideo），表现为通用的高分辨率视频生成加速范式。

## 资源

- GitHub: https://github.com/kxding/SURF
- Project Page: https://kxding.github.io/project/SURF/
- arXiv: 2603.21002