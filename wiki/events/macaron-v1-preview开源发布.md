---
type: event
title: Macaron-V1-Preview 开源发布
created: 2026-06-08
updated: 2026-06-08
tags: [开源, 模型发布, agent, mind-lab]
related: [macaron-v1-preview, mind-lab, mixture-of-lora, agent-harness-后训练]
origin_date: 2026-06-08
participants: [mind-lab, 机器之心]
causes: [delta-mem发布]
effects: [macaron-v1-preview]
significance: high
sources: ["rss/刚刚，mind-lab开源v1系列模型preview，749b参数，专为agent-后训练.md"]
---
# Macaron-V1-Preview 开源发布

2026年6月8日，[[mind-lab|Mind Lab]] 正式开源发布 [[macaron-v1-preview|Macaron-V1-Preview]]，一款拥有749B参数、专为 [[agent-harness-后训练|Agent Harness]] 场景深度后训练的大模型。

## 事件背景

此前一个多月，GPT-5.5、[[deepseek-v4|DeepSeek V4]]、Claude Opus 4.8 密集发布，后训练成为模型能力提升的关键引擎。Mind Lab 此前已积累大量底层能力：与字节、英伟达合作实现万亿参数 LoRA 强化学习基础设施，发布 [[delta-mem|δ-mem]] 参数化记忆研究。

## 事件意义

- 中国 Neo Lab 首次开源749B级 Agent-native 模型
- 标志后训练范式在中小型实验室的工程验证
- 仅使用不到300张GPU完成训练，算力成本不到同尺寸模型的1%
- 首次整合 [[mixture-of-lora|Mixture-of-LoRA]]、Agent Harness 和 A2UI 等关键技术

## 后续影响

- 已有头部手机厂商、可穿戴硬件厂商开始接触 Mind Lab 寻求合作
- verl-mint 开源贡献给字节 verl-project 强化学习框架
- 作为年轻中小型实验室，仍需补短板、打磨基本功