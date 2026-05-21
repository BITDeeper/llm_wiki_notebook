---
type: entity
title: TAMEn
tags: [robotics, data-engine, tactile-sensing, hku, fudan, sjtu]
related: [shang-hai-jiao-tong-da-xue, ju-shen-zhi-neng-shu-ju-kun-jing, shi-chu-jue-rong-he, bi-huan-shu-ju-cai-ji, tamer-app]
created: 2026-04-13
updated: 2026-04-13
sources: ["港大×复旦×上交：视触觉融合+闭环纠错，让机器人双臂协作不再「盲操」.md"]
---

# TAMEn

**TAMEn** (Tactile-Aware Manipulation Engine) 是由香港大学、复旦大学和上海交通大学联合团队开发的视触觉感知闭环数据采集引擎。它旨在解决具身智能中高质量数据采集难、效率低的问题，通过 [[视触觉融合]] 和 [[闭环数据采集]] 机制，构建了一个可持续进化的数据引擎。

## 核心特性

### 视触觉融合
TAMEn 结合了视觉信息与触觉反馈，使机器人能够感知接触状态，不再仅依赖视觉进行“盲操”。这对于处理柔性物体（如线缆、中草药）和接触丰富的任务至关重要。

### 三层闭环架构
TAMEn 的系统架构分为三层，形成了完整的闭环：
1. **数采硬件层**：支持高精度动捕（亚毫米级）与便携 VR 采集双模式切换。
2. **人在环数据层**：通过在线可行性检查和 [[数据金字塔体系]] 保证数据质量。
3. **价值推理与训练层**：利用 [[tamer-app]] 进行 AR 遥操作介入纠错，收集珍贵的“失败恢复数据”。

### 闭环纠错与持续进化
不同于传统的一次性数据采集，TAMEn 实现了“采集-训练-部署-纠错-再训练”的持续迭代。当机器人推理失败时，人类可以通过 AR 遥操作介入，记录恢复状态下的视觉、触觉和位姿信息，用于模型优化。

## 性能表现
在多项双臂协作任务（倾倒中草药、线缆装配、弹簧夹收纳、擦盘子）中，TAMEn 将平均成功率从 **34% 提升至 75%**。

## 技术基础
TAMEn 是在 [[UMI 框架]] 基础上的全方位升级版，不仅提供了采集设备，还打通了从数据采集到策略训练，再到部署纠错的全链路。

## 外部链接
- [项目主页](https://opendrivelab.com/TAMEn)
- [论文](https://arxiv.org/abs/2604.07335)
- [GitHub 代码库](https://github.com/OpenDriveLab/TAMEn)