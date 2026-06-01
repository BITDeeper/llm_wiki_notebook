---
type: concept
title: RoPE（旋转位置编码）
created: 2026-05-30
updated: 2026-05-30
tags: [位置编码, transformer, 底层技术]
related: [gamma-world, 单纯形旋转智能体编码]
sources: ["英伟达清华团队提出gamma-world：世界模型从「一个人玩」到「多人共处」.md"]
---
# RoPE（旋转位置编码）

**RoPE（Rotary Position Embedding）** 是 Transformer 中表达位置关系的编码方式，通过给每个信息片段分配一个旋转角度，两个片段之间的位置差异通过旋转角度的差来表达。

## 标准视频 RoPE

标准视频 RoPE 编码三个轴：
- **时间轴**
- **高度轴**
- **宽度轴**

## Gamma-World 的扩展

[[gamma-world]] 在标准三维 RoPE 的基础上增加了第四个轴——**玩家轴**，在不改变原有时空编码的前提下，为智能体身份单独留出一个维度。这个玩家轴上的编码采用 [[单纯形旋转智能体编码]] 方案，将玩家映射到正单纯形顶点以实现 [[置换对称性]]。