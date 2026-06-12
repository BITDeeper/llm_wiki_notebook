---
type: concept
title: MaPE（模态感知旋转位置编码）
created: 2026-06-09
updated: 2026-06-09
tags: [位置编码, 多模态, 模型架构, rope]
related: [lance-字节跳动统一多模态模型, dual-stream-moe]
sources: ["rss/3b小模型，把图像视频"看画改"全打通了，字节lance开源即冲上抱抱脸第一.md", "rss/3b小模型，把图像视频“看画改”全打通了，字节lance开源即冲上抱抱脸第一.md"]
---
# MaPE（模态感知旋转位置编码）

MaPE（Modality-Aware Rotary Positional Encoding）是[[lance-字节跳动统一多模态模型|Lance]]模型中引入的位置编码机制，用于在统一多模态序列中区分功能不同的视觉token。

## 问题背景

在统一多模态模型中，视觉token的角色并不相同：

- **语义ViT token**：用于理解任务
- **Clean VAE token**：作为生成的条件输入
- **Noisy VAE token**：作为去噪生成的目标

这些token在数值表征上可能"长得像"，但功能截然不同。如果使用普通位置编码，模型容易将它们混淆，导致理解和生成任务互相干扰。

## 解决方案

MaPE在旋转位置编码（RoPE）的时间维度中加入模态/功能组信息，使模型能够明确区分：

- 谁是来帮忙理解的（语义token）
- 谁是生成条件（clean VAE token）
- 谁是要被去噪生成的目标（noisy VAE token）

## 技术意义

MaPE是[[dual-stream-moe|双流MoE]]架构的重要补充。双流MoE在路径层面解耦理解和生成，MaPE则在token层面为模型提供功能角色的显式信号，两者协同确保统一序列中不同功能token各司其职。