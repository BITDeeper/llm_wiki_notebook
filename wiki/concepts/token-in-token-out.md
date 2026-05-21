---
type: concept
title: Token-in-Token-out
created: 2026-02-23
updated: 2026-02-23
tags: [训练优化, 数据流, 强化学习]
related: [异步强化学习基础设施, glm-5]
sources: ["智谱glm-5技术全公开！完全适配华为等国产芯片，美国网友酸了.md"]
---

# Token-in-Token-out

Token-in-Token-out (TITO) 是一种在强化学习训练流程中处理数据的方法论，特别是在 [[异步强化学习基础设施]] 中起到关键作用。

## 定义
TITO 要求训练流程直接消费推理引擎生成的精确 tokenization 结果和解码后的 token ID 流，而不是将推理引擎视为返回最终文本的黑箱。

## 对比：Text-in-Text-out
- **Text-in-Text-out**：训练器接收文本字符串，需要重新进行 tokenization。这个过程可能在 token 边界、空白处理、截断或特殊 token 放置上引入细微不匹配，从而影响对单个 token 采样概率的精确估计。
- **TITO**：通过拦截 rollout 任务的所有生成请求，记录每个轨迹的 token ID 和元数据，完全消除了重新处理带来的误差。

## 重要性
在强化学习（尤其是 PPO）中，策略梯度的计算高度依赖于对数概率的精确估计。TITO 确保了训练所用的概率分布与推理生成时的分布完全一致，这对于提升训练稳定性和最终模型性能至关重要。GLM-5 实现了一个 TITO 网关来管理这一过程。