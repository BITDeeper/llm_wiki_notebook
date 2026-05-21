---
type: concept
title: EDA Agent
tags: [eda, agent, workflow-automation, 芯片设计]
related: [openclaw-zju, fluxeda, 任务执行范式]
created: 2026-04-06
updated: 2026-04-06
sources: ["agent接管EDA工作流，不只写脚本！浙大打通真实芯片设计闭环.md"]
---

# EDA Agent

EDA Agent 是指能够自主理解芯片设计目标、稳定接入真实 EDA 工具、分析设计结果并进行迭代优化的 AI 系统。它代表了 AI 在 EDA 领域从“辅助工具”向“自主执行者”的范式转变。

## 核心特征

### 1. 全流程闭环
区别于仅能生成 Tcl/Python 脚本的 AI 助手，EDA Agent 能够完成跨工具、跨步骤、跨上下文的持续执行闭环。例如在 [[Post P&R (Place and Route) 自动化 ECO (Engineering Change Order)]] 任务中，Agent 需要连续执行读取设计、生成报告、分析路径、修复违例等一系列操作。

### 2. 结构洞察力
EDA Agent 不只是盲目试错，而是能理解电路拓扑结构。例如在 [[标准单元库子库优化]] 中，Agent 能够识别设计中的关键薄弱点（如前端驱动偏弱），并进行有针对性的剪枝和补强。

### 3. 安全与可控
通过 [[MCP (Model Context Protocol)]] 和 Skill 机制，EDA Agent 在受限的沙箱环境中运行，避免了直接操作工业 Shell 带来的风险。

## 演进路径
- **阶段一**：AI 辅助写命令（生成脚本）。
- **阶段二**：AI 问答助手（知识检索）。
- **阶段三**：AI Agent 自主推进流程（当前阶段，如 [[fluxeda]] 系统）。

## 挑战
- **工具接入复杂性**：需要处理 Tcl/Python/Shell 交织的复杂环境。
- **上下文管理**：如何在长流程中维持全局状态和策略一致性。
- **结果验证**：确保 Agent 的优化结果符合物理规则和设计规范。