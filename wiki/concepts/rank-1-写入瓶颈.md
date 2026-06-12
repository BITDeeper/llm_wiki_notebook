---
type: concept
title: Rank-1 写入瓶颈
created: 2026-06-09
updated: 2026-06-09
tags: [线性注意力, 记忆机制, 序列模型]
related: [线性注意力, prism, ttt-test-time-training, gdn-gated-deltanet]
sources: ["rss/当线性注意力学会「写入前思考」：并行化的多步记忆写入.md"]
---
# Rank-1 写入瓶颈

**Rank-1 写入瓶颈**是[[线性注意力]]模型的共有局限：每个 token 只能对状态矩阵 S 做秩为 1 的外积更新（即两个向量的乘积），无法同时调整多个语义维度。

## 问题描述

以[[gdn-gated-deltanet|GDN]]为代表的线性注意力模型，每次写入是 S ← β(S, k, v) = S - (S·k)·kᵀ + v·kᵀ。其中 v·kᵀ 是 rank-1 外积，结果矩阵的所有行都是同一个方向的缩放，相当于在整个 d×d 的记忆矩阵上只改动了"一行"。

如果一个 token 携带的语义是多维度的（同时是某个句法结构的成分、某个语义角色的载体、某个 topic 的关键词），rank-1 的一行写入无法同时在这些维度上做精细调整。信息在压缩写入时不可避免地丢失。

## 解决方案

- **[[ttt-test-time-training|TTT]]：** 将状态从线性矩阵升级为 MLP 权重，多步梯度下降实现 rank-L 写入，但牺牲了并行性
- **[[prism|PRISM]]：** 在线性状态上显式构造 L 个可学习方向，通过多步残差迭代实现 rank-L 写入，同时保持 parallel scan 兼容性

## 核心矛盾

"背包有限，每次却只允许写一行"——这是当前所有线性复杂度模型的共有瓶颈。PRISM 的消融实验揭示 rank-L 的真正价值不在 next-token prediction 而在需要精确长程检索的下游任务上（单步 solver 仅掉 0.3 PPL 但下游 ACC 下跌 2.9 个百分点）。