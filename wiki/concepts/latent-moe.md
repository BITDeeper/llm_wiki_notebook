---
type: concept
title: Latent-MoE
tags: ["architecture", "efficiency", "ai", "moe", "optimization"]
related: ["agnes-1-5-pro", "mamba-2", "nemotron-3-super", "混合专家", "路由机制", "agnes-1-5-lite"]
created: 2026-04-01
updated: 2026-05-08
sources: ["斯坦福mit天团出手！1美元养龙虾，图文视频全包，打工人神外挂.md", "老黄入局吃龙虾！英伟达发布最强开源agent推理模型.md"]
---

# Latent-MoE

[[Latent-MoE]]（Latent Mixture of Experts，隐式混合专家模型，亦称潜空间混合专家）是一种改进的混合专家架构技术。

## 核心机制
传统的 MoE 模型在高维空间进行路由，通信成本随专家数量增加而急剧上升。Latent-MoE 的核心改进在于：在进行路由决策之前，先将输入 token 投影到一个压缩的低秩潜空间中进行降维处理。

1.  **降维**：将 token 映射到低维空间。
2.  **路由**：在低维空间进行更高效的路由决策。
3.  **激活**：在维持同等推理成本的前提下，允许模型调用四倍数量的专家网络。

## 优势
- **更细粒度的专业化**：能够激活更多专家，使得模型在处理复杂任务时能调用更精准的知识领域。
- **突破通信瓶颈**：解决了传统 MoE 在大规模专家网络下的通信和计算瓶颈。
- **打破三元悖论**：旨在解决超长上下文处理、高频工具调用和复杂 Multi-Agent 协作三大痛点，打破传统 AI 模型在“规模-延迟-记忆”上的三元悖论。

## 应用
该架构被应用于多个高性能模型中：

*   **[[Agnes]] 系列**：在 [[Agnes-1.5-Pro]] 和 [[Agnes-1.5-Lite]] 模型中，Latent-MoE 被结合 [[Mamba-2]] 状态空间模型与原生多模态早融合技术使用。
*   **[[英伟达]] 系列**：在 [[nemotron-3-super]] 模型中，Latent-MoE 是其实现高效推理和高性能表现的关键组件之一。