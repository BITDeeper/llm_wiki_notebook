---
type: entity
title: ATLAS 视觉推理范式
created: 2026-05-22
updated: 2026-05-22
tags: [视觉推理, 多模态, meta-ai, 强化学习, ai模型]
related: [meta-ai, 香港中文大学, functional-token, la-grpo, 梯度稀释, vla-视觉-语言-动作]
sources: ["meta华人发布atlas，一个词搞定可泛化的视觉推理！.md"]
origin_date: 2026-05-22
---
# ATLAS 视觉推理范式

ATLAS 是由 [[meta-ai|Meta AI]] 与 [[香港中文大学]] 联合提出的全新视觉推理范式，其核心主张是：**一个离散 Token 足以同时承担视觉推理中的"操作执行"和"内部思考"双重角色**。

## 核心理念

ATLAS 打破了传统视觉推理的三条路线局限：

1. **Unified Models**：依赖显式生成中间视觉状态，直观但开销高、训练复杂。
2. **Agentic Visual Reasoning**：依赖外部工具或执行器，可解释但流程重、需额外监督。
3. **Latent Visual Reasoning**：推理压缩到模型内部，轻量但可扩展性和泛化性差。

ATLAS 的核心洞察是：很多视觉推理操作可以被压缩成一个高层语义动作，而这个动作可以由一个离散 [[functional-token|Functional Token]] 表达。**"One Word is Enough for Both"——一个 word，既是操作，也是思考。**

## 技术架构

### Functional Token 机制

在标准自回归序列中嵌入特殊离散 Token，如：
- `<|Line|>`：画线操作，注意力聚焦于几何结构
- `<|Shape|>`：区域标记，注意力聚焦于目标区域
- `<|Arrow|>`：方向关系
- `<|Text|>`：标注操作，注意力聚焦于需编号区分的对象

这些 Token 无需改变模型架构，通过 Next-Token Prediction 自然生成，但一旦出现在推理链中，就成为模型内部的视觉操作锚点。

### 两阶段训练

1. **SFT 阶段**：使用 ATLAS-178K 数据集（覆盖 40+ 种视觉推理任务），让模型学习包含 Functional Token 的推理轨迹。
2. **RL 阶段**：通过奖励合理使用 Functional Token、惩罚 Token Spam，确保模型在真正需要时才使用视觉操作 Token。

### LA-GRPO 算法

详见 [[la-grpo]]。针对 [[梯度稀释]] 问题，在 GRPO 基础上引入 Token-level Anchor，精准强化关键 Functional Token 的生成概率。

## 实验结果

- 在几何推理、空间关系、多视角理解、计数、细粒度视觉判断等任务上取得竞争力表现。
- 效率远超需生成中间图像的方法。
- 注意力分析证实 Functional Token 确实触发了真实的内部视觉操作，而非仅仅是符号标记。

## 意义与局限

**意义**：ATLAS 为多模态模型提供了一种新的能力接口——让模型学会一套简洁的视觉动作语言，在保证可扩展性、泛化性、可解释性的同时，避免冗长推理过程和额外中间监督。

**局限**：Functional Token 的词表设计目前主要针对几何、空间、计数等特定任务，在更开放的自然场景理解或长视频推理中的泛化能力尚待验证。SFT 阶段仍依赖显式标注数据，"无需监督"更多指无需中间图像级别的视觉监督。

## 开放问题

- Functional Token 的词表规模如何决定？
- 是否能通过模型自动发现新的视觉操作 Token 而非人工预定义？
- 在开放域视觉理解任务中的泛化能力如何？

## 链接

- 论文：https://arxiv.org/pdf/2605.15198
- 项目主页：https://atlas-oneword.github.io
- 代码：https://github.com/ZiyuGuo99/ATLAS