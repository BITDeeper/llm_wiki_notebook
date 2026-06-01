---
type: event
title: Gamma-World 发布
created: 2026-05-30
updated: 2026-05-30
tags: [世界模型, 多智能体, nvidia, 论文发布]
related: [gamma-world, nvidia, 清华大学, 多伦多大学, vector-institute, solaris]
sources: ["英伟达清华团队提出gamma-world：世界模型从「一个人玩」到「多人共处」.md"]
origin_date: 2026-05-30
participants: [nvidia, 清华大学, 多伦多大学, vector-institute]
causes: [solaris]
effects: [gamma-world]
significance: high
---
# Gamma-World 发布

2026年5月30日，[[nvidia]] 联合 [[清华大学]]、[[多伦多大学]] 和 [[vector-institute]] 发布 [[gamma-world]]（γ-World），论文标题为 *Gamma-World: Generative Multi-Agent World Modeling Beyond Two Players*。论文、代码和模型均已公开。

## 背景

当前视频世界模型在单智能体设定下已相对成熟，但多智能体场景在架构层面一直缺乏系统性解决方案。此前最强的双人 Minecraft 世界模型 [[solaris]] 暴露了身份编码破坏对称性和全连接注意力扩展性天花板两个结构性问题。

## 核心贡献

Gamma-World 提出三项核心设计，分别解决多智能体世界建模中三个长期悬而未决的问题：
1. [[单纯形旋转智能体编码]] — 解决身份的对称表示
2. [[稀疏枢纽注意力]] — 解决交互的高效建模
3. [[三阶段蒸馏]] — 解决质量与实时性的同时兼顾

## 关键结果

- FVD 平均降幅超 40%，全面超越现有基线
- 仅用双人数据训练，零样本泛化至四人场景
- 从 Minecraft 直接迁移至真实双臂机器人协同任务

## 意义

标志着多智能体世界模型从"能做"到"能扩展"的关键转折。其方法论主张——"将对称性先验编码进架构优于让模型从数据中隐式学习"——为架构设计提供了新的指导原则。Sim2Real 迁移验证为 [[physical-ai]] 数据基础设施提供了新路径。