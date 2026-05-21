---
type: entity
title: "Gemini Live API"
tags: [api, google, websocket, real-time, streaming]
related: [gemini-3-1-flash-live, 多模态流式输入, 临时令牌]
created: 2026-03-28
updated: 2026-03-28
sources: ["谷歌干掉「请再说一次」！gemini-3.1毫秒级接话，实时agent时代来了.md"]
---

# Gemini Live API

[[Gemini Live API]] 是谷歌提供的用于接入 [[gemini-3-1-flash-live]] 实时能力的开发接口。它允许开发者构建具备实时语音、视觉和工具调用能力的 AI 应用。

## 技术架构

-   **连接方式**：基于有状态的 [[WebSocket]] 连接，支持全双工通信。
-   **音频规格**：输入支持 16kHz、16-bit PCM 音频，输出返回 24kHz、16-bit PCM 音频。
-   **数据流**：支持连续的音频、图片和文本流输入（[[多模态流式输入]]），并能以低延迟方式返回结果。

## 关键功能

-   **工具调用**：支持函数调用和 Google Search 等工具接入。
-   **会话管理**：具备会话状态管理能力，支持长时对话。
-   **音频控制**：支持用户随时打断（Barge-in）和主动音频控制。
-   **多语言支持**：内置多语言处理能力。

## 安全与部署

官方文档提供了两种接入模式：
1.  **后端中转**：服务器与 Live API 进行服务器到服务器通信。
2.  **前端直连**：前端直接建立 WebSocket 连接。在生产环境中，推荐使用 [[临时令牌]]（Ephemeral Tokens）而非直接暴露标准 API Key，以增强安全性。

此外，谷歌还提供了 WebRTC 扩展和全球边缘路由支持，以满足真实生产环境对低延迟和分发的需求。