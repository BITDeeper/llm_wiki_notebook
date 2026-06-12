---
type: entity
title: DINOv3-ConvNeXt
created: 2026-06-09
updated: 2026-06-09
tags: [骨干网络, 视觉模型, 特征提取]
related: [traqpoint]
sources: ["rss/cvpr-2026-oral-traqpoint：用序列级强化学习重新定义关键点检测，轨迹更长、重建更密.md"]
---
# DINOv3-ConvNeXt

DINOv3-ConvNeXt (base) 是TraqPoint中使用的骨干网络，替代了RDD中原有的ResNet-50。该架构结合了DINOv3的自监督视觉基础模型能力和ConvNeXt的现代卷积架构设计，提供四个不同尺度的特征图，兼具多尺度特征表示和强语义表示能力。

## 在TraqPoint中的应用

在[[traqpoint|TraqPoint]]的消融实验中，DINOv3-ConvNeXt相比ResNet-50和DINOv2-ViT均表现更优。DINOv2-ViT相比ResNet-50仅有微小提升，被归因于其缺乏多尺度特征表示能力。值得注意的是，序列感知RL在所有骨干架构上都带来了一致的提升，表明训练范式的改进是对骨干质量的补充而非依赖。