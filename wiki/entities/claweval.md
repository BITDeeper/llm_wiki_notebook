type: entity
title: ClawEval
tags: [benchmark, agent, evaluation]
related: [mimo-v2.5-pro, token-效率]
created: 2026-04-28
updated: 2026-04-28
sources: ["小米双模型正式开源！mimo-v2.5-pro无中断肝出“macos”：54个应用全开、浏览器真能冲浪.md"]
---

# ClawEval

一个用于衡量 AI Agent 在执行任务时 Token 效率的评测基准。

## 评测意义
在 Agent 任务中，模型的推理成本与消耗的 Token 数量直接相关。ClawEval 侧重于评估模型在达到特定任务完成度（如 Pass³ 通过率）时的资源消耗情况，而不仅仅是最终的成功率。

## 相关数据
在 ClawEval 测试中，[[mimo-v2.5-pro]] 仅消耗约 7 万 Token 即达到 64% 的 Pass³ 通过率。相比之下，Claude Opus 4.6、Gemini 3.1 Pro 和 GPT-5.4 等竞品通常需要消耗 12-18 万 Token。这表明 MiMo 模型在保持高性能的同时，具有显著的成本优势。