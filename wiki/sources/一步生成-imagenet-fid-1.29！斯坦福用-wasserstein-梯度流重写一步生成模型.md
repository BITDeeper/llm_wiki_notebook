---
type: source
title: "一步生成 ImageNet FID 1.29！斯坦福用 Wasserstein 梯度流重写一步生成模型"
created: 2026-06-03
updated: 2026-06-03
tags: [生成模型, 图像生成, 最优传输, 斯坦福, 一步生成]
related: [w-flow, wasserstein梯度流, sinkhorn散度, 一步生成模型, 机器之心]
sources: ["一步生成-imagenet-fid-1.29！斯坦福用-wasserstein-梯度流重写一步生成模型.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/3EFvWPBBLELPReQ3I0y0YQ"
venue: 机器之心
---
# 一步生成 ImageNet FID 1.29！斯坦福用 Wasserstein 梯度流重写一步生成模型

## 摘要

本文报道了斯坦福大学提出的 [[w-flow]] 方法，一种基于 [[wasserstein梯度流]] 和 [[sinkhorn散度]] 的 [[一步生成模型|一步生成]] 框架。W-Flow 不依赖 GAN 对抗训练或多步扩散蒸馏，而是直接在 Wasserstein 空间中设计原理驱动的训练动力学，让生成分布沿能量景观下降，再将多步轨迹压缩为一步映射。

## 核心结果

- **W-Flow-XL/2** 在 ImageNet 256×256 条件生成上达到 **FID 1.29**（1-NFE），刷新一步生成指标
- **W-Flow-L/2** 达到 FID 1.35，**W-Flow-B/2** 达到 FID 1.52
- 相比相近 FID 的多步扩散模型，采样速度提升约 **100 倍**
- W-Flow-B/2 仅 133M 参数即超过更大的 Drifting-L/2

## 关键技术要点

1. **从头训练**：不依赖蒸馏，直接设计生成器的训练动力学
2. **Sinkhorn 散度** 作为能量函数，优于 MMD 和 KL
3. **双批次自传输估计**：消除单批次中粒子与自身零成本匹配造成的偏差
4. **无分类器引导（CFG）** 注入速度场，兼容现代扩散模型的质量增强机制

## 消融实验

- Sinkhorn 散度 FID 7.29 优于 MMD（10.40）、KL（10.17）和漂移模型（8.46）
- 双批次估计将 FID 从 17.57 降至 7.08
- 速度场引导进一步将 FID 推至 7.08

## 局限性

- 实验集中在 ImageNet-256 和 FFHQ，高分辨率/文生图/视频生成尚未验证
- 依赖预训练特征编码器/自编码器
- 理论证明基于理想假设，有限网络/算力下的优化尚无完全解释

## 论文信息

- **论文标题**：One-Step Generative Modeling via Wasserstein Gradient Flows
- **arXiv**：2605.11755
- **共同第一作者**：Jiaqi Han、Puheng Li（斯坦福大学博士生）
- **代码和权重**：已开源