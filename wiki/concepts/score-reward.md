---
type: concept
title: SCORE 奖励机制
created: 2026-05-15
updated: 2026-05-15
tags: [强化学习, 奖励机制, 生物实验, ai-for-science]
related: [thoth, sketch-and-fill, knowledge-to-action, scirecipe-eval]
sources: ["8b模型做生物实验：实验步骤顺序不乱、剂量无幻觉｜iclr-2026.md"]
origin_date: 2025-10-01
---
# SCORE 奖励机制

SCORE（Structured COmponent-based REward）是 [[thoth]] 模型提出的基于结构化组件的奖励机制，用于替代传统文本相似度指标和 LLM-as-a-Judge，直接对齐实验可执行性。

## 核心理念

传统评估指标（BLEU、ROUGE、BERTScore）只看生成文本和参考答案像不像，LLM-as-a-Judge 虽然更接近人类偏好，但用于强化学习训练时代价过高且不够稳定。SCORE 直接从实验可执行性的角度出发设计奖励信号。

## 三个评估维度

### 1. Step Scale（步骤粒度）
判断步骤数量和粒度是否合理。步骤太少可能漏掉关键操作，步骤太多可能引入冗余和噪声。

### 2. Action Order（动作顺序）
判断动作顺序是否符合实验逻辑。对于实验来说，有些步骤即使都出现了，只要顺序错了，protocol 仍然不可执行。

### 3. Semantic Fidelity（语义保真）
判断动作、对象和参数是否匹配。例如"add"是否加到了正确试剂上，温度、浓度、时间等参数是否绑定到了正确对象。

## 门控机制

SCORE 加入两个门控机制作为前置检查：

- **格式门控**：检查模型是否按照 think、key、orc、note 顺序输出
- **一致性门控**：检查 key 中的动作、对象、参数是否被 orc 充分覆盖

只有通过基础检查的 protocol，才会进入后续奖励计算。

## 消融实验验证

消融实验证明 SCORE 各组件不可或缺：
- 去掉步骤粒度奖励后，顺序严格匹配和步骤匹配大幅下降
- 去掉动作顺序约束后，模型更容易生成顺序混乱的方案
- 用普通语义相似度奖励替代 SCORE，虽然部分词面指标可能变好，但 protocol 可执行性明显下降

## 意义

SCORE 将模型优化目标从"写得像参考答案"转变为"生成结构合理、顺序正确、语义忠实、实验上更可执行的 protocol"，是 [[ai-for-science]] 领域评估方法论的重要创新。