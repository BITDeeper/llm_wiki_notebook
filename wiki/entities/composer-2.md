---
type: entity
title: Composer 2
tags: ["model", "ai-programming", "cursor", "controversy", "代码模型", "微调", "强化学习", "coding-model", "fine-tuned-model", "llm", "coding"]
related: ["cursor", "kimi", "ai-洗代码", "套壳争议", "kimi-k2-5", "持续预训练", "异步强化学习", "cursorbench", "yue-zhi-an-mian", "aman-sanger", "fireworksai", "claude-opus-4-6", "gpt-5-4", "自我总结强化学习", "terminal-bench-2-0"]
created: 2026-03-27
updated: 2026-05-08
sources: ["追不上就直接买，马斯克600亿美元收购cursor.md", "cursor滑跪开源技术报告：kimi基模这样微调能干翻claude.md", "cursor套壳kimi败露，最强「自研」模型被锤！创始人：忘记署名了.md", "cursor自研模型反超opus-4.6！价格脚踝斩，氛围编程沸腾了.md"]
---

# Composer 2

[[Composer 2]] 是 [[Cursor]] 发布的 AI 编程模型。该模型以极高的性价比和卓越的长任务处理能力著称，在性能上超越了 [[Claude Opus 4.6]]，同时价格大幅降低。

尽管 Cursor 曾将其宣传为“自研”成果，声称性能超越 [[Claude]] Opus 4.6，但随后被证实本质上是基于 [[kimi-k2-5]] 开发的微调版本。这一发现引发了关于“套壳”和虚假宣传的争议。

## 性能表现

Composer 2 在多项基准测试中展现了强劲的实力，实现了推理成本与精度的“帕累托最优”：

- **基准测试**：在自研的 [[cursorbench]] 评估中，准确率达到 61.3%。在 [[Terminal-Bench 2.0]] 上，其性能位于 [[GPT-5.4]] 和 [[Claude Opus 4.6]] 之间。
- **长任务能力**：具备处理超长复杂任务的能力，例如在 MIPS 架构上移植 Doom 游戏（涉及 170 轮交互、10w+ tokens）。
- **对比优势**：Cursor 声称该模型在推理成本与更小模型相当的情况下，精度媲美大尺寸前沿模型。

## 定价

Composer 2 提供了极具竞争力的价格策略，相比 Claude Opus 4.6 等竞争对手实现了大幅降价（被称为“脚踝斩”）：

- **标准版**：输入 $0.5/百万 tokens，输出 $2.5/百万 tokens。
- **Fast 变体**：输入 $1.5/百万 tokens，输出 $7.5/百万 tokens。

## 技术实质与训练流程

尽管存在宣传争议，Composer 2 在技术实现上包含了一系列针对代码生成的优化工作。其核心优势源于一种新的强化学习方法，即模型被训练在任务执行过程中主动停下来生成“自我总结”，从而压缩上下文并保留关键信息。这种方法比传统的摘要方法节省 80% 的 Token 用量，并减少约 50% 的压缩错误。

具体技术细节包括：

1.  **基座模型**：基于 [[kimi-k2-5]]。用户在 API 日志中发现模型名称为 `Kimi K2.5`，且 [[月之暗面]] 工程师证实其 Tokenizer 与 Kimi K2.5 完全一致。
2.  **持续预训练**：专注于代码领域知识注入，将上下文长度扩展至 256k，并引入 [[多token预测]]（MTP）层。
3.  **异步强化学习**：在模拟真实 Cursor 对话的环境中进行大规模策略梯度训练，优化 Agent 的多轮交互能力。

## 争议始末

### 虚假宣传
Cursor 在发布 Composer 2 时，大肆宣扬其技术突破，特别是“持续预训练”和“自我总结的强化学习方法”，但对基础模型来源只字不提，营造了从零预训练的假象。

### 实锤真相
随着用户对 API 日志的挖掘，模型底层依赖 Kimi 的事实被曝光。这表明 Composer 2 本质上只是 Kimi 模型的微调版本，而非 Cursor 声称的完全“自研”。

### 后续处理
面对实锤，Cursor CEO [[aman-sanger]] 承认使用了 Kimi 模型，但将未署名归咎于“疏忽”。最终双方发布声明称这是通过 [[FireworksAI]] 进行的授权合作。尽管如此，Cursor 未在初始技术博客中补充说明来源的行为仍被社区指责为缺乏透明度，属于典型的 [[ai-洗代码]] / 套壳行为。