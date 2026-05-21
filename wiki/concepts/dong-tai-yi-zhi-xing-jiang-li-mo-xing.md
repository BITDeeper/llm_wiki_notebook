---
type: concept
title: 动态一致性奖励模型
tags: [reinforcement-learning, video-generation, world-model]
related: [ic-world, grpo, gong-xiang-shi-jie-sheng-cheng]
created: 2026-03-28
updated: 2026-03-28
sources: ["ai「活在同一个世界里」了！首个共享世界生成模型ic-world登场.md"]
---

# 动态一致性奖励模型

**动态一致性奖励模型**（Motion Consistency Reward Model）是 [[ic-world]] 中用于强化学习微调的两种奖励机制之一，专门用于解决动态行为的时间同步问题。

## 功能

该模型负责评估生成的多视角视频在物体运动和交互行为上是否同步。它会检查不同视角下物体的动作轨迹、交互事件（如人拿起杯子）是否在时间轴上保持一致。

## 作用

通过引入这一奖励信号，IC-World 确保了即使相机位置不同，场景中发生的动态事件在所有视角下也是同步发生的，这对于模拟真实物理世界的因果关系至关重要。