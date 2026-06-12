---
type: source
title: "CVPR 2026 Oral | ViT³：解锁视觉中的测试时训练"
authors: [清华大学, 阿里巴巴集团]
year: 2026
url: "https://mp.weixin.qq.com/s/GA7KQJjIYkBU3dWQGkON9Q"
venue: "我爱计算机视觉"
tags: [cvpr-2026, vision-transformer, test-time-training, linear-complexity, oral]
related: [vit3-vittt, 测试时训练-ttt, 清华大学, cvpr-2026]
created: 2026-06-11
updated: 2026-06-11
sources: ["rss/cvpr-2026-oral-vit³：解锁视觉中的测试时训练，速度快了、显存省了，精度也依然在线.md"]
---
# CVPR 2026 Oral | ViT³：解锁视觉中的测试时训练

**来源**：我爱计算机视觉 | **发表日期**：2026-06-11

## 摘要

清华大学与阿里巴巴集团联合提出的ViT³（ViTTT）入围CVPR 2026 Best Paper决赛圈（16,092篇投稿中选15篇）。该工作将测试时训练（TTT）从语言模型领域系统性迁移至视觉任务，通过6个设计见解构建出纯线性复杂度的视觉TTT架构，在分类、检测、分割、生成四大任务上全面超越Mamba和线性注意力方法，在2048×2048超高分辨率下实现4.6倍吞吐加速和90.3%显存降低。

## 核心内容

### 在线学习视角下的注意力统一框架
- Softmax注意力 = 隐层宽度=N的双层MLP（O(N²)复杂度）
- 线性注意力 = 压缩的线性层（信息损失严重）
- TTT = 可训练的任意模块（线性复杂度+强非线性建模能力）

### 六大设计见解
1. 混合二阶导数趋于零的损失函数（MAE/L1）不适用TTT，MSE/L2和点积损失有效
2. 视觉任务适合单Epoch全Batch内部训练（非因果性决定）
3. 较大内部学习率（1.0）最有效
4. 增加内部模型宽度稳定提升性能
5. 深层内部模型存在优化瓶颈（梯度消失/爆炸）
6. 深度可分离卷积（DWConv）是理想的内部模型架构

### 三个模型变体
- **ViT³**：非层次化设计，对标DeiT
- **H-ViT³**：层次化4阶段设计，对标Swin Transformer
- **DiT³**：扩散生成任务设计，对标DiT

### 关键性能指标
- ImageNet-1K：H-ViT³-S达84.4%（+MESA达84.9%），超越VMamba-S（83.6%）
- COCO检测/分割：全面压制Mamba和线性注意力方法
- ADE20K语义分割：H-ViT³-B达51.7% mIoU，优于VMamba-B（51.0%）
- 图像生成：DiT³-S/2 FID 62.65，优于原始DiT-S/2（68.40）
- 效率：2048×2048分辨率下吞吐加速4.6倍，显存降低90.3%

## 关联条目
- [[vit3-vittt]] — ViT³模型实体页
- [[测试时训练-ttt]] — TTT概念页
- [[cvpr-2026]] — CVPR 2026会议
- [[清华大学]] — 论文主要完成单位