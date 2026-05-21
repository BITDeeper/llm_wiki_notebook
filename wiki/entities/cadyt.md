---
type: entity
title: CADYT
tags: [causal-inference, dynamical-systems, gaussian-process]
related: [差分因果模型, ai-for-science, 第一性原理]
created: 2026-01-22
updated: 2026-01-22
sources: ["图灵奖得主bengio斩获aaai-2026大奖！5篇杰出论文，华人占3篇.md"]
---

# CADYT

CADYT (Causal Structure Learning for Dynamical Systems) 是一种用于动态系统因果发现的新方法，由博世人工智能中心等机构提出，获得了 AAAI 2026 杰出论文奖。

## 背景与挑战
现实世界系统（如物理、生物过程）依据其内在因果关系在连续时间中演进。现有的因果发现方法通常采用离散时间动态贝叶斯网络，这在处理非均匀采样数据时存在缺陷，无法准确还原真实的因果动力学。

## 核心技术
CADYT 框架基于 [[差分因果模型]]，能够以更温和的假设建模系统的连续性。
- **高斯过程推理**：利用精确的高斯过程推理来模拟连续时间动力学，从而更贴合底层动态过程。
- **结构识别**：通过算法马尔可夫条件和最小描述长度原则指导的贪心搜索来识别因果结构。

## 优势
实验表明，CADYT 在均匀与非均匀采样数据上均优于当前最优方法，所发现的因果网络更接近真实的底层动力学。这对于 [[ai-for-science]] 和基于 [[第一性原理]] 的科学发现具有重要意义。