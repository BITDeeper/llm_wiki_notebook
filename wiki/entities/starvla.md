---
type: entity
title: StarVLA
tags: [vla, embodied-ai, open-source, framework, hkust]
related: [vla-视觉-语言-动作, 双向模块化, 策略中心公式, 跨形态混合训练, 香港科技大学]
created: 2026-04-13
updated: 2026-04-13
sources: ["统一vla范式！港科大开源starvla乐高式架构，复现成本大幅降低.md"]
---

# StarVLA

[[StarVLA]] 是由 [[香港科技大学]] 开源的一个具身智能框架项目，旨在解决 [[vla-视觉-语言-动作]] 领域的架构碎片化和复现成本高昂问题。

## 核心特性

### 双向模块化架构
StarVLA 采用了“乐高式”的设计理念，实现了主干网络和动作头的完全解耦与可插拔：
- **可插拔 Backbone**：支持 [[qwen3-vl]]、[[InternVL]] 等指令微调 VLM，以及 [[Cosmos-Predict2]] 等世界模型。
- **可插拔 Action Head**：内置 4 种代表性动作解码器，包括：
    - StarVLA-FAST（自回归离散 Token 生成）
    - StarVLA-OFT（轻量 MLP 并行连续回归）
    - StarVLA-π（层间 Cross-DiT 流匹配去噪）
    - StarVLA-GR00T（System 2 + System 1 双系统架构）

### 统一的系统抽象
基于 [[策略中心公式]]，StarVLA 将 VLM-based 和 World-Model-based 两种范式统一在同一计算图中，消除了跨方法对比时的“隐性变量干扰”。

### 训练与部署
- **多目标协同训练**：通过双数据流机制防止 VLM 主干灾难性遗忘，提升空间 grounding 能力。
- **跨形态混合训练**：通过 [[LeRobotMixtureDataLoader]] 支持在单一模型中联合训练不同机器人形态的数据集。
- **Server-Client 部署**：采用 WebSocket 架构，实现了仿真到真机（Sim2Real）的零代码修改迁移。

## 性能表现
- 在 LIBERO、SimplerEnv、RoboTwin 2.0 等七大主流基准上达到 SOTA 水平。
- 跨基准 Generalist 训练（如 LIBERO + SimplerEnv + RoboTwin 2.0 + RoboCasa-GR1）显著优于单一基准训练。
- 计算效率高，在 256 GPU 多节点训练中并行效率维持在 79%~80%。

## 项目链接
- GitHub: https://github.com/starVLA/starVLA
- 项目主页: https://starvla.github.io
- 论文: https://arxiv.org/abs/2604.05014