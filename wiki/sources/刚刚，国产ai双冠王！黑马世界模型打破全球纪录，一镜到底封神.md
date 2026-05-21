---
type: source
title: "刚刚，国产AI双冠王！黑马世界模型打破全球纪录，一镜到底封神"
tags: [ai, embodied-intelligence, robotics, world-model, china-ai]
related: [生数科技, motubrain, motus, worldarena, robotwin2-0, vla-视觉-语言-动作, 具身智能数据困境]
created: 2026-04-29
updated: 2026-04-29
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/kENWGeEzB-sYnDMsTvQuWQ"
venue: "新智元"
sources: ["刚刚，国产ai双冠王！黑马世界模型打破全球纪录，一镜到底封神.md"]
---

# 刚刚，国产AI双冠王！黑马世界模型打破全球纪录，一镜到底封神

## 摘要
本文报道了生数科技发布的世界行动模型 [[motubrain]]，该模型在 WorldArena 和 RoboTwin2.0 两个国际权威榜单中同时获得第一。文章详细分析了 MotuBrain 的技术架构（基于 [[motus]] 的 [[大一统世界模型]]）、核心特性（[[一脑多型]]、[[一脑贯通]]）以及其背后的战略布局（创始人 [[朱军]] 的通用世界模型战略）。

## 核心要点

- **双榜第一**: [[motubrain]] 在 WorldArena（EWM Score 63.77）和 RoboTwin2.0（Clean 95.8, Randomized 96.1）两个评测基准上均排名第一，证明了其兼具“看懂世界”和“稳定干活”的能力。
- **大一统架构**: 基于 [[motus]] 的 [[大一统世界模型]] 架构，将 VLA、世界模型、视频生成等五种范式统一建模，解决了传统方法中感知与行动割裂的问题。
- **技术突破**: 引入 [[潜动作]] 机制，能从无标签视频中提取运动规律；采用 MoT (Mixture-of-Transformer) 架构融合视频生成、语义理解和动作生成。
- **通用能力**: 实现了 [[一脑多型]]（适配多种机器人本体）和 [[一脑贯通]]（自主完成超过 10 个原子动作的长程任务）。
- **战略闭环**: [[生数科技]] 通过 [[vidu]]（生成世界）和 MotuBrain（行动于世界）构建了完整的通用世界模型生态。

## 关键数据
- **WorldArena**: EWM Score 63.77 (Motion Quality, Flow Score, Smoothness 均第一)。
- **RoboTwin2.0**: Clean 场景 95.8 分，Randomized 场景 96.1 分（唯一在随机环境下平均分超过 95 的模型）。
- **成功率对比**: 随着任务数量增加，MotuBrain 成功率上升（学到通用规律），而竞品 Pi-0.5 下降（过拟合）。

## 相关概念
- [[世界行动模型]]: 将“预测世界”与“驱动行动”统一在一个模型中的架构。
- [[潜动作]]: 基于光流的表征方式，通过变分自编码器架构将视觉动力学与控制信号衔接。
- [[具身智能数据困境]]: MotuBrain 的“潜动作”机制和“大一统”架构直接回应了数据稀缺和仿真鸿沟问题。