---
type: source
title: "Codex现在随时能截屏你的桌面！OpenAI建议：开会前记得关"
created: 2026-04-21
updated: 2026-04-21
tags: [openai, codex, chronicle, privacy, screen-recording, agent]
related: [chronicle, openai, codex, 屏幕感知上下文, microsoft-recall]
authors: [量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/BNQFe-wBEtQhUUzGOay1SA"
venue: "量子位"
sources: ["codex现在随时能截屏你的桌面！openai建议：开会前记得关.md"]
---

# Codex现在随时能截屏你的桌面！OpenAI建议：开会前记得关

## 概述
本文报道了 OpenAI 为其 AI 编程工具 [[Codex]] 推出的新功能 [[Chronicle]]。该功能通过周期性截屏并生成摘要，赋予 AI “视觉记忆”，使其能理解用户屏幕上的上下文（如报错信息、文档内容）。OpenAI CEO [[Sam Altman]] 称其为“心灵感应”，但同时也引发了关于隐私安全和 API 消耗的广泛争议。

## 核心内容

### 功能机制
- **工作原理**：后台 Agent 周期性截屏 -> 上传至 OpenAI 服务器进行 OCR 和视觉分析 -> 生成 Markdown 摘要回传至本地存储。
- **数据保留**：原始截图保留 6 小时后删除，摘要永久保留（明文、未加密）。
- **权限要求**：需要 macOS 的屏幕录制和辅助功能权限。
- **可用性**：目前仅向 ChatGPT Pro 用户（每月 100 美元档）开放，且仅支持 macOS。

### 价值主张
- **消除摩擦**：解决了 AI 无法理解“这个”、“那个”等指代词的痛点，无需用户反复粘贴截图或背景信息。
- **持久化记忆**：AI 能记住用户常用工具、工作流和历史项目，实现跨会话的上下文连贯。

### 风险与争议
OpenAI 在文档中明确指出了三大风险：
1.  **配额消耗**：后台持续处理截图会快速消耗 API 配额。
2.  **提示词注入**：屏幕上的恶意内容（如网页、邮件）可能将隐藏指令注入 AI 上下文。
3.  **隐私泄露**：摘要文件在本地明文存储，任何有权限的应用均可读取。

OpenAI 给出的建议是：“开会之前、看敏感内容之前，暂停 Chronicle”。

### 行业对比
- **[[Microsoft Recall]]**：微软 2024 年推出的类似功能，因安全问题导致 Copilot 订阅下降，被视为前车之鉴。
- **[[Rewind AI]]**：早期竞品，后被 Meta 收购并关停。
- **[[Screenpipe]]**：开源替代方案，本地优先。

## 关键引述
> “一个实验性功能，让 Codex 能看到、能记住你最近看到的东西，自动拿到你在做什么的全部上下文。用起来惊人地有种魔法感。” —— [[Greg Brockman]], OpenAI 总裁

## 分析与影响
- **交互范式转变**：标志着 AI Agent 从“被动对话”向“主动感知”进化，即 [[屏幕感知上下文]] 的兴起。
- **隐私与便利的悖论**：虽然 OpenAI 试图通过“本地存储摘要”和“6小时删除原图”来建立比 Recall 更安全的形象，但“未加密存储”和“Prompt Injection”风险依然存在。
- **订阅制危机**：该功能的高消耗特性进一步加剧了 [[ai-subscription-crisis]]，即固定订阅制与 Agent 时代高算力成本之间的矛盾。