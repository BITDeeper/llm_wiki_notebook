---
type: source
title: "OpenClaw 3.12来了：UI大翻新，模型提速，更耐造更安全"
tags: [openclaw, agent, release-notes, security, ui-ux]
related: [openclaw, gemini, 多模态记忆, 故障转移, websocket-跨站劫持, 零宽字符攻击]
created: 2026-03-13
updated: 2026-03-13
authors: ["新智元", "艾伦"]
year: 2026
url: "https://mp.weixin.qq.com/s/Vs9W9m85RkJ0ReRqLQSBKw"
venue: "新智元"
sources: ["openclaw-3.12来了：ui大翻新，模型提速，更耐造更安全.md"]
---

# OpenClaw 3.12来了：UI大翻新，模型提速，更耐造更安全

## 概述
本文详细报道了 [[openclaw]] 连续发布的 3.11 和 3.12 版本更新。此次更新直击自动化业务痛点，重点在于提升系统的稳定性、易用性和安全性。主要亮点包括全新的 Control UI V2、基于 [[gemini]] 的多模态记忆功能、增强的故障转移机制以及针对高危安全漏洞的修复。

## 核心更新内容

### 1. UI 翻新与易用性提升
- **Control UI V2**: 引入模块化视图，将概览、聊天、配置、Agent 和会话分离，界面更加清爽。
- **Ollama 一等公民支持**: 提供了丝滑的 First-class 引导流程，支持纯本地或“云+端”混合模式，降低了本地模型配置门槛。
- **客户端优化**: iOS 端引入带 Dock 栏的新布局；macOS 端增加了独立的模型选择器，并支持持久化保存 Thinking 级别偏好。

### 2. 引擎升级与多模态能力
- **Fast Mode**: 顺应 OpenAI GPT-5.4 的发布，在会话层增加了 Fast Mode 开关，并同步映射到 Anthropic 的高级服务层级请求。
- **多模态记忆**: 集成了基于 `gemini-embedding-2-preview` 的多模态索引功能。这使得 [[openclaw]] 不仅能检索文本，还能将图纸、录音等非文本信息直接作为上下文进行检索，大幅提升了视觉驱动任务的准确性。

### 3. Agent 编排与容灾增强
- **Subagent 路由优化**: 新增 `sessions_yield` 特性，允许编排节点强行中断当前回合并跳过排队工具，带着隐身 payload 直接进入下一回合，解决了多 Agent 协同中的卡顿问题。
- **故障转移**: 增强了 Failover 逻辑。当遇到 API 额度耗尽（如 402 错误）、模型响应异常或网络错误时，系统会自动切换到备用模型，并具备冷却时间探测功能，充值后可自动恢复。

### 4. 安全漏洞修复
本次更新修复了十几个安全问题（GHSA），其中最关键的包括：
- **WebSocket 跨站劫持**: 彻底封堵了利用 WebSocket 协议漏洞进行的跨站请求伪造攻击路径。
- **零宽字符攻击**: 修复了审批流程中利用不可见 Unicode 字符绕过执行检测的伪装漏洞。

## 行业影响
此次更新标志着 [[openclaw]] 从单纯的自动化工具向更稳定、更安全的企业级 Agent 编排平台演进。特别是对多模态记忆的支持和对安全漏洞的快速响应，显示了其在激烈竞争（如面对 GPT-5.4 和 Claude 高级服务）中保持技术领先性的决心。