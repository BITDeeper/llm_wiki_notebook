---
type: source
title: "别光会调GRPO，来看看真正的大规模RL是怎么炼的"
created: 2026-06-01
updated: 2026-06-01
tags: [强化学习, scaling-law, grpo, rl-scaling, 大模型训练]
related: [rl-scaling-law, grpo, scalerl, scaling-law, 机器之心]
sources: ["别光会调grpo，来看看真正的大规模rl是怎么炼的.md"]
authors: [机器之心编辑部, Cameron-R-Wolfe]
year: 2026
url: "https://mp.weixin.qq.com/s/rA1hIhpBkwKT8KagJPn94Q"
venue: 机器之心
---
# 别光会调GRPO，来看看真正的大规模RL是怎么炼的

本文由机器之心编辑部编译自 Cameron R. Wolfe 博士的技术博客《RL Scaling Laws for LLMs》，系统梳理了 Scaling Law 从预训练到强化学习（RL）的演化脉络。

## 核心内容

文章首先回顾了预训练 Scaling Law 的数学基础（幂律与逆幂律），然后深入分析了 RL Scaling Law 与预训练 Scaling Law 的本质差异：

- **预训练**遵循幂律（逆幂律），测试损失随算力增加呈可预测的平滑下降
- **RL** 遵循 S 形（sigmoid）曲线，包含渐近上限 A 和效率指数 B

文章重点介绍了 [[grpo]] 算法及其多种变体（[[gspo]]、[[dapo]]、[[dr-grpo]]、[[tis]]、[[cispo]]），以及 [[scalerl]] 最佳实践方案。核心发现包括：

1. RL 的 Scaling 行为在特定设置内是可预测的，但缺乏预训练那样的普适性
2. 许多 GRPO 变体主要提升学习效率而非渐近性能
3. 将更多算力用于每个提示的多次采样比延长训练更有效
4. RL 训练对数据复用高度鲁棒（复用系数高达 25 倍）
5. 学习效率随模型规模呈饱和 S 形增长，32B 模型在算力紧张时可超越 72B 模型

## 引用文献

- [1] ScaleRL — 耗时超 40 万 GPU 小时的大规模 RL Scaling 研究
- [2] 基于 Qwen-2.5 系列的 RL 后训练 Scaling 行为研究
- [3] IsoCompute Playbook — RL 采样算力最优分配研究

## 与现有知识的关联

本文显著扩展了 [[scaling-law]] 的内涵，从预训练阶段延伸到 RL 阶段，揭示了两种 Scaling Law 在数学形式、适用范围和实践方法上的根本差异。