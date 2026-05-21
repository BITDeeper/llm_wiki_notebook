---
type: entity
title: T2A-bench
tags: [benchmark, evaluation, text-to-audio]
related: [audiox, if-caps]
created: 2026-03-09
updated: 2026-03-09
sources: ["一个模型，搞定所有音频生成任务！多项基准sota-iclr'26.md"]
---

# T2A-bench

T2A-bench 是由香港科技大学团队提出的可控文本生成音频（T2A）评测基准。

## 目的
用于评估音频生成模型在指令跟随方面的能力，特别是对生成音频的细粒度控制能力。

## 评测维度
该基准关注模型对以下指令的响应能力：
- 声音事件的类别。
- 声音的数量。
- 声音的时间戳。
- 声音的时序关系。

## 表现
在 T2A-bench 上，[[AudioX]] 模型在所有评测维度上均全面领先于现有的其他方法。