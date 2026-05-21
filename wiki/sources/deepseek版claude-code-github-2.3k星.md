---
type: source
title: "DeepSeek版Claude Code：Github 2.3k星"
authors: [克雷西]
year: 2026
url: "https://mp.weixin.qq.com/s/TJs_LzkFaBxAD0rbrUXLxA"
venue: 量子位
tags: [ai-programming, deepseek, rust, tui, agent]
related: [deepseek-tui, hunter-bown, shannon-labs, deepseek-v4, claude-code]
created: 2026-05-04
updated: 2026-05-04
sources: []
---

# 源码摘要

本文报道了由独立开发者 [[Hunter Bown]] 开发的开源项目 [[DeepSeek-TUI]]。这是一个用 [[Rust]] 编写的终端用户界面（TUI）编程代理工具，被视为 [[DeepSeek V4]] 版本的 [[Claude Code]]。

文章详细介绍了 DeepSeek-TUI 的核心特性，包括针对 DeepSeek V4 的 100 万 token 上下文优化、[[前缀缓存优化]]策略以及独特的 [[RLM (Recursive Language Model)]] 模式。RLM 模式利用 DeepSeek 的低成本特性，允许一个主模型指挥最多 16 个子任务并行运行，显著降低复杂任务的总成本。

此外，文章还深入挖掘了作者 Hunter Bown 的独特背景——从音乐指挥转向专利法再到编程，以及他创立的 [[Shannon Labs]] 实验室的理念。项目在 GitHub 上迅速获得 2.3k 星标，并特别针对中国用户进行了本地化优化（如 TUNA 镜像支持）。