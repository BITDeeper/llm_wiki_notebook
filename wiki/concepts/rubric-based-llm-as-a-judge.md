---
type: concept
title: Rubric-based LLM-as-a-Judge
created: 2026-05-23
updated: 2026-05-23
tags: [评测方法, llm评审, 工程素养, ai编程]
related: [swe-atlas, 变异测试, pass3-一致性指标]
sources: ["ai编程进入下半场！新基准不测补丁，拷问真正的工程能力.md"]
---

# Rubric-based LLM-as-a-Judge

**Rubric-based LLM-as-a-Judge** 是一种使用结构化打分表让LLM对答案的工程严谨度逐项评分的评估方法，由 [[swe-atlas|SWE Atlas]] 基准引入并系统化应用。

## 核心思想

传统基准用测试套件跑通与否来判定 Pass/Fail，本质上只衡量"能不能用"。而 Rubric-based LLM-as-a-Judge 让LLM按照专家编写的结构化打分表，从代码评审的专业视角逐项评估：

- 测试是否覆盖了边界条件？
- 重构后是否清除了旧定义？
- 文档是否同步更新？
- 是否引入了反模式？
- 是否破坏了接口？

## 在 SWE Atlas 中的应用

- Codebase Q&A：平均 10.5 条 rubric
- Test Writing：平均 17.1 条 rubric
- Refactoring：平均 17.4 条 rubric + 平均 18 条测试

所有 rubric 经过独立专家三审，3位专家中至少2位认为有效才会保留。

## 核心价值

该方法能捕捉"功能正确但工程不合格"的差距。例如在重构任务中，模型通过回归测试的比例高达60-80%，但 rubric 评分被腰斩——模型能保持行为不变，但未完成清理旧定义、提取模块等结构性工作。