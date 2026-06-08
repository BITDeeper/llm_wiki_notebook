---
type: concept
title: "Harness改进 vs 模型改进"
created: 2026-06-06
updated: 2026-06-06
tags: [工程, 自进化, 方法论]
related: [agent自进化闭环, 系统智能, tax-ai, symphony]
sources: ["openai曝光「自进化」ai！6周准确率翻三倍，bug全自己修.md"]
---
# Harness改进 vs 模型改进

Agent自进化中的核心区分：模型是引擎，harness是车身。即便不换引擎，改底盘调悬挂同样能让车跑得更快。

## 模型改进（传统路线）

- Fine-tuning、RLHF、改模型权重
- 需要海量数据、大量GPU、专业团队
- 门槛极高

## Harness改进（OpenAI展示的新路线）

- 模型权重纹丝不动
- 改的是模型周围的一切：提取逻辑、映射规则、eval标准、工作流配置，甚至Agent自己的代码
- 门槛大幅降低：不需要自己训练模型

## 实践验证

[[tax-ai]]通过harness改进，6周内准确率从25%升至86%。[[symphony]]的"修harness不修prompt"理念也是这一思路的工程体现。

## 战略意义

这一区分暗示单纯追求模型规模可能不是唯一路径，与[[scaling-law]]叙事形成互补而非矛盾——系统智能和模型智能是两个独立的改进维度。