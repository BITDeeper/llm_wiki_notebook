---
type: entity
title: AlphaProof
created: 2026-05-25
updated: 2026-05-25
tags: [ai系统, 数学推理, 强化学习, deepmind]
related: [alphaproof-nexus, google-deepmind, 形式化证明搜索]
sources: ["一个问题几百美元，deepmind智能体一次搞定了9个erdős问题.md"]
---
# AlphaProof

[[google-deepmind]] 开发的辅助求解工具，受 AlphaEvolve 启发，经过奥数级别强化学习训练。在 [[alphaproof-nexus]] 的全功能智能体架构中作为辅助求解工具被调用。

## 特点

- 专门针对奥数级别问题进行过强化学习训练
- 在全功能智能体架构中提供额外的求解能力
- 与 [[gemini-3-1-pro]] 和 [[gemini-3-0-flash]] 协同工作

## 定位

在 AlphaProof Nexus 框架中，AlphaProof 是"全功能智能体"架构的组件之一，提供特化的数学推理能力。然而实验表明，不调用 AlphaProof 的极简"基础智能体"同样能解决所有9个 [[erdős问题]]，引发了对特化系统价值的讨论。
