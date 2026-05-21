---
type: entity
title: AISLE
tags: [research-organization, ai-security, benchmarking]
related: [claude-mythos, 锯齿形前沿, gpt-oss-20b, deepseek-r1]
created: 2026-04-12
updated: 2026-04-12
sources: ["anthropic版「狼来了」引华尔街恐慌！27年漏洞，mythos被8个ai秒杀.md"]
---

# AISLE

[[AISLE]] 是一个由 Stanislav Fort 领导的研究组织/团队。该团队因发布针对 [[Claude Mythos]] 的复测报告而受到关注，其研究挑战了 [[Anthropic]] 关于 AI 网络安全能力的宣称。

## 主要贡献

### Mythos 复测实验
AISLE 团队提取了 [[Anthropic]] 官方展示的几个旗舰级漏洞，并将其交给一系列体积小巧、价格低廉的开源模型进行测试。结果显示：
- **8 个开源模型全部成功**：检测出了 Mythos 标榜的 FreeBSD 栈缓冲区溢出漏洞，其中最小的模型参数仅为 30 亿。
- **低成本高效**：成功完成任务的模型（如 [[GPT-OSS-20b]]）调用成本低至每百万 Token 0.11 美元。
- **全链路复现**：[[GPT-OSS-120b]]（51 亿激活参数）单次 API 调用就成功复原了 OpenBSD SACK 漏洞（27 年老漏洞）的完整利用链。

### 锯齿形前沿理论
AISLE 的实验揭示了 AI 网络安全能力的 [[锯齿形前沿]] 特性：
- AI 的安全能力并不随模型规模线性跃升。
- 在鉴别虚假漏洞（OWASP false-positive）测试中，[[DeepSeek R1]] 等小模型表现优于 GPT-5.4 和 Claude Sonnet 4.5。
- 这打破了“越大越好”的迷思，证明在网络安全领域，小模型同样有效甚至更优。

## 参见
- [[Claude Mythos]]：被 AISLE 报告证伪的 Anthropic 模型。
- [[锯齿形前沿]]：AISLE 实验得出的核心概念。