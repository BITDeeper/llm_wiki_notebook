---
type: concept
title: Token级优化
created: 2026-02-27
updated: 2026-02-27
tags: [optimization, reinforcement-learning, 3d-generation]
related: [ar3d-r1, hi-grpo, grpo]
sources: ["首次证实rl能让3d模型学会推理，复杂文本描述下生成质量跃升！.md"]
---

# Token级优化

## 定义
[[Token级优化]] (Token-level Optimization) 是指在序列生成的每一步计算平均损失，而非在整个序列结束后计算总损失的优化策略。

## 在 3D 生成中的关键作用
在 [[AR3D-R1]] 的研究中，对比实验发现 Token 级优化显著优于序列级操作：
- **原理**：3D 物体的全局结构差异在自回归序列的每一个 token 中都有所体现。使用 token 粒度的平均 Loss 可以更细致地感知每一步生成的质量偏差。
- **对比**：序列级操作（如 GSPO 思路）在数学、代码任务中有效，但在 3D 生成上收益极低，因为关键信号容易被淹没在大量中性 token 中。

## 实践意义
这一发现表明，将 2D 或文本领域的 RL 算法直接迁移到 3D 领域可能失效，必须针对 3D 数据的长程依赖和结构特性进行算法层面的定制。