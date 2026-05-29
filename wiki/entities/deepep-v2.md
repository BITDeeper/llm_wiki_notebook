---
type: entity
title: DeepEP V2
created: 2026-05-28
updated: 2026-05-28
tags: [通信算子, gpu, moe, deepseek]
related: [deepgemm, orbit, deepseek-v4]
sources: ["全球首次单机降服万亿巨模deepseek-v4！rl后训练框架orbit开源！.md"]
---
# DeepEP V2

DeepEP V2 是一种高效通信算子库，被 [[orbit]] 框架集成用于支持 MoE 模型的 RL 后训练。与 [[DeepGEMM]]（矩阵乘法算子）配合使用，共同构成 Orbit 的底层算子基础设施。

在 MoE 模型的分布式训练中，Expert Parallelism 需要高效的 All-to-All 通信，DeepEP V2 即为解决这一瓶颈而设计。