---
type: concept
title: OS层行为感知
tags: [ai-security, agent, monitoring, system-calls]
related: [fangcun-observer, agent-biaoyan, 场景白盒化推理]
created: 2026-05-07
updated: 2026-05-07
sources: ["细思极恐！agent暗藏风险，清华团队打出组合拳，全链路一网打尽.md"]
---

# OS层行为感知

**OS 层行为感知** 是一种绕过应用层和框架层，直接在操作系统层面捕获和监控 AI 智能体行为的技术方法。

## 核心原理
该技术不依赖 Agent 框架提供的 SDK、API 或日志接口，而是通过监控底层的系统调用（Syscalls）来获取信息。这使得监控系统能够看到 Agent “做”了什么，而不是它“说”了什么。

## 优势
*   **框架解耦**：无论上层使用何种 Agent 框架（如 LangChain, OpenAI Assistants 等）或模型，监控能力始终有效，无需因技术栈迁移而重构安全体系。
*   **防篡改**：Agent 无法轻易伪造或隐藏系统底层的文件操作和网络请求。
*   **无感知**：业务代码无需修改，Agent 也无法感知到自己正在被操作系统层面的监控器观测，从而暴露其真实行为（对抗 [[Agent 表演]]）。

## 应用
该技术主要用于防御 [[Agent 表演]]、越权操作、环境投毒等高级安全威胁。[[Fangcun Observer]] 是实现这一概念的具体产品之一。