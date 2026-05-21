---
type: source
title: "Anthropic出手，一批Agent创业公司死去"
tags: [anthropic, agent, saas, infrastructure, startup]
related: [claude-managed-agents, anthropic, aaas-agent-as-a-service, 大脑与手的解耦]
created: 2026-04-10
updated: 2026-04-10
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/AN2mJIdE0UuILQIYPQGmSg"
venue: "新智元"
sources: ["anthropic出手，一批agent创业公司死去.md"]
---

# Anthropic出手，一批Agent创业公司死去

## 摘要
本文报道了 Anthropic 发布 **Claude Managed Agents** 对 AI 行业产生的巨大冲击。该产品提供全托管的生产级智能体基础设施，旨在解决从 Demo 到生产环境的部署难题。文章指出，这一举措不仅挤压了专注于构建底层工具（如沙盒、记忆系统）的 AI 初创公司的生存空间，更引发了关于传统 SaaS（软件即服务）模式将被 AaaS（智能体即服务）颠覆的讨论。

## 核心观点

### 1. 基础设施“ commoditization ”（商品化）
过去，企业部署 AI Agent 需要花费数月时间自行搭建基础设施（沙盒、向量数据库、状态管理）。许多初创公司依靠提供这些“造轮子”的服务生存。Claude Managed Agents 通过提供“开箱即用”的全托管服务，宣称可将上线时间缩短至几天，从而摧毁了这些初创公司的护城河。

### 2. 技术架构：大脑与手的解耦
Anthropic 采用了将模型决策（大脑）与执行环境（手）分离的架构。
- **大脑**：负责思考，可随模型升级自动调整。
- **手**：按需启动的沙盒与工具，仅在需要执行代码时运行，响应速度提升 90%。
- **记忆**：独立的会话日志，支持断网续传和长时间自主运行。

### 3. 商业模式变革：从 SaaS 到 AaaS
文章引用红杉资本观点，认为 AI Agent 正在颠覆价值万亿美元的服务市场。
- **传统 SaaS**：卖软件许可证，用户需雇佣人力操作软件。
- **AaaS (Agent as a Service)**：AI 直接替代人力执行任务，绕过 GUI 直接操作数据和逻辑。这可能导致仅靠“界面和交互”作为壁垒的中间层 SaaS 公司失去价值。

### 4. 行业反应
- **支持者/采用者**：Notion、Sentry、Rakuten 等巨头已接入，利用 Claude 增强现有工作流（如自动修 Bug、生成文档）。
- **反对者/受害者**：部分初创创始人在 Reddit 哀嚎赛道被终结；华尔街担忧传统软件公司前景。

## 关键数据与争议
- 文章声称 Anthropic 的 ARR 在四个月内突破 **300 亿美元**。**（注：此数据与常识严重不符，可能存在夸大或笔误，需谨慎引用）**
- 强调 Managed Agents 与本地工具 Claude Code 的区别：前者是云端“数字员工”，可 24 小时运行。

## 结论
Anthropic 的纵向整合（模型+工具+托管）正在重塑 AI 基础设施格局。对于初创公司而言，单纯的基础设施层已无机会，必须转向垂直领域或应用层；对于传统 SaaS 而言，必须尽快内嵌 Agent 能力以避免被“管道化”。