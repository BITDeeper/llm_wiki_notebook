---
type: source
title: "ICML 2026 | 只用少量Thinking Tokens，大模型依然能深度思考"
created: 2026-05-18
updated: 2026-05-18
tags: [icml-2026, chain-of-thought, 隐式推理, 多模态, 高效推理]
related: [heima, thinking-tokens, 隐式推理, 沈轩, 浙江大学]
sources: ["icml-2026-只用少量thinking-tokens，大模型依然能深度思考.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/aFc3zQKXhA1GFUNwYstfng"
venue: 机器之心
---
# ICML 2026 | 只用少量Thinking Tokens，大模型依然能深度思考

## 摘要

本文报道了浙江大学、Adobe Research、杜克大学联合提出的面向多模态大模型的高效推理框架 [[heima]]。该方法将冗长的文本 Chain-of-Thought（CoT）推理压缩为少量抽象的 [[thinking-tokens|thinking tokens]]，让模型在隐空间中完成高效推理。论文题为 *Efficient Reasoning with Hidden Thinking*，已被 ICML 2026 接收。

## 核心内容

### 问题背景
[[chain-of-thought推理|CoT 推理]]虽能提升模型复杂问题求解能力，但需要生成大量中间推理文本，导致推理 token 数显著增加，带来更高的延迟、显存占用和计算成本。在多模态大模型中，这一问题尤为突出。

### 方法设计
[[heima]] 包含三个关键组件：
1. **Thinking Token 替代**：将不同阶段的推理过程压缩为特殊 token（如 `<Thinking_of_Summary>`、`<Thinking_of_Caption>`、`<Thinking_of_Reasoning>`），其 hidden states 中编码了对应阶段的推理信息。
2. [[渐进式蒸馏]]：逐阶段将 CoT 文本替换为 thinking tokens，避免一次性压缩导致性能骤降。
3. [[自适应解释器]]：将 thinking tokens 映射回可变长度文本序列，用于验证和量化隐式推理的信息保留程度。

### 理论分析
从信息论角度论证了压缩有效性的条件：只要条件互信息 I(Y;C|X,T) 足够小，即 thinking tokens 已捕捉到原始 CoT 中最关键的推理信息，压缩就是有效的。

### 实验结论
- 在多个多模态推理 benchmark 上，Heima 在大幅减少 token 数量的同时保持接近甚至超过原始 CoT 的性能。
- Interpreter 能在无视觉输入的情况下，从 thinking tokens 中重建出连贯的推理过程。
- 压缩后的 thinking tokens 仍能保留处理视觉幻觉和语言幻觉所需的关键信息。

## 关键人物
- 第一作者 [[沈轩]]：浙江大学"百人计划"研究员，研究方向为高效人工智能。

## 代码
- https://github.com/shawnricecake/Heima