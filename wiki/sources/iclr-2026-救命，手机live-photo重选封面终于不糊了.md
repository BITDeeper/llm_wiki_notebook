---
type: source
title: "ICLR 2026 | 救命，手机Live Photo重选封面终于不糊了"
created: 2026-05-06
updated: 2026-05-06
tags: [iclr, 2026, vivo, 计算摄影, 图像修复, 扩散模型]
related: [vivo-blueimage-lab, livemoments, 重选封面帧修复, 参考图像超分, 运动对齐模块, 南开大学]
authors: [vivo BlueImage Lab, 南开大学]
year: 2026
url: "https://mp.weixin.qq.com/s/t1j_6aidC8KVZlMS7gABwg"
venue: "机器之心"
sources: ["iclr-2026-救命，手机live-photo重选封面终于不糊了.md"]
---

# ICLR 2026 | 救命，手机Live Photo重选封面终于不糊了

## 概述
本文报道了 [[vivo-blueimage-lab]] 与 [[南开大学]] 联合发表的被 ICLR 2026 接收的研究工作。该工作提出了 [[livemoments]] 模型，旨在解决手机 [[Live Photo]] 中重选封面帧画质模糊的问题。通过利用原始高清封面帧作为参考，结合 [[扩散模型]] 和 [[运动对齐模块]]，实现了对低质量重选帧的高质量修复。

## 核心内容

### 问题背景
- **痛点**：Live Photo 包含一张高清封面图和一段低分辨率视频。用户从视频中重选的帧往往画质不足，无法达到“封面级”观感。
- **现有局限**：传统单帧修复缺乏参考信息，视频级修复计算复杂且针对整段视频设计，不适合单帧修复任务。

### 解决方案：LiveMoments
- **任务定义**：首次系统性地定义了 [[重选封面帧修复]] 任务，即利用同一 Live Photo 中的原始高清封面帧作为参考，修复低质量的重选帧。
- **技术架构**：
  - 基于 [[扩散模型]] 的生成先验，构建参考引导修复框架。
  - 引入 [[运动对齐模块]]，解决原始帧与重选帧之间的时间偏移和运动错位问题。
    - **潜空间**：运动引导的注意力机制。
    - **像素域**：图像块匹配检索策略。

### 实验结果
- **数据集**：构建了 2 个真实场景数据集（使用 [[vivo-x200-pro]] 和 [[iphone-15-pro]] 拍摄）和 1 个仿真数据集。
- **性能**：在真实数据集上评价指标优于现有的 [[参考图像超分]] 和单帧超分方法。
- **效果**：在细节恢复和结构一致性上表现优异，有效避免了运动错位带来的干扰。

## 意义
- **应用价值**：提升了日常拍摄和内容创作中 Live Photo 的可用性。
- **学术贡献**：为参考引导图像修复提供了新的研究范式，特别是在处理同一场景内存在时间偏移的参考图像方面。

## 链接
- 论文：[LiveMoments: Reselected Key Photo Restoration in Live Photos via Reference-guided Diffusion](https://arxiv.org/pdf/2604.12286)
- 项目主页：[clara7-c.github.io/livemoments](https://clara7-c.github.io/livemoments/)
- 代码：[OpenVeraTeam/LiveMoments](https://github.com/OpenVeraTeam/LiveMoments)