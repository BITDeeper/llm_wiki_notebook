---
type: concept
title: WebSockets
tags: [网络协议, 低延迟, 工程优化]
related: [gpt-5-3-codex-spark, 实时编程]
created: 2026-02-13
updated: 2026-02-13
sources: ["openai史上最快模型降临，每秒1000token！代码从此「炸出来」.md"]
---

# WebSockets

[[WebSockets]] 是一种在单个 TCP 连接上进行全双工通信的协议。在 [[GPT-5.3-Codex-Spark]] 的发布中，OpenAI 通过引入持久化的 WebSocket 连接重写了底座，是实现[[实时编程]]体验的关键技术细节。

## 在 Spark 中的应用

为了配合 [[Cerebras]] 硬件的极速推理能力，OpenAI 必须消除网络层面的瓶颈。传统的 HTTP 请求/响应模式在频繁交互中会产生较高的往返开销（RTT）。通过使用 WebSockets：
- **持久连接**：避免了每次生成都重新建立连接的开销。
- **降低延迟**：往返开销降低了 80%，首个字符出现的速度提升了 50%。

## 意义

这表明在追求极致 AI 体验（如 <100ms 响应）的今天，网络协议层的优化与模型推理速度的优化同等重要。