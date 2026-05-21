---
type: entity
title: DeepSeek-Math
tags: [数学模型, 强化学习, deepseek]
related: [guo-daya, deepseek-coder, grpo, deepseek-r1]
created: 2026-03-22
updated: 2026-03-22
sources: ["大厂抢郭达雅进行时！deepseek核心成员还是个“综艺巨佬”.md"]
---

# DeepSeek-Math

DeepSeek-Math 是 [[DeepSeek]] 发布的专注于数学推理的大模型，于 2024 年 2 月发布。

## 技术特点
- **基础模型**：基于 [[DeepSeek-Coder]]-Base-v1.5 7B 进行继续训练。
- **训练数据**：额外使用了 120B 数学相关的 token。
- **核心贡献**：在 DeepSeek-Math 的论文中首次提出了 [[GRPO]] (Group Relative Policy Optimization) 算法。这一新型强化学习方法后来成为 [[DeepSeek-R1]] 推理能力涌现的关键技术。
- **核心作者**：[[郭达雅]]。