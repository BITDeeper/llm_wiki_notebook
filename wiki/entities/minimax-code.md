---
type: entity
title: MiniMax Code
created: 2026-06-01
updated: 2026-06-01
tags: [agent, 编程工具, ai编程]
related: [minimax-m3, minimax, 1-n-agent调度]
sources: ["minimax-m3来了！.md"]
origin_date: 2026-06-01
---
# MiniMax Code

MiniMax Code 是 [[minimax]] 专为 [[minimax-m3]] 设计并同步训练的Agent产品。

## 核心功能：Agent Team工作流

大型任务被拆解为多阶段、可并发、可动态调整的子任务，通过 Producer + Verifier 对抗式循环持续产出和自我修正，理论上可无人干预运行数天。

## 设计理念

MiniMax Code 与 M3 模型同步训练，而非事后适配。训练采用"交互式用户模拟器框架"，让模型在训练阶段就接触接近真实生产环境的协作场景：持续澄清需求、根据反馈调整方案、跨任务切换。

## 与现有概念的关联

Agent Team工作流是 [[1-n-agent调度]] 概念的具体产品化实现，将用户角色从对话者转变为任务调度者。