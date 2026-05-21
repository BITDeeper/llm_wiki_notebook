---
type: concept
title: AI Shrinkflation (AI 缩水通胀)
tags: [商业策略, 用户体验, 成本控制]
related: [ai-subscription-crisis, claude-code, anthropic]
created: 2026-04-24
updated: 2026-04-24
sources: ["claude终于认了！降智坐实，越聊越傻，3个bug全曝光.md"]
---

# AI Shrinkflation (AI 缩水通胀)

**AI 缩水通胀**（AI Shrinkflation）是一个新造词，借用了经济学中的“缩水通胀”概念，指 AI 服务提供商在维持价格不变的情况下，通过暗中降低服务质量（如减少推理深度、限制上下文长度、降低模型精度）来降低成本的现象。

## 起源背景
该词在 2026 年 4 月 [[Anthropic]] 承认 [[claude-code]] 降智事件后在社区广泛传播。用户发现，虽然订阅价格未变，但模型的实际表现却出现了断崖式下滑。

## 典型表现
- **暗中降级**：在用户界面未显示的情况下，将模型推理等级从 High 调至 Medium。
- **功能阉割**：通过系统提示词限制输出长度或工具调用频率。
- **资源克扣**：为了节省算力成本，引入有缺陷的缓存机制，导致模型“健忘”。

## 根本原因
这一现象的根本原因在于 [[ai-subscription-crisis]]。随着 Agent 任务的高算力消耗，传统的固定费率订阅制难以覆盖成本。厂商为了维持利润率，不得不通过“缩水”来平衡账目，而非选择透明的涨价。

## 用户反应
用户对 AI Shrinkflation 极为敏感，认为这是对信任的背叛。一旦被发现，往往会导致严重的品牌危机和用户流失。