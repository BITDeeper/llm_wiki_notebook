---
type: concept
title: One-shot / Few-shot
tags: [prompting, efficiency, technique]
related: [thinking-tokens, scaling-law]
created: 2026-01-21
updated: 2026-01-21
sources: ["node.js之父官宣：人类手写代码时代真的结束了！.md"]
---

# One-shot / Few-shot

## 定义
[[One-shot]]（一次性提示）和 [[Few-shot]]（少量提示）是 AI 交互的两种高效模式，指无需复杂的链式思考或多次迭代，通过单次或极少次数的提示就能直接获得精准结果的能力。

## 技术意义
这两种模式被视为 AI 编程从“思考型”进化到“反射型”的关键标志：
- **思考型**：依赖大量的 [[思考-Tokens]] 进行后台推理，成本高、速度慢。
- **反射型**：类似人类的直觉反应，通过 One-shot/Few-shot 直接给出答案，成本极低。

## 与成本的关系
[[Emad Mostaque]] 预测，随着模型能力的提升，绝大多数代码生成任务将不再需要昂贵的推理过程，而是通过 One-shot/Few-shot 完成。这是 AI 编程成本能够从 200 美元/月降至 <1 美元/月的技术前提。

## 用户体验
这种转变带来的体验类似于从使用 [[Gemini]] 3 Pro（重思考）到 Gemini 3 Flash（重速度）的飞跃，响应速度极快且几乎无感知延迟。