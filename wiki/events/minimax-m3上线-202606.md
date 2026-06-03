---
type: event
title: MiniMax M3上线
created: 2026-06-02
updated: 2026-06-02
tags: [模型发布, 开源模型, 大模型, ai竞争]
related: [minimax, minimax-m3, minimax-code, msa-minimax-sparse-attention, 交互式用户模拟器框架]
sources: ["minimax-m3一手实测：老黄ppt上74个logo，我以为能难住它.md"]
origin_date: 2026-06-01
significance: high
participants: [minimax, nous-research]
causes: []
effects: []
time_span:
  start: 2026-06-01
  end: null
---
# MiniMax M3上线

2026年6月初，[[minimax]] 突然上线最新开源旗舰模型 [[minimax-m3]] 及配套编程客户端 [[minimax-code]]。

## 事件背景

此前能同时跑通Coding Frontier、1M上下文、原生多模态这三件事的只有Claude Opus、[[gpt-5.5]]、Gemini 3.1 Pro，且全是闭源的。开源社区一直在追赶，但把这三件事同时凑齐的模型此前从未出现。

## 核心突破

- 首个同时实现1M长上下文、原生多模态和强Coding能力的开源模型
- SWE-Bench Pro跑出59%，超过GPT-5.5和Gemini 3.1 Pro
- 1M上下文下每token计算量压到上代的1/20，decoding加速超15倍
- 基于自研 [[msa-minimax-sparse-attention|MSA]] 稀疏注意力机制和 [[交互式用户模拟器框架]]

## 行业反响

- [[nous-research]] 联创公开在X上为M3背书
- Vercel CEO、GitHub 540k星AI大佬Guillermo Rauch公开推荐，称M3表现紧跟Opus和GPT-5.5，价格仅十分之一

## Token Plan计费争议

M3上线时引入Token Plan新计费方式，引发热议。[[minimax]] 官方火速回应，提高周用量限额，并对以前没有周限额的老用户保持原有设定。

## 行业意义

标志着开源模型首次在长上下文+原生多模态+Coding三维度同时追平闭源旗舰，前沿模型能力长期被少数闭源产品把持的局面首次被打破。