---
type: concept
title: BYOAI
tags: [ai-architecture, data-sovereignty]
related: [llm-wiki, file-over-app]
created: 2026-04-05
updated: 2026-04-05
sources: ["卡帕西引爆硅谷！公开「第二大脑」黑科技，1250万人围观.md"]
---

# BYOAI (Bring Your Own AI)

BYOAI (自带 AI) 是一种用户主导的 AI 应用架构模式，强调将数据、结构与 AI 模型解耦。

## 定义
用户拥有并管理自己的数据结构和知识库（如 [[llm-wiki]]），并可以根据需要灵活选择或更换底层的 AI 模型（如 Claude、GPT、开源模型等）来处理这些数据。

## 优势
-   **避免厂商锁定**: 不被单一 AI 生态绑定，可以随时切换到更好或更便宜的模型。
-   **促进竞争**: 迫使 AI 厂商在服务质量上竞争，而非依赖数据垄断。
-   **隐私控制**: 敏感数据可以保留在本地，仅由用户指定的本地模型处理。

## 实现基础
BYOAI 的实现依赖于 [[file-over-app]] 原则，即数据必须以开放、通用的格式（如 Markdown）存储，以便不同的 AI Agent 能够无障碍地读取和操作。