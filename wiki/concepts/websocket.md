---
type: concept
title: WebSocket
tags: [网络协议, 实时通信, 性能优化]
related: [openclaw, warm-up-预热机制]
created: 2026-03-03
updated: 2026-03-03
sources: ["龙虾再进化！强化飞书表格技能，25.2万星登顶超越reactlinux.md"]
---

# WebSocket

WebSocket 是一种全双工通信协议，能够在单个 TCP 连接上进行全双工数据传输。在 AI 智能体（如 [[openclaw]]）与后端模型的交互中，WebSocket 被用来替代传统的 HTTP 请求，以提升实时性。

## 在 AI 交互中的作用
- **降低延迟**：相比 HTTP 的轮询或短连接，WebSocket 提供了持久化的连接通道，减少了握手开销。
- **流式输出**：更适合处理大语言模型的流式响应（Token 逐个生成），使得用户能实时看到生成过程。
- **稳定性**：结合 [[Warm-up 预热机制]]，可进一步减少首轮响应的卡顿，提升对话体验的“丝滑度”。