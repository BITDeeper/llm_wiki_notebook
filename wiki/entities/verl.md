---
type: entity
title: veRL
tags: [tool, rl, framework, 开源框架, 强化学习, 训练框架]
related: [twinkle, grpo, verl-omni, vllm-omni]
created: 2026-03-11
updated: 2026-05-25
sources: ["训练即服务！让模型训练回归算法语义，150行代码跑通rl.md", "verl-omni：面向扩散和全模态生成模型的通用rl后训练框架.md"]
---

# veRL

[[veRL]]（推测为 Volcengine RL）是一个开源的灵活 RL 训练框架，可用于强化学习训练的基准框架。

## 生态与扩展

veRL 是 [[verl-omni]] 的底层构建基础。[[verl-omni]] 在 veRL 之上扩展了对多模态、非自回归 RL 训练的支持，将其灵活性和性能延伸到扩散和全模态生成模型领域。

## 性能对比

在 [[Twinkle]] 的技术评估中，veRL 被用作性能对比的基准线。

- 在标准 GPU 上，Twinkle 与 veRL 的收敛曲线一致，训练速度相近。
- 在 [[昇腾]] 硬件上，Twinkle 的单步耗时（20s）优于 veRL（30s）。