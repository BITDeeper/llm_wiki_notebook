---
type: concept
title: Agent 验证机制
created: 2026-05-23
updated: 2026-05-23
tags: [agent, 验证, 自动化, 质量保障]
related: [codex-maxxing, codex-goal-mode, agentic-engineering]
sources: ["openai大神教你如何榨干codex.md"]
---
# Agent 验证机制

为 AI Agent 任务设定明确的完成标准，用于判断任务何时终止的质量保障机制。是 [[jason-liu]] 在 [[codex-maxxing]] 方法论中最强调的原则。

## 核心原则

> "没有验证机制的野心，顶多算个愿望。"——Jason Liu

验证机制是 Agent 自主运行的必要条件。没有可验证的反馈闭环，Agent 无法自主判断任务是否完成，也就无法实现真正的自主运行。

## 典型实现

- **单元测试**：让 Codex 将 Python Rich 库迁移到 Rust，硬性要求通过原库所有单元测试
- **人工审批**：Heartbeats 扫描 Slack/Gmail 后只起草草稿不发送，由人最终决定
- **状态检查**：监控外部状态变化（如退款到账），以状态变化作为完成标志

## 与 Goal 模式的关系

[[codex-goal-mode]] 的有效运行高度依赖验证机制。Goal 模式允许 Agent 自主运行数小时至数天，但前提是任务本身必须存在清晰、可验证的反馈闭环。

## 自主性 vs 控制权的张力

验证机制体现了 Agent 自主性与人类控制权之间的张力：Agent 越自主，人类越需要信任其判断，但验证机制的核心恰恰是不信任——必须通过客观标准确认完成，而非依赖 Agent 的自我判断。