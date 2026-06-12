---
type: concept
title: Plan-Execute-Verify循环
created: 2026-06-10
updated: 2026-06-10
tags: [agent-harness, 执行循环, 反馈机制]
related: [code-as-agent-harness, agent-harness, vlm质检闭环, 断点续跑]
sources: ["rss/claude-code爆火背后的agent-harness底层逻辑，uiuc、meta、斯坦福深度解读.md"]
---
# Plan-Execute-Verify循环

## 定义

[[code-as-agent-harness|代码中心Agent Harness]]的核心执行机制。计划定义操作范围→执行在沙箱或受限环境中发生→验证依赖测试、linter、静态分析和运行日志，构成可重复的状态转移过程。

## 三个阶段

### Plan（计划）

不再只是模型脑内计划，而变成Plan.md、workflow或可执行任务图。计划本身被代码化，成为可检查、可追踪的对象。

### Execute（执行）

在沙箱或受限环境中发生实际操作——修改文件、运行命令、调用工具。执行过程产生客观反馈信号。

### Verify（验证）

依赖测试、linter、静态分析和运行日志对执行结果进行检查。验证不仅判断成功/失败，更提供具体的错误定位和修复方向。

## 核心洞察

**成熟Agent不应该害怕报错。** 报错、测试失败和执行日志，正是代码harness控制Agent行为、让它逐步收敛的反馈传感器。这与传统"一次写对"的代码生成理念根本不同——Agent Harness拥抱失败，将失败转化为控制信号。

## 与现有概念的关系

- [[vlm质检闭环]]是Plan-Execute-Verify在AI生成流程中的具体应用
- [[断点续跑]]依赖Verify阶段的状态持久化实现容错
- [[agent-harness-后训练]]在训练阶段模拟这一循环以优化模型

## 代表系统

- SWE-agent：将"写代码—运行—失败—修复"组织成可重复的状态转移过程
- OpenHands：类似的可重复执行循环
- [[claude-code|Claude Code]]：工业级Plan-Execute-Verify实践
- [[codex|Codex]]：工业级Plan-Execute-Verify实践