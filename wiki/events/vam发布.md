---
type: event
title: VAM视觉智能体记忆框架发布
created: 2026-06-08
updated: 2026-06-08
tags: [长视频理解, 视觉记忆, 开源, ucl]
related: [vam-视觉智能体记忆, ucl, ovo-bench, mm-lifelong, delta-mem发布]
sources: ["rss/ucl长视频理解新思路：视频转记忆，再让模型去检索.md"]
origin_date: 2026-05-01
time_span:
  start: 2026-05-01
  end: null
participants: [ucl]
significance: medium
---
# VAM视觉智能体记忆框架发布

2026年5月，UCL团队向arXiv提交VAM（Visual Agentic Memory）论文（arxiv.org/abs/2605.16481），并于6月全面开源代码。VAM提出为大模型构建独立视觉记忆系统的新路线，挑战通过扩展上下文窗口解决长视频理解的行业主流方案。

## 核心成果

- 在[[ovo-bench|OVO-Bench]]榜单排名第一（68.41分），同底座下反超Gemini 3 Flash原生端到端表现
- 在[[mm-lifelong|MM-Lifelong]]51天超长跨度测试中，仅保留0.06%关键帧，准确率17.11%位列已发表工作第二

## 背景

VAM与2026年5月发布的[[delta-mem|δ-mem]]几乎同期出现，反映了2026年上半年AI记忆机制研究的小爆发趋势。两者从不同角度解决同一类问题——δ-mem通过参数化前缀向量实现在线记忆，VAM通过结构化视觉记忆库实现外挂式记忆。