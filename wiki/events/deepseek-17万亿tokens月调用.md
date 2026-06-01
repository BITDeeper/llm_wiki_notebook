---
type: event
title: DeepSeek 17万亿 Tokens 月调用里程碑
created: 2026-05-29
updated: 2026-05-29
tags: [deepseek, Agent负载, Token消耗, 推理基础设施]
related: [deepseek-v4, openrouter, agent-推理负载, tokenmaxxing, 昇腾]
sources: ["deepseek狂吞17万亿tokens？国产ai算力，最关键一战来了！.md"]
origin_date: 2026-05-29
participants: [deepseek-v4, openrouter, hermes-agent, openclaw]
causes: [agent-推理负载, tokenmaxxing]
effects: [megaMoE-融合算子, kvcache-池化, microscaling-格式]
significance: high
---
# DeepSeek 17万亿 Tokens 月调用里程碑

## 概述

2026 年 5 月，[[openrouter|OpenRouter]] 月榜数据显示，[[DeepSeek V4]] 上线一个月后，DeepSeek 三模型（V4 Flash、V4 Pro、V3.2）同时挤入前十，月调用合计超过 **17 万亿 tokens**。这一数据标志着 [[agent-推理负载|Agent 负载]] 正式成为 Token 消耗的绝对主力。

## 关键数据

| 模型/应用 | 月调用量 | 排名 |
|-----------|----------|------|
| DeepSeek V4 Flash | 9.13T tokens | 模型第1 |
| DeepSeek V3.2 | 4.07T tokens | 模型第8 |
| DeepSeek V4 Pro | 3.89T tokens | 模型第9 |
| [[hermes-agent]] | 10.8T tokens | 应用第1 |
| [[openclaw]] | 6.25T tokens | 应用第2 |

## 影响

这一里程碑数据直观证明了：

1. **Agent 取代聊天机器人**：应用前二均为 Agent 系统，Token 消耗主力完成切换
2. **基础设施压力爆发**：以万亿为单位的高强度并发，将底层基础设施的每一个短板无限放大
3. **国产算力底座价值凸显**：[[昇腾]] 作为 [[DeepSeek V4]] 的核心推理底座，其三大技术方案（[[megaMoE-融合算子]]、[[kvcache-池化]]、[[microscaling-格式]]）获得市场验证

## 背景

此前 DeepSeek V4 发布有所推迟，坊间传闻称因与昇腾做底层深度适配而拖慢节奏。17 万亿 tokens 的数据从侧面证明了适配投入的产出效果。