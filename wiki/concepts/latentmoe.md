---
type: concept
title: LatentMoE (隐式混合专家模型)
tags: [architecture, efficiency, moe, nvidia]
related: [nemotron-3-super, thinking-tax]
created: 2026-03-12
updated: 2026-03-12
sources: ["老黄杀入openclaw战场！最强开源「龙虾」模型直逼opus-4.6.md"]
---

# LatentMoE (隐式混合专家模型)

LatentMoE（Latent Mixture of Experts）是一种创新的混合专家模型架构，由英伟达在 [[nemotron-3-super]] 中首次引入。其核心目标是在降低计算成本的同时，通过激活更多专家来提升模型准确率。

## 技术原理

传统的 MoE 架构在高维隐藏空间 $d$ 中进行路由和专家计算，导致参数量和跨卡通信量巨大。LatentMoE 的解法是在路由和专家计算之前，先将 Token 投射到一个更小的潜在维度 $\ell$。

- **降维计算**：路由和专家计算都在这个较小的潜在维度 $\ell$ 中进行。
- **资源释放**：由于计算维度缩小，需要加载的专家参数和通信量直接减少了 $d/\ell$ 倍。
- **扩容专家**：省下的资源被用于增加专家总数和每次激活的专家数。

## 优势

根据英伟达官方描述，LatentMoE 实现了“花1个专家的计算成本，激活4个专家”的效果。这种架构不仅解决了传统 MoE 的参数和通信瓶颈，还有效缓解了 AI 智能体应用中的 [[thinking-tax]]（思考税）问题，使得在有限算力下运行更复杂的 Agent 工作流成为可能。