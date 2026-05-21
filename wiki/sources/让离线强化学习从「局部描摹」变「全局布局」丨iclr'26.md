---
type: source
title: "让离线强化学习从「局部描摹」变「全局布局」丨ICLR'26"
created: 2026-04-06
updated: 2026-04-06
tags: [reinforcement-learning, offline-rl, iclr-2026, embodied-ai, long-horizon-planning]
related: [mage, xiamen-university, hkust, offline-reinforcement-learning, decision-transformer, decision-diffuser]
authors: [林晨兴, 高鑫辉, 沈思淇, 张海鹏, 李欣然, 王海涛, 梅松竹, 刘伟权, 王程]
year: 2026
url: "https://mp.weixin.qq.com/s/2Q9Jz-dWTm6arURYgUV6DQ"
venue: "ICLR 2026 (量子位报道)"
sources: ["让离线强化学习从「局部描摹」变「全局布局」丨iclr'26.md"]
---

# 让离线强化学习从「局部描摹」变「全局布局」丨ICLR'26

本文报道了厦门大学与香港科技大学联合发表在 ICLR 2026 上的研究成果，提出了一种名为 [[mage]]（Multi-scale Autoregressive Generation）的离线强化学习算法。

## 核心观点

现有的生成式离线强化学习方法（如 [[decision-transformer]]、[[decision-diffuser]]）在处理长程规划任务时，往往陷入“局部描摹”的陷阱，导致生成的轨迹虽然局部合理，但全局目标失败。MAGE 通过引入“自顶向下、由粗到细”的多尺度自回归生成策略，成功实现了从“局部描摹”到“全局布局”的转变。

## 关键技术

- **由粗到细生成**：先建模轨迹的宏观规划，再逐步细化微观细节。
- **MTAE 模块**：多尺度轨迹自编码器，将长序列转化为多尺度离散 Token。
- **条件引导**：在生成过程中严格以“目标回报”和“初始状态”作为约束。
- **逆动力学模型**：用于最终动作决策。

## 实验结果

- **迷宫实验**：MAGE 成功规划出包含所有关键节点的路径，而对比算法（Decision Transformer 迷失方向、Decision Diffuser 遗漏金币、Hierarchical Diffuser 出现穿墙）均表现不佳。
- **基准测试**：在 Adroit、Franka Kitchen、AntMaze 等 5 个基准测试中，MAGE 在 15 种基线算法中表现最佳。
- **推理效率**：每步推理时间 27ms，满足真实机器人控制（20 Hz）的实时性要求，比 Hierarchical Diffuser 快约 50 倍。

## 意义

该研究解决了 [[具身智能]] 中长程规划的难题，通过模仿人类“先画轮廓再扣细节”的直觉，提升了 AI 在复杂连续任务中的全局规划能力。