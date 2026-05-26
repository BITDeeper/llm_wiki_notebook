---
type: entity
title: Grok Build
created: 2026-05-15
updated: 2026-05-26
tags: [coding-agent, ai编程, xai, 编程工具, ai, 编程智能体, grok, 终端工具, agent, cli工具, 编程代理]
related: [xai, claude-code, cursor, colossus-2, ai-subscription-crisis, grok-v9-medium, codex, gemini-antigravity, elon-musk]
sources: ["马斯克人在北京，xai发布首款coding-agent.md", "xai解散，但grok还在上新，马斯克官宣新模型.md", "grok最新模型吃上cursor「加餐」，马斯克：coding实现巨大改进.md"]
origin_date: 2026-05-15
---
# Grok Build

Grok Build 是 [[xai|xAI]]（马斯克团队）于2026年5月15日发布的首款编码智能体，定位为"马斯克版 [[claude-code|Claude Code]]"——一个直接运行在命令行中的 AI 程序员，能读代码、做计划、改文件、跑测试，专为专业软件工程和复杂编程任务设计。形态类似 [[claude-code]] 和 [[codex]]，开发者可在本地项目目录中唤起它，让 AI 直接读项目、理解上下文、规划改动、修改代码文件。

## 产品状态

- **阶段**：早期测试版（Early Beta），约2026年5月中旬首次露头，随后开始向开发者广泛测试
- **访问方式**：仅面向 SuperGrok Heavy 订阅用户开放
- **运行环境**：终端原生运行
- **底层模型**：grok-code-fast-1

## 核心特性

### 计划模式（Plan Mode）
描述需求后，不直接修改代码，而是先输出结构化执行计划，列明每一步操作。用户可审阅、修改甚至重写整个计划，批准后才开始执行。支持行内注释和计划重写，体现人类在环（human-in-the-loop）的安全理念。执行后每项更改以 diff 形式显示。

### 并行子智能体（Subagents）
对于大型复杂任务，Grok Build 将工作分派给多个并行运行的子智能体，最多支持 **8 个子智能体**同时工作。提供完整的子智能体追踪透明度，在主智能体追踪之上配备相同的导航控制。这与 [[多agent协作架构]] 和 [[1-n-agent调度]] 趋势一致。

### 竞技场模式（Arena Mode）
让多个候选方案在内部"打擂台"竞争，择优采用。这是 Grok Build 相对于竞品的核心差异化机制之一。

### Skills、Marketplace、MCPs 集成
支持扩展能力，调用各种现成工具和插件。原生支持 MCP 和 ACP。

### 工作流兼容
支持从 [[claude-code]] 无痛迁移：
- AGENTS.md 一键导入
- Skills 一键导入
- MCP Servers 一键导入
- 自动识别并遵循代码仓库中的开发规范

### 其他特性
- 支持无界面运行
- 终端内直接生成图像和视频
- 构建自动化工作流
- 更快的 worktrees
- 同时支持鼠标操作和 vim 操作方式
- Hunk Tracker 可回溯到对话中的任何时间点

## 三种使用方式

1. **交互式 TUI**：终端全屏交互界面，开发者直接对话、查看计划、执行任务
2. **Headless 模式**：适合嵌入脚本、机器人或自动化流程，后台按指令跑任务
3. **Agent Client Protocol**：允许外部工具调用 Grok Build，将其变为可被第三方应用集成的编程 Agent

## 当前局限

Grok Build 底层运行的是 grok-code-fast-1 模型，仅有 **256K token 上下文窗口**，在竞争对手面前明显不足。对于大型单一代码库和长时间运行的 Agent 会话，这一上下文长度会成为瓶颈。待 [[grok-v9-medium|Grok V9-Medium]] 发布后，工具有望获得更强大的底层模型。

## 定价

通过 SuperGrok Heavy 订阅访问：
- **原价**：300美元/月
- **折扣价**：前6个月99美元/月

此定价进一步印证 [[ai-subscription-crisis]] 趋势——高端 AI 编程工具定价持续攀升。

## 开发背景

Grok Build 的开发受益于 [[cursor]] 团队的融入。马斯克此前以600亿美元收购 Cursor，其团队成为 xAI 换血后的核心研发力量。xAI 工程师表示产品理念是"为习惯 vim、快捷键和 alt-screen 的开发者打造完美融入工作流的终端体验"。

## 市场定位

马斯克此前公开承认 xAI 在编程能力上落后，Grok Build 的发布被视为"补课式入场"——在功能架构上快速追平对手，再通过 Arena Mode 等差异化机制试图弯道超车。Grok Build 直接对标 [[claude-code]] 和 [[codex]]，标志着 AI 编程工具市场从双寡头（Anthropic vs OpenAI）扩展为多强竞争格局，[[终端原生编程智能体]] 赛道竞争进一步加剧。