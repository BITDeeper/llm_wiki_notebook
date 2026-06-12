---
type: concept
title: Parallel Scan（并行前缀扫描）
created: 2026-06-09
updated: 2026-06-09
tags: [并行计算, GPU优化, 序列模型]
related: [线性注意力, prism, gdn-gated-deltanet]
sources: ["rss/当线性注意力学会「写入前思考」：并行化的多步记忆写入.md"]
---
# Parallel Scan（并行前缀扫描）

**Parallel Scan**（并行前缀扫描）是一种将满足线性递推关系的串行计算改写为满足结合律的并行运算的数学技巧，是[[线性注意力]]模型实现 GPU 高效并行训练的关键。

## 原理

当递推关系的形式满足线性结构 S_t = A_t · S_{t-1} + B_t（其中 A_t 和 B_t 都只依赖当前输入 x_t，不依赖 S_{t-1}）时，这个递推可以被改写为满足结合律的二元运算。一旦满足结合律，就可以用类似"求前缀和"的方式并行计算。

N 步的串行递推可以在 O(log N) 的深度内完成，代价是多做了一些冗余计算（总计算量变成 O(N log N)），但在 GPU 上墙钟时间大幅缩短。

## 关键前提

A_t 和 B_t 必须是历史状态无关的——它们只能是当前输入 x_t 的函数，不能依赖 S_{t-1}。一旦需要读取 S 才能算出来，结合律就不成立，就无法应用 parallel scan。

## 工程意义

Parallel scan + fused kernel 的真正威力在于：把整个序列的 N 步递推打包成一个大算子，S 矩阵只需要从 HBM 搬进 SRAM 一次，在 SRAM 里一口气算完所有步，再搬回去。数据搬运次数从 O(N) 降到 O(1)。

[[ttt-test-time-training|TTT]] 的多步梯度下降打破了历史状态无关前提，无法应用 parallel scan，搬运次数退回 O(N)，这是其比[[gdn-gated-deltanet|GDN]]慢 174 倍的根源。

[[prism|PRISM]] 的核心设计约束就是所有操作必须兼容 parallel scan——通过局部 anchor 代理和闭合式预计算消除所有对历史状态的依赖。