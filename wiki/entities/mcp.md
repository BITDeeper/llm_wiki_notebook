---
type: entity
title: MCP (Model Context Protocol)
tags: [protocol, standard, agent, tools, interoperability, ai-agent, integration, anthropic]
related: [openclaw, msb-mcp-security-bench, mcp-攻击分类体系, 工具调用, qoderwork, claude-cowork, 桌面智能体]
created: 2026-04-15
updated: 2026-05-06
sources: ["openclaw爆火，暴露12类致命隐患！mcp协议安全基准发布-iclr.md", "国产claude-cowork来了！阿里祭出首个桌面agent，打工人彻底解放.md"]
---

# MCP (Model Context Protocol)

**MCP (Model Context Protocol，模型上下文协议)** 是一种用于连接大语言模型（LLM）与外部数据源及工具的开放标准化接口协议。

## 功能与定位

MCP 的作用类似于硬件领域的 USB-C 接口，旨在统一 AI 工具生态。它充当了 [[桌面智能体]] 的“骨架”，解决了 AI 无法直接访问用户本地环境的割裂问题。

通过 MCP，AI Agent 能够安全、标准化地：
- 连接本地数据库（如 SQLite、PostgreSQL）。
- 读取和写入本地文档（如 Notion、Markdown 文件）。
- 调用用户自定义的脚本（如 Python 代码）。
- 调用文件系统、浏览器等外部资源。

这种能力使得 AI 能够实现从“回答问题”到“执行任务”的跨越，打破了应用孤岛，让 AI 直接在本地环境中执行任务，而无需依赖不稳定的云端上传下载流程。

## 应用案例

MCP 已成为实现 [[工具自由]] 的关键技术基础设施，被广泛应用于各类 AI Agent 项目中：

- **[[QoderWork]]**：作为核心架构组件，利用 MCP 打破应用壁垒，实现诸如“自动读取 Excel 生成周报”或“查询本地数据库生成图表”等任务。
- **[[openclaw]]**：通过适配器接入 MCP，以获取更广阔的工具能力。

## 安全挑战

尽管 MCP 极大地提升了 AI Agent 的能力，但也显著扩大了攻击面。根据 [[MSB (MCP Security Bench)]] 的研究，MCP 面临着系统性的安全风险：

1.  **攻击面扩展**：攻击面从传统的文本提示扩展到了工具名称、参数及响应内容。
2.  **全阶段风险**：在任务规划、工具调用和响应处理三个阶段均存在被攻击的可能性。
3.  **新型攻击**：出现了如“用户模拟（UI）”和“虚假错误（FE）”等针对协议特性的高成功率攻击手段。

## 行业意义

MCP 的普及预示着 AI 交互从单一的“对话模式”向深度的“系统集成模式”转变，是实现 AI 与本地环境深度融合的关键技术。