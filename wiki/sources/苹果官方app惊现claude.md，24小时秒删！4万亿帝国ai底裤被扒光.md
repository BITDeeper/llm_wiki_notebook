---
type: source
title: "苹果官方APP惊现Claude.md，24小时秒删！4万亿帝国AI底裤被扒光"
tags: [apple, anthropic, claude, leak, ai-supply-chain]
related: [apple, anthropic, claude-code, juno-ai, openclaw, mac-mini]
created: 2026-05-02
updated: 2026-05-02
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/XZzW8exX38IoJ3de0l0LVw"
venue: "新智元"
sources: ["苹果官方app惊现claude.md，24小时秒删！4万亿帝国ai底裤被扒光.md"]
---

# 苹果官方APP惊现Claude.md，24小时秒删！4万亿帝国AI底裤被扒光

## 概述

本文报道了苹果公司在 Apple Support App 更新中发生的一次重大技术乌龙。由于工程师未删除调试文件 `CLAUDE.md`，导致苹果内部深度依赖 [[Anthropic]] 及 [[Claude Code]] 构建系统的技术细节意外泄露。事件揭示了市值 4 万亿美元的苹果在 AI 转型期对第三方 AI 实验室的深度依赖，同时也侧面反映了 AI 需求对硬件市场（如 [[Mac mini]]）的剧烈影响。

## 核心事件

### 技术乌龙与文件泄露
- **时间**：2026年4月30日
- **事件**：Apple Support App v5.13 版本更新中，开发者 [[Aaron Perris]] 发现了两个遗留的 `CLAUDE.md` 文件。
- **后果**：文件内容证实苹果正在使用 [[Claude Code]] 构建内部代号为 [[Juno AI]] 的大模型平台。苹果在发现泄露后迅速更新了 App 并删除了相关文件，但截图已在社区传播。

### 泄露的技术细节
泄露的文件揭示了苹果内部 AI 客服系统的完整架构：
- **Juno AI**：苹果内部大模型平台的代号。
- **SupportAssistantAPIProvider**：连接聊天界面与苹果 AI 后端的接口。
- **ChatKit**：处理真人客服交互的内部平台。
- **架构设计**：包含 client（用户）、agent（真人客服）、assistant（AI助手）三个角色，实现了消息路由、异步流式传输和会话持久化。

## 关键发现

### 苹果对 Anthropic 的深度依赖
- **内部工具**：报道指出，苹果在产品开发、内部工具甚至服务器上都部署了定制版的 Claude。
- **开发环境集成**：早在前一年9月，Xcode 就增加了 Claude Sonnet 4 支持；今年的 Xcode 26.3 更是集成了原生 [[Claude Agent SDK]]。
- **分析师证言**：彭博社记者 [[Mark Gurman]] 曾表示，“现阶段，苹果就是靠 Anthropic 运转的”。

### Siri 合作背后的商业博弈
- **首选方案**：苹果原本计划围绕 Claude 重构 Siri。
- **谈判破裂**：[[Anthropic]] 开价过高（每年几十亿美元，且三年内每年翻倍），导致谈判破裂。
- **备选方案**：苹果最终以每年约 10 亿美元的价格与 [[Google Gemini]] 签署了 Siri 合作协议。
- **现状**：虽然 Siri 选择了 Google，但内部核心工程系统（如 Juno AI）依然紧贴 Claude。

### AI 需求重塑硬件市场
- **Mac mini 涨价**：同一周，苹果将 Mac mini 起售价从 599 美元上调至 799 美元（涨幅超 33%），并取消了 256GB 入门款。
- **需求激增**：库克在财报电话会上承认，AI 和 AI Agent 工具的需求超出了预期。
- **本地推理热潮**：[[OpenClaw]] 等工具的流行使得 Mac mini 成为部署 7x24 小时 AI Agent 的完美硬件（待机 15W，推理 30W，年电费 < 15 美元）。

## 意义与影响

此次事件不仅是一次尴尬的代码泄露，更是观察科技巨头 AI 转型困境的窗口：
1. **技术依赖**：即使是拥有强大自研能力的苹果，在 AI 时代也难以完全脱离外部模型供应商的支持。
2. **成本博弈**：企业级 AI 服务的昂贵成本迫使巨头在技术理想与商业现实之间做出妥协。
3. **硬件定义变迁**：Mac mini 从入门级电脑转变为“AI Agent 工厂”，反映了本地推理需求的爆发。