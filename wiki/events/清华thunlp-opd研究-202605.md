---
type: event
title: 清华 THUNLP 团队揭示 On-Policy Distillation 机制
created: 2026-05-14
updated: 2026-05-14
tags: [蒸馏, 研究突破, 清华大学, 大模型训练]
related: [on-policy-distillation, 思维模式一致性, 熵崩塌, token级别重叠率, off-policy冷启动, 教师对齐提示词, 清华thunlp实验室, qwen3-系列, deepseek-r1-distill-系列]
sources: ["名师一定出高徒？清华团队最新揭秘：别再迷信大模型蒸馏的「免费午餐」.md"]
origin_date: 2026-04-01
participants: [清华thunlp实验室, 上海科技大学, uiuc, 中国人民大学]
causes: [scaling-law]
effects: [on-policy-distillation, 思维模式一致性, 熵崩塌]
significance: high
time_span:
  start: 2026-04-01
  end: null
---
# 清华 THUNLP 团队揭示 On-Policy Distillation 机制

## 事件概述

2026 年 4-5 月，清华大学 THUNLP 实验室联合上海科技大学、伊利诺伊大学厄巴纳-香槟分校（UIUC）、中国人民大学，发表了关于 [[on-policy-distillation|On-Policy Distillation (OPD)]] 机制的系统性研究论文（arXiv: 2604.13016），首次全面揭示了 OPD 的黑箱机制及其局限性。

## 背景

OPD 已成为 2026 年大模型后训练的主流技术，Qwen3、MiMo、GLM-5 等最新模型均采用并报告巨大提升。然而实践中出现反直觉现象：更换更强 Teacher 后 Student 性能反而无提升甚至倒退。

## 核心发现

### 法则一：思维模式一致性
Student 与 Teacher 的初始 [[思维模式一致性]] 决定蒸馏成败。早期思维模式错配，后续难以弥补。

### 法则二：高分 ≠ 新知识
同 pipeline 更大模型不提供新可学习信息。经过 RL post-training 的 Teacher（如 [[skywork-or1-math-7b|Skywork-OR1-Math-7B]]）远优于同 pipeline 更大模型。

### Token 级别机制
[[token级别重叠率|Overlap Token]] 是优化的核心引擎，非重叠 Token 贡献极微。

### 扩展限制
在长响应中观察到 [[熵崩塌]]，揭示 OPD 难以直接扩展到长思维链或多轮场景。

## 实验设计

- **模型家族**：[[qwen3-系列|Qwen3 系列]] 和 [[deepseek-r1-distill-系列|DeepSeek R1-Distill 系列]]
- **极端验证**：反向蒸馏实验（用 [[justrl-1-5b|JustRL-1.5B]] 反向蒸馏）
- **消融实验**：Overlap Token 剥离实验

## 实用配方

1. [[off-policy冷启动|Off-Policy 冷启动]]：先 SFT 对齐再 OPD
2. [[教师对齐提示词|Teacher-aligned Prompts]]：对齐 prompt 分布（需混用 OOD prompt）

## 意义

本研究标志着大模型蒸馏领域的重要认知转折点：从"大力出奇迹"到"匹配出奇迹"的范式转变。它没有给 OPD 增加新 trick，而是第一次系统性地解释了为什么有些 Teacher 能教会学生，有些只是在"看起来更强"。