---
type: entity
title: CuaBot
tags: [tool, agent-os, docker, sandbox]
related: [openclaw, multi-player-computer-use-agent, hairpin-communication, sandbox]
created: 2026-02-06
updated: 2026-02-06
sources: ["openclaw全球首聚，千人挤爆旧金山！龙虾头机器人现场乱逛太炸裂.md"]
---

# CuaBot

CuaBot 是在 [[ClawCon 2026]] 上发布的首个 **[[Multi-Player Computer-Use Agent]]**（多人联机电脑使用智能体）工具。它旨在解决 AI Agent 在使用电脑时的资源冲突和安全隔离问题。

## 核心功能
CuaBot 为每个 AI Agent 分配一个独立的 Linux 桌面环境，使其拥有自己的鼠标、窗口焦点和文件系统，从而避免与人类用户或其他 Agent 争夺宿主机的控制权。

## 技术架构
CuaBot 的实现依赖于以下关键技术：
1.  **Docker 容器**：在容器内运行完整的 X11 Linux 桌面环境。
2.  **Xpra**：将容器内的应用窗口单独流式传输到用户的物理电脑屏幕上。
3.  **[[Hairpin Communication]]**（发夹弯通信）：一种独特的通信架构，用于实现 Agent 对宿主机资源的间接、安全控制。

## 安全隔离
通过 [[Hairpin Communication]] 机制，Agent 在容器内的操作（如截图、点击、输入）会经过“容器 -> 宿主机 -> 容器”的闭环处理。这意味着 Agent 永远不会直接触碰用户的宿主系统，从而防止了误删文件或侵犯隐私的风险。

## 应用场景
用户可以同时启动多个 Agent 实例（例如一个 Claude 写代码，一个 Gemini 查资料），它们在各自的沙箱中并行工作，互不干扰。这被视为 Agent 走向大规模协作和实用化的重要基础设施。

## 相关条目
- [[openclaw]]：CuaBot 是为 OpenClaw 等 agentic 系统配置的理想工具。
- [[hairpin-communication]]：CuaBot 使用的核心通信架构。