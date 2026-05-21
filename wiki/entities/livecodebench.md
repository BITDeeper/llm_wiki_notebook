---
type: entity
title: LiveCodeBench
tags: [基准测试, 代码评估]
related: [microcoder, deepcoder, 多方法回退验证]
created: 2026-03-29
updated: 2026-03-29
sources: ["打破代码大模型训练瓶颈：微软&剑桥&普林推出microcoder，算法、数据、框架、训练经验全面升级.md"]
---

# LiveCodeBench

[[LiveCodeBench]] 是一个用于代码生成的基准测试数据集，也被 [[MicroCoder]] 项目用于校准数据难度。

## 评估器问题
LiveCodeBench 原版评估器采用严格的精确匹配策略（如直接等值比较、精确浮点计算）。这种策略会将格式正确但略有差异的正确答案（如列表与元组的差异、浮点精度差异）误判为错误，从而产生噪声，干扰强化学习训练。

## 改进
[[MicroCoder-Evaluator]] 通过 **[[多方法回退验证]]** 机制解决了这一问题，将评估准确率提升了约 25%。