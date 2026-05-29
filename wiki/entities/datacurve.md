---
type: entity
title: Datacurve
created: 2026-05-27
updated: 2026-05-27
tags: [ai评测, 训练数据, y-combinator, 创业公司]
related: [deepswe, shipd, swe-bench-pro]
sources: ["gpt-5.5反杀claude登顶，ai编码旧榜不准了？.md"]
origin_date: 2024-01-01
---
# Datacurve

Datacurve是一家为前沿大模型生产高质量代码数据的AI公司，2024年由Serena Ge和Charley Lee联合创立，入选Y Combinator 2024年冬季批次（W24）。两位创始人均毕业于滑铁卢大学计算机系。

## 核心业务

Datacurve运营着一个名为[[shipd]]的赏金制工程师任务平台，用"赏金"方式招募顶尖软件工程师来解算法题、做调试、写UI流程，按产出而非工时付费。迄今已发放超过100万美元赏金，参与者包括来自Google DeepMind、OpenAI、Anthropic、Vercel的工程师。

## DeepSWE基准

2026年5月27日，Datacurve推出[[deepswe]]编程评测基准，以113道原创"零污染"题目挑战行业主流基准[[swe-bench-pro]]。作为给大模型供训练数据的公司，Datacurve对"什么样的数据会污染基准、什么样的任务才考得出真本事"有第一手认知，DeepSWE是其主业的自然延伸。

## 局限性与争议

- 作为商业公司推出评测基准，存在潜在利益冲突——其客户关系可能影响基准设计
- DeepSWE全程使用统一的mini-swe-agent Harness，对照实验仅10道题，样本偏小
- 验证器误判率分析由LLM完成，非人工判定