---
type: concept
title: File over App
tags: [design-philosophy, data-sovereignty, interoperability]
related: [llm-wiki, byoai]
created: 2026-04-05
updated: 2026-04-05
sources: ["卡帕西引爆硅谷！公开「第二大脑」黑科技，1250万人围观.md"]
---

# File over App

“File over App” (文件优于应用) 是一种强调数据主权和互操作性的设计哲学，由 [[andrej-karpathy]] 在推广 [[llm-wiki]] 时重点提出。

## 核心原则
知识库和数据应当以通用的**文件格式**（如 Markdown、JSON、图片）存储，而不是被锁定在特定软件的专有数据库或黑盒 API 中。

## 优势
1.  **互操作性**: 任何工具或 Agent 都可以读取和操作这些文件，不依赖特定厂商的软件。
2.  **数据主权**: 用户拥有对自己数据的完全控制权，数据存储在本地，而非云端黑盒。
3.  **持久性**: 即使某个应用停止服务，用户的数据依然以标准格式存在，可以轻松迁移到其他工具。

## 在 LLM Wiki 中的应用
[[llm-wiki]] 强烈遵循这一原则，其核心产物是一堆 Markdown 文件。这意味着用户可以使用 Obsidian、VS Code 或任何文本编辑器查看知识库，也可以让 [[claude-code]] 等不同的 AI Agent 直接操作这些文件，而无需担心被特定 AI 生态锁定。