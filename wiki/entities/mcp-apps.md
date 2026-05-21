---
type: entity
title: MCP Apps
tags: [anthropic, mcp, protocol, ui, sdk]
related: [anthropic, agentic-ui, chat-as-an-app]
created: 2026-02-01
updated: 2026-02-01
sources: ["claude一夜吞掉所有app，全球打工人变天！ai时代「操作系统」诞生.md"]
---

# MCP Apps

**MCP Apps** 是模型上下文协议（MCP）的官方扩展插件，于 2026 年 2 月由 Anthropic 发布。它允许任何 MCP 服务器在支持该协议的 AI 客户端（如 Claude）中提供交互式用户界面（UI）。

## 核心功能
MCP Apps 解决了 AI 模型与软件工具之间的「感知隔阂」。在此之前，工具调用通常返回纯文本结果，用户难以对复杂数据（如几百行数据库记录）进行进一步操作（排序、筛选、查看详情）。MCP Apps 允许工具直接在对话流中渲染一个交互式界面（如数据仪表盘、配置向导、文档审查器），极大地提升了交互效率。

## 技术架构
MCP Apps 的架构基于两个核心 MCP 原语：

1.  **带有 UI 元数据的工具**：工具定义中包含 `_meta.ui.resourceUri` 字段，指向特定的 UI 资源。
2.  **UI 资源**：由服务端通过 `ui://` 协议提供的资源，包含打包好的 HTML/JavaScript 代码。

宿主端（如 Claude）获取资源后，会在一个**沙箱化的 iframe** 中将其渲染出来，并利用 `postMessage` 通过 JSON-RPC 协议实现双向通信。

## 开发者生态
开发者可以使用 `@modelcontextprotocol/ext-apps` 软件包来构建 MCP Apps。该包提供的 `App` 类用于处理 UI 与宿主端的通信。目前，ChatGPT、Claude、Goose 以及 VS Code 等主流客户端已完成支持。

## 应用场景
- **数据探索**：销售分析工具返回交互式仪表盘，用户可直接按地区过滤、穿透查看详情。
- **配置向导**：部署工具显示带有联动字段的表单，根据环境（生产/预发布）自动调整选项。
- **文档审核**：合同分析工具在行间直接显示 PDF 并高亮关键条款，用户点击批准后模型实时获取结果。
- **实时监控**：服务器健康监测工具展示动态指标，无需重新运行工具即可掌握最新动态。

## 意义
MCP Apps 的发布标志着 AI 正告别「纯文本」时代，进入了 [[Agentic UI]]（智能体界面）的标准化时代。它不仅是交互方式的升级，更是将 AI 从「聊天机器人」转化为「全功能生产力工具」的关键一步。