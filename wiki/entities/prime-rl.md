---
type: entity
title: PRIME-RL
tags: [framework, reinforcement-learning, distributed-training]
related: [prime-intellect, intellect-3, verifiers, environments-hub]
created: 2025-12-10
updated: 2025-12-10
sources: ["只用512张h200！106b模型靠分布式rl杀出重围，全网开源.md"]
---

# PRIME-RL

PRIME-RL 是 [[Prime Intellect]] 自研的分布式强化学习框架，用于支持大规模 [[混合专家模型]] 的训练。它是 [[INTELLECT-3]] 模型的核心训练引擎。

## 核心特性

### 全分布式架构
- **异步优先**：PRIME-RL 采用“仅异步”策略，各节点独立更新参数，无需严格同步。
- **Off-Policy 容忍**：系统设计允许始终处于轻微 off-policy 状态。研究团队认为这是解决长时序智能体 rollout 速度瓶颈的唯一途径。

### 深度集成
- 与 [[Verifiers]] 库深度整合，支持从合成数据生成、SFT 到 RL 的完整后训练流程。
- 通过 [[Environments Hub]] 访问统一的环境接口与评测任务。

## 技术优势
相比传统的同步训练框架，PRIME-RL 能够在保持训练稳定性的同时，显著提升吞吐量，使得在有限算力（如 512 张 H200）下完成大规模 RL 训练成为可能。