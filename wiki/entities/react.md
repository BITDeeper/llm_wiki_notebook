---
type: entity
title: React
tags: ["frontend", "library", "web-development", "ai-agents", "reasoning-frameworks", "prompting"]
related: ["openclaw", "linux", "recap", "chain-of-thought"]
created: 2026-03-03
updated: 2026-05-07
sources: ["刚刚，openclaw登顶github软件星标历史第一！已超越linux.md", "全面战胜react！斯坦福全新智能体推理框架，性能提升112.5%.md"]
---

# React

**React** 是一个具有多重含义的术语，主要指代两个截然不同但都在各自领域占据主导地位的技术概念：由 Meta 开发的 Web 前端库，以及 AI 智能体领域的推理框架。

## 1. Web 前端库

**React**（亦称 React.js）是由 Meta（原 Facebook）开发的用于构建用户界面的 JavaScript 库，是 Web 开发时代的标志性基建项目。

### 增长对比
React 花了 **13 年** 时间，依靠无数求职要求、企业架构选型和培训班的反复锤炼，才积累了超过 24 万颗 GitHub 星标。

相比之下，[[openclaw]] 达到同样的高度仅用了 **100 天**。这一巨大的反差被用来论证开源社区驱动力从“商业刚需”向“好奇心与情绪价值”的转变。

## 2. AI 智能体推理框架

**ReAct**（Reasoning + Acting，常写作 React）是一种于 2022 年提出的 AI 智能体推理框架。在过去三年中，它因其示例简单、高通用性和即插即用的优势，成为了该领域事实上的主流与标杆。

### 工作原理
ReAct 结合了“推理”和“行动”两个环节。它通过提示词引导大语言模型在执行动作之前生成推理轨迹，从而帮助模型维护任务目标并制定后续行动步骤。

### 局限性
尽管 ReAct 被广泛使用，但在处理长上下文复杂任务时存在显著局限：
1.  **目标漂移**：由于采用线性序列推理，当任务过长时，模型容易在执行几步后逐渐忽略原本的目标。
2.  **上下文断层**：虽然上下文相对连贯，但在面对需要层级分解的复杂任务时，缺乏有效的上下文管理机制。
3.  **性能瓶颈**：在 [[recap]] 等新框架的对比测试中，ReAct 在 Robotouille、ALFWorld 和 SWE-bench 等基准上的表现均被超越。

### 与 ReCAP 的对比
[[recap]] 框架的提出正是为了解决 ReAct 在长上下文任务中的上述痛点。ReCAP 通过引入递归树结构和父任务再注入机制，在保持通用性的同时，显著提升了任务执行的一致性和成功率。