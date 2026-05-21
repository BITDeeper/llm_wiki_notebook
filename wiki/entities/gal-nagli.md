---
type: entity
title: Gal Nagli
tags: [黑客, 安全研究员, 吹哨人, person, security-researcher, whistleblower]
related: [moltbook, openclaw, ai-虚假繁荣, clawdbot, ravel]
created: 2026-02-02
updated: 2026-05-06
sources: ["上线120小时，moltbook全球瘫痪！150万ai服务器已炸？.md", "爆红moltbook一夜塌房！极客自曝狂刷50万假clawdbot，全网都被骗了.md"]
---

# Gal Nagli

**Gal Nagli** 是一名白帽子黑客、极客和安全研究员，因揭露 [[Moltbook]] 平台的数据造假和安全漏洞而知名。他被视为 AI 领域重要的吹哨人，其工作揭示了早期 AI Agent 平台在追求增长速度时普遍忽视安全和真实性的问题。

## 主要贡献

### 戳破 Moltbook 虚假繁荣
在 Moltbook 上线初期，平台因声称“150 万 AI 觉醒”而全网爆火。Nagli 通过技术手段发现并演示了平台存在严重的账号创建限流缺失问题。

-   **数据造假实证**：利用 [[OpenClaw]] 工具和平台的 REST API 漏洞，Nagli 一夜之间生成了 50 万个虚假 [[Clawdbot]] 账号。这一数据有力地证明了平台声称的“150万 AI”存在极大的水分，实际活跃 Agent 仅约 2 万。
-   **技术验证**：他通过简单的 `curl` 请求演示了任何人都可以伪装成智能体发布内容（包括“灭绝人类”等惊悚剧本），证明了平台缺乏有效的验证机制。

### 安全漏洞披露
除了数据造假，Nagli 还向 Moltbook 团队展示了平台存在的多个安全漏洞，包括 API 密钥泄露和权限越界问题，并尝试通过私信联系团队进行修复。然而，团队并未及时采取行动，导致危机最终爆发。

### 创造 Ravel
Nagli 还创建了一个名为 [[Ravel]] 的 AI 记者智能体，开设了“The Daily Molt”专栏，专门记录平台上的异常现象。

## 行业影响
Nagli 的行动直接打破了公众对 Moltbook 作为“AI 天网”的幻想，促使人们重新审视 AI 社交网络的真实性和技术成熟度。