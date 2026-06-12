---
type: entity
title: OVO-Bench
created: 2026-05-26
updated: 2026-06-08
tags: [评测基准, 流式视频理解, 多模态大模型, 视频理解, 在线视频]
related: [streamingbench, 流式视频理解, response-g1, vam-视觉智能体记忆, mm-lifelong]
sources: ["acl-2026｜证据摊开看，场景图画清：让流式视频大模型拿捏「何时开口」.md", "rss/ucl长视频理解新思路：视频转记忆，再让模型去检索.md", "acl-2026｜证据摊开看，场景图画清：让流式视频大模型拿捏「何时开口』.md"]
---
# OVO-Bench

**OVO-Bench**（Online Video Understanding Benchmark）是主流的在线/流式视频理解评测基准之一，用于评估视频大模型在在线流式场景下的理解与交互能力。

## 任务设置

该基准区分两类子任务：

- **主动式（Forward Active Responding）**：模型自主决定响应时刻。
- **被动式**：响应时刻与提问时刻一致。

## 代表性结果

- [[response-g1]] 在该基准的主动式子任务上取得了 12.8% 的显著提升。
- [[vam-视觉智能体记忆|VAM]] 在此榜单上取得 RT+BT 平均分 68.41，排名第一。值得注意的是，VAM 配合 Gemini 3 Flash 作为底座，在同底座情况下反超了 Gemini 原生的端到端表现（67.46），尤其在空间理解（STU）子项上表现出压倒性优势，证明了显式记忆在处理细节问题时的不可替代性。