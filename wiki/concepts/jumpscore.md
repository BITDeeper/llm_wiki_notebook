---
type: concept
title: JumpScore 基准
created: 2026-05-21
updated: 2026-05-21
tags: [评测基准, 时间定位, 视频理解]
related: [llava-onevision-2, codec-stream-tokenization, qwen3-vl-8b]
sources: ["llava-onevision-2迈向下一代感知智能的视觉语言大模型.md"]
origin_date: 2026-05-20
---
# JumpScore 基准

JumpScore 是 [[llava-onevision-2]] 团队提出的全新评测基准，面向高频、密集、视觉相似动作序列的细粒度时间定位。

## 设计目标

专门考察"在多个视觉极度相似的循环中，找出指定序号的那一次"的能力——即"在第几次循环中"的定位能力。这是机器人操作、体育分析、医疗复检都急需、却被现有基准长期忽视的能力。

## 核心发现

[[llava-onevision-2]]-8B 在 JumpScore 上以 74.9 mAP 大幅领先 [[qwen3-vl-8b]] 的 30.1（+44.8 分）。这一巨大差距本质上来自"证据是否真的对齐到事件瞬间"——码流原生方法能够精确捕捉比特率脉冲对应的关键瞬间。

## 注意事项

JumpScore 为自研基准，存在"既当裁判又当运动员"的潜在偏见风险，需社区独立验证其公平性和广泛适用性。