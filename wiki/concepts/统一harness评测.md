---
type: concept
title: 统一Harness评测
created: 2026-05-27
updated: 2026-05-27
tags: [ai评测, harness, 公平性]
related: [deepswe, mini-swe-agent]
sources: ["gpt-5.5反杀claude登顶，ai编码旧榜不准了？.md"]
---
# 统一Harness评测

统一Harness评测是指所有参与基准测试的AI模型使用相同的工具链和提示词进行评测，以隔离模型自身能力与外围脚手架的差异。[[deepswe]]采用此方法，统一使用[[mini-swe-agent]]作为Harness。

## 优势

- 控制变量，确保评测反映的是模型本身的代码理解与修改能力
- 消除不同原生工具链（如Claude Code、Codex CLI、Gemini CLI）带来的不公平比较

## 代价与争议

- 不同模型家族训练时适配的工具形态不同，统一Harness可能将每家模型都按在其原生上限之下
- 开发者在现实中使用的是成熟的原生Harness，而非评测用的统一工具
- DeepSWE的对照实验仅10道题，样本量不足以完全消除公平性质疑

## 开放问题

统一Harness评测与原生Harness评测，哪种更能反映真实开发场景中的模型能力？这仍是AI评测领域未解决的方法论争议。