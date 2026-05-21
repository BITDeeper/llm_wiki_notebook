---
type: source
title: "Claude Code之父红杉演讲震撼全场! 26年未写1行代码, 电脑都不开了"
tags: [anthropic, claude-code, boris-cherny, ai-agent, 编程范式, 红杉资本]
related: [claude-code, boris-cherny, loop, 产品过剩, ai-subscription-crisis]
created: 2026-05-06
updated: 2026-05-06
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/c0bvVHj9PPywJ_qhRIYBtA"
venue: "新智元 (微信公众号)"
sources: ["claude-code之父红杉演讲震撼全场!-26年未写1行代码,-电脑都不开了.md"]
---

# 源摘要：Claude Code之父红杉演讲震撼全场

本文报道了 Anthropic 核心开发者、Claude Code 之父 [[boris-cherny]] 在红杉 AI Ascent 2026 大会上的演讲。Boris 震撼全场地宣布，2026 年他未亲手写过一行代码，甚至已不再使用电脑，而是通过手机管理数百个 [[ai-agent]]，单日最高提交 150 个 PR。

## 核心观点

- **编程已实质性解决**：对于大多数任务，开发者不再需要关心底层语法和环境，因为“对于模型来说，一切皆为 Token”。
- **Loop 大法**：通过 `\loop` 指令让 AI 像 Cron 定时任务一样自我循环执行（如自动修复 CI 错误、监控反馈），这是 Agent 时代的核心交互模式。
- **代码库自噬**：随着模型能力变“厚”，工具层必须变“薄”。预言 Claude Code 自身的代码库一年后可能只剩 100 行左右。
- **产品过剩**：模型能力已经非常强大，但现有产品尚未能完全承接和利用这些能力。Claude Code 在 Opus 4 出现后迎来爆发，正是这一临界点的体现。
- **去神圣化**：软件开发门槛降低，将从精英技能变为大众基础技能（如发短信），领域知识将重新夺回高地。

## 关键信息

- **Claude Code 诞生**：2024 年底在 Anthropic Labs 孵化，初期惨淡，直到 2026 年 5 月 Opus 4 模型出现才迎来指数级增长。
- **技术栈选择**：选择 TypeScript/React 仅因其在模型训练分布中数据丰富，而非因其技术优越性。
- **SaaS 行业重构**：AI 削弱了“转换成本”和“流程权力”两大护城河，使得微型公司能构建巨头级价值，创业黄金时代已来。

## 与 Wiki 的联系

- 本源详细补充了 [[claude-code]] 的核心理念（Loop 大法）及诞生背景。
- Boris 的高频 Agent 使用数据（一天 150 个 PR）侧面印证了 [[ai-subscription-crisis]] 中提到的算力消耗激增问题。
- “手机编程”的实践展示了 [[runtime-agent-os]] 架构的具体应用场景。