---
type: entity
title: PlayerOne
tags: [world-model, baseline, egocentric-vision]
related: [hand2world, 单目全自动标注]
created: 2026-04-14
updated: 2026-04-14
sources: ["头号玩家照进现实！ntu发布世界模型交互新范式，攻克主动操作难题.md"]
---

# PlayerOne

[[playerone]] 是一种第一人称世界模拟器，作为 [[hand2world]] 论文中提及的基准方法之一。

## 技术特点
[[playerone]] 通过第一人称与第三人称相机同步配对的方式来建模自我运动。这种方法在 NeurIPS 2025 上发表，取得了重要进展。

## 局限性
尽管 [[playerone]] 在建模自我运动方面有所突破，但其依赖多目相机同步采集的路线限制了数据的可扩展性，且在实际应用中受限于硬件要求。相比之下，[[hand2world]] 通过算法（如 [[plucker-射线嵌入]]）解耦运动，仅需单目视频即可实现更优的效果。