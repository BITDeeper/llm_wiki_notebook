---
type: entity
title: DIGER
tags: [推荐系统, 算法, 联合优化, SIGIR-26]
related: [生成式推荐, 语义id, 码本塌缩, rq-vae, gumbel-noise]
created: 2026-04-30
updated: 2026-04-30
sources: ["生成式推荐补上关键一环！语义id首次实现可微分联合优化-sigir'26.md"]
---

# DIGER

**DIGER** (Differentiable Generative Recommender) 是一种用于生成式推荐的算法框架，由格拉斯哥大学、山东大学和莱顿大学的研究者在 SIGIR 2026 上提出。它是首个在生成式推荐中实现语义ID可微分联合优化的方法。

## 核心机制

DIGER 的核心在于打破了传统“先学语义ID、冻结后再训练推荐模型”的两阶段范式，将语义ID的学习纳入推荐目标的优化闭环。

### DRIL (Differentiable Semantic ID with Exploratory Learning)
为了解决直接使用直通估计器（STE）导致的训练不稳定问题，DIGER 提出了 DRIL 机制。它在语义ID学习过程中引入 **Gumbel Noise**，用带探索性的可微分方式替代刚性的硬选择，使得推荐损失能够有效地回传到语义ID学习模块。

### 不确定性衰减策略
为了平衡训练前期“充分探索”与后期“稳定收敛”的矛盾，DIGER 设计了两种策略：

1.  **SDUD (Standard Deviation-based Uncertainty Decay)**：基于标准差的不确定性衰减。随着训练推进，逐步减弱 Gumbel Noise 的随机性，使模型从探索模式平滑过渡到收敛模式。
2.  **FrqUD (Frequency-based Uncertainty Decay)**：基于频率的不确定性衰减。根据不同 Code 的实际使用频率动态调节探索压力，防止少数热门 Code 过早主导语义空间，同时激活冷门 Code 的使用。

## 性能表现

在 Amazon Beauty、Amazon Instrument 和 Yelp 三个公开数据集上，DIGER 相比传统两阶段方法（如 ETEGRec, LETTER）在 Recall@10 和 NDCG@10 上均取得了显著提升。可视化分析显示，DIGER 能更均衡地利用码本，有效缓解了 [[码本塌缩]] 现象。

## 意义

DIGER 不仅提升了推荐效果，更提供了一种通用的视角：当系统依赖离散中间表示时，这些表示应当跟随最终任务一起优化，而非预先固定。