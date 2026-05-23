---
type: entity
title: FST快慢训练框架
created: 2026-05-19
updated: 2026-05-19
tags: [框架, 持续学习, 伯克利, 训练方法]
related: [持续学习, 快慢分层训练, 互补学习系统, gepa团队, uc-berkeley, databricks]
sources: ["伯克利神作背刺openai：持续学习才是真神！.md"]
origin_date: 2026-05-01
---
# FST快慢训练框架

FST（Fast-Slow Training，快慢训练）是由 [[uc-berkeley|伯克利]]、[[databricks]] 等机构联合提出的 [[持续学习]] 框架，通过 [[快慢分层训练]] 机制首次在大模型上实现了有效的持续学习。

## 核心架构

- **快权重**：由 GEPA prompt 优化器自动演化，快速适应当前任务的特殊性。
- **慢权重**：每隔一段时间用 RL（CISPO算法）调整，保留通用推理能力。
- 两者交替更新，避免单一参数组承担矛盾职能。

## 实验结果（初步，未经同行评审）

| 指标 | FST vs 传统RL |
|------|---------------|
| 数据效率 | 达到同等性能仅需1/3训练步数 |
| 遗忘程度 | KL散度低70% |
| 可塑性恢复 | RL模型近乎归零，FST恢复到基础模型水平 |

实验任务序列：HoVer（多跳检索事实核验）→ CodeIO（代码推理）→ Physics（物理题），每个任务200步后切换。

## 局限性

- 工程实现"还很初步"，GEPA 和 CISPO 可被替换。
- 仅基于三个任务的初步验证，尚未在更长任务序列上验证。
- 论文为预印本（arxiv 2605.12484），未经同行评审。

## 核心作者

- [[matei-zaharia|Matei Zaharia]]（Databricks联合创始人，Apache Spark作者）
- [[joseph-gonzalez|Joseph Gonzalez]]（伯克利教授，vLLM作者之一）
- Inderjit Dhillon（UT Austin与Google，ML领域元老）