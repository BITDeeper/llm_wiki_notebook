---
type: concept
title: "成本感知评分 (CAS)"
created: 2026-05-21
updated: 2026-05-21
tags: [评测标准, 效率评估, 多模态搜索]
related: [imeb, hypereyes, tokenmaxxing, ai-subscription-crisis]
sources: ["hypereyes：从「搜得更深」到「搜得更宽」，并行多模态搜索智能体的效率革命.md"]
---
# 成本感知评分 (CAS)

CAS（Cost-Aware Score）是随 [[hypereyes|HyperEyes]] 和 [[imeb|IMEB]] 基准一同提出的评估标准，将准确率、Token 消耗和工具调用轮次进行联合评估。

## 核心理念

CAS 将传统的答案质量换算为**「单位延迟下的有效信息密度」**，从根本上遏制大模型靠堆砌算力暴力刷榜的行为。

## 评估维度

- **准确率**：答案的正确性
- **Token 消耗**：推理过程的计算成本
- **工具调用轮次**：与外部工具交互的次数

三个维度在统一标尺下联合评估，衡量模型每一单位算力输出的信息密度。

## 与 Tokenmaxxing 的对照

CAS 与 [[tokenmaxxing]] 代表了对 AI 效率的两种截然不同的哲学：

| 维度 | Tokenmaxxing | CAS |
|------|-------------|-----|
| 核心追求 | Token 吞吐量最大化 | 单位 Token 有效信息密度最大化 |
| 评价逻辑 | 消耗越多越有生产力 | 消耗越少信息密度越高越好 |
| 典型实践 | 将 Token 使用 KPI 化 | 将效率纳入模型评测 |

## 实验数据

在 CAS 评分下，HyperEyes-30B 的表现达到次优开源模型的 **7.6 倍**，证明其每一单位算力输出的信息密度极高。