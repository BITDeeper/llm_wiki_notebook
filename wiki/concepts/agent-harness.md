---
type: concept
title: Agent Harness（智能体执行系统）
created: 2026-06-10
updated: 2026-06-10
tags: ["tools", "infrastructure", "devops", "ai-architecture", "system-design", "training-free", "agent-system", "reliability", "agent", "架构", "工程化", "系统架构", "工具调用", "agent-harness", "智能体架构", "执行系统"]
related: ["minimax-m2.7", "自我进化", "minimax", "avenir-web", "runtime-agent-os", "任务执行范式", "creao", "anthropic", "minimax-m2-7", "openclaw", "赛博员工", "生产力智能", "code-as-agent-harness", "agent-harness-后训练", "claude-code", "codex", "macaron-v1-preview"]
sources: ["minimax-m2.7国服第一！龙虾自我进化，海外开发者疯狂刷屏.md", "龙虾冲浪终于不迷路了！网页智能体新框架avenir-web开源即sota.md", "anthropic发布managed-agents，才发现这支硅谷华人团队早就押对了赌注.md", "全行业都在忙着“吃虾”，minimax-m2.7已经让虾自己拿起筷子了.md", "从智能体到赛博员工，生产力智能涌现.md", "rss/claude-code爆火背后的agent-harness底层逻辑，uiuc、meta、斯坦福深度解读.md"]
---
# Agent Harness（智能体执行系统）

## 定义

让大模型在长期任务环境中可靠运行的执行系统。包含工具、API、沙箱、记忆、权限边界、验证器、反馈循环等组件，负责将模型接到真实执行环境中。

## 两个阶段

Agent Harness贯穿模型的训练和推理两个阶段：

1. **训练阶段（[[agent-harness-后训练]]）**：将模型后训练过程直接放入Agent执行环境中协同优化，使模型在训练阶段就与实际执行环境深度适配。[[macaron-v1-preview|Macaron-V1-Preview]]是这一路线的代表实践。

2. **推理执行阶段（[[code-as-agent-harness]]）**：模型部署后，harness组织长期执行过程——管理计划、执行、反馈、验证和状态管理。代码成为这一阶段的核心载体，因为其具备可执行、可检查、有状态三个独特属性。

## 核心组件

- **工具与API**：终端、沙箱、测试框架、静态分析器
- **记忆系统**：仓库证据、执行日志、失败经验、历史patch的保存与检索
- **权限边界**：控制Agent可执行操作的范围
- **验证器**：测试、linter、静态分析
- **反馈循环**：Plan-Execute-Verify循环

## 核心机制

Agent Harness的核心执行机制是**Plan-Execute-Verify循环**：计划定义操作范围→执行在沙箱中发生→验证依赖测试/linter/静态分析，构成可重复的状态转移过程。

## 与相关概念的关系

- [[任务执行范式]]：Agent Harness是任务执行范式的具体系统实现
- [[场景白盒化推理]]：代码化中间物使harness执行过程可检查、可干预
- [[agentic-engineering]]：Karpathy的概念侧重工作方式，Agent Harness侧重系统架构
- [[递归式自我改进]]：Harness的自我优化（regression-free self-evolution）是开放问题

## 来源

- UIUC/Meta/Stanford综述《Code as Agent Harness》（arXiv: 2605.18747）