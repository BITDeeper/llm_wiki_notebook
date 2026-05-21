---
type: source
title: Claude最新功能泄露！主动助手Orbit接管一切工作
tags: [anthropic, orbit, 主动式助手, claude-cowork, 产品泄露]
related: [orbit, claude-cowork, chatgpt-pulse, google-gemini-proactive-assistance, 主动式简报]
created: 2026-05-06
updated: 2026-05-06
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/ZlMjAf1jGrCMWAvNjgNXiw"
venue: "新智元"
sources: ["claude最新功能泄露！主动助手orbit接管一切工作.md"]
---

# Claude最新功能泄露！主动助手Orbit接管一切工作

## 概述

本文报道了 Anthropic 即将在 2026 年 5 月 6 日 Code with Claude 开发者大会上发布的主动式 AI 助手功能——[[Orbit]]。该功能在大会前夕被技术情报媒体 testingcatalog 在代码中挖掘出来，标志着 AI 产品形态从“被动响应”向“主动推送”的重大转变。

## 核心发现

### 1. Orbit 功能定位
[[Orbit]] 是一个跨平台（Web/Mobile/Claude Code）的主动式简报与洞察系统。其核心机制是：
- **Opt-in（用户主动开启）** + 时区识别
- **集成连接器**：Gmail, Slack, GitHub, Calendar, Drive, Figma
- **输出形态**：个性化简报，包含从已连接工作工具中提取的可操作洞察

### 2. 产品演进逻辑
文章梳理了 [[Claude Cowork]] 从立项到 Orbit 的四个月演进路径：
- Connectors（拉数据）
- Plugins（接入第三方）
- Scheduled Tasks（按时间触发）
- Dispatch（任务派发）
- Projects（多任务编排）
- Computer Use（自动操作电脑）
- **→ Orbit（主动简报+洞察）**

### 3. 行业竞争格局
Orbit 并非孤品，而是“主动 AI”赛道的产物：
- **[[ChatGPT Pulse]]**：OpenAI 2025年9月发布，首个主动式异步助手
- **[[Google Gemini Proactive Assistance]]**：计划在 5月15日 Google I/O 展示

### 4. 差异化策略
与竞品不同，Orbit 显式包含 **GitHub** 和 **Figma**。这意味着其目标用户不仅是处理邮件日历的高管，而是包括开发者、设计师和产品经理在内的产品研发团队。

## 关键洞察

### 成本与基础设施挑战
主动生成个性化洞察意味着 Claude 需要 7×24 小时在后台持续运行、读取数据并进行推理。这对 Anthropic 的基础设施成本是量级考验，也解释了为何该功能可能仅限 **Max 订阅用户**。

### 产品判断的难度
从“被动 prompt”转向“主动推送”，难点不在模型能力，而在产品判断——什么该推、什么该藏、什么时候推、推到哪里。这标志着 AI 竞争从“回答能力”转向“服务能力”。

## 商业影响

文章提到，Claude Cowork 企业版发布当天，引发市场对 SaaS 替代潮的恐慌，导致 Salesforce、ServiceNow、Workday 等公司股价集体走低，市值蒸发约 2850 亿美元。这反映了市场对 AI 深度介入工作流的极高预期。

## 相关条目

- [[Orbit]] — Anthropic 即将发布的主动式 AI 助手
- [[Claude Cowork]] — Orbit 的宿主平台，企业级 AI 协作平台
- [[主动式简报]] — AI 交互范式从问答到服务的转变
- [[Claude Code]] — 集成 Orbit 的开发者工具平台