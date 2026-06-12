---
type: concept
title: A2UI（Agent to UI）协议
created: 2026-06-08
updated: 2026-06-08
tags: [交互协议, ui, agent, google, 生成式界面]
related: [macaron-v1-preview, mind-lab, 场景白盒化推理]
sources: ["rss/刚刚，mind-lab开源v1系列模型preview，749b参数，专为agent-后训练.md"]
---
# A2UI（Agent to UI）协议

Google 提出的生成式交互界面协议，模型可在5秒内生成可操作的动态UI，让用户通过点击、滑动和确认推进任务。

## 核心理念

传统大模型用长文本回答任务，使用户承担巨大的理解与执行负担。A2UI 协议将任务执行转化为可视化交互，不只是方便用户，也是让真实用户反馈成为模型学习信号的关键桥梁。

## 应用

[[macaron-v1-preview|Macaron-V1-Preview]] 是首次推出支持 A2UI 协议的模型，得益于 [[mind-lab|Mind Lab]] 与 TileRT 团队在高速推理上的技术合作。在 A2UI 协议评测中取得开源 SOTA。

## 应用场景示例

- 复习单词、收拾行李等生活场景
- 生成小游戏、生成菜谱
- 学习理科知识（如爱因斯坦双胞胎悖论、康威生命游戏）
- 展示学术论文（如δ-mem论文）