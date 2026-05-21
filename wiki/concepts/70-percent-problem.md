---
type: concept
title: The 70% Problem (70%问题)
tags: [ai, limitations, software-engineering]
related: [vibe-coding, ai-assisted-engineering, ai-paradox]
created: 2026-01-25
updated: 2026-01-25
sources: ["氛围编程将死！谷歌总监警告：只会写prompt的程序员，2026年将被淘汰.md"]
---

# The 70% Problem (70%问题)

**70% 问题**（The 70% Problem）是由 [[addy-osmani]] 提出的概念，描述了 AI 在软件工程中的能力边界。

## 定义
AI 能够轻松完成项目前 70% 的工作，例如：
- 生成基础功能代码
- 快速构建原型
- 常规的 Bug 修复

然而，剩下的 30% 涉及：
- 复杂的边缘情况
- 深度的性能优化
- 系统稳定性保证
- 极端场景下的错误处理

这 30% 的工作必须由经验丰富的人类工程师解决，AI 无法独立完成。

## 为什么存在？
AI 没有质量保证。它无法察觉：
- 代码是否违反了 Web 标准
- 是否引入了微妙的性能下降
- 是否在极端用户场景下会失效

这些问题，专家一眼就能看穿，但 AI 看不出来。

## 影响
70% 问题解释了 [[ai-paradox]]（AI 悖论）：虽然 AI 让代码写得更快了（解决了前 70%），但产品交付却可能更慢了（因为剩下的 30% 难度大，且需要大量时间审查 AI 生成的代码）。

## 应对策略
- 采用 [[ai-assisted-engineering]] 模式，让人类专家专注于解决这 30% 的难题。
- 不要盲目信任 AI 生成的代码，必须进行严格审查。