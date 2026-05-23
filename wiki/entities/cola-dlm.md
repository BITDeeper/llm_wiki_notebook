---
type: entity
title: Cola DLM
created: 2026-05-18
updated: 2026-05-18
tags: [扩散语言模型, 连续潜在空间, 字节跳动, 开源模型]
related: [连续扩散语言模型, 字节seed团队, text-vae, 三子任务诊断框架, 潜在先验传输]
sources: ["字节会师何恺明！开源连续扩散语言模型cola-dlm.md"]
origin_date: 2026-05-18
---
# Cola DLM

Cola DLM（Continuous Latent Diffusion Language Model，连续潜在扩散语言模型）是 [[字节seed团队|字节跳动Seed团队]] 开源的连续扩散语言模型。该模型跳过离散token层，将整个生成过程放在连续语义潜在空间中完成，挑战了"预测下一个token"这一大语言模型二十年来的默认范式。

## 核心理念

Cola DLM的核心动机不是diffusion，而是representation（表征）。其哲学基础是：**Token≠语义**——Token只是人类语言系统的表层载体，不是语义本身。模型内部应存在一种更稳定、更抽象的"语义状态"，本质相同但说法不同的句子可以在内部收敛到相近的表示。

## 架构设计

Cola DLM的生成模型由两部分组成：

1. **Latent Prior**：负责生成"潜在语义"，使用Block-Causal DiT + Flow Matching组合，从一个简单分布出发学习向量场，将分布"运输"成真实数据对应的latent分布
2. **Decoder**：负责将语义翻译成具体文字

整个diffusion/flow matching过程发生在latent空间而非token空间。Token只在最后一步才出现，前面学的都是"语义怎么形成"。

## 关键技术细节

- **[[text-vae]]**：专门搭建的文本变分自编码器，将离散文本压缩为连续latent（语义指纹），而非简单的word embedding替代
- **Encoder冻结策略**：训练时Encoder在diffusion阶段基本冻结，防止语义表示被diffusion带偏而退化为"穿了马甲的token"
- **语义约束**：BERT风格的mask loss，防止encoder在重建时发生语义坍塌
- **Block结构**：块内并行处理局部语义的快速组织，块间按因果顺序保证整体逻辑不乱

## 实验结果

在~2B参数、约2000 EFLOPs的严格对照实验下，Cola DLM展现出比自回归模型和主流离散DLM（如LLaDA、Dream-7B、MDLM）更稳定的scaling趋势。

## 战略意义

Cola DLM不仅是语言模型的改进，更是为多模态统一造桥——长期以来"统一多模态"的核心障碍之一是文本为离散而图像/视频/音频天然偏连续。Cola DLM恰好扮演了将文本映射到连续语义latent的接口角色。

## 开源资源

- 论文、代码、模型权重、中文博客全部开源
- 团队自述："Cola DLM只是这条路上的一次早期尝试，但这条路本身值得继续走下去。"