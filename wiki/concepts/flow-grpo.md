---
type: concept
title: Flow-GRPO
created: 2026-05-14
updated: 2026-05-14
tags: [强化学习, 后期训练, 多模态]
related: [sensenova-u1, neo-unify-架构]
sources: ["商汤sensenova-u1深度拆解，原生统一架构终结缝合时代.md"]
---
# Flow-GRPO

Flow-GRPO 是 [[sensenova-u1]] 在训练末端引入的后期训练（Post-training）强化学习机制，用于在四步训练法完成后进一步优化模型的生成质量。

## 核心特点

- 基于 GRPO（Group Relative Policy Optimization）思想，适配 Flow Matching 框架
- 分两阶段进行强化学习优化
- 作为四步训练法（理解预热 → 生成预训练 → 统一中期训练 → 统一 SFT）之后的补充强化环节

## 在 SenseNova U1 中的角色

Flow-GRPO 位于训练流程的最末端，在模型已具备基础理解与生成能力后，通过强化学习进一步对齐人类偏好和提升输出质量。