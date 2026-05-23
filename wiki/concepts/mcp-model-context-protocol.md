---
type: concept
title: MCP (Model Context Protocol)
tags: [protocol, agent, safety, eda, 协议, ai基础设施, 数据集成, 开放标准]
related: [fluxeda, openclaw-zju, eda-agent, anthropic, moody-s, 智能体工具层, 金融智能体模板]
created: 2026-04-06
updated: 2026-05-22
sources: ["agent接管EDA工作流，不只写脚本！浙大打通真实芯片设计闭环.md", "claude杀入华尔街，10个智能体接入office全家桶，爆改分析师桌面.md"]
---

# MCP (Model Context Protocol)

MCP (Model Context Protocol) 是一种开放的协议标准，用于约束大模型行为、标准化工具调用，使外部数据源能够接入 AI 智能体的工作环境。MCP 正在将分散的数据层整合为统一的 [[智能体工具层]]。

## 核心机制

MCP 定义了数据提供商与 AI 智能体之间的标准化接口，使得：

- 数据查询无需离开智能体界面
- 权限管理和凭证托管统一处理
- 不同数据源的查询语法差异被协议层屏蔽

系统预先声明一组原子接口（Skills），模型只能通过这些标准接口与底层工具交互，而不能直接执行任意 Shell 命令或访问不受控的系统资源。

## 核心价值

### 1. 安全隔离
将复杂的工具环境（如 EDA 工具链）与模型推理过程隔离，防止模型因幻觉或误操作导致不可逆的系统损坏（如误删文件、配置错误）。

### 2. 上下文压缩
通过结构化 API 将复杂的工具输出封装，仅向模型暴露关键的状态信息和结果数据，从而节省宝贵的 Token 空间（Context Window），让模型更聚焦于策略决策而非解析日志。

### 3. 能力发现
Agent 可以动态查询可用的 Skills 列表，实现工具能力的自动发现和调用，增强了系统的可扩展性。

## 应用场景

### EDA / 芯片设计

在 [[fluxeda]] 系统中，MCP 与 Skill 机制结合，构建了 Agent 操作真实 EDA 工具的安全沙箱，支撑 [[openclaw-zju]] 和 [[eda-agent]] 等项目的完整芯片设计闭环。

### 金融数据生态

通过 MCP 接入 Claude 生态的金融数据平台包括：

- **已接入：** FactSet、PitchBook、LSEG、Morningstar、S&P Capital IQ
- **新增（2026年5月）：** [[moody-s|Moody's]]（6亿家公司数据）、Dun & Bradstreet、IBISWorld、Third Bridge、Guidepoint

## 开放与锁定的张力

MCP 标榜开放标准，Moody's 的 MCP app/server 并非独家绑定 Claude。但 Anthropic 率先构建的金融数据生态实质上形成了先发锁定效应——谁先让智能体工具层成为标配，谁就拿到下个十年的金融数据入口。

## 产业影响

金融数据生态原来分散在数十个终端、数十个 API 上，每家用一套登录、一套权限模型、一套查询语法。MCP 正在把分散的数据层整合进统一的智能体工具层，终端层和 API 层之上，第三层正在成型。