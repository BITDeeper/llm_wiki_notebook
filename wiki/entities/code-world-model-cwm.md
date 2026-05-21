---
type: entity
title: Code World Model (CWM)
tags: [model, meta, code-llm]
related: [ssr-self-play-swe-rl, meta]
created: 2025-12-27
updated: 2025-12-27
sources: ["华人一作！meta等复刻alphazero神话，ai甩开人类自修成神.md"]
---

# Code World Model (CWM)

[[Code World Model (CWM)]] 是 Meta 开发的基础大语言模型，专注于代码领域。在 [[ssr-self-play-swe-rl]] 的研究中，CWM 32B 版本被用作底座模型。

## 应用
在 SSR 研究中，CWM 32B 在 512 张 H100 GPU 上进行了训练，通过自博弈机制在 [[SWE-bench]] 基准测试中取得了超越人类数据基准的优异成绩。