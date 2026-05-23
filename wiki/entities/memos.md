---
type: entity
title: MemOS
created: 2026-05-15
updated: 2026-05-15
tags: [记忆操作系统, agent基础设施, 记忆管理]
related: [记忆张量, memprivacy]
sources: ["越懂你，越危险？memprivacy揭示ai记忆下一站.md"]
---
# MemOS

MemOS 是由 [[记忆张量]]（MemTensor）团队推出的记忆操作系统，是 [[memprivacy|MemPrivacy]] 的上游基础设施。

## 核心定位

MemOS 将 Agent 记忆从传统的向量库或 RAG 插件，提升为可管理、可调度、可演化的系统资源。它解决的核心问题是：Agent 应该记什么、怎么检索、如何更新、如何治理。

## 系统能力

- **记忆管理**：将记忆作为系统级资源进行统一管理
- **记忆调度**：支持记忆的检索、更新和演化
- **记忆治理**：提供记忆生命周期管理能力

## 与 MemPrivacy 的关系

MemPrivacy 是 MemOS 往端云协同场景自然长出的隐私层。当 Agent 具备了长期记忆能力后，隐私保护成为其安全进化的必要前提，MemPrivacy 在 MemOS 的记忆管理能力之上增加了隐私分级、脱敏和恢复机制。