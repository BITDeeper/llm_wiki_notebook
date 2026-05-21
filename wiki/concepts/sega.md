---
type: concept
title: SEGA (Self-Evaluated Group Advantage)
tags: [reinforcement-learning, algorithm, gem-component]
related: [gem-框架, 认知过滤, bradley-terry-model]
created: 2026-01-22
updated: 2026-01-22
sources: ["aaai'26-oral：小样本对齐人类认知，llm不再模仿答案.md"]
---

# SEGA (Self-Evaluated Group Advantage)

**SEGA** (Self-Evaluated Group Advantage) 是 GEM 框架中的核心算法模块，全称为“自评估群体优势”。它基于群体认知优势整合原理，将筛选后的推理链转化为用于策略优化的隐式奖励。

## 核心机制

不同于传统的成对比较，SEGA 将一组生成的推理链视为一个“认知群体”。它计算每一条推理链相对于群体均值的优势值，以此作为奖励信号。

## 设计优势

1.  **稳定性**：群体内的相对评估比绝对评分更稳定，有效解决了小样本场景下的奖励过优化问题。
2.  **最优基线**：优势函数具有零均值特性，这符合强化学习理论中的最优基线准则，有助于最小化梯度更新的方差。
3.  **信息保留**：多路比较保留了认知过程的连续性，避免了传统成对比较方法中的信息损失。

## 理论基础
SEGA 是对经典 **Bradley-Terry 偏好模型** 的群论扩展，具有严格的收敛性证明。它不仅是一种工程技巧，更是将群体决策理论引入 AI 对齐过程的数学化实践。