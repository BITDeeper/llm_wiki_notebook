---
type: entity
title: Thinking Machine Lab
tags: [research-lab, ai]
related: [tinker-api, twinkle]
created: 2026-03-11
updated: 2026-03-11
sources: ["训练即服务！让模型训练回归算法语义，150行代码跑通rl.md"]
---

# Thinking Machine Lab

[[Thinking Machine Lab]] 是一家研究机构，因推出 [[Tinker API]] 而在 AI 训练框架领域受到关注。

## Tinker API
该机构提出的 Tinker API 是一种基于算法语义的训练接口标准，提供了 `forward_backward`、`optim_step` 和 `sample` 等基础接口。这一标准启发了 [[Twinkle]] 框架的设计，Twinkle 不仅兼容 Tinker API，还对其进行了扩展，提供了更细粒度的训练控制能力。