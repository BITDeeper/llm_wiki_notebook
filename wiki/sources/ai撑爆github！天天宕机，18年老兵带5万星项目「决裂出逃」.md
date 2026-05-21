---
type: source
title: "AI撑爆GitHub！天天宕机，18年老兵带5万星项目「决裂出逃」"
tags: [github, ai, infrastructure, mitchell-hashimoto, ghostty, outage, open-source]
related: [mitchell-hashimoto, ghostty, ai-反噬, github-宕机事件-2026, 去github化]
created: 2026-04-29
updated: 2026-04-29
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/B_uIgpsHb6cEfmcQex6pLA"
venue: "新智元"
sources: ["ai撑爆github！天天宕机，18年老兵带5万星项目「决裂出逃」.md"]
---

# AI撑爆GitHub！天天宕机，18年老兵带5万星项目「决裂出逃」

## 摘要
本文报道了 GitHub 第 1299 号用户、Vagrant 之父 [[Mitchell Hashimoto]] 因不堪忍受平台频繁宕机，决定将其拥有 5 万星的项目 [[Ghostty]] 迁离 GitHub 的事件。文章分析了 GitHub 在微软收购后，由于过度倾斜资源至 AI 战略（如 Copilot），导致传统代码托管和 CI/CD 基础设施维护不足，进而引发服务不稳定的结构性问题。

## 核心观点

### 1. 标志性人物出走
[[Mitchell Hashimoto]] 作为 GitHub 早期用户（18年老兵）及多项基础设施工具的创造者，其对平台的“决裂”具有极强的象征意义。他通过日记记录了过去一个月几乎每天都有宕机的情况，并指出这种不稳定性已严重影响了开发工作。

### 2. AI 战略的反噬
文章指出，GitHub 的困境源于其 AI 战略导致的 [[ai-反噬]]：
- **资源倾斜**：大量工程资源被投入到 Copilot 等 AI 产品（利润中心），而 Actions 等基础服务（成本中心）的维护被忽视。
- **负载激增**：AI 编程工具（如 Copilot Agent）极大地提高了代码产出量，导致提交、PR 和 CI/CD 构建数量呈几何级增长。
- **基础设施过载**：现有的 GitHub 基础设施是为“人类手速”设计的，无法承受 AI 带来的高频自动化操作。

### 3. 官方确认与扩容困境
GitHub 新任 CTO Vlad Fedorov 承认，原定的 10 倍容量扩容计划已失效，必须进行 30 倍规模的重新设计。4 月 27 日的全球性大宕机（持续近 18 小时）被证实是由 botnet 攻击叠加流量超载（主要是 Agentic 工作流）引起的。

### 4. 社区趋势：去 GitHub 化
[[Ghostty]] 的出走并非孤例。[[Zig]] 编程语言和 [[Gentoo Linux]] 等重量级开源项目此前也已迁移至 [[Codeberg]] 等替代平台，理由包括对微软垄断的不满及反对利用仓库训练 AI 的政策。

## 关键引述
> “GitHub 曾是我的梦想工作... 但最近，我开始在公开场合频繁批评 GitHub... 这种愤怒其实源于一种极度私人的情感：我比任何人都爱 GitHub，但它现在每天都在辜负我。” — Mitchell Hashimoto

> “AI 是利润中心，基础设施是成本中心。在一个所有人都在追逐 AI 叙事的市场里，没有 CEO 会站出来说：‘这个季度，我们把 Copilot 的研发预算砍一半，去修 Actions。’”

## 相关背景
- **事件背景**：2026 年 4 月，GitHub 频繁出现服务中断，尤其是 GitHub Actions 和代码搜索服务。
- **技术背景**：AI 编程助手（Copilot, Cursor, Claude Code）的普及改变了开发者的工作流，使得代码提交和构建的频率远超平台设计预期。