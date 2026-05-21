---
type: source
title: "Cursor自研模型反超Opus 4.6！价格脚踝斩，氛围编程沸腾了"
tags: [cursor, composer-2, llm, benchmark, pricing, reinforcement-learning]
related: [cursor, composer-2, 自我总结强化学习, terminal-bench-2-0, claude-opus-4-6]
created: 2026-03-20
updated: 2026-03-20
authors: [一水]
year: 2026
url: "https://mp.weixin.qq.com/s/kP1nHVvnrxmzwaM6-btykQ"
venue: "量子位"
sources: ["cursor自研模型反超opus-4.6！价格脚踝斩，氛围编程沸腾了.md"]
---

# Cursor自研模型反超Opus 4.6！价格脚踝斩，氛围编程沸腾了

## 概述
本文报道了 [[Cursor]] 发布其自研编程模型 [[Composer 2]] 的消息。该模型在性能上超越了 [[Claude Opus 4.6]]，同时价格大幅降低（被称为“脚踝斩”）。文章深入探讨了其背后的技术突破——一种名为“[[自我总结强化学习]]”的新方法，旨在解决长链条任务中的上下文遗忘问题。

## 核心要点

### 1. 性能与定价
- **性能对比**：[[Composer 2]] 在 [[Terminal-Bench 2.0]] 上的表现位于 [[GPT-5.4]] 和 [[Claude Opus 4.6]] 之间，并在 [[SWE-bench Multilingual]] 上取得大幅提升。
- **定价策略**：
  - **Composer 2**：输入 $0.5/百万 tokens，输出 $2.5/百万 tokens。
  - **Composer 2 Fast**：输入 $1.5/百万 tokens，输出 $7.5/百万 tokens（速度更快）。
  - 相比 [[Claude Opus 4.6]]，价格优势极其显著，被称为“脚踝斩”。

### 2. 技术突破：自我总结强化学习
- **核心问题**：AI 编程助手在处理长任务（上万行代码、上百步操作）时，受限于上下文窗口，容易遗忘关键信息导致任务失败。
- **解决方案**：引入“自我总结”机制，让模型在任务执行过程中主动停下来生成“会议纪要”或“笔记”，压缩上下文并保留关键信息。
- **训练机制**：这种能力不是通过提示工程实现的，而是通过强化学习训练出来的。总结的质量直接影响任务的成功率和奖励信号。

### 3. 效果验证
- **Token 效率**：相比传统摘要方法（需 5000+ tokens），[[Composer 2]] 的自我总结机制仅需约 1000 tokens，用量仅为前者的 1/5。
- **错误率降低**：压缩带来的错误减少约 50%。
- **长任务案例**：成功完成“在 MIPS 架构上运行 Doom 游戏”的高难度任务，经过 170 轮交互，将 10w+ tokens 压缩至 1000 个。

### 4. 行业影响
- **身份转变**：[[Cursor]] 从单纯的 AI 应用开发商转变为兼具模型研发能力的公司，CEO 称其“既不是纯粹的应用程序开发商，也不是模型提供商”。
- **竞争格局**：[[Composer 2]] 的发布标志着 [[Cursor]] 与 [[Anthropic]] 在编程模型领域形成直接竞争关系。

## 关键引述
> “虽然这种名为‘自我总结的强化学习方法’听起来有点拗口，但思路其实很清晰……让模型学会‘自己给自己做会议纪要’，从而把原本记不住的超长任务，一步步接着干下去。”

## 参考链接
- [Cursor 官方公告](https://x.com/cursor_ai/status/2033967614309835069?s=20)
- [Thomas Wolf (Hugging Face) 评论](https://x.com/mntruell/status/2034729462211002505)