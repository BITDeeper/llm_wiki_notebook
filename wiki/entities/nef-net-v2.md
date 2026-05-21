---
type: entity
title: "NEF-NET v2"
tags: [ai-model, medical-ai, ecg, deep-learning]
related: [心电全景合成, nef-net-v1, view-to-view-transformation, geometric-angular-attention, on-the-fly-calibration, 港科广, 中山大学]
created: 2026-04-29
updated: 2026-04-29
sources: ["任意视角生成！港科广实现真实场景下的心电全景｜iclr'26.md"]
---

# NEF-NET v2

**NEF-NET v2** 是由 [[港科广]] 与 [[中山大学]] 联合开发的新一代心电全景合成模型。该模型旨在解决真实临床场景下从有限导联信号合成任意空间角度虚拟导联心电图的问题。

## 核心特性
与上一代 [[Nef-Net v1]] 相比，NEF-NET v2 进行了架构和训练策略上的重大改进，以解决视角信息混叠、设备域差和视角偏移等实际问题。

### 模型架构
模型主要由以下三个部分组成：
1.  **Angle Embedding**：将输入导联和目标导联映射到球坐标系 $(\theta, \phi)$ 的可学习空间。
2.  **View Encoder**：使用 1D-ResNet 提取单导联特征，并利用类似 [[FiLM]] 的机制根据目标角度进行特征调制，增强相关成分。
3.  **Geometric View Transformer (GeoVT)**：
    *   **[[Geometric Angular Attention]] (MGAA)**：通过交叉注意力机制计算目标角度与输入角度的几何相似度权重。
    *   **View Transformation Blocks**：逐层将输入特征投影到目标视角的潜空间。

### 训练与部署策略
NEF-NET v2 采用了独特的**三阶段训练与部署流程**，以适应真实世界的复杂性：
1.  **Any-Pairs Pretraining**：在多数据源上进行“任意记录-任意目标”的动态采样训练，学习稳健的跨视角映射先验。
2.  **[[Device Calibration]]**：针对特定采集设备进行微调，对齐不同设备间的信号域差。
3.  **[[On-the-fly Calibration]]**：在推理过程中，利用前 5 秒信号显式估计并校正电极贴放误差与个体解剖差异（通过可学习参数 $d\theta, d\phi$），实现“病人级”自适应。

## 性能表现
- 在 CPSC2018 数据集上，平均 PSNR 较基线提升 6.9dB。
- 在房颤（AF）信号上 PSNR 提升达 7.3dB。
- 在涵盖 9 类心律/心肌异常的测试中，表现出优异的疾病泛化能力。

## 应用场景
该模型能够生成诊断级的心电全景波形，帮助医生从不同视角观察心脏电活动，特别适用于捕捉传统 12 导联体系可能遗漏的后壁心梗或特定视角下的异常波形。