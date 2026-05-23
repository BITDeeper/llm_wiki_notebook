---
type: concept
title: Agent跑路
created: 2026-05-14
updated: 2026-05-14
tags: [ai-agent, 安全风险, 成本失控, 按量计费]
related: [ai-agent印钞效应, 按量计费模式, ai-subscription-crisis]
sources: ["奥特曼急了！openai稳坐三年的王座，刚刚被anthropic踹下去了.md"]
---
# Agent跑路

AI Agent因代码逻辑问题触发循环调用，导致Token消耗失控的风险现象。这是 [[按量计费模式]] 下最危险的潜在成本黑洞。

## 典型案例：[[workato]]

一名员工开发的Agent因代码逻辑问题，在短短一天内触发了循环调用，直接烧掉了原本计划一个月的Token配额。

## 风险特征

- **突发性**：可能在极短时间内（如一天）造成巨大损失
- **不可预测**：代码逻辑缺陷可能在特定条件下才触发
- **复合效应**：在 [[按量计费模式]] 下，Agent自主运行意味着失控速度远超人工干预速度

## 行业影响

- CIO需要指派专门团队每日监控AI账单
- [[servicenow]] CIO [[kellie-romack]]："你必须每天盯，否则支出就会失控"
- [[servicenow]]和Uber在2026年初前几个月即烧光全年AI预算

## 关联

- 是 [[ai-subscription-crisis]] 中最极端的成本失控场景
- 与 [[ai-agent印钞效应]] 构成同一现象的正反两面