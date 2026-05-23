---
type: concept
title: Mixture-of-Experts
created: 2026-05-22
updated: 2026-05-22
tags: [模型架构, 稀疏激活, 大模型]
related: [mp-moe, moe回音室效应, 稀疏激活]
sources: ["icml-2026-打破「回音室」效应！人大孟澄团队&华为提出集成剪枝视角下的moe新架构.md"]
---

# Mixture-of-Experts

**Mixture-of-Experts**（MoE，混合专家架构）是大模型扩展的重要架构之一。相比稠密 Transformer，MoE 通过 [[稀疏激活]] 机制，在每个 token 上只调用少量专家，从而在控制计算成本的同时扩大模型容量。

## 核心机制

- **路由器（Router/Gating Network）**：根据输入 token 计算每个专家的 gating score
- **Top-k 选择**：选择得分最高的 k 个专家处理当前 token
- **稀疏激活**：每个 token 只激活少量专家，大部分参数处于休眠状态

## 已知挑战

- [[moe回音室效应|回音室效应]]：标准 top-k 路由导致专家表征趋同
- 负载均衡：防止路由器将大部分 token 分配给少数专家
- 专家专业化：如何确保不同专家学到真正不同的功能

## 相关工作

[[mp-moe|MP-MoE]] 从 [[集成剪枝]] 视角提出了改进路由机制的新方案，通过马氏范数和专家共现矩阵显式鼓励专家多样性。