---
type: entity
title: FDr
tags: [评估指标, 图像生成, 机器学习, fid]
related: [fid, fd-loss, dinov2, mae, siglip]
created: 2026-05-03
updated: 2026-05-03
sources: ["openai参与，重卷imagenet：终于把fid做成训练.md"]
---

# FDr

FDr（Fréchet Distance ratio）是一种针对图像生成模型提出的综合评估指标，旨在解决传统 [[FID]] 指标单一且可能误导研究方向的问题。

## 背景与动机

自 2017 年以来，FID 一直是评估图像生成模型质量的黄金标准。然而，研究发现，FID 数值最低的模型在视觉观感（如物体结构完整性、细节纹理）上未必最优。这是因为 FID 仅基于 Inception-v3 网络提取的特征，而该网络可能无法完全捕捉人类视觉感知关注的语义和纹理细节。

## 计算方法

FDr 通过跨多种不同的视觉表征空间计算归一化的弗雷歇特距离比值，并取平均得到。

具体而言，它涵盖了以下 6 种表征空间：
1.  Inception-v3
2.  ConvNeXt v2
3.  DINOv2
4.  MAE
5.  SigLIP
6.  CLIP

## 评估结果

使用 FDr 指标重新评估 ImageNet 生成任务，得出了令人意外的结论：
*   **基准**：真实验证集的 FDr 数值为 1.0。
*   **现状**：即便是最顶尖的生成模型，其 FDr 数值仍高达 1.89。

这一发现揭示了 ImageNet 图像生成领域距离“技术成熟”仍有巨大差距，也解释了为什么许多低 FID 分数的模型在人类盲选中依然无法通过图灵测试。