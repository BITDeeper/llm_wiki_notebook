---
type: entity
title: IDE
created: 2026-03-12
updated: 2026-03-12
tags: [developer-tools, software-engineering, evolution]
related: [andrej-karpathy, claude-code, tmux, 智能体编排, 命令中心模式]
sources: ["卡帕西：编程从写文件变成管龙虾！ide不会凉但得换个用法.md"]
---

# IDE

集成开发环境（Integrated Development Environment）是用于提供程序开发环境的应用程序。在 AI 时代，IDE 的功能和定位正在经历根本性的转变。

## 传统定义
传统 IDE（如 VS Code, IntelliJ）主要用于代码文件的编辑、保存、编译和调试。其核心管理对象是**文件**和**文本**。

## AI 时代的进化
根据 [[Andrej Karpathy]] 的观点，随着 [[编程范式转移]] 的发生，IDE 的核心管理对象正在从“文件”转变为“[[智能体]]”。

### 功能重心的转移
- **从编辑到编排**：主要挑战不再是编写单段代码，而是如何让多个智能体高效协同。
- **从文件管理到组织架构设计**：未来的 IDE 将用于构建和运行类似公司组织架构的 Agent 协作网络（参见 [[组织架构即代码]]）。

### 新一代 IDE 的特征
Karpathy 设想中的下一代 IDE（或称为 [[命令中心模式]]）应具备以下能力：
1. **全局视图**：支持多显示器布局，能够一键显示/隐藏任意 Agent 的视图。
2. **实时监控**：可视化展示每个 Agent 的状态（空闲、忙碌、异常）。
3. **资源统计**：详细记录 Token 消耗、计算资源占用和任务完成率。
4. **交互控制**：支持快速针对特定 Agent 弹出终端或进行干预。

## 相关工具
- **[[tmux]]**：现有的终端复用工具，被 Karpathy 认为仅能“勉强凑合”用于管理多进程，缺乏全局掌控感。
- **[[Claude Code]]**：正在探索 AI 编程代理的工具，但在 Agent 管理界面上仍有进化空间。