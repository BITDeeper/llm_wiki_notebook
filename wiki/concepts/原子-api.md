---
type: concept
title: 原子 API (Atomic API)
tags: [api-design, eda, middleware]
related: [fluxeda, mcp-model-context-protocol]
created: 2026-04-06
updated: 2026-04-06
sources: ["agent接管EDA工作流，不只写脚本！浙大打通真实芯片设计闭环.md"]
---

# 原子 API (Atomic API)

原子 API 是指将复杂的软件工具能力拆解为最小可执行单元，并通过统一接口暴露给上层调用者的设计模式。在 [[fluxeda]] 系统中，原子 API 是构建统一执行底座的基础。

## 设计原则
- **单一职责**：每个 API 仅执行一个特定的工具操作（如读取时序报告、替换单元）。
- **统一封装**：屏蔽底层工具的异构性（如 Tcl 脚本、C++ SDK、命令行），对外提供统一的调用格式（如 `api_*`）。
- **可组合性**：上层 Agent 可以通过组合多个原子 API 来构建复杂的优化流程。

## 在 EDA 中的应用
传统的 EDA 工具链包含大量分散的命令和脚本。原子 API 层将这些能力整理成结构化的接口，使得 [[EDA Agent]] 无需理解底层工具的复杂语法，只需调用语义清晰的接口即可完成任务。