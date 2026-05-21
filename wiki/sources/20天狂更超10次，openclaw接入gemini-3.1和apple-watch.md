---
type: source
title: "20天狂更超10次，OpenClaw接入Gemini 3.1和Apple Watch"
tags: [ai-agent, openclaw, security, mobile, discord]
related: [openclaw, andrej-karpathy, claw-架构范式, 供应链污染, 嵌套子智能体]
created: 2026-02-22
updated: 2026-02-22
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/yfJJDANyn8f3ypTHZGUKHw"
venue: "新智元"
sources: ["20天狂更超10次，openclaw接入gemini-3.1和apple-watch.md"]
---

# 20天狂更超10次，OpenClaw接入Gemini 3.1和Apple Watch

## 摘要
本文详细记录了 [[openclaw]] 在 2026 年 2 月的爆发式进化，包括接入 [[google-gemini]] 3.1、支持 [[apple-watch]] 以及在 [[discord]] 平台引入 Components v2 等重大更新。文章同时深入探讨了 [[andrej-karpathy]] 对其作为 AI 技术栈新层的背书，以及项目面临的严峻安全挑战（如 [[供应链污染]] 和 CVE-2026-25253 漏洞）。

## 核心观点

- **架构范式确立**：[[andrej-karpathy]] 将 [[openclaw]] 定义为 AI 技术栈中负责编排、调度和上下文管理的“新层”，[[simon-willison]] 指出“Claw”正演变为行业通用术语（即 [[claw-架构范式]]）。
- **全平台覆盖**：20 天内更新超 10 次，从单一服务端程序扩展至 iOS、[[apple-watch]] 和 [[discord]] 的全场景智能体平台。
- **架构突破**：引入 [[嵌套子智能体]]（Subagents），支持树状结构处理复杂任务，并解决了上下文溢出时的自动截断与恢复。
- **安全危机**：被 [[卡巴斯基]] 披露存在 512 个漏洞，数万实例暴露于公网，且面临严重的 [[供应链污染]]（ClawHavoc 攻击），被 Cisco 称为“安全噩梦”。
- **治理变更**：创始人 [[peter-steinberger]] 加入 [[openai]]，项目转为由 OpenAI 资助的独立基金会管理。

## 关键数据
- **Token 占比**：OpenClaw 在 OpenRouter 上的 Token 使用量占比约 13%。
- **漏洞数量**：卡巴斯基审计发现 512 个漏洞，其中 8 个为严重级别。
- **暴露实例**：公网上暴露的实例超过 30,000 个。
- **恶意技能**：约 12%（341/2857）的官方技能市场（ClawHub）技能含有恶意代码。

## 2月更新时间线
- **2月6日**：支持 Anthropic Opus 4.6 和 xAI Grok。
- **2月9日**：发布 iOS 节点应用 Alpha 版；Grok 网页搜索能力上线。
- **2月12日**：大修定时任务系统，防止重复触发。
- **2月13日**：[[discord]] 支持语音消息；接入 Hugging Face Inference；引入写前投递队列。
- **2月15日**：引入 [[嵌套子智能体]]；[[discord]] 解锁 Components v2（按钮、下拉菜单）。
- **2月16日**：创始人 Peter Steinberger 宣布加入 OpenAI。
- **2月17日**：iOS 分享扩展上线；支持 Anthropic Sonnet 4.6；Slack 原生流式输出。
- **2月19日**：[[apple-watch]] 伴侣应用上线。
- **2月21日**：接入 Google Gemini 3.1 Pro；[[discord]] 支持实时语音；默认子智能体深度策略稳定。

## 引用与参考
- Karpathy 的评价：AI 技术栈中“既酷又让人兴奋的新层”。
- Simon Willison 的观点：“Claw”正成为行业通用术语。
- 安全报告：卡巴斯基、Bitsight、Cisco、Trend Micro 的多方审计结果。