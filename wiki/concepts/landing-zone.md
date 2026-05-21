---
type: concept
title: Landing Zone
created: 2026-04-18
updated: 2026-04-18
tags: [云架构, 安全隔离]
related: [阿里云, openclaw, 最小权限原则]
sources: ["openclaw的风，已经吹进了奶茶圈.md"]
---
# Landing Zone

Landing Zone 是一种企业级上云框架，在 [[openclaw]] 等 AI Agent 落地场景中，被用于实现环境隔离、权限精细化管控及成本独立核算。

## 核心价值
- **环境隔离**：为 Agent 部署独立的沙箱运行环境，即便单节点被入侵，也无法影响核心业务系统。
- **权限管控**：配合 [[最小权限原则]]，限制 Agent 的操作范围。
- **成本核算**：实现创新业务成本的独立核算，防止 [[agent-成本失控]]。

## 应用案例
[[古茗]] 计划采用 [[阿里云]] 的 Landing Zone 解决方案，以应对 OpenClaw 带来的端口暴露和内网渗透风险。