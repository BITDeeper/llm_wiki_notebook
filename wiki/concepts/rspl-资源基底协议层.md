---
type: concept
title: RSPL 资源基底协议层
created: 2026-05-30
updated: 2026-05-30
tags: [智能体, 自进化, 协议, 资源管理]
related: [autogenesis-protocol-agp, sepl-自进化协议层, 闭环自进化流程, runtime-agent-os]
sources: ["leetcode-c++近满分！autogenesis要给智能体装上「自进化操作系统」.md"]
---
# RSPL 资源基底协议层

RSPL（Resource Substrate Protocol Layer）是 [[autogenesis-protocol-agp|Autogenesis Protocol]] 的底层协议，负责定义"什么东西可以被进化"。

## 核心功能

RSPL 将智能体内部的五类组件抽象为**协议级资源**：

1. **Prompt**：提示词资源
2. **Agent**：智能体本身作为资源
3. **Tool/MCP/Skill**：工具与技能资源
4. **Environment**：环境配置资源
5. **Memory**：记忆与状态资源

每类资源配备：
- **显式状态**：资源的当前运行状态
- **生命周期管理**：从注册到退役的完整生命周期
- **版本接口**：支持版本追踪和对比
- **可演化标记**：标记资源是否允许被进化修改

## 关键设计原则

RSPL 的资源本身是**被动**的：它们不会自行修改。所有状态变化必须通过上层的 [[sepl-自进化协议层|SEPL]] 接口完成。这确保了系统既能进化，又不会变成不可控的黑箱。

## 提供的操作接口

- 注册（Register）
- 调用（Invoke）
- 版本管理（Version）
- 回滚（Rollback）
- 合约生成（Contract Generation）
- 执行追踪（Execution Tracing）

## 与 Runtime Agent-OS 的关系

RSPL 的定位与 [[runtime-agent-os]] 有相通之处——都试图为智能体构建"操作系统底座"。但 RSPL 更聚焦于资源的协议化治理和版本管理，而非运行时调度。

## 核心价值

RSPL 让智能体系统从"代码工程"迈向"资源治理"，回答了"改了什么、为什么改、改坏了能否回滚"的核心痛点。