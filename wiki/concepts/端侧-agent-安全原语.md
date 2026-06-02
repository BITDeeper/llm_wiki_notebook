---
type: concept
title: 端侧 Agent 安全原语
created: 2026-06-01
updated: 2026-06-01
tags: [安全, Agent, Windows, 隐私]
related: [微软, nvidia-open-shell, agent-pc, openclaw, hermes-agent]
sources: ["刚刚，英伟达重新定义pc！史上最高效cpu来了.md"]
---
# 端侧 Agent 安全原语

端侧 Agent 安全原语是 [[微软]] 在 Windows 中新增的安全机制，为本地运行的 AI Agent 提供沙箱隔离和用户控制保障。

## 设计背景

AI Agent 正处于关键拐点。[[openclaw]]、[[hermes-agent]] 等开源项目在开发者网络中取得了创纪录的增长，但 Agent 的大规模普及仍受限制，核心原因在于用户很难在自己的主力 PC 上安全、私密地运行 Agent。

## 核心功能

- **沙箱隔离**：Agent 在隔离环境中运行，无法越权访问系统资源
- **用户控制**：Agent 始终处于用户的完全控制之下，关键操作需用户确认
- **隐私保护**：敏感数据和核心代码无需上传云端，满足企业数据合规要求

## 与 NVIDIA Open Shell 的关系

Windows 安全原语与 [[nvidia-open-shell|NVIDIA Open Shell]] 运行时协同工作，共同构成端侧 Agent 的安全基础设施。安全原语提供操作系统级别的隔离机制，Open Shell 提供运行时级别的 Agent 管理能力。