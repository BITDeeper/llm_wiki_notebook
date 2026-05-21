---
type: entity
title: PLDM
created: 2026-05-03
updated: 2026-05-03
tags: [world-model, baseline, jepa]
related: [leworldmodel, jepa, dino-wm]
sources: ["lecun的世界模型单gpu就能跑了.md"]
---

# PLDM

[[PLDM]] 是一种端到端的 [[jepa]] (Joint Embedding Predictive Architecture) 世界模型方法。在 [[leworldmodel]] (LeWM) 发布之前，PLDM 是该领域的主流方法之一。

## 局限性

尽管 PLDM 采用了端到端训练，但它依赖于复杂的训练技巧（如 EMA、Stop Gradient）来防止模型坍塌。这导致：
- 训练过程不稳定。
- 难以进行超参数调优。
- 在推箱子、机械臂控制等任务上的性能普遍低于 LeWM。

LeWM 通过引入 [[sigreg]] 正则化，成功替代了这些复杂技巧，从而在性能上全面超越了 PLDM。