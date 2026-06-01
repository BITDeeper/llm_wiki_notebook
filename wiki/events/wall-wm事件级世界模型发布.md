---
type: event
title: WALL-WM 事件级世界模型发布
created: 2026-05-29
updated: 2026-05-29
tags: [具身智能, 世界模型, 事件级预测, 模型发布]
related: [wall-wm, 事件级预测, 自变量机器人, vla-视觉-语言-动作, 具身智能数据困境]
sources: ["刚刚，全球⾸个“事件级预测”具身智能世界模型来了！.md"]
origin_date: 2026-05-29
participants: [自变量机器人]
causes: []
effects: []
significance: high
---
# WALL-WM 事件级世界模型发布

2026年5月29日，[[自变量机器人]]（X-Square Robot）团队发布全球首个「事件级预测」具身智能世界模型 [[wall-wm|WALL-WM]]，论文题为《WALL-WM: Carving World Action Modeling at the Event Joints》。

## 事件概述

WALL-WM 的发布标志着具身智能世界模型从传统的帧级预测向 [[事件级预测]] 的范式转移尝试。该模型将预测单位从固定时间帧替换为语义事件，提出了一套从数据到部署的完整系统级方案。

## 核心创新

1. 提出 [[流形几何不对齐]] 理论，从根本上解释传统 VLA 模型的泛化缺陷
2. 以 [[语义事件]] 为基本单位重构世界模型的预测范式
3. 设计 [[视频-动作双流解耦]] 架构，保护视频先验的同时生长动作能力
4. 构建 [[数据金字塔]]，系统性应对 [[具身智能数据困境]]
5. 提出 [[阶梯式思维链解码]]，兼顾可解释性与实时性

## 实验验证

- 在 Embodied Video Generation 三个维度全面超越 Wan2.1/Wan2.2
- 在 3D Awareness（CO3Dv2）上优于多个基线模型
- 在真机 Core15 L1 基准上显著超过 π0.5 和 DreamZero

## 行业影响

WALL-WM 的发布对当前沿固定长度动作块路线前进的具身智能行业提出了根本性挑战。若事件级预测范式被社区验证和广泛采纳，可能引发从「按帧学动作」到「按事件理解世界」的范式转移。

## 开放资源

- GitHub：https://github.com/X-Square-Robot/wall-x
- 项目主页：https://x2robot.com/pages/wm