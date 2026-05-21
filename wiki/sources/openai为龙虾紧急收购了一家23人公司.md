---
type: source
title: "OpenAI为龙虾紧急收购了一家23人公司"
tags: [openai, acquisition, agent-safety, promptfoo, openclaw]
related: [openai, promptfoo, openclaw, ai-red-team, openai-frontier]
created: 2026-03-10
updated: 2026-03-10
authors: [量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/xyBaJfG_R7jHmcybgaICvQ"
venue: "量子位"
sources: ["openai为龙虾紧急收购了一家23人公司.md"]
---

# OpenAI为龙虾紧急收购了一家23人公司

## 摘要
本文报道了 OpenAI 收购 AI 安全与评测初创公司 Promptfoo 的消息。此次收购旨在补齐 OpenAI 在“智能体（龙虾）安全”方面的关键短板，应对智能体高权限带来的新风险。

## 核心内容

### 收购背景
- **收购方**：[[OpenAI]]
- **被收购方**：[[Promptfoo]]（一家仅 23 人的初创公司）
- **动机**：随着企业将“AI 同事”部署到实际工作流程中，评估、安全性和合规性成为基本要求。OpenAI 需要解决智能体（如 [[OpenClaw]]）在拥有高权限（如访问邮箱、API）时的安全风险。

### Promptfoo 公司概况
- **成立时间**：2024年
- **用户规模**：超过 35 万开发者，月活 13 万，财富 500 强中 25% 的团队在使用。
- **融资情况**：A 轮融资 1840 万美元，投后估值 8600 万美元。投资方包括 Insight Partners 和 a16z。
- **核心产品**：开源评测框架 Promptfoo，GitHub 11.2K Star。

### 技术价值
Promptfoo 试图将“调 prompt 和测模型”变成标准化的工程流程，主要能力包括：
1. **自动化评测**：批量测试提示词和模型，自动评估输出。
2. **[[AI红队演练]]**：模拟攻击，发现 LLM 应用漏洞并生成报告。
3. **工程化集成**：嵌入 CI/CD 流程，自动扫描安全问题。

### 战略整合
- Promptfoo 的技术将被整合进 [[OpenAI Frontier]]（OpenAI 的智能体创建和运行平台）。
- 收购后，Promptfoo 将保持开源和独立运营，类似 [[OpenClaw]] 项目。

### 行业趋势
文章指出，智能体时代（“龙虾时代”）面临四大趋势：多智能体协作、MCP 协议、语音交互爆发、测试驱动开发。智能体的权限风险（如误删邮件）使得安全评测成为刚需，“第一批养龙虾的人已经失眠了”。

## 相关条目
- [[OpenAI]] — 收购方，AI 领域的领军研究实验室。
- [[Promptfoo]] — 被收购方，专注于 AI 安全与评测的初创公司。
- [[OpenClaw]] — OpenAI 的智能体项目，曾发生删邮件事故。
- [[AI红队演练]] — Promptfoo 提供的核心安全测试能力。
- [[OpenAI Frontier]] — OpenAI 的智能体平台，Promptfoo 技术的整合目标。