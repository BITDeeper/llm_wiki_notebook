---
type: concept
title: "PAPO（Parallel-Aware Policy Optimization）"
created: 2026-05-19
updated: 2026-05-19
tags: [强化学习, 策略优化, 并行推理, 算法]
related: [native-parallel-reasoner, 自蒸馏并行强化学习, 原生并行推理]
sources: ["icml-2026｜告别「单线程」思维，智能体进化出了原生的并行推理大脑.md"]
---
# PAPO（Parallel-Aware Policy Optimization）

PAPO（并行感知策略优化）是 [[native-parallel-reasoner|NPR]] 框架第三阶段的核心强化学习算法，专门针对并行语义设计，确保模型真正学会「执行并行」而非「模仿并行」。

## 设计动机

在并行语义下直接套用经典 PPO 或 DAPO 会遇到严重问题：

- **特殊 Token 被剪裁**：触发并行结构的特殊标签（如 `<guideline>`、`<step>`）的梯度被截断或削弱
- **重要性采样不稳定**：重采样比在并行计算图中波动剧烈
- **组内方差塌缩**：格式违规样本被移除后，传统组级优势估计失效

## 核心设计

### 1. 并行 Rollout

使用 NPR-Engine 产生严格遵守并行 Schema 的轨迹，保证样本合法性。

### 2. 结构化过滤

格式违规样本在进入优化前被剔除，奖励退化为纯准确性（+1 / −1）。

### 3. 批次级优势归一化

由于格式违规样本被移除导致组内方差塌缩，PAPO 改用更大范围（batch 内多组）统计标准差来稳定优势估计。

### 4. 保留特殊 Token 梯度 & 放弃重要性采样

- 在 Token 级别保留触发并行结构的特殊标签的梯度流，防止被裁剪
- 放弃重要性采样，采用严格的 On-policy Objective，避免重采样比带来的不稳定

## 与经典算法的关系

PAPO 基于策略梯度方法（Sutton et al., 1999）和 PPO（Schulman et al., 2017）的思想，但针对并行计算图做了专门修改，是首个直接在并行执行引擎上优化分支策略的 RL 算法。
