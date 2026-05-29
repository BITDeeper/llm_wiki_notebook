---
type: concept
title: MBNSL（多变量断裂神经缩放定律）
created: 2026-05-28
updated: 2026-05-28
tags: [缩放定律, 神经网络, 多变量, 理论框架]
related: [unsl-统一神经缩放定律, scaling-law]
sources: ["多变量神经缩放定律迈向大一统：mila联手deepmind提出unsl.md"]
origin_date: 2026-05-28
---
# MBNSL（多变量断裂神经缩放定律）

多变量断裂神经缩放定律（Multivariate Broken Neural Scaling Law，MBNSL）是 [[unsl-统一神经缩放定律]] 分层架构中最底层的组件（K 层）。

## 定义

MBNSL 描述 log-log 空间中由多个平滑连接超平面构成的缩放曲面。其中的 **hyperbreak** 对应性能曲面中的阶段性转折——在多变量情况下，转折不再是一个点，而是高维空间中的转折面。

## 直觉理解

可以将其类比为分段线性函数的多维推广：在不同的变量区间内，缩放行为呈现不同的幂律特征，而 hyperbreak 就是这些区间之间的分界。例如，一开始增加数据带来明显收益，过了某个区间后收益下降，这个转折就是一种 break。

## 在 UNSL 中的角色

MBNSL 作为 UNSL 四层架构的基础层（K），为上层的瓶颈/非瓶颈分解（R 层）、超参数反向作用（Q 层）和完整 UNSL 提供了底层的多变量缩放曲面描述。