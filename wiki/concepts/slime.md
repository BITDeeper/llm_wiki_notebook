---
type: concept
title: Slime
tags: [framework, rl, training]
related: [glm-5, agentic-engineering]
created: 2026-02-07
updated: 2026-02-07
sources: ["股价暴涨32%！glm-5登顶全球开源第一，25分钟一镜到底搓出完整系统.md"]
---

# Slime

[[Slime]] 是 [[智谱AI]] 提出的全新异步强化学习框架。它是 [[GLM-5]] 实现“越跑越聪明”的关键技术之一。

## 工作原理
Slime 配合大规模强化学习使用，旨在提升模型在长程任务中的表现。通过异步机制，它允许模型在执行过程中不断进行自我反思和策略调整，从而在长跑中不断优化自身的行为。

## 作用
在 [[Agentic Engineering]] 的场景下，模型往往需要经历多步推理和操作。Slime 框架确保了模型在这些长链路任务中能够保持逻辑的连贯性，并在遇到错误时进行有效的自我修正。