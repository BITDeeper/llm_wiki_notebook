---
type: concept
title: EMA 目标编码器
created: 2026-05-15
updated: 2026-05-15
tags: [自监督学习, ema, 编码器, 训练技巧]
related: [jepa, i-jepa, v-jepa]
sources: ["160行代码读懂lecun的jepa世界模型.md"]
---
# EMA 目标编码器

EMA（Exponential Moving Average，指数移动平均）目标编码器是自监督学习中的关键技术，在 [[jepa]] 系列模型中广泛使用。

## 核心机制

- **慢更新：** 目标编码器的参数不通过梯度更新，而是通过指数移动平均从在线编码器慢速复制
- **稳定训练信号：** 慢更新确保目标编码器提供稳定一致的训练目标，避免模型坍塌
- **与 Stop-Grad 配合：** 目标编码器的参数不接收梯度回传

## 在 JEPA 中的作用

在 [[i-jepa]] 和 [[v-jepa]] 中，EMA 目标编码器负责生成被遮区域的目标 embedding，预测器学习逼近这些目标。这种设计避免了模型直接复制输入的平凡解。

## 例外

[[leworldmodel]] 是 JEPA 系列中唯一不使用 EMA 目标编码器的变体，采用完全端到端的联合训练。