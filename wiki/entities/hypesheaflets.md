---
type: entity
title: HyperSheaflets
tags: [graph-neural-networks, signal-processing, hypergraph]
related: [高频信息]
created: 2026-01-22
updated: 2026-01-22
sources: ["图灵奖得主bengio斩获aaai-2026大奖！5篇杰出论文，华人占3篇.md"]
---

# HyperSheaflets

HyperSheaflets 是一种创新的超图神经网络框架，由华人团队主导研究，获得了 AAAI 2026 杰出论文奖。

## 核心洞察
该研究通过理论分析指出，现有的超图神经网络（HGNN）主要侧重于低通滤波（平滑特征），普遍忽视了 [[高频信息]] 的作用。然而，高频信号对于捕捉超图内部局部判别性结构具有关键作用。

## 技术架构
HyperSheaflets 融合了胞腔层论与小框架变换：
- **多尺度频谱分解**：在保持高阶依赖关系的同时实现多尺度分析。
- **显式高频强调**：与理论分析相呼应，显式地建模高频分量。

## 意义
这一发现挑战了深度学习领域普遍追求“平滑特征”的主流直觉，证明了在处理复杂高阶关系时，结合低频与高频分量能构建更具表达力与效能的学习模型。