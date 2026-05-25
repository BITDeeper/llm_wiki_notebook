---
type: concept
title: GRPO算法
created: 2026-05-24
updated: 2026-05-24
tags: [强化学习, ai训练, deepseek, 算法创新]
related: [deepseek, 梁文锋, 第一性原理]
sources: ["梁文锋与deepseek的十万亿美元棋盘.md"]
---
# GRPO算法

GRPO（Group Relative Policy Optimization）是[[deepseek|DeepSeek]]从[[第一性原理]]出发发明的强化学习算法，比行业主流的PPO算法更便宜，体现了DeepSeek"反共识"技术路线的标志性创新。

## 背景

- 行业主流使用PPO（Proximal Policy Optimization）做强化学习
- DeepSeek从第一性原理重新审视，发明了GRPO作为替代方案
- 核心优势：训练成本更低

## 与DeepSeek技术路线的关系

GRPO是DeepSeek"在有限硬件条件下榨出最大算力"技术哲学的体现之一。与MLA、DSA、mHC等架构创新不同，GRPO是在训练算法层面的创新，同样指向降低算力成本这一核心目标。