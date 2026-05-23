---
type: concept
title: Objective-driven AI
created: 2026-05-21
updated: 2026-05-21
tags: [ai架构, 安全, 世界模型, 优化]
related: [yann-lecun, jepa-联合嵌入预测架构, 世界模型, scaling-law]
sources: ["lecun炮轰hinton：他认可llm就是想摆烂退休了！.md"]
---
# Objective-driven AI

[[yann-lecun|LeCun]] 提出的替代 LLM 的架构蓝图，通过给系统目标和 cost function，利用世界模型预测行动后果并优化行动序列。

## 核心机制

1. 给 AI 系统一个目标（完成某个任务）
2. 系统利用[[世界模型|世界模型]]预测一系列想象中的行动的结果
3. 如果结果满足 cost function（描述任务完成程度），系统通过优化找到最小化 cost 的行动序列
4. 可以叠加多个目标函数、cost function 和约束条件

## 安全优势

- 可以在抽象层面指定安全约束
- 可以有底层目标函数组合起来保证系统不会危险
- **系统从构造上就不能违反这些条件**——这是与 LLM 的根本区别

## 与 LLM 的对比

- LLM 总是能逃逸：训练误差和测试误差之间总有 gap，总会存在某个 prompt 让系统做出愚蠢的事情
- Objective-driven AI 仍会犯错（cost function 可能不准确、世界模型可能不准确），但至少能预测行为后果
- LLM 没有任何硬性约束强制完成任务，也没有机制预测任务是否被正确完成

## 应用前景

- 工业系统最优控制（喷气发动机、化工厂、发电厂、生产线）
- 医疗方案设计（慢性病治疗、干细胞分化控制）
- 家用机器人、L5自动驾驶