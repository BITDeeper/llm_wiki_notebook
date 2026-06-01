---
type: source
title: "CVPR 2026 | 当LoRA遇上RoPE！WaDi：面向单步图像生成的权重方向感知蒸馏"
created: 2026-05-29
updated: 2026-05-29
tags: [cvpr-2026, 扩散模型蒸馏, 图像生成, 参数高效微调, 南开大学]
related: [wadi-权重方向感知蒸馏, lorad-权重方向低秩旋转, 扩散模型蒸馏, cvpr-2026, 机器之心]
sources: ["cvpr-2026-当lora遇上rope！wadi：面向单步图像生成的权重方向感知蒸馏.md"]
authors: [王雷]
year: 2026
url: "https://mp.weixin.qq.com/s/08rxJ95hHvAvV9C62NYxIQ"
venue: "机器之心"
---
# CVPR 2026 | 当LoRA遇上RoPE！WaDi：面向单步图像生成的权重方向感知蒸馏

本文由机器之心发布，报道了南开大学 PCA Lab 团队发表于 CVPR 2026 的论文。论文提出了 [[wadi-权重方向感知蒸馏|WaDi]] 框架和 [[lorad-权重方向低秩旋转|LoRaD]] 模块，用于将多步扩散模型蒸馏为单步生成器。

## 核心内容

### 关键发现
- 通过分析单步学生模型与多步教师模型之间的权重变化，发现**权重方向变化**（均值 2.2%）显著超过**权重范数变化**（均值 0.1%），约为 22 倍
- 方向变化具有**低秩结构**：仅保留 30% 的秩即可恢复 93% 的信息
- 消融实验证实：替换方向导致 FID +241.3，替换范数仅 +0.7

### 技术方案
- **LoRaD**：受 [[旋转位置编码启发|RoPE]] 启发，通过可学习的低秩旋转矩阵对预训练权重方向进行正交旋转调整，仅改变方向不改变范数
- **WaDi**：将 LoRaD 集成到变分得分蒸馏（VSD）中，形成方向感知蒸馏框架

### 实验结果
- 在 COCO 2014 和 COCO 2017 上取得 SOTA FID 分数
- 可训练参数仅占 U-Net/DiT 全量参数的约 10%
- 在 SD 1.5、SD 2.1、PixArt-α 三种骨干上全面超越 DMD2、SiD-LSG、SwiftBrushv2
- 下游任务验证：ControlNet、Reversion、Dreambooth 均展示良好泛化性

## 链接
- 论文：https://arxiv.org/abs/2603.08258
- 代码：https://github.com/gudaochangsheng/WaDi