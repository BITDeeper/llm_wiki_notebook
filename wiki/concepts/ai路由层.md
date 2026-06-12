---
type: concept
title: AI路由层
created: 2026-06-10
updated: 2026-06-10
tags: [ai平台, 模型路由, 苹果, 分发渠道]
related: [苹果, foundation-models框架, anthropic, openai, ai擂台模式]
sources: ["rss/库克最后一届wwdc，把苹果ai九年的地基掀了.md"]
---
# AI路由层

苹果将自身定位为AI模型调度中枢的战略概念——通过[[foundation-models框架|Foundation Models]]框架中的Language Model协议，统一端侧/开源/云端模型的调用入口，实现一套代码、三种模型、从本地到云端的无缝切换。

## 核心机制

- **Language Model协议**：统一的Swift API，任何模型遵循即可被同一套代码调用
- **自动路由**：端侧模型处理轻量任务，复杂任务自动路由给云端模型
- **用户无感**：用户全程感知不到模型切换，体验统一

## 战略意义

苹果不做模型公司，做平台和擂台：
- 25亿台设备作为分发渠道
- AI巨头竞争"默认AI引擎"位置
- 谁的模型好，谁就能通过这个平台触达地球上最大的高价值用户群

## 对行业格局的影响

AI巨头之间的竞争多了一个全新维度：
- 之前：抢API调用量、开发者工具、企业合同
- 之后：抢每个人口袋里的"默认AI引擎"位置

[[anthropic|Anthropic]]首个适配Foundation Models框架，[[claude-code|Claude]]通过Swift包获得消费级分发通道。OpenAI是否适配尚不明确。