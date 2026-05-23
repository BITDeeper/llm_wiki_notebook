---
type: concept
title: Sketch-and-Fill 推理范式
created: 2026-05-15
updated: 2026-05-15
tags: [推理范式, 结构化推理, 生物实验, ai-for-science]
related: [thoth, score-reward, knowledge-to-action, scirecipe]
sources: ["8b模型做生物实验：实验步骤顺序不乱、剂量无幻觉｜iclr-2026.md"]
origin_date: 2025-10-01
---
# Sketch-and-Fill 推理范式

Sketch-and-Fill 是 [[thoth]] 模型提出的核心推理范式，将生物实验 protocol 生成从自由文本生成推进到结构化科学推理。

## 核心思想

将 protocol 生成拆分为三个阶段，可以理解为"先让模型写实验骨架，再把骨架填充成完整操作说明"：

### 1. Think（分析阶段）
模型先分析任务目标、实验依赖和步骤必要性，形成对实验方案的整体理解。

### 2. Key（结构化阶段）
模型把实验方案抽象成机器可读的原子步骤，每一步都包含三个核心字段：
- **action**：执行什么操作
- **objects**：操作作用于什么对象
- **parameters**：在什么条件下完成

### 3. Orc（改写阶段）
模型将结构化步骤改写成自然语言 protocol，保证人类研究员能够直接阅读和执行。

## 设计优势

1. **可解析性**：实验步骤不再是难以检查的自由文本，而是被拆解为可解析的结构单元
2. **可检查性**：每一步做什么、作用于什么对象、在什么条件下完成，都可以被自动检查
3. **一一对应**：key 和 orc 之间要求一一对应，结构化步骤中的动作、对象和参数必须在最终自然语言 protocol 中体现，避免"空心框架"遗漏关键细节

## 与 SCORE 的配合

Sketch-and-Fill 的结构化输出为 [[score-reward]] 奖励机制提供了可评估的基础，使得步骤粒度、动作顺序和语义保真都可以被精确度量。