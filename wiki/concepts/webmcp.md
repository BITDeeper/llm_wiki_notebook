---
type: concept
title: WebMCP (Web 模型上下文协议)
tags: [协议, api, agent, 浏览器, 交互范式]
related: [mcp, agentic-ui, 分层-web, 视觉模拟, google-chrome]
created: 2026-02-11
updated: 2026-02-11
sources: ["谷歌chrome深夜爆更，agent不用「装」人了！前端最后防线崩了？.md"]
---

# WebMCP (Web 模型上下文协议)

WebMCP（Web Model Context Protocol）是一种新兴的 Web 标准，旨在允许网站直接向浏览器内的 AI 智能体暴露结构化工具和函数。

## 核心功能
通过 `navigator.modelContext` API，WebMCP 使得 Agent 能够绕过图形用户界面（GUI），直接与网页服务的内核进行交互。这意味着 Agent 不再需要模拟人类的视觉行为（如识别按钮并点击），而是可以直接调用后端逻辑。

## 技术实现
WebMCP 提供了两种主要的 API 接入方式：
1. **声明性 API**：用于在 HTML 表单中定义的标准操作。
2. **命令式 API**：用于处理需要 JavaScript 执行的复杂动态互动。

## 优势
与传统的 [[视觉模拟]]（屏幕抓取）相比，WebMCP 具有以下显著优势：
- **成本更低**：无需消耗大量 Token 处理截图和解析页面。
- **稳定性更高**：不依赖 DOM 结构，网站改版不会导致 Agent “瘫痪”。
- **效率更高**：直接调用函数，无需反复视觉确认。

## 愿景
谷歌软件工程师 [[khushal-sagar]] 将其比作 AI 应用领域的“USB-C 接口”，旨在建立用户、网页和智能体三者共享界面的协作模式。该协议由谷歌与微软开发者联手在 GitHub 开源，致力于成为跨平台的标准。