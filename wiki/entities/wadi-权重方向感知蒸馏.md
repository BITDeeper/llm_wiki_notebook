---
type: entity
title: "WaDi（权重方向感知蒸馏）"
created: 2026-05-29
updated: 2026-05-29
tags: [扩散模型, 蒸馏, 图像生成, cvpr-2026, 南开大学]
related: [lorad-权重方向低秩旋转, 扩散模型蒸馏, 权重方向与范数, 变分得分蒸馏, cvpr-2026]
sources: ["cvpr-2026-当lora遇上rope！wadi：面向单步图像生成的权重方向感知蒸馏.md"]
origin_date: 2026-03-01
---
# WaDi（权重方向感知蒸馏）

WaDi（Weight Direction-aware Distillation）是由南开大学 PCA Lab 提出的一种单步文本到图像蒸馏框架，发表于 CVPR 2026。

## 核心思想

WaDi 的核心洞见是：在扩散模型蒸馏过程中，**权重方向的变化是性能提升的关键驱动因素**，而权重范数的变化相对次要。基于此，WaDi 通过 [[lorad-权重方向低秩旋转|LoRaD]] 模块专注于建模权重方向的调整，而非同时优化方向和范数。

## 技术架构

WaDi 将 LoRaD 集成到 [[变分得分蒸馏|VSD]] 框架中：

- **教师模型**：预训练扩散模型作为真实模型
- **虚假模型**：从教师初始化，采用低秩 LoRaD（秩=32）提供自适应引导
- **学生模型**：单步生成器，采用高秩 LoRaD（秩=256/128）拟合教师分布
- 交替优化学生模型和虚假模型直至收敛

## 关键实验结果

| 骨干网络 | 可训练参数占比 | 核心优势 |
|---------|-------------|---------|
| SD 1.5 | 9.74% | COCO 2014 最佳 FID |
| SD 2.1 | 10.92% | COCO 2014 最佳 FID |
| PixArt-α | 13.30% | COCO 2014 最佳 FID |

全面超越 DMD2、SiD-LSG、SwiftBrushv2 等基线方法。

## 下游任务泛化

蒸馏后的单步模型可无缝适配：
- **可控生成**（ControlNet）：推理时间缩短 86.26%
- **关系反演**（Reversion）：推理时间缩短 88.89%
- **图像定制化**（Dreambooth）：LoRaD 在主体保真度与提示词遵从度间取得更好平衡

## 资源链接

- 论文：arXiv 2603.08258
- 代码：https://github.com/gudaochangsheng/WaDi