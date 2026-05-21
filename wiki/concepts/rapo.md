---
type: concept
title: RAPO
tags: [algorithm, training-framework, reinforcement-learning, moe]
related: [yuan-3-0-flash, rirm, moe]
created: 2026-02-10
updated: 2026-02-10
sources: ["硅谷豪赌算力烧到停电，中国团队反向出击！这一刀，直接砍碎scaling-law.md"]
---

# RAPO

[[RAPO]]（Reflection-Aware Policy Optimization，反思感知自适应策略优化）是由 [[YuanLab.ai]] 团队提出的一种强化学习训练框架。它与 [[RIRM]] 协同工作，旨在保障大型 [[MoE]] 模型在追求推理效率时的训练稳定性和效果。

## 核心组件

### 自适应动态采样 (ADS)
动态过滤掉低信息量的重复样本，避免模型在无效数据上浪费计算资源，使训练效率提升了 52.91%。

### 80/20 高熵 Token 更新规则
只更新不确定性最高的前 20% Token 的梯度。这种策略聚焦于真正需要优化的部分，避免了全量更新的低效。

### 优化双剪裁
同时对策略梯度和值函数梯度进行双重裁剪。这对于防止 [[MoE]] 架构中常见的梯度爆炸问题至关重要。

### 多任务交替训练与 KL 散度正则
确保模型在多任务、异构场景中能够形成稳定的策略，避免灾难性遗忘。

## 协同作用
[[RAPO]] 决定模型“如何学习”，而 [[RIRM]] 明确模型“学到什么程度该停”。两者结合，使得 [[Yuan 3.0 Flash]] 能够在大幅降低推理 Token 的同时，保持甚至提升模型精度。