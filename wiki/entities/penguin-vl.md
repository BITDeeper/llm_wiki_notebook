---
type: entity
title: Penguin-VL
tags: [multimodal, llm, computer-vision, tencent, open-source]
related: [penguin-encoder, tra策略, 腾讯, 原生理解生成统一]
created: 2026-03-19
updated: 2026-03-19
sources: ["腾讯纯文本llm训视觉encoder，拿捏图表长视频，达到开源小模型sota！.md"]
---

# Penguin-VL

[[penguin-vl]] 是腾讯开源的多模态大语言模型，主打文档理解、图表解析和长视频理解。其核心特点是打破了主流“视觉 Backbone + LLM”的拼接范式，采用直接从纯文本 LLM 初始化的 [[penguin-encoder]]。

## 核心特性

- **纯文本 LLM 初始化**：不使用传统的 CLIP/SigLIP 等对比学习预训练模型，而是直接从纯文本 LLM 的权重出发初始化视觉编码器。
- **架构改造**：通过引入 [[双向注意力]] 和 [[2D-RoPE]]，成功将 LLM 改造为视觉编码器。
- **长视频优化**：采用 [[TRA策略]]（时序冗余感知 Token 压缩），优先为关键帧分配 Token 预算，减少冗余中间帧的资源占用。

## 性能表现

在 2B 和 8B 参数规模下，Penguin-VL 在 InfoVQA、ChartQA、DocVQA、LongVideoBench 等多个文档、图表及长视频理解任务上达到了开源小模型 SOTA。

## 技术意义

Penguin-VL 证明了 LLM 的序列建模能力可直接迁移至视觉理解，且无需依赖大规模对比学习预训练。这与 [[商汤科技]] 的 [[sensenova-u1]] 类似，都体现了行业从“模态拼接”向 [[原生理解生成统一]] 的演进趋势。

## 资源链接

- GitHub: https://github.com/tencent-ailab/Penguin-VL
- 论文: https://arxiv.org/abs/2603.06569
- Hugging Face: https://huggingface.co/tencent/Penguin-VL-2B