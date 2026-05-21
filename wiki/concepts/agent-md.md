---
type: concept
title: agent.md 体系
tags: [engineering-practice, ai-coding, workflow]
related: [agent-编排, 9级地震]
created: 2026-01-14
updated: 2026-01-14
sources: ["再见，程序员！硅谷全员ai-coding，卡帕西宣告9级地震来了.md"]
---

# agent.md 体系

agent.md 体系是由 [[theo]] 提出的一种工程实践方法，旨在解决 AI 代码生成的随机性与工程严谨性之间的冲突。

## 定义
在代码库中维护一个特定的 `agent.md` 文件。每当开发者手动修正 AI 生成的代码时，就将修正规则写入该文件。

## 效果
这种机制能带来指数级的准确率提升：
- **第一周**：AI 准确率从 60% 提升到 75%。
- **第一个月**：AI 准确率提升到 85%。
- **三个月后**：AI 准确率接近 95%。

## 意义
通过这种方式，程序员的工作逐渐从“写代码”转变为“提需求”和“维护规则库”。这是实现 [[agent-编排]] 的具体落地手段之一。