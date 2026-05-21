---
type: entity
title: Verifiers
tags: [tool, library, rl-environment]
related: [prime-intellect, prime-rl, environments-hub]
created: 2025-12-10
updated: 2025-12-10
sources: ["只用512张h200！106b模型靠分布式rl杀出重围，全网开源.md"]
---

# Verifiers

Verifiers 是一个领先的开源工具库，用于为 AI 模型构建 [[分布式强化学习]] 环境与评测任务。由 [[Prime Intellect]] 维护并在 [[INTELLECT-3]] 的训练中发挥关键作用。

## 功能特点
- **模块化组件**：提供可扩展的组件，允许开发者以简洁的方式描述复杂的环境逻辑。
- **高性能**：设计上保持了极高的性能与吞吐量，适应大规模 RL 训练需求。
- **并行化**：支持将沙箱启动与模型首轮推理并行，消除代码执行前的等待时间。

## 生态地位
Verifiers 构建的环境通常托管于 [[Environments Hub]]，作为独立、可锁定版本的 Python 模块发布。这种解耦设计使得任务可以独立版本化、共享与持续迭代，解决了传统 RL 框架环境强绑定的问题。