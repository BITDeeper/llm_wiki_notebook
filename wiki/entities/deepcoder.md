---
type: entity
title: DeepCoder
tags: [数据集, 代码生成, 基准测试]
related: [microcoder, livecodebench, 代际性训练动态差异]
created: 2026-03-29
updated: 2026-03-29
sources: ["打破代码大模型训练瓶颈：微软&剑桥&普林推出microcoder，算法、数据、框架、训练经验全面升级.md"]
---

# DeepCoder

[[DeepCoder]] 是一个主流的代码生成数据集，常用于代码大模型的训练和评估。

## 局限性
根据 [[MicroCoder]] 项目的研究发现，DeepCoder 对于新一代推理模型而言**过于简单**。使用该数据集训练最新模型时，性能几乎没有提升，这揭示了**[[代际性训练动态差异]]** 现象。相比之下，经过严格难度筛选的 [[MicroCoder-Dataset]] 在相同训练条件下能带来 3 倍的性能增益。