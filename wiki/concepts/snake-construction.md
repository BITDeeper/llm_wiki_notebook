---
type: concept
title: 蛇形构造
tags: [mathematics, algorithms, graph-theory]
related: [fiber-decomposition, hamiltonian-cycle-decomposition]
created: 2026-03-05
updated: 2026-03-05
sources: ["88岁图灵奖得主，用claude一小时破解30年数学悬案.md"]
---

# 蛇形构造

蛇形构造是 [[Claude Opus 4.6]] 在解决三维网格图哈密顿循环分解问题时发现的一种局部路径生成策略。

## 原理
利用凯莱图（Cayley Digraph）的群论性质，通过特定的步进逻辑在局部生成极具规律的路径，形似蛇形蜿蜒。

## 发现过程
Claude 在第 21 次探索中发现了这一构造方法。虽然后续发现简单的坐标旋转会导致冲突，但这一思路为最终生成通用算法奠定了基础。

## 应用
作为 [[纤维分解]] 的补充，蛇形构造解决了如何在单层或层间生成有效连接的问题，是最终算法的关键组件之一。