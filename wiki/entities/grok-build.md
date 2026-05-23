---
type: entity
title: Grok Build
created: 2026-05-15
updated: 2026-05-15
tags: [coding-agent, ai编程, xai, 编程工具]
related: [xai, claude-code, cursor, colossus-2, ai-subscription-crisis]
sources: ["马斯克人在北京，xai发布首款coding-agent.md"]
origin_date: 2026-05-15
---
# Grok Build

Grok Build 是 [[xai]] 于2026年5月15日发布的首款 Coding Agent，专为专业软件工程和复杂编程任务设计，直接对标 [[anthropic]] 的 [[claude-code]]。

## 产品状态

- **阶段**：早期测试版（Early Beta）
- **访问方式**：仅面向 SuperGrok Heavy 订阅用户开放
- **运行环境**：终端原生运行

## 核心特性

### 并行子智能体（Subagents）
对于大型复杂任务，Grok Build 将工作分派给多个并行运行的子智能体。提供完整的子智能体追踪透明度，在主智能体追踪之上配备相同的导航控制。这与 [[多agent协作架构]] 和 [[1-n-agent调度]] 趋势一致。

### 计划模式（Plan Mode）
针对复杂任务，在正式执行代码前先生成计划供人类审批。支持行内注释和计划重写，体现人类在环（human-in-the-loop）的安全理念。执行后每项更改以 diff 形式显示。

### 工作流兼容
支持从 [[claude-code]] 无痛迁移：
- AGENTS.md 一键导入
- Skills 一键导入
- MCP Servers 一键导入
- 自动识别并遵循代码仓库中的开发规范

### 其他特性
- 终端内直接生成图像和视频
- 更快的 worktrees
- 同时支持鼠标操作和 vim 操作方式
- Hunk Tracker 可回溯到对话中的任何时间点

## 定价

通过 SuperGrok Heavy 订阅访问：
- **原价**：300美元/月
- **折扣价**：前6个月99美元/月

此定价进一步印证 [[ai-subscription-crisis]] 趋势——高端 AI 编程工具定价持续攀升。

## 开发背景

Grok Build 的开发受益于 [[cursor]] 团队的融入。马斯克此前以600亿美元收购 Cursor，其团队成为 xAI 换血后的核心研发力量。xAI 工程师表示产品理念是"为习惯 vim、快捷键和 alt-screen 的开发者打造完美融入工作流的终端体验"。