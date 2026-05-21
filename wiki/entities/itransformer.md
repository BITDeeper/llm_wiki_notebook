---
type: entity
title: iTransformer
tags: [深度学习模型, 时间序列预测, Transformer]
related: [patchtst, mlow, 前置分解范式]
created: 2026-04-02
updated: 2026-04-02
sources: ["别再用黑盒预测了！即插即用模块通过前置分解让itransformerpatchtst既准又可解释.md"]
---

# iTransformer

**iTransformer** 是一种基于 Transformer 架构的深度学习模型，专门用于时间序列预测任务。它是当前 SOTA（State-of-the-Art）的时序预测基座模型之一。

## 特点

- **高性能**：在多项时间序列预测基准测试中表现出色。
- **架构**：利用 Transformer 的注意力机制捕捉时间序列中的长距离依赖关系。

## 局限性与改进

尽管 iTransformer 预测准确，但它通常被视为“黑盒”模型，缺乏内在的可解释性。为了解决这一问题，研究通常结合 [[前置分解范式]] 模块（如 [[MLOW]]）来增强其可解释性并进一步提升性能。实验表明，加入 MLOW 模块后的 iTransformer 表现优于原始版本。
