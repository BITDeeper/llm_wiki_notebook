---
type: concept
title: Hairpin Communication
tags: [architecture, networking, security, agent-os]
related: [cuabot, sandbox, openclaw]
created: 2026-02-06
updated: 2026-02-06
sources: ["openclaw全球首聚，千人挤爆旧金山！龙虾头机器人现场乱逛太炸裂.md"]
---

# Hairpin Communication (发夹弯通信)

发夹弯通信是一种用于 AI Agent 沙箱环境的特定通信架构，旨在实现 Agent 对宿主机资源的间接、安全控制。

## 工作原理
该架构通过“容器 -> 宿主机 -> 容器”的闭环路径来处理 Agent 的操作请求（如截图、点击、输入）：
1.  Agent 在 Docker 容器内发起请求。
2.  请求发送至宿主机上的 HTTP 服务（如 cuabot）。
3.  宿主机服务调用 Playwright 等工具。
4.  Playwright 控制 Xpra 的 HTML5 客户端。
5.  操作结果通过 WebSocket 传回容器。

## 核心优势
-   **安全隔离**：Agent 永远不直接触碰宿主机的操作系统或文件系统，所有操作都经过中间层转发和隔离。
-   **防止干扰**：确保 Agent 的活动（如打开浏览器、修改文件）被限制在沙箱内，不会影响用户的正常使用。

## 应用
该架构是 [[CuaBot]] 实现多人联机电脑使用智能体的关键技术，解决了 Agent 实用化中的安全痛点。

## 相关条目
- [[cuabot]]：使用该架构的工具。
- [[sandbox]]：该架构旨在提供的安全环境。