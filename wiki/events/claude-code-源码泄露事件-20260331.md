---
type: event
title: Claude Code 51万行源码泄露事件
created: 2026-05-24
updated: 2026-05-24
tags: [安全事件, 源码泄露, anthropic, claude-code]
related: [claude-code, claude-sonnet-4.8, anthropic, source-map-leaks, boris-chemy]
origin_date: 2026-03-31
significance: high
participants: [anthropic, boris-chemy]
causes: [source-map-leaks]
effects: [claude-sonnet-4.8]
sources: ["anthropic三张底牌全翻了！mythos-1首次现身，opus-4.8曝光.md"]
---
# Claude Code 51万行源码泄露事件

2026年3月31日，[[anthropic]] 在推送 [[claude-code]] 的 npm 更新（v2.1.88版本）时，因配置失误导致51.2万行 TypeScript 源码被完整推送到 npm 公共仓库。

## 事件经过

开发者在推送 npm 更新时，忘记在 `.npmignore` 文件中加上 `.map` 这一行配置。就这一行配置的缺失，导致一份59.8MB、包含51.2万行 TypeScript 代码、1900个内部文件的 source map 被完整推送到 npm 公共仓库。

[[boris-chemy|Boris Cherny]]（Claude Code 之父）事后确认，这是一个"普通的开发者失误"。

## 泄露内容

这是 Anthropic 有史以来最大规模的内部泄露，暴露的关键信息包括：

- **Sonnet 4.8 确认**：关键词过滤器中出现 Sonnet 4.8 引用，无 Sonnet 4.7 痕迹，确认跳级发布策略
- **四大升级预告**：视觉能力、编程能力、推理层级、分词器更新
- **Token 消耗增加**：新分词器导致 Token 消耗增加约30%
- **内部产品路线图**：暴露 Anthropic 的版本规划和功能优先级

## 影响评估

此次事件是 [[source-map-leaks]] 概念的又一典型案例，与此前 Claude Code 因未删除调试文件导致生产环境源码被还原的安全事故一脉相承。泄露信息量之大，相当于提前数月曝光了 Anthropic 的产品路线图。