---
type: concept
title: Functional Token
created: 2026-05-22
updated: 2026-05-22
tags: [视觉推理, 多模态, token, ai机制]
related: [atlas-视觉推理, la-grpo, 梯度稀释]
sources: ["meta华人发布atlas，一个词搞定可泛化的视觉推理！.md"]
origin_date: 2026-05-22
---
# Functional Token

Functional Token 是 [[atlas-视觉推理|ATLAS]] 范式的核心机制，指嵌入标准自回归序列中的特殊离散 Token，用于代表高阶视觉操作语义。

## 核心特性

**双重角色**：Functional Token 同时承担两种功能——
1. **Agentic Operation**：明确表示模型正在执行什么视觉操作（如画线、标记区域、标注方向）。
2. **Latent Visual Reasoning Unit**：在模型内部高效参与推理，不需要中间图像生成。

**"One Word is Enough for Both"——既是操作，也是思考。**

## 典型 Token 类型

| Token | 视觉操作 | 注意力聚焦区域 |
|-------|---------|--------------|
| `<\|Line\|>` | 画线/辅助线 | 几何结构、关键连接点 |
| `<\|Shape\|>` | 区域标记 | 目标区域 |
| `<\|Arrow\|>` | 方向关系 | 方向性视觉元素 |
| `<\|Text\|>` | 标注/编号 | 需区分的对象 |

## 技术优势

- **无需改变模型架构**：像普通词一样通过 Next-Token Prediction 生成。
- **无需额外视觉监督**：不需要中间图像级别的监督信号。
- **自然兼容现有训练框架**：可无缝集成到标准 SFT 和 RL 流程中。
- **高效紧凑**：将复杂视觉操作压缩为单一 Token，远比生成中间图像或调用外部工具高效。

## 注意力验证

研究表明，Functional Token 不只是简单的符号标记。当模型生成特定 Functional Token 时，注意力模式确实聚焦于对应的视觉操作区域，证明 Token 触发了真实的内部视觉操作。

## 训练挑战

Functional Token 在推理序列中极为稀疏，容易导致 [[梯度稀释]] 问题。[[la-grpo|LA-GRPO]] 算法通过 Token-level Anchor 精准强化关键 Token 的生成概率来解决这一问题。

## 开放问题

- 词表规模如何确定？是否能通过模型自动发现新的视觉操作 Token？
- 在开放域任务中，预定义的 Functional Token 是否足够表达丰富的视觉操作？