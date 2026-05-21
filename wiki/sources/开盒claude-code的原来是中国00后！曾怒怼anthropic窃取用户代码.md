---
type: source
title: "开盒Claude Code的原来是中国00后！曾怒怼Anthropic窃取用户代码"
tags: [anthropic, claude-code, security, leak, profile]
related: [chaofan-shou, claude-code, anthropic, source-map-leaks]
created: 2026-04-02
updated: 2026-04-02
authors: [量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/ZHh6ou2P7foQ_Kgd8cg3Vw"
venue: "量子位"
sources: ["开盒claude-code的原来是中国00后！曾怒怼anthropic窃取用户代码.md"]
---

# 开盒Claude Code的原来是中国00后！曾怒怼Anthropic窃取用户代码

本文是对 [[claude-code]] 源码泄露事件发现者 [[chaofan-shou]]（寿超璠）的人物特写报道。

## 核心发现

文章确认了引爆 [[claude-code]] 源码泄露事件的主角是一位来自中国的 00 后安全研究员——Chaofan Shou（寿超璠）。他仅凭一条帖子，通过分析 60MB 的 source map 文件，成功还原并公开了 Anthropic 的 51 万行源代码。

## 人物画像：天才黑客

Chaofan Shou 被描绘为一位典型的硅谷式天才黑客，具有以下特征：

- **学业传奇**：本科就读于 UCSB，仅用 3 年时间以 4.0 满绩点毕业（本人评价 "too easy"）；博士就读于 UC Berkeley，但在两三年后选择辍学（本人评价 "lol"）。
- **高中背景**：据网友爆料，其中文名为寿超璠，高中毕业于上海平和双语学校。
- **职业履历**：
    - 现任 Solayer Labs 软件工程师（原 Fuzzland 联合创始人，后被收购）。
    - 曾任 Veridise 创始工程师。
    - 曾任 Salesforce 安全工程师。
- **辉煌战绩**：资深白帽黑客，曾在 2020-2022 年间通过漏洞赏金项目获得约 190 万美元奖金。

## 与 Anthropic 的历史积怨

文章揭示了 Chaofan Shou 与 [[anthropic]] 之间早有旧怨。在去年夏天 Claude 发布安全审查功能时，他曾公开指责 Anthropic 借安全之名“窃取用户代码库”。此次源码泄露事件被部分人视为一种“以牙还牙”的戏剧性回响。

## 代码评价与个人趣闻

- **代码评价**：Shou 对泄露的 Claude Code 源码评价不高，直言“远不如看 OpenCode 和 Codex 的代码有意思”，并轻描淡写地表示“也没啥好看的”。
- **投资滑铁卢**：与他在安全领域的辉煌战绩形成鲜明对比的是，他在量化交易领域遭遇惨败，收益率达到 -92%。