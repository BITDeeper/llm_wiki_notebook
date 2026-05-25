---
type: entity
title: LlamaGen
created: 2026-05-23
updated: 2026-05-23
tags: [自回归图像生成, 预训练模型]
related: [flashar, 自回归图像生成]
sources: ["22.9倍加速！flashar：仅用0.05%数据，让预训练好的自回归图像模型飞起来.md"]
---

# LlamaGen

LlamaGen 是一系列自回归图像生成模型，参数规模覆盖 120M 至 1.4B（B/L/XL/XXL 四个规模），用于 ImageNet 类别条件图像生成任务。

## 在 FlashAR 研究中的角色

LlamaGen 是 [[flashar]] 框架通用性验证的基座模型之一。在 ImageNet 256×256 基准上：

- **FlashAR-L** 的 IS 达到 289.0，超过从头训练的 NAR-L（263.9）
- **FlashAR-B** 吞吐量达 447.2 img/s，超过 NAR-B（419.7 img/s）
- 仅需 25 个 epoch 后训练，为 BlockDiffusion 训练量的三分之一

这些结果验证了 FlashAR 框架在不同模型规模上的通用有效性。
