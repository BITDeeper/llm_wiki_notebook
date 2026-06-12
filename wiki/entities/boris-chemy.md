---
type: entity
title: Boris Cherny
created: 2026-05-24
updated: 2026-06-08
tags: [人物, anthropic, claude-code, ai编程]
related: [claude-code, anthropic, taste-is-not-a-moat, age-of-the-generalist, hire-less-spend-more-tokens]
sources: ["anthropic三张底牌全翻了！mythos-1首次现身，opus-4.8曝光.md", "rss/claude-code之父：「品味」不是人类护城河；当工程师不再写代码，招聘看什么？.md"]
origin_date: 2024-10-01
---
# Boris Cherny

Boris Cherny 是 [[claude-code|Claude Code]] 之父，[[anthropic|Anthropic]] 技术成员（Member of Technical Staff），Claude Code 核心建设者之一。

## 背景

- 前Meta（Facebook）工程师，曾在Facebook担任L4工程师时直接向VP级别高管提案并成功组建团队推进产品
- 2024年底加入 [[anthropic|Anthropic]] Labs Team，该团队职责是探索未来产品形态
- 函数式编程爱好者（Haskell、Scala），后因模型实践改变了技术执念

## 核心观点

Boris 是当前 AI 编程领域最重要的一线实践者声音之一，其观点涵盖：

1. **[[taste-is-not-a-moat|品味不是护城河]]**：编程品味和产品品味正在被模型快速学会，人类最终独特性只剩价值观
2. **[[age-of-the-generalist|通才黄金时代]]**：AI 降低了跨领域能力的迁移成本，传统分工正在瓦解
3. **写 Loops 而非写代码**：工作方式从直接 Prompt 模型演变为编写自动化流程管理多个模型实例
4. **[[hire-less-spend-more-tokens|少招人多发Token]]**：给创业者的组织策略建议

## 工作方式演变

- **2024年底**：加入 Anthropic，Claude Code 早期仅能完成10-20%工作
- **2025年中后期**：随模型迭代（Sonnet 4→Opus 4→Opus 4.5），Claude Code 能力跃升
- **2025年11月**：卸载 IDE，完全依赖 Claude Code 工作
- **2026年6月**：同时运行数百个 Claude 实例，工作变成"设计自动化系统"

## 关联事件

在2026年3月31日的 [[claude-code-源码泄露事件-20260331|51万行源码泄露事件]] 中，Boris Cherny 事后确认该事件为"普通的开发者失误"——有人在推送 Claude Code npm 更新（v2.1.88）时，忘记在 `.npmignore` 文件中加上 `.map` 这一行配置，导致59.8MB 的 source map 被完整推送到 npm 公共仓库。

## 关键引述

> "我的工作已经变成写 Loops。"

> "经验在这个时代不是线性累积的，有时甚至是负债。"

> "最终我们要教模型的，和我们教孩子的是同一件事：如何成为一个好的存在。如何做对的事情，而不仅仅是把事情做对。"