---
type: concept
title: I-JEPA 图像联合嵌入预测架构
created: 2026-05-15
updated: 2026-05-15
tags: [jepa, 图像, 自监督学习, 掩码预测]
related: [jepa, v-jepa, ema-目标编码器, multi-block-masking, 线性探测]
sources: ["160行代码读懂lecun的jepa世界模型.md"]
---
# I-JEPA 图像联合嵌入预测架构

I-JEPA（Image JEPA）是 [[jepa]] 联合嵌入预测架构面向图像任务的变体，是 JEPA 系列中最基础的实现。

## 核心机制

- **掩码块嵌入预测：** 遮掉图像的一部分 patch，让模型从可见区域预测被遮区域的 embedding
- **[[ema-目标编码器]]：** 通过指数移动平均慢更新目标网络，提供稳定的训练信号
- **[[multi-block-masking]]：** 多块掩码策略，同时遮掉多个区域的 patch
- **Smooth-L1 Loss：** 衡量预测 embedding 与目标 embedding 之间的距离

## 极简实现

在 [[keon-jepa]] 教学项目中，I-JEPA 仅用 160 行代码实现，包含：
- Patch Embedding
- ViT Encoder
- EMA Target Encoder
- Multi-block Masking
- Predictor
- Smooth-L1 Loss
- Warmup + Cosine 学习率调度
- 权重衰减分离

## 验证结果

在 CIFAR-10 上训练 100 个 epoch，[[线性探测]] 准确率达到 52.7%。LDA 降维可视化清晰展示了特征从"混成一团"到"泾渭分明"的学习过程。

## 与原版论文的差距

原版论文使用 ViT-Huge 在 ImageNet 上训练 300 个 epoch，计算量远超教学版。教学版使用 ViT-Tiny，参数量差了至少两个数量级，但核心机制完全一致。