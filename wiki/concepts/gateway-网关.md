---
type: concept
title: Gateway-网关
tags: [架构, ai-agent, clawdbot]
related: [clawdbot, 本地智能体]
created: 2026-01-26
updated: 2026-01-26
sources: ["clawdbot一夜爆红，首个0员工公司诞生！7×24h永不下班.md"]
---

# Gateway-网关

**Gateway-网关** 是 [[clawdbot]] 系统的核心架构组件，充当了用户指令与计算机操作系统之间的桥梁。

## 功能

1.  **指令接收**：监听来自 iMessage、WhatsApp、Telegram 等即时通讯渠道的用户消息。
2.  **指令转化**：将自然语言指令解析为可执行的计算机命令或 API 调用。
3.  **任务分发**：根据任务类型，调用相应的 LLM（如 Claude、Grok）或本地模型进行处理。
4.  **结果反馈**：将执行结果返回给用户的通讯软件。

## 意义

Gateway 架构实现了“手机指令 -> 电脑执行”的跨设备控制流，是构建 **[[本地智能体]]** 和实现“零员工公司”自动化流程的关键技术基础设施。