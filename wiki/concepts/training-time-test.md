---
type: concept
title: Training-Time Test（训练时测试）
created: 2026-05-22
updated: 2026-05-22
tags: [训练范式, 自回归模型, 视频生成, train-test-mismatch]
related: [raven, history-supervision-gap, 自回归视频扩散模型]
sources: ["raven-改写-self-forcing-训练范式，在质量与语义表现更优的同时将动态指标提升-16.5%，cm-grpo-首次原生支持一致性模型对齐.md"]
---
# Training-Time Test（训练时测试）

**Training-Time Test**（训练时测试）是 [[raven|RAVEN]] 框架的核心方法论，指将模型自身 rollout 生成的历史（clean endpoint 和 noisy state 交错序列）重新打包进训练过程，使后续 chunk 的损失能够直接监督前面被缓存的历史表示。

## 核心思想

既然推理时模型必须依赖自己生成的历史，训练时也应该让模型在这种历史上学习。Training-time test 将推理时的依赖结构搬进训练过程，消除 [[history-supervision-gap]]。

## 具体流程

1. 让当前 causal student 进行一次自回归 self rollout
2. 为每个 chunk 产生两类信息：clean endpoint（最终生成的干净 latent）和 noisy denoising states（少步一致性采样轨迹中的状态）
3. 将这些状态重新组织为交错序列：noisy state 1, clean endpoint 1, noisy state 2, clean endpoint 2, ... noisy state T
4. 在同一张注意力图中处理这些状态，使后续 chunk 的损失能够监督前面历史表示的形成

## 关键特性

- 历史来自模型自己的 rollout，而非真实数据或独立加噪前缀
- 后续 chunk 确实会 attend 到这些历史表示
- 后续损失会穿过注意力连接，更新模型如何构建历史
- 不需要把整个自回归采样轨迹放进计算图里反向传播，训练开销可控

## 通用潜力

从更长远看，只要一个自回归模型需要生成、缓存并复用历史表示，training-time test 就有机会成为一种通用训练接口，不局限于视频生成领域。潜在适用场景包括长文本生成、音乐生成等需要缓存复用历史表示的自回归模态。