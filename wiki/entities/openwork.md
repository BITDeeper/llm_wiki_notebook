---
type: entity
title: Openwork
tags: [开源, ai-agent, 桌面智能体, byok]
related: [claude-cowork, anthropic, byok, claude-code, composio, dev-browser]
created: 2026-01-18
updated: 2026-01-18
sources: ["开源版cowork爆火，逼得anthropic下放cowork.md"]
---

# Openwork

**Openwork** 是一个开源的 [[桌面智能体]] 项目，由开发者 Karan Vaidya 和 Or Hiltch 等人在 48 小时的黑客松中创建。它被视为 [[claude-cowork]] 的开源替代品，因其发布后迅速迫使 Anthropic 降价而闻名。

## 核心特性
- **完全开源与免费**：源代码公开，无订阅费用。
- **BYOK (Bring Your Own Key)**：用户需自行提供 OpenAI、Anthropic 或 Google 的 API 密钥，或通过 Ollama 使用本地模型。
- **本地运行**：在用户本地机器上运行，不依赖云端浏览器实例。
- **高性能**：据称在执行任务时的速度是官方 Claude for Chrome 扩展的 4 倍，这得益于集成的 [[dev-browser]] 组件。

## 技术架构
Openwork 剥离了官方产品的算力溢价，仅提供智能体的控制界面。它利用 [[Composio]] 进行工具路由，并基于 [[claude-code]] 的逻辑进行了泛化，使其能处理非编程类的桌面任务（如整理文件、生成报表）。

## 市场影响
Openwork 的出现对 [[anthropic]] 的商业策略构成了直接挑战。它证明了在 [[ai-subscription-crisis]] 的背景下，通过开源和 [[byok]] 模式，社区可以快速填平技术护城河，打破巨头对高级 AI 功能的高价垄断。这直接导致了 Anthropic 将 Cowork 功能从 $100/月 的 Max 订阅下放至 $20/月 的 Pro 订阅。

## 隐私与安全
由于运行在本地且独立于主浏览器，Openwork 降低了因提示词注入导致主账号数据泄露的风险，用户可以精确控制其访问的文件夹范围。