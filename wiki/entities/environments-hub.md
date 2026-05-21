---
type: entity
title: Environments Hub
tags: [platform, repository, rl]
related: [prime-intellect, verifiers, prime-rl]
created: 2025-12-10
updated: 2025-12-10
sources: ["只用512张h200！106b模型靠分布式rl杀出重围，全网开源.md"]
---

# Environments Hub

Environments Hub 是 [[Prime Intellect]] 建立的面向社区的 RL 环境与评测中心。它托管了基于 [[Verifiers]] 库构建的各种智能体式 RL 环境与评测任务。

## 核心功能
- **统一入口**：提供统一的环境接口，方便训练系统（如 [[PRIME-RL]]）访问和调用。
- **版本管理**：将环境作为独立的 Python 模块发布，支持版本锁定，确保实验的可复现性。
- **生态共享**：允许外部开发者贡献任务，促进社区协作。

## 规模
截至 [[INTELLECT-3]] 发布时，Environments Hub 已拥有超过 500 个任务，涵盖研究、电脑使用、定理证明、自动化和专业领域等多个方向。