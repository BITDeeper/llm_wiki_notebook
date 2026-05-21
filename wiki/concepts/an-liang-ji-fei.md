---
type: concept
title: 按量计费
tags: [business-model, pricing, cloud-computing]
related: [qwen, openclaw, ai-subscription-crisis]
sources: ["龙虾更新出了大bug，12小时内紧急发新版.md"]
created: 2026-03-24
updated: 2026-03-24
---

# 按量计费

按量计费（Pay-as-you-go）是一种根据实际资源使用量（如计算时间、存储空间或 API 调用的 Token 数量）进行计费的商业模式。

## 在 AI 领域的应用

在 [[openclaw]] 接入 [[qwen]] 的背景下，按量计费指的是用户无需购买包月或包年的订阅套餐，而是根据实际调用模型所消耗的 Token 数量付费。

## 优势

- **降低门槛**：开发者无需预付大笔费用，适合轻度用户或测试阶段。
- **成本透明**：费用直接与使用量挂钩，便于控制成本。
- **灵活性**：支持中国区和全球 API Key 的无缝切换。

## 与订阅制的关系

虽然按量计费提供了灵活性，但随着 AI Agent 任务的高算力消耗，单纯的订阅制正面临挑战（参见 [[ai-subscription-crisis]]）。按量计费模式为解决这一问题提供了过渡方案，特别是在国产模型生态中。