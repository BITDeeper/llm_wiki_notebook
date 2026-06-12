---
type: concept
title: MagicNorm
created: 2026-06-09
updated: 2026-06-09
tags: [训练稳定性, 归一化, 递归架构]
related: [hrm-分层递归架构, hrm-text, warmup-deep-credit-assignment]
sources: ["rss/新架构模型hrm-text创新纪录！1b参数、1000美元，图灵奖得主都亲自下场了.md"]
---
# MagicNorm

[[hrm-分层递归架构|HRM]]架构中引入的训练稳定性技术。模块内部保留有利于梯度流动的PreNorm结构，但在每轮递归模块退出时额外加入一次归一化。

## 机制

- **前向传播**：限制激活值在反复循环中的方差增长
- **反向传播**：尽量保留顺畅的梯度路径

同时兼顾两个方向的稳定性，解决递归架构中同一组模块被反复调用后激活值方差累积、梯度消失或爆炸的核心难题。