---
type: concept
title: Thinking/Non-Thinking双模式
created: 2026-05-19
updated: 2026-05-19
tags: [大模型, 架构, 推理模式, qwen]
related: [qwen系列, qwen3-7-max-preview]
sources: ["qwen最新3.7-max预览版空降！两代超大杯并行迭代，林俊旸走了但还在加速.md"]
origin_date: 2025-01-01
---
# Thinking/Non-Thinking双模式

[[qwen系列]] Qwen3 系列引入的架构特性，允许模型在两种推理模式间切换：

## Thinking模式
- 面向复杂推理、长链路决策、Agent 任务
- 深度思考，允许更长推理时间
- 适用于需要多步推理的复杂场景

## Non-Thinking模式
- 面向低延迟、快速响应场景
- 牺牲推理深度换取响应速度
- 适用于简单问答和实时交互

这一设计反映了大模型行业从单一推理模式向场景自适应推理的发展趋势，使同一模型能够兼顾深度推理和快速响应两种需求。