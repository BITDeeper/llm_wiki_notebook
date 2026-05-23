---
type: concept
title: MCP（Model Context Protocol）
created: 2026-05-12
updated: 2026-05-12
tags: ["协议", "基础设施", "claude", "protocol", "integration", "context", "标准", "agent", "集成", "tool-integration", "interoperability"]
related: ["claude-code", "channels", "anthropic", "boris-cherny", "skill-能力单元", "app-解构", "任务执行范式", "deepseek", "peekaboo-v3", "openclaw", "cursor"]
sources: ["claude-code也要龙虾化！凌晨床上发条消息，mac-mini瞬间亮屏狂敲代码.md", "claude-code之父首曝：「养蛊式」开发，质量碾压老架构师.md", "skill会吃掉app吗？龙虾时代，这个问题值得认真聊聊｜沙龙报名.md", "梁文锋自掏200亿？deepseek被曝500亿天价融资.md", "openclaw低调更新重磅版本，龙虾长手长脚了.md"]
---
# MCP（Model Context Protocol）

MCP（Model Context Protocol）是一种将工具能力打包为标准协议供 AI 工具调用的机制。它允许外部工具将其能力（如屏幕截图、文件操作、API 调用等）以标准化接口暴露给 AI 编程工具和智能体框架。

## 核心特征

- **标准化接口**：工具开发者只需实现一次 MCP Server，即可被多种 AI 工具调用。
- **解耦设计**：工具能力与 AI 模型分离，任何支持 MCP 的 AI 工具都能接入。
- **即插即用**：用户通过简单命令（如 `npx -y @steipete/peekaboo mcp`）即可将工具接入工作流。

## 典型应用场景

以 [[peekaboo-v3]] 为例，其将 Mac 桌面操控能力打包为 MCP Server 后，[[cursor]] 可以自主截图、查看 UI 问题、修改代码、重新运行验证——全程无需人类介入。这展示了 MCP 在 AI 工具互操作中的关键作用。

## 行业影响

MCP 正在成为 AI 工具生态中能力分发的标准化机制。如果广泛采用，将显著降低工具集成成本，加速 Agent 生态的工具丰富度。