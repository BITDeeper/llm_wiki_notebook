---
type: source
title: 卡帕西看好的NanoClaw，核心代码只有4000行
tags: [ai-agent, claws, nanoclaw, security, open-source]
related: [nanoclaw, andrej-karpathy, claws, openclaw]
created: 2026-02-22
updated: 2026-02-22
authors: [闻乐]
year: 2026
url: "https://mp.weixin.qq.com/s/fdU0LkHcq_OcNY4e9B9nFQ"
venue: 量子位
---

# 卡帕西看好的NanoClaw，核心代码只有4000行

## 摘要
本文报道了 AI 领域的新范式“Claws”的兴起，重点介绍了 Andrej Karpathy（卡帕西）对 NanoClaw 的推荐。文章指出，Claws 是继 LLM Agent 之后的下一代 AI 执行中枢，具备自主编排、调度、上下文管理、工具协同和持久化五大能力。Karpathy 特别推崇 NanoClaw，因为其核心代码仅 4000 行，易于审计，且默认容器化运行，解决了复杂 Agent（如 OpenClaw）的安全性和隐私担忧。

## 核心观点
- **范式进化**：Claws 被定义为“AI 执行中枢”，不仅能使用工具，还能自主组织工具、跑通完整流程并维持长期运行状态。
- **工程哲学**：对比 OpenClaw 的 40 万行代码，NanoClaw 的 4000 行代码体现了“少即是多”的安全优势，便于人工和 AI 审计。
- **安全机制**：通过容器化运行隔离任务环境，防止代码泄漏或恶意植入，保护用户隐私。
- **交互模式**：支持自然语言扩展（如 `/add-telegram`），用户无需修改配置文件即可通过指令让 AI 自我修改代码添加功能。
- **生态现状**：国内大厂（阿里云、网易）和高校（港大）迅速跟进，推出了 CoPaw、LobsterAI、Nanobot 等同类产品。

## 关键实体
- [[NanoClaw]]：轻量级、高安全性的 AI 执行中枢。
- [[Andrej Karpathy]]：OpenAI 创始成员，高度评价 Claws 范式。
- [[OpenClaw]]：Claws 范式的先行者，但代码臃肿。
- [[CoPaw]]：阿里云推出的多平台接入 Claws 工具。
- [[LobsterAI]]：网易开源的数字员工，融合 GUI 界面。
- [[Kimi Claw]]：基于 Kimi K2.5 的云端托管 Claws。

## 关键概念
- [[Claws]]：AI 执行中枢的新范式。
- [[容器化运行]]：保障 AI 代理运行安全的关键技术。
- [[自然语言扩展]]：通过指令动态修改代码的交互方式。