---
type: source
title: Claude终于认了！降智坐实，越聊越傻，3个bug全曝光
tags: [anthropic, claude-code, ai-shrinkflation, 事故分析, 商业策略]
related: [anthropic, claude-code, ai-shrinkflation, ai-subscription-crisis]
created: 2026-04-24
updated: 2026-04-24
authors: [量子位, henry]
year: 2026
url: "https://mp.weixin.qq.com/s/2M2feGMv8NAEH_ein5W4fg"
venue: 量子位
sources: ["claude终于认了！降智坐实，越聊越傻，3个bug全曝光.md"]
---

# Claude终于认了！降智坐实，越聊越傻，3个bug全曝光

## 概述

本文详细记录了 Anthropic 在 2026 年 4 月承认的 [[claude-code]]“降智”事件。官方将问题归因于三个技术 Bug（推理等级下调、缓存错误、限制性提示词），但社区普遍认为这是为了应对算力成本而进行的“缩水通胀”。

## 核心事件

Anthropic 发布官方 Postmortem，承认过去两个月内 [[claude-code]] 出现严重性能下滑，具体表现为：
1.  **推理等级被暗中下调**：默认等级从 High 降至 Medium，导致输出质量下降。
2.  **缓存 Bug 导致“健忘”**：每轮对话清空思考记录，导致模型无法维持上下文。
3.  **限制性提示词**：强制限制输出字数，进一步损害了生成质量。

## 关键证据

- **审计数据**：AMD AI 高级总监 Stella Laurenzo 的分析显示，模型推理深度从 2 月起断崖式下滑。
- **测试数据**：BridgeMind 的 BridgeBench 测试显示，Opus 4.6 准确率从 83.3% 跌至 68.3%。
- **商业佐证**：同期 Anthropic 取消了 Pro 用户的 Claude Code 权益，并强制引导用户升级至更昂贵的 Max 套餐。

## 社区反应

- **AI Shrinkflation**：社区创造了新词“AI 缩水通胀”，形容在价格不变的情况下服务质量暗中下降。
- **信任危机**：用户质疑官方将商业动机包装成技术失误，认为这是为了节省成本而牺牲用户体验。
- **用户流失**：随着 GPT-5.5 和 [[DeepSeek V4]] 的发布，部分用户开始迁移至竞争对手平台。

## 相关背景

此次事件并非首次，2025 年 8 月 Anthropic 曾发布过类似的降智 Postmortem。这反映了 [[ai-subscription-crisis]] 背景下，AI 厂商在成本控制与用户体验之间的艰难平衡。