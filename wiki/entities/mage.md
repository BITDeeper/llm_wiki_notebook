---
type: entity
title: MAGE
created: 2026-04-06
updated: 2026-04-06
tags: [algorithm, offline-rl, multi-scale-generation, iclr-2026]
related: [offline-reinforcement-learning, decision-transformer, decision-diffuser, hierarchical-diffuser, xiamen-university, hkust]
sources: ["让离线强化学习从「局部描摹」变「全局布局」丨iclr'26.md"]
---

# MAGE

**MAGE** (Multi-scale Autoregressive Generation，多尺度自回归生成) 是由 [[厦门大学]] 与 [[香港科技大学]] 联合提出的一种离线强化学习算法。该算法旨在解决现有生成式方法在长程规划任务中“局部合理、全局偏航”的问题。

## 核心特性

MAGE 的核心创新在于采用了**自顶向下**的生成策略，这与人类“先画大纲再扣细节”的认知直觉相符。

### 架构组成

1.  **MTAE (多尺度轨迹自编码器)**：
    *   将长序列轨迹转化为从粗到细的多尺度离散 Token。
    *   **粗尺度 Token**：负责掌控全局长程结构。
    *   **细尺度 Token**：详细建模短期的动态细节。

2.  **多尺度条件引导自回归生成**：
    *   使用 Transformer 序列化地生成多尺度 Token。
    *   在生成每层时，严格以“目标回报”和“初始状态”作为条件进行约束。

3.  **精确控制机制**：
    *   **适配器**：集成在解码器中，用于弥补离散化带来的信息丢失。
    *   **条件引导损失函数 ($L_{cond}$)**：强制解码出的初始状态与真实环境精确对齐。
    *   **潜在逆动力学模型**：决定最终的动作。

## 性能表现

*   **长程规划**：在迷宫寻宝实验中，MAGE 成功规划出包含所有关键节点的路径，而 [[decision-transformer]]（迷失方向）、[[decision-diffuser]]（遗漏金币）和 [[hierarchical-diffuser]]（穿墙）均失败。
*   **基准测试**：在 Adroit、Franka Kitchen、AntMaze 等 5 个基准测试中，MAGE 在 15 种基线算法中表现最佳。
*   **推理效率**：每步推理时间仅 27ms，满足真实机器人控制（20 Hz）的实时性要求。其运行速度比 Hierarchical Diffuser 快约 50 倍，比 Decision Diffuser 快 80 倍。

## 应用场景

MAGE 特别适用于需要高维连续控制和复杂子任务排序的场景，如机械臂操作和复杂环境导航，为 [[具身智能]] 的落地提供了新的技术路径。