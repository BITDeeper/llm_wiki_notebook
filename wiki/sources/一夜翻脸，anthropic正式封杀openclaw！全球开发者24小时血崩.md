---
type: source
title: "一夜翻脸，Anthropic正式封杀OpenClaw！全球开发者24小时血崩"
tags: [anthropic, openclaw, 平台策略, 封杀事件, ai-订阅制]
related: [anthropic, openclaw, peter-steinberger, claude-cowork, ai-subscription-crisis, 逆向代理]
created: 2026-04-04
updated: 2026-04-04
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/pr6pCoRCFKeWDyr5xoBrjQ"
venue: "新智元"
sources: ["一夜翻脸，anthropic正式封杀openclaw！全球开发者24小时血崩.md"]
---

# 一夜翻脸，Anthropic正式封杀OpenClaw！全球开发者24小时血崩

## 摘要
本文详细记录了 Anthropic 于 2026年4月4日 正式切断第三方工具 [[openclaw]] 访问 Claude 订阅额度的决策过程与行业影响。文章指出，这一行动表面上是出于安全合规（CVE 漏洞）和商业止损（订阅套利），实则是一场针对 [[peter-steinberger]] 跳槽 [[OpenAI]] 的“商业清洗”，旨在强推自家原生工具 [[claude-cowork]]。

## 核心事件
- **时间点**：2026年4月4日 15:00 (美国东部时间)。
- **决策内容**：[[anthropic]] 正式将 [[openclaw]] 移出白名单，禁止 Claude Pro/Max 订阅用户通过该工具调用额度，强制转为按量计费 API 模式。
- **补偿措施**：提供相当于一个月订阅费的一次性补贴（需在4月17日前领取）。

## 关键背景与动因
1.  **创始人跳槽**：[[openclaw]] 作者 [[peter-steinberger]] 加入 [[OpenAI]]，被 Anthropic 视为潜在的安全风险和商业竞争行为。
2.  **订阅制危机**：大量用户利用 $20 的订阅配合 [[openclaw]] 跑出数千美元的 API 用量，导致 Anthropic 严重亏损，验证了 [[ai-subscription-crisis]] 的观点。
3.  **安全漏洞**：[[openclaw]] 被曝出存在 CVE-2026-25253 高危漏洞（CVSS 8.8），可能导致令牌泄露，成为官方封杀的借口。

## 商业策略分析
Anthropic 采取了典型的“平台锁定”策略：
1.  **前期纵容**：利用第三方工具做大生态。
2.  **中期封堵**：通过品牌切割、技术封锁、条款定性等手段挤压生存空间。
3.  **后期收割**：推出功能高度重合的原生工具 [[claude-cowork]]（Dispatch/Channels 功能），强迫用户迁移。

## 行业对比
与 [[OpenAI]] 形成鲜明对比：OpenAI 允许 Codex 订阅在第三方使用，并向开源项目维护者免费提供 ChatGPT Pro 权限，吸纳了被 Anthropic 驱逐的开发者。

## 开发者影响
- **成本激增**：从固定月费转为不可控的按量计费。
- **技术债务**：需在 24 小时内重构业务逻辑以适应新规。
- **信任崩塌**：被视为“AI 开放黄金时代”终结的标志。

## 引用与参考
- Hacker News 相关讨论。
- Anthropic CCO Paul Smith 关于客户需求的表态。
- CVE-2026-25253 漏洞记录。