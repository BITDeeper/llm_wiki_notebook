---
type: event
title: Codex /goal功能上线
created: 2026-06-16
updated: 2026-06-16
tags: [codex, openai, self-goal-generation, autonomous-agents, paradigm-shift]
related: [codex, 自生成目标, ralph循环, thibault-sottiaux, pietro-schirano]
origin_date: 2026-04-30
participants: [openai, codex, thibault-sottiaux]
causes: []
effects: [自生成目标, ralph循环]
significance: high
sources: ["rss/码农连任务都不写了？codex开始自己给自己派活.md"]
---
# Codex /goal功能上线

2026年4月底，[[openai|OpenAI]]在Codex CLI 0.128.0版本中上线/goal功能（默认关闭，需手动在config.toml中开启features.goals），标志着AI编程工具正式从"执行层"上升至"规划层"。

## 功能概述

/goal功能允许Codex自主设定任务目标、为并行子智能体生成目标、自主切分工作。goal文本同时充当起始指令和完成审计标准，Codex每跑完一轮就回头对照目标自问是否完成。

## 关键人物

- [[thibault-sottiaux|Thibault Sottiaux (Tibo)]]：OpenAI Codex负责人，为功能定调——"人给意图，智能体来生成任务"
- [[pietro-schirano|Pietro Schirano]]：率先公开展示自生成目标工作流

## 行业影响

/goal功能上线拉开了2026年中期AI编程范式跃迁的序幕。随后两周内，Anthropic（5月6日多智能体编排）和Cursor（5月7日/orchestrate）相继推出类似功能，形成行业共识。

## 实证数据

- 真实项目18小时自主交付14/18个功能，花费仅4.20美元
- a16z合伙人Andrew Chen实测通宵运行14小时