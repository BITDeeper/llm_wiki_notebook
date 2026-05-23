---
type: entity
title: MUSA架构
created: 2026-05-19
updated: 2026-05-19
tags: [GPU架构, MUSA, 国产芯片, 全功能GPU]
related: [摩尔线程, mtt-s5000, 全功能gpu, alphacore]
sources: ["国产gpu开始造世界！国内首个全栈具身智能仿真平台来了.md"]
---
# MUSA架构

MUSA架构是 [[摩尔线程]] 自研的GPU统一系统架构，目前已发展到第四代（代号"平湖"）。

## 技术内涵

MUSA架构是 [[全功能gpu]] 路线的技术底座，在单颗芯片中同时支持：

- AI计算
- 图形渲染
- 物理仿真
- 科学计算
- 超高清视频编解码

## 软件生态

基于MUSA架构构建的统一软件生态包括：

- **Torch-MUSA** — 深度适配PyTorch的训练推理框架
- **muSolver** — 加速库
- **muFFT** — 加速库
- **MuJoCo-Warp-MUSA** — 物理仿真后端
- **Newton-MUSA** — 物理仿真后端

## 在具身智能中的价值

MUSA统一架构使得 [[mt-lambda]] 不是在割裂工具之上硬拼出来的套件，而是长在全功能GPU上的平台能力。开发者无需在不同硬件和软件栈之间切换，减少了数据搬运、调试困难和误差累积。