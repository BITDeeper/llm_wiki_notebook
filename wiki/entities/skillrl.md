---
type: entity
title: SkillRL
tags: [ai, framework, reinforcement-learning, skill-evolution]
related: [metaclaw, ji-neng-zhu-ru, ji-neng-jin-hua, zai-xian-qiang-hua-xue-xi]
created: 2026-03-12
updated: 2026-03-12
sources: ["真·养虾！3步让龙虾边聊边进化，不用gpu不用数据集就能强化学习.md"]
---

# SkillRL

SkillRL 是 [[MetaClaw]] 系统中自研的技能增强强化学习框架。它通过“技能注入”和“技能进化”的组合拳，使 AI 智能体能够在交互过程中实现能力的即时提升和自我迭代。

## 核心机制

### 技能注入
在每轮对话中，SkillRL 能够精准匹配相关的技能指令，并将其注入到系统提示中。这使得 AI 无需等待模型训练结束，当场就能优化表现，解决了模型训练滞后性的问题。

### 技能进化
当 AI 在交互中出现错误（“翻车”）时，SkillRL 会自动分析完整的交互轨迹，定位问题根源，并自动生成一个新的技能存入技能库。当下次遇到类似情况时，该技能会被检索并注入，从而避免同类错误再次发生。

## 应用场景
SkillRL 是 [[MetaClaw]] 实现终身学习能力的核心组件，特别适用于需要长期记忆和自我修正的 Agent 应用场景。