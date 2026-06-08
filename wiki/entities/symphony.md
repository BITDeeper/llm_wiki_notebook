---
type: entity
title: Symphony
tags: ["tool", "open-source", "orchestration", "ai-programming", "工具", "开源", "编排层", "openai"]
related: [openai, codex, claude-code, 上下文工程, linear, 任务执行范式, agent自进化闭环]
created: 2026-04-29
updated: 2026-06-06
sources: ["和anthropic-ceo一起发过nature，他用claude-code复活三年烂尾代码.md", "openai曝光「自进化」ai！6周准确率翻三倍，bug全自己修.md"]
origin_date: 2026-04-01
---

# Symphony

Symphony 是 [[openai]] 于 2026 年 4 月开源的 [[codex]] 与 [[linear]] 项目管理工具编排层，旨在解决工程师在同时管理多个 AI 编码会话时面临的上下文切换成本过高的问题——即"人类注意力成为 Agent 产能天花板"的问题。

## 诞生背景

OpenAI 工程师发现，一个人同时管 3 到 5 个 Codex 会话已是极限，再多就陷入上下文切换的泥潭。人的注意力成了 Agent 产能的天花板。

## 核心理念

**"别管 Agent 了，管工作本身。"**

Symphony 将项目管理工具（如 [[linear]]）的看板转化为 AI 编程的控制中心：

- **自动派发**：监控 issue tracker，每一个 Open 状态的 Issue 会自动分配一个独立的 Agent 工作空间。
- **持续运行**：Agent 在独立工作区中持续运行，自己干活、跑 CI、生成 PR；崩溃自动重启，新任务自动接手。
- **人类角色**：工程师从"写代码的人"转变为"Review 产出物的人"。
- **修 harness 而非修 prompt**：Agent 失败时，不去改 prompt 让它"再试一次"，而是想"它缺了什么能力、什么上下文、什么结构"，然后修 harness 而非修 prompt。

## 成效

根据 OpenAI 的统计数据：

- 部分团队在上线 Symphony 的头三周，成功合并的 PR 数量暴涨了 **500%**。
- OpenAI 内部使用后，部分团队的工程产出直接翻倍。
- 它极大地降低了尝试新重构方案的成本，甚至允许产品经理和设计师直接通过自然语言提交功能请求。

## 技术哲学

Symphony 代表了 AI 编程管理的**广泛编排模式**（"开工厂"）。与 [[brendan-maclean]] 在 [[skyline]] 项目中采用的**深度上下文模式**（"带徒弟"）不同，Symphony 更侧重于通过规范文档（SPEC.md, WORKFLOW.md）来实现大规模的并行任务处理。

### 与自进化闭环的关系

Symphony 体现了 [[harness改进-vs-模型改进]] 的核心思想：不换引擎改底盘调悬挂，同样能让系统变强。它是 [[任务执行范式]] 从"对话驱动"向"调度驱动"转变的工程实现。

## 自举

Symphony 的核心规范最初由 Codex 生成，OpenAI 甚至使用 Symphony 编排 Codex 重写了 Symphony 本身。