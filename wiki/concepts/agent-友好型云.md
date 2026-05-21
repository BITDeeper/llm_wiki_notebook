---
type: concept
title: Agent 友好型云
created: 2026-04-18
updated: 2026-04-18
tags: [云服务, 基础设施]
related: [阿里云, openclaw]
sources: ["openclaw的风，已经吹进了奶茶圈.md"]
---
# Agent 友好型云

Agent 友好型云是指云基础设施从底层针对 AI Agent 的操作特性进行优化，提供默认安全、身份管控和资源感知能力的云服务架构。

## 核心特征
- **默认安全**：自动关闭高危端口（如 OpenClaw 的 18789），提供公网端口巡检与告警。
- **身份管控**：集成 Agent ID Guard 与 RAM 身份体系，实现人与 Agent 权限的统一管理。
- **资源感知**：能够识别并管理 Agent 的资源消耗，防止成本失控。

## 愿景
[[阿里云]] 提出打造“Agent 友好型云”，旨在让 Agent 在操作云资源时，从底层保障安全性、稳定性与成本可控性，解决企业落地顾虑。