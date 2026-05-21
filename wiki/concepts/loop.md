---
type: concept
title: Loop (循环)
tags: [ai-agent, claude-code, 自动化, 工作流]
related: [claude-code, boris-cherny, routines, runtime-agent-os]
created: 2026-05-06
updated: 2026-05-06
sources: ["claude-code之父红杉演讲震撼全场!-26年未写1行代码,-电脑都不开了.md"]
---

# Loop (循环)

Loop 是 [[claude-code]] 中的一种核心工作流机制，通过 `\loop` 指令让 AI 像 Cron 定时任务一样自我循环执行任务。[[boris-cherny]] 称之为“最酷的东西”，并断言“Loop 就是未来”。

## 工作原理

用户只需在对话中输入 `\loop`，AI Agent 就会进入持续运行模式，不断执行特定任务（如监控、修复、分析），直到任务完成或被手动停止。

## 典型应用场景

Boris Cherny 在演讲中分享了他个人使用的几十个 Loop 案例：

1. **CI 自动修复**：盯着 PR 自动修复 CI 错误、自动变基。
2. **反馈监控**：监控 X（Twitter）上的用户反馈，每 30 分钟汇总一次。
3. **测试维护**：专门修补 Flaky Tests（不稳定的测试项目），维护 CI 的健康。

## 进阶形态：Routines

Routines 是服务器端的 Loop。即使你把电脑合上，Agent 也会继续在云端运行。这意味着：
- 你睡着了，AI 还在提交代码、修 Bug、分析反馈。
- 第二天早上醒来，活已经被干完了。

## 意义

Loop 代表了 AI Agent 从“被动响应”向“主动持续运行”的范式转移。它使得软件不再是静态的，而是具有自我维护、自我进化的动态系统。这是 [[runtime-agent-os]] 架构在具体工具中的成功实践。