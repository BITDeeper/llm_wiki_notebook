---
type: entity
title: CosHand
tags: [baseline, hand-interaction, video-generation]
related: [hand2world, 遮挡不变性]
created: 2026-04-14
updated: 2026-04-14
sources: ["头号玩家照进现实！ntu发布世界模型交互新范式，攻克主动操作难题.md"]
---

# CosHand

[[coshand]] 是一种现有的手部视频生成方法，在 [[hand2world]] 的研究中作为对比基准。

## 技术缺陷
[[coshand]] 基于 2D 手部 mask 进行控制。这种方法存在致命的分布错配问题：训练时模型看到的是被物体遮挡的残缺手，而推理时（如空中手势）输入的是完整的手。这导致模型在面对完整手形时，会凭空生成不存在的遮挡物，产生严重的视觉伪影。

## 对比结果
[[hand2world]] 通过引入 3D 手部 mesh 和 [[遮挡不变性]] 技术，成功解决了这一问题，在视觉质量和 FVD 指标上均显著超越 [[coshand]]。