---
type: concept
title: 几何一致性奖励模型
tags: [reinforcement-learning, video-generation, world-model]
related: [ic-world, grpo, gong-xiang-shi-jie-sheng-cheng]
created: 2026-03-28
updated: 2026-03-28
sources: ["ai「活在同一个世界里」了！首个共享世界生成模型ic-world登场.md"]
---

# 几何一致性奖励模型

**几何一致性奖励模型**（Geometry Consistency Reward Model）是 [[ic-world]] 中用于强化学习微调的两种奖励机制之一，专门用于解决静态场景的空间对齐问题。

## 功能

该模型负责评估生成的多视角视频在几何结构上是否一致。它会惩罚那些在不同视角下出现物体位置飘移、场景结构错位（如一个视角中物体在桌左，另一视角在桌右）的生成结果。

## 作用

通过引入这一奖励信号，配合 [[grpo]] 算法，IC-World 能够显著提升生成视频在静态场景下的空间稳定性，确保所有视角描绘的是同一个物理空间。