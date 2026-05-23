---
type: entity
title: GEPA优化器
created: 2026-05-19
updated: 2026-05-19
tags: [工具, prompt优化, 持续学习]
related: [fst-快慢训练框架, gepa团队, 快慢分层训练]
sources: ["伯克利神作背刺openai：持续学习才是真神！.md"]
origin_date: 2026-05-11
---
# GEPA优化器

GEPA 是一个 prompt 优化器，用于自动演化 [[fst-快慢训练框架|FST框架]] 中的"快权重"。在 [[快慢分层训练]] 范式中，GEPA 负责让模型快速适应当前任务的特殊性，与负责保留通用能力的慢权重（通过RL/CISPO调整）形成互补。

GEPA 并非 FST 的固定组件，可以被任何其他 prompt 优化器替换。FST 的核心贡献在于"快慢分工"的范式本身，而非具体组件的选择。