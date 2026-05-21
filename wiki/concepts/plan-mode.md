---
type: concept
title: Plan Mode
tags: [ai-programming, workflow, claude-code, codex, methodology]
related: [claude-code, boris-cherny, yang-gu-shi-kai-fa, codex, 证据优先探索]
created: 2026-03-01
updated: 2026-05-06
sources: ["claude-code之父首曝：「养蛊式」开发，质量碾压老架构师.md", "再见，人类程序员！openai自曝：一行代码都不写了，100%用codex.md"]
---

# Plan Mode

Plan Mode（计划模式）是 [[claude-code]] 和 [[Codex]] CLI 0.9.0 引入的一种 AI 编程交互范式，旨在解决 AI 在处理复杂、多依赖任务时容易走偏、上下文理解不足以及意图对齐困难的问题。

## 核心原则

Plan Mode 遵循 **“谋定而后动”** 的原则，将编程任务明确拆分为两个阶段：

1.  **理解意图**：明确目标、划定范围、识别约束条件、制定验收标准。
2.  **技术规格**：生成决策完备的实施方案，无需后续追问即可直接执行（1-shot 执行）。

## 关键机制

### 证据优先探索
这是 Plan Mode 的核心原则。在向用户提问或生成代码之前，AI 会先在代码库中进行至少 2 次针对性搜索，检查配置文件、Schema 结构、程序入口等，以确保生成的方案基于实际代码库状态。

### 结构化交互
利用 `request_user_input` 工具，AI 在遇到歧义时会暂停执行流程，向用户抛出多项选择题：
-   总是提供选项。
-   包含一个推荐选项（对新手友好）。
-   仅询问那些会实质性改变计划的问题。

## 使用场景

Plan Mode 特别适用于以下情况：
-   需求复杂、依赖众多。
-   边界条件模糊。
-   涉及多个文件或模块的改动。

## 工作流集成

Plan Mode 是 [[boris-cherny]] 推荐的高级工作流的第一步。它通常与 [[yang-gu-shi-kai-fa]] 结合使用：
1.  先在 Plan Mode 下制定详细计划。
2.  执行实现。
3.  引入第二个 AI 实例进行审查。

## 价值与意义

Plan Mode 代表了 AI 编程工具从“被动补全”向“主动规划”的进化，强调了在执行前进行研究和对齐的重要性，类似于人类工程师在动手写代码前的需求分析阶段。

通过强制规划阶段，Plan Mode 减少了 AI 在执行过程中的随机性和错误率，确保后续的“养蛊式”审查有据可依。