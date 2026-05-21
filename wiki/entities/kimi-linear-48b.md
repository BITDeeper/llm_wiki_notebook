---
type: entity
title: Kimi Linear 48B
created: 2026-03-17
updated: 2026-03-17
tags: [model, moe, moonshot-ai]
related: [moonshot-ai, attention-residuals, block-attnres]
sources: ["kimi新架构让马斯克叹服！17岁高中生作者一战成名.md"]
---

# Kimi Linear 48B

**Kimi Linear 48B** 是 [[月之暗面]]（Moonshot AI）开发的一个大语言模型，采用 MoE（混合专家）架构。该模型总参数量为 48B，激活参数量为 3B。

## 技术验证
该模型被用作验证 [[Attention Residuals]] 技术有效性的实验平台。

### 性能数据
- **训练效率**：在同等计算预算下，使用 Attention Residuals 的模型表现更好；达到相同性能所需的训练计算量减少了约 **20%**（即效率提升 **1.25 倍**）。
- **推理成本**：引入新机制后，推理延迟增加不到 **2%**。
- **任务表现**：在数学推理（MATH, GSM8K）、代码生成（HumanEval, MBPP）及多语言理解任务上，性能持平或优于基线模型。

### 架构特点
- 采用线性注意力机制。
- 使用 [[Block AttnRes]] 优化方案，解决了 Attention Residuals 带来的计算复杂度问题。