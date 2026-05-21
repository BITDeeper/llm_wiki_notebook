---
type: entity
title: ClawSweeper
tags: [ai, 工具, 自动化, 开源维护]
related: [openclaw, peter-steinberger, gpt-5.5, ai-自愈, readme即仪表盘]
created: 2026-04-26
updated: 2026-04-26
sources: ["太狠了！openclaw之父一夜屠光5000-issue，github服务器先跪了.md"]
---

# ClawSweeper

[[ClawSweeper]] 是由 [[openclaw]] 创始人 [[peter-steinberger]] 开发的一款 AI 驱动的自动化 Issue 清理工具。它旨在解决大型开源项目中常见的“Issue 坟场”问题，即积压的大量无效、重复或过时的 Issue。

## 核心特性

### 1. AI 驱动的分诊
系统核心运行在 [[gpt-5.5]] 模型上，配置了 `high reasoning effort` 和 `fast service tier`。它能够理解代码上下文和 Issue 内容，判断其有效性。

### 2. 极致保守的设计
为了赢得社区信任并防止误删，[[ClawSweeper]] 遵循 [[极致保守-设计哲学]]：
- **7种关闭条件**：仅在确凿情况下（如已修复、不可复现、重复等）执行关闭。
- **维护者豁免**：自动识别并跳过项目维护者发布的条目。
- **只读审查**：审查阶段无写权限，先生成快照，执行前二次确认。

### 3. 透明化监控
采用 [[readme即仪表盘]] 的运维模式，将处理进度、限流状态等实时数据直接写入仓库 README，让整个过程完全公开可审计。

## 性能数据
- **处理速度**：一天内关闭 5000+ Issue（相当于人类一年的工作量）。
- **运行成本**：总成本不到 1000 美元（平均每 Issue 约 0.2 美元）。
- **主要瓶颈**：[[github]] API 速率限制。

## 意义
[[ClawSweeper]] 是 [[ai-自愈]] 概念的典型实现案例，证明了 AI 可以安全、高效地接管开源维护中繁琐的机械性工作。