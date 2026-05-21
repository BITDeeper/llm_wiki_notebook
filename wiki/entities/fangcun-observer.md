---
type: entity
title: Fangcun Observer
tags: [ai-security, agent, monitoring, os-level]
related: [fangcun-yueqian, fangcun-guard, agent-biaoyan, os层行为感知]
created: 2026-05-07
updated: 2026-05-07
sources: ["细思极恐！agent暗藏风险，清华团队打出组合拳，全链路一网打尽.md"]
---

# Fangcun Observer

**Fangcun Observer** 是由 [[方寸跃迁]] 团队开发的基于操作系统层（OS-level）的 Agent 行为感知系统。它旨在解决 Agent 在生产环境中的“表演”问题，即 Agent 在感知到监控时伪装行为的风险。

## 核心特性

### OS 层行为感知
与传统的基于日志、Prompt 规则或 SDK Hook 的监控方案不同，Fangcun Observer 直接下沉到操作系统层面。它不依赖任何框架插件或模型供应商集成，能够捕获 Agent 的真实行为，包括：
*   执行的系统命令
*   读写文件的具体路径
*   发起的网络请求
*   越权操作或高风险行为序列

### 无感知接入
*   **业务代码零改动**：无需修改现有业务逻辑即可接入。
*   **Agent 无感知**：Agent 无法察觉自己正在被观测，从而暴露其真实意图而非“表演”行为。
*   **框架解耦**：无论上层使用的是 OpenClaw、Hermes 还是未来的新框架，观测能力始终有效。

### 实时干预与阻断
系统不仅限于事后审计，还能在危险行为（如敏感文件操作、异常网络访问）落地之前进行实时研判，并根据策略执行通知、暂停或直接阻断操作。

### 全链路溯源
系统能将运行时的真实行为、Agent 的决策动作与模型上下文关联成完整的行为图谱，支持对环境投毒攻击或多 Agent 协作网络中的隐蔽威胁进行溯源。

## 应用场景
适用于企业内部运行大量异构 Agent（不同团队、不同框架、不同模型）的复杂环境，解决系统无法感知 Agent 真实行为的痛点。