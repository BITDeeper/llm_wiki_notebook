---
type: entity
title: MIRAS
tags: [framework, memory, optimization, google-deepmind]
related: [nested-learning, 联想记忆, hope, google-deepmind]
created: 2026-01-08
updated: 2026-01-08
sources: ["transformer已死？deepmind正在押注另一条agi路线.md"]
---

# MIRAS

MIRAS 是一个用于系统化设计 AI 模型中记忆模块的通用框架，由 [[Google DeepMind]] 和 [[Ali Behrouz]] 等人提出。

## 核心理念
MIRAS 的核心思想是统一视角：**几乎所有注意力机制、本地记忆结构，乃至优化器本身，其实都可以视为 [[联想记忆]]（Associative Memory）的特例。**

## 设计维度
该框架将记忆结构的设计分解为四大决策维度：
1.  **记忆架构**（Memory Architecture）
2.  **注意力偏置/目标函数**（Attentional Bias/Objective）
3.  **保留机制**（Retention Gate）
4.  **学习规则**（Learning Rule）

## 意义
MIRAS 使得“记忆”可以被作为一种学习过程进行建模、组合与优化，而不仅仅是一个静态模块。它为构建 [[嵌套学习]] 系统提供了理论基础，支持了优化器与架构协同进化的设计理念。