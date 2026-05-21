---
type: concept
title: Anticipatory Routing
tags: [optimization, training, moe, deepseek]
related: [training-stability-challenge, swiglu-clamping, megamoe]
created: 2026-04-25
updated: 2026-04-25
sources: ["deepseek-v4报告亮了！v4发布延迟的秘密，终于曝光了.md"]
---

# Anticipatory Routing

Anticipatory Routing（预期路由）是 DeepSeek 为解决超大规模 MoE 模型训练不稳定问题而提出的一种技术方案。

## 工作原理
该机制的核心思想是在路由阶段使用稍早版本的参数，将骨干网络的更新与路由网络的更新进行解耦。

## 作用
这种解耦打破了 MoE 层中数值异常值通过路由机制不断放大形成的恶性循环，从而有效防止了训练过程中的 Loss Spike，提升了训练的稳定性。

## 评价
DeepSeek 在报告中确认该方法“显著有效”，但也指出其底层机理尚未完全明确，属于一种针对特定工程问题的务实解决方案。