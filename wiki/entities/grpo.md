---
type: entity
title: GRPO
tags: [算法, 强化学习]
related: [microcoder, dapo, 代际性训练动态差异]
created: 2026-03-29
updated: 2026-03-29
sources: ["打破代码大模型训练瓶颈：微软&剑桥&普林推出microcoder，算法、数据、框架、训练经验全面升级.md"]
---

# GRPO

[[GRPO]] (Group Relative Policy Optimization) 是一种在数学推理任务上取得成功的强化学习策略优化方法。

## 在代码生成中的挑战
虽然 GRPO 在数学推理中表现出色，但直接将其迁移到代码生成任务时遇到了困难。研究显示，使用 GRPO 配合 [[DeepCoder]] 等数据集训练最新推理模型时，性能提升不明显。这主要是因为新模型的训练动态（如输出长度持续增长）与 GRPO 的原始设计假设存在**[[代际性训练动态差异]]**。

## 改进
[[MicroCoder]] 项目提出了 [[MicroCoder-GRPO]]，通过引入条件截断掩码、动态温度选择和去除 KL 散度等修改，使其适应现代代码模型的训练需求。