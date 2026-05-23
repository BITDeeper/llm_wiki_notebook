---
type: entity
title: Heima
created: 2026-05-18
updated: 2026-05-18
tags: [icml-2026, 高效推理, 多模态, 隐式推理, 框架]
related: [thinking-tokens, 隐式推理, chain-of-thought推理, 渐进式蒸馏, 自适应解释器, 浙江大学]
sources: ["icml-2026-只用少量thinking-tokens，大模型依然能深度思考.md"]
origin_date: 2026-05-18
---
# Heima

Heima 是由 [[浙江大学]]、Adobe Research、杜克大学联合提出的面向多模态大模型（MLLMs）的 CoT 压缩与 [[隐式推理]] 框架。论文题为 *Efficient Reasoning with Hidden Thinking*，已被 ICML 2026 接收。第一作者为 [[沈轩]]。

## 核心思想

Heima 的核心判断是：人类可读的推理文本未必是模型内部"思考"的唯一形式。中间推理过程可以被压缩为更抽象、更紧凑的隐空间表示——即 [[thinking-tokens|thinking tokens]]。只要这些表示保留了对最终答案有用的信息，模型就不需要完整输出所有推理文本。

类比：将"写满一整页的草稿纸"压缩成几个模型内部能理解的思考符号。

## 三组件架构

### 1. Thinking Token 替代
将不同阶段的 [[chain-of-thought推理|CoT]] 推理压缩为特殊 token，例如：
- `<Thinking_of_Summary>` — 问题总结阶段
- `<Thinking_of_Caption>` — 图像描述阶段
- `<Thinking_of_Remarking>` — 推理分析阶段

这些 token 本身很短，但其 hidden states 中编码了对应阶段的推理信息。

### 2. 渐进式蒸馏
采用 [[渐进式蒸馏]]（Progressive Distillation）训练策略，逐阶段将 CoT 文本替换为 thinking tokens，而非一次性完成所有阶段的蒸馏。这种设计让模型更平滑地从"显式文本推理"过渡到"隐式抽象 token 推理"，避免性能骤降。

### 3. 自适应解释器
[[自适应解释器]]（Adaptive Interpreter）将 thinking tokens 映射回可变长度的文本序列，重建模型的推理过程。该解释器仅基于纯语言模型构建，不直接接收原始图像输入，却能从 thinking token 表示中重建出与视觉内容相关的推理信息，验证了隐空间中确实存在可被解析的推理过程。

## 理论基础

从信息论角度分析 CoT 压缩的信息差距：
- 记原始 CoT 为 C，压缩后的 thinking tokens 为 T，则 T = f(X, C)
- 由数据处理不等式，T 中关于答案 Y 的信息不会超过原始 C
- 关键条件：只要 I(Y; C|X, T) 足够小，即 thinking tokens 已捕捉到原始 CoT 中最关键的推理信息，压缩就是有效的

## 实验表现

- 在多个多模态推理 benchmark 上，大幅减少 token 数量的同时保持接近甚至超过原始 CoT 的性能
- Interpreter 能在无视觉输入的情况下重建出连贯的推理过程
- 压缩后的 thinking tokens 仍能保留处理视觉幻觉和语言幻觉所需的关键信息

## 代码仓库
- https://github.com/shawnricecake/Heima

## 开放问题
- 在纯文本 LLM 上的迁移效果尚未验证
- Interpreter 重建质量的具体量化指标需查阅原文
- 与同期其他 latent reasoning 方法（如 Coconut 等）的对比关系待探索