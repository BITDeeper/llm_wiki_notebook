---
type: concept
title: MCP Registry
tags: [automation, anthropic, integration, tools]
related: [claude-cowork, artefacts, anthropic]
created: 2026-01-19
updated: 2026-01-19
sources: ["anthropic一夜震撼升级：claude获得「永久记忆」！全球打工人变天.md"]
---

# MCP Registry

MCP Registry (Model Context Registry) 是 [[anthropic]] 正在开发的一种动态管理和安装自动化连接器的体系。它是 [[claude-cowork]] 实现高级自动化能力的关键基础设施。

## 功能定义
MCP Registry 允许 Claude 动态管理多个远程连接器，并按需安装“官方批准模块”。这意味着 Claude 不再局限于内置的功能，而是可以通过插件化的方式扩展其操作系统的能力。

## 工作原理
1. **按需调用**：当用户下达任务时，Claude 会自动判断并调用合适的 MCP 连接器来完成任务。
2. **官方审核**：所有连接器模块需经过官方批准，以确保安全性和稳定性。
3. **自动化执行**：连接器赋予了 Claude 直接操作外部工具和系统的能力，使其不仅能“想”和“写”，还能真正“做”。

## 应用场景
- **文件管理**：自动整理、移动或重命名本地文件。
- **系统操作**：执行脚本、修改配置或调用 API。
- **第三方集成**：连接 Notion、Slack、GitHub 等外部服务，实现跨平台工作流自动化。

## 战略影响
MCP Registry 的建立标志着 Claude 从单纯的“文本生成器”向“AI 操作系统”演进。通过构建标准化的工具生态，Anthropic 试图在与 OpenAI 插件生态的竞争中占据优势，并重新定义 AI 助手的工作流边界。