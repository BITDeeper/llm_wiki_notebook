---
type: concept
title: Mixture-of-Transformers (MoT)
created: 2026-05-14
updated: 2026-05-14
tags: [模型架构, 多模态, 参数解耦, MoT]
related: [neo-unify-架构, sensenova-u1, 原生理解生成统一]
sources: ["商汤sensenova-u1深度拆解，原生统一架构终结缝合时代.md"]
---
# Mixture-of-Transformers (MoT)

Mixture-of-Transformers（MoT）是 [[neo-unify-架构]] 的核心参数层设计，可视为 MoE（Mixture-of-Experts）在多模态统一场景下的演进范式。

## 核心思想

传统多模态模型中，理解任务需要从图像中提取语义，生成任务需要将语义转化为像素——二者目标不同，直接共享所有参数会产生梯度干扰。MoT 的解决方案是**"知识共享、专才专用"**。

## 架构设计

- **共享部分**：理解流与生成流在底层共享自注意力（Self-Attention）上下文
- **解耦部分**：Q/K/V/O 投影、归一化（Normalization）及 MLP 层完全参数解耦
- **动态路由**：每层根据 token 类型（理解 token 或生成 token）动态路由到对应参数集

## 与 MoE 的区别

MoE 按样本/ token 路由到不同专家，专家之间是同构的；MoT 按任务类型（理解 vs 生成）路由到异构参数集，每个参数集针对特定任务优化，但通过共享注意力上下文实现信息流通。

## 实验验证

[[sensenova-u1]] 技术报告的消融实验显示，理解与生成两种能力在 MoT 骨干中协同演化，本质冲突极小，证明该架构有效解决了多任务参数干扰问题。

## 模型规格

SenseNova U1 提供两种 MoT 规格：
- **SenseNova-U1-8B-MoT**：稠密骨干，8B 参数
- **SenseNova-U1-A3B-MoT**：MoE 骨干，总参 38B，理解/生成激活参数各 3B