---
type: concept
title: Codex Goal Mode（/goal 命令）
created: 2026-05-13
updated: 2026-05-25
tags: ["ai编程", "目标驱动", "agent", "openai", "codex", "自主运行"]
related: ["ralph-loop", "gpt-5.5", "claude-code", "任务执行范式", "ai-for-science", "codex", "codex-maxxing", "jason-liu", "agentic-engineering"]
sources: ["博士80小时熬夜改代码，codex-2小时交卷！科研奇点来了.md", "openai大神教你如何榨干codex.md"]
---
# Codex Goal 模式（/goal 命令）

[[codex|OpenAI Codex]] 中的**目标驱动自主运行模式**，通过 `/goal` 命令激活。用户设定最终目标和验收标准后，Agent 可自主运行数小时至数天。2026 年 5 月从实验版本正式转正，标志着 AI Agent 从单次任务向长期自主项目的进化，也代表着从对话式 AI 到目标驱动 AI 的工程范式切换。

## 工作原理

按 OpenAI Codex 工程师 Philip Corey 的描述，`/goal` 是对 [[ralph-loop|Ralph Loop]] 的一种工程实现——让目标在多轮对话中持续存在，不达成不停止。

**普通 Codex 调用**：用户说一句 → AI 做一步 → 回复一句（线性交互）

**Codex /goal 模式**：用户设定一个目标 → AI 自行拆分子任务 → 自行执行 → 自行 review → 自行继续循环 → 直到达成或失败（自主循环）

### 核心特征

- 用户只需明确最终目标和验收标准
- Codex 自主持续推进，短则几小时长则数天
- 中途可查进度、调方向，也可直接暂停
- 前提是任务本身必须存在清晰、可验证的反馈闭环

## 与验证机制的关系

Goal 模式的有效运行依赖于明确的验证机制。[[jason-liu|Jason Liu]] 强调："没有验证机制的野心，顶多算个愿望。"只有当任务完成标准可以被客观判断（如通过所有单元测试）时，Agent 才能真正自主运行。

## 最优配置

[[dan-mcateer|Dan McAteer]] 总结的当前最高效 AI 智能体配置：

- **工具**：OpenAI Codex /goal 命令
- **模型**：[[gpt-5.5|GPT-5.5]] high
- **模式**：fast mode

其核心优势在于：模型自行设定的目标和提示词很可能比人类手写的更出色。

## 代表性案例

### Rich 库 Python → Rust 迁移

[[jason-liu|Jason Liu]] 曾让 Codex 在 Goal 模式下将 Python 的 Rich 库完整迁移到 Rust，硬性要求是必须通过原 Python 库的所有单元测试。测试通过与否决定了任务是否完成，失败则 Agent 继续修复。

### 机械可解释性研究

/goal 模式天然契合科研型循环任务（提出假设 → 设计实验 → 运行 → 看结果 → 修正假设 → 再实验），在机械可解释性研究任务中实现了约 40 倍效率提升（博士预估 80 小时 vs AI 实际 1 小时 56 分钟）。

## 与竞品的关系

Codex Goal Mode 与 [[claude-code|Claude Code]] 在 AI 编程代理赛道形成直接竞争，但 /goal 的"目标驱动"模式区别于 Claude Code 的"对话驱动"模式，代表了不同的 Agent 设计哲学。