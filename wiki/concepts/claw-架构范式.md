---
type: concept
title: Claw 架构范式
tags: [architecture, ai-agent, openclaw]
related: [openclaw, andrej-karpathy, simon-willison]
created: 2026-02-22
updated: 2026-02-22
sources: ["20天狂更超10次，openclaw接入gemini-3.1和apple-watch.md"]
---

# Claw 架构范式

Claw 架构范式是指以 [[openclaw]] 为代表的一类 AI 智能体系统架构。该术语由 [[simon-willison]] 提出，并得到 [[andrej-karpathy]] 的背书，正逐渐成为行业通用术语。

## 核心特征
- **编排与调度**：作为叠加在基础模型之上的“新层”，负责任务的分解与执行流控制。
- **上下文管理**：处理多轮对话、长上下文记忆以及跨会话的状态持久化。
- **工具调用**：统一管理外部 API 和工具的调用逻辑。
- **多模态交互**：支持文本、语音、按钮组件等多种交互方式（如 [[discord]] Components v2）。

## 行业意义
这一范式的出现标志着 AI 开发从单纯的模型调用转向构建复杂的智能体工程系统。[[openclaw]] 在 OpenRouter 上占据约 13% 的 Token 使用量，显示了该架构范式的实际应用规模。