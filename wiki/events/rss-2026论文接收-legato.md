---
type: event
title: Legato 论文被 RSS 2026 接收
created: 2026-05-29
updated: 2026-05-29
tags: [学术会议, 机器人, 具身智能]
related: [legato, 千寻智能, 高阳, rss-2026, 动作分块, 流匹配]
sources: ["让机器人动作流畅丝滑如「连音」，千寻智能高阳团队提出legato，入选rss-2026.md"]
origin_date: 2026-05-29
participants: [千寻智能, 高阳]
causes: []
effects: []
significance: medium
---
# Legato 论文被 RSS 2026 接收

## 事件概述

[[千寻智能]] 高阳团队的研究成果《Learning Native Continuation for Action Chunking Flow Policies》被机器人顶级会议 [[rss-2026]] 接收。论文提出了 [[legato]]（连音）方法，通过在训练阶段让模型学会从"部分已知动作"出发生成后续动作，从根本上解决了 [[动作分块]] 策略中的连续性问题。

## 核心贡献

- 提出"原生连续性"理念：连续性是模型内化的能力，而非推理时外部修补的结果
- 设计四大协同机制：噪声-真实值混合、逐步引导去噪、训练-推理一致性、混合参数随机化
- 在五个真实世界操作任务上超越现有方法，任务完成时间平均缩短约 10%，轨迹平滑性平均提升约 10%

## 论文信息

- 标题：Learning Native Continuation for Action Chunking Flow Policies
- arXiv：2602.12978
- 项目主页：https://lyfeng001.github.io/Legato/