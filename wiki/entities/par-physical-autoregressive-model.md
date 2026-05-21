---
type: entity
title: PAR (Physical Autoregressive Model)
tags: [model, robotics, autoregressive, foundation]
related: [physgen, 物理自回归, 连续表示, 隐式逆运动学]
created: 2026-03-27
updated: 2026-03-27
sources: ["732m模型超越7b！机器人操控新范式：从视频中「悟」物理.md"]
---

# PAR (Physical Autoregressive Model)

PAR（物理自回归模型）是由中山大学王广润团队提出的基础架构，是 [[physgen]] 的前身。它奠定了 [[物理自回归]] 范式的核心基础，旨在通过统一的 token 预测机制实现机器人的直觉操控。

## 核心架构

### 物理 Token
PAR 将视频帧和机器人动作统一编码为同一种“物理 token”。这使得模型可以在同一个自回归过程中处理视觉信息和动作指令。

### 连续表示
不同于传统的离散化方法，PAR 在连续向量空间中表示物理量（如位置、力、速度）。这避免了离散化带来的精度损失和长时序预测中的误差累积。

### 隐式逆运动学
通过特殊的因果掩码设计，PAR 让模型在“看到未来画面”后再决定当前动作。这种设计将复杂的几何计算问题转化为模型推理过程，隐式地求解了逆运动学问题。

## 性能基准
在 ManiSkill 基准测试中，PAR 在 PushCube 任务上达到 100% 成功率，总体平均成功率 74%，仅次于需要大规模动作预训练的 RDT (84%)，但额外引入参数仅 30M。

## 影响
PAR 的设计理念与英伟达后续发布的 [[dreamdojo]] 高度重合，验证了自回归架构在处理物理世界演化问题上的普适性。