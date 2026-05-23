---
type: source
title: "花了1000倍的token，效果可能却没有更好：AI Agent的隐性账单长什么样"
created: 2026-05-17
updated: 2026-05-17
tags: [ai-agent, token消耗, coding-agent, 论文解读, 机器之心]
related: [token效率悖论, agentic-coding-token消耗研究发布-202605, openhands-agent, swe-bench-verified, token作为生产资料, ai-subscription-crisis]
sources: ["花了1000倍的token，效果可能却没有更好：ai-agent的“隐性账单”长什么样.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/ulZyoQZgxJfwGhqYwC9KKw"
venue: 机器之心
---
# 花了1000倍的token，效果可能却没有更好：AI Agent的"隐性账单"长什么样

本文是机器之心对论文《How Do AI Agents Spend Your Money? Analyzing and Predicting Token Consumption in Agentic Coding Tasks》（arXiv: 2604.22750）的深度解读。

## 核心内容

论文由 [[密歇根大学]]、[[斯坦福大学]] 等机构的研究者合作完成，使用开源的 [[openhands-agent]] 框架，系统分析了 8 个前沿模型在 [[swe-bench-verified]] 上的执行轨迹，首次对 AI 编程 Agent 的 token 消耗模式进行了量化研究。

## 关键发现

1. **Agentic coding 成本指数级高于传统任务**：相比代码推理和代码问答，agentic coding 的平均总 token 消耗、金钱消耗和输入输出比均呈指数级增长，输入输出比高达 154:1。
2. **[[token效率悖论]]**：更多的 token 消耗并不保证更高的准确率。高开销运行伴随大量重复操作（"折腾"），而非高效推理。
3. **模型间效率差异是系统性的**：GPT-5 系列效率最优，[[kimi-k2]] 消耗最高但准确率不突出，比 GPT-5 多消耗约 150 万 token。
4. **成本预测极其困难**：人类专家判断和 Agent 自预测都只能作为粗粒度信号，Agent 普遍低估消耗，尤其严重低估 input token。

## 测试模型

- OpenAI：GPT-5、GPT-5.2
- Anthropic：Claude Sonnet-3.7、Claude Sonnet-4、Claude Sonnet-4.5
- Google：Gemini-3-Pro Preview
- Moonshot AI：[[kimi-k2]]
- 阿里巴巴：[[qwen3-coder-480b]]

## 关联

本文从学术角度系统解释了 [[openclaw-130万月度账单事件-202605]] 背后的技术原因，并为 [[ai-subscription-crisis]] 和 [[token作为生产资料]] 提供了实证支撑。