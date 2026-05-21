---
type: concept
title: MCP (Model Context Protocol)
tags: [protocol, agent, safety, eda]
related: [fluxeda, openclaw-zju, eda-agent]
created: 2026-04-06
updated: 2026-04-06
sources: ["agent接管EDA工作流，不只写脚本！浙大打通真实芯片设计闭环.md"]
---

# MCP (Model Context Protocol)

MCP (Model Context Protocol) 是一种用于约束大模型行为、标准化工具调用的协议机制。在 [[fluxeda]] 系统中，MCP 与 Skill 机制结合，构建了 Agent 操作真实 EDA 工具的安全沙箱。

## 工作原理
系统预先声明一组原子接口（Skills），模型只能通过这些标准接口与底层工具交互，而不能直接执行任意 Shell 命令或访问不受控的系统资源。

## 核心价值

### 1. 安全隔离
将复杂的 EDA 工具环境与模型推理过程隔离，防止模型因幻觉或误操作导致不可逆的系统损坏（如误删文件、配置错误）。

### 2. 上下文压缩
通过结构化 API 将复杂的工具输出封装，仅向模型暴露关键的状态信息和结果数据，从而节省宝贵的 Token 空间（Context Window），让模型更聚焦于策略决策而非解析日志。

### 3. 能力发现
Agent 可以动态查询可用的 Skills 列表，实现工具能力的自动发现和调用，增强了系统的可扩展性。