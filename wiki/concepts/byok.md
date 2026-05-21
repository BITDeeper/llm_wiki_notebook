---
type: concept
title: BYOK (Bring Your Own Key)
tags: [商业模式, 开源, api, 成本结构]
related: [openwork, ai-subscription-crisis, 管道化危机]
created: 2026-01-18
updated: 2026-01-18
sources: ["开源版cowork爆火，逼得anthropic下放cowork.md"]
---

# BYOK (Bring Your Own Key)

**BYOK (Bring Your Own Key)** 即“自带密钥”，是一种软件分发和商业模式。在这种模式下，软件提供商不包含算力成本，用户需自行提供第三方服务（如 OpenAI、Anthropic API）的密钥来驱动软件功能。

## 核心逻辑
BYOK 模式将“软件界面”与“底层算力”解耦。开发者专注于优化用户体验和工具逻辑，而将推理成本转移给用户。这使得软件本身可以免费分发（如 [[openwork]]），打破了传统 SaaS “软件+算力”捆绑销售的高价模式。

## 优势
- **成本透明**：用户直接按 API 调用量付费给模型厂商，无需为软件本身支付高额溢价。
- **灵活性**：用户可以自由切换底层模型（如从 Claude 切换至 GPT-4 或本地模型），而不受软件厂商限制。
- **隐私性**：数据直接传输给模型 API 提供商，通常不经过软件作者的服务器。

## 对行业的影响
BYOK 模式加剧了 [[ai-subscription-crisis]]。它迫使平台型公司（如 Anthropic）面临 [[管道化危机]]：即用户可能只使用模型 API，而通过第三方更好的前端界面进行交互，导致平台失去用户入口和附加值。