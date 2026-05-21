---
type: concept
title: Warm-up 预热机制
tags: [性能优化, 延迟, websocket]
related: [websocket, openclaw]
created: 2026-03-03
updated: 2026-03-03
sources: ["龙虾再进化！强化飞书表格技能，25.2万星登顶超越reactlinux.md"]
---

# Warm-up 预热机制

Warm-up 预热机制是一种优化技术，通常与 [[WebSocket]] 连接配合使用。在 AI 智能体建立连接后、正式发送用户请求前，系统会预先进行一次轻量级的握手或数据传输。

## 目的
- **减少冷启动延迟**：提前建立连接上下文，确保首次交互时网络通道已处于最佳状态。
- **提升用户体验**：避免用户点击发送后经历长时间的等待，使交互响应更加灵敏。

在 [[openclaw]] 的更新中，该机制被用于优化 OpenAI 接口的调用体验。