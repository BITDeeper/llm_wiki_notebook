---
type: entity
title: drive9
created: 2026-05-14
updated: 2026-05-14
tags: [agent-infrastructure, storage, workspace]
related: [tidb, mem9, agent原生基础设施, runtime-agent-os]
sources: ["人手一个数据库，kimi背后这套ai基建到底有多能扛？.md"]
---

# drive9

drive9 是 [[tidb|TiDB]] Agent-native产品线的第二个组件，定位为Agent Sandbox的持久化工作空间。

## 核心功能

- 为Agent Sandbox提供**持久、共享、可挂载的workspace**
- Agent的sandbox可以随时创建和销毁，但工作成果不会跟着消失
- 确保Agent的产出物在运行环境回收后仍然可用

## 行业定位

drive9解决了Agent运行时的"工作产物持久化"问题。与[[mem9]]（记忆层）互补：mem9保存Agent的认知状态，drive9保存Agent的工作产出。两者共同构成Agent独立运行环境的存储基础设施。