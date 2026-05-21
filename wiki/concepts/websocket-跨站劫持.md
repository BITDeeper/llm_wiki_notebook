---
type: concept
title: WebSocket 跨站劫持
tags: [security, web, vulnerability]
related: [openclaw, csrf, websocket]
created: 2026-03-13
updated: 2026-03-13
sources: ["openclaw-3.12来了：ui大翻新，模型提速，更耐造更安全.md"]
---

# WebSocket 跨站劫持

WebSocket 跨站劫持是一种网络安全漏洞，攻击者利用 WebSocket 协议的特性，通过恶意网页向受害者在其他站点（如本地管理后台）建立的 WebSocket 连接发送恶意指令。

## 风险场景
在 AI Agent 或自动化工具中，如果管理界面缺乏严格的来源验证，攻击者可能诱导用户访问恶意网站，进而通过用户浏览器的上下文控制其本地的 Agent 实例，执行敏感操作（如删除文件、窃取数据）。

## 防护措施
- **Origin 验证**: 服务器端严格检查 WebSocket 握手请求中的 `Origin` 头。
- **Token 机制**: 在握手或消息传输中引入不可预测的 Token。
- **CSRF 防护**: 类似于传统 CSRF 的防护策略，应用于 WebSocket 协议。

## 案例
[[openclaw]] 3.12 版本修复了此类漏洞（GHSA），封堵了潜在的跨站劫持路径，提升了公网部署的安全性。