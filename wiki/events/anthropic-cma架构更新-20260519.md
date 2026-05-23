---
type: event
title: Anthropic CMA架构更新
created: 2026-05-22
updated: 2026-05-22
tags: [anthropic, agent, 架构, 企业级]
related: [anthropic, claude-managed-agents, 手脑分离架构, jvs-crew]
sources: ["企业养虾时代开启？anthropic连夜更新架构，中国大厂已经跑通.md"]
origin_date: 2026-05-19
participants: [anthropic]
causes: []
effects: [手脑分离架构]
significance: high
---
# Anthropic CMA架构更新

2026年5月19日，[[anthropic|Anthropic]]为[[claude-managed-agents|Claude Managed Agents]]（CMA）增加self-hosted sandboxes功能，将执行层从Anthropic自有云拆分到企业自有基础设施上，编排层保留在云端。

## 背景

CMA于2026年4月首次推出时，采用全托管模式——Agent逻辑和执行环境全部运行在Anthropic云上。企业对数据安全和基础设施控制权的需求推动了架构调整。

## 意义

这一架构演进与[[jvs-crew|JVS Crew]]从第一天就采用的[[手脑分离架构]]几乎殊途同归，标志着Agent架构从全托管向推理-执行解耦的行业趋势。中美两地独立收敛到同一设计图，验证了手脑分离作为企业级Agent架构的必然性。