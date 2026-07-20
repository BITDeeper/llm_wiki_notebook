---
type: entity
title: Kimi-K2-Instruct
created: 2026-06-14
updated: 2026-06-14
tags: [llm, teacher-model, agent]
related: [fusesearch]
sources: ["rss/代码定位太慢？蚂蚁acl2026新作：让模型自己学会「该搜多少」.md"]
---
# Kimi-K2-Instruct

**Kimi-K2-Instruct** 是在 [[fusesearch|FuseSearch]] 研究中扮演关键角色的强大指令模型。它承担了两个重要功能：
1. 作为**教师模型**，为监督微调（SFT）阶段生成高质量的搜索轨迹数据。
2. 作为**下游 Agent 主脑**，在接入 FuseSearch 作为前置搜索引擎后，负责后续的代码修复与生成任务。