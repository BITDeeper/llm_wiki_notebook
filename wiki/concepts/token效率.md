---
type: concept
title: Token效率
created: 2026-05-14
updated: 2026-06-04
tags: [token, 效率, 模型性能, 技术栈, agent, 推理, 成本]
related: [muse-spark, token作为生产资料, tokenmaxxing, 模型竞赛赛点转移, ai-subscription-crisis, step-3.7-flash, 1-n-agent调度]
sources: ["亚历山大王回应一切：lecun、manus，“我的父母都是中国人”.md", "阶跃step-3.7-flash登顶aa榜：速度、性价比、端到端三项第一.md"]
---
# Token效率

Agent时代模型竞争力的核心衡量指标，指AI模型在达到相似结果时使用的token数量，具体体现在**推理速度**和**调用成本**两个维度。

## 背景

在传统单轮问答场景中，速度和成本只是体验优化项。但当Agent成为主流落地形态后，AI需要反复调用工具、多轮检索信息、分步拆解复杂任务。一次回答慢两秒可以忍受，但Agent一个任务要调几十次模型，延迟和成本会成倍飙升。业内近一年的Agent研究已开始引入"预算约束""成本最优规划"等评价维度，本质上是因为推理成本已成为Agent落地的核心瓶颈。

## 核心指标

- **tps（tokens per second）**：模型推理输出速度单位。主流模型约30tps，[[step-3.7-flash]]最高达416tps
- **缓存命中率**：Prefix Caching复用率，越高则长任务成本越低。[[阶跃星辰]]以86.1%位列全球第二
- **单位成本**：每百万token的定价，直接决定Agent规模化部署的经济可行性

## 实例：Muse Spark

[[muse-spark|Muse Spark]]在Artificial Analysis平台上表现出异常高的token效率——达到与其他实验室模型相似的结果，但使用的token数量显著更少。

## 技术归因

[[亚历山大王]]将高token效率归因于：
- 从头构建的"非常干净的技术栈"
- 由"真正知道如何构建这些系统的专家"以"正确方式"完成一切
- 猜测其他模型可能存在根本性低效，通过让模型多思考来弥补

## 与相关概念的关系

- [[token作为生产资料]] / [[tokenmaxxing]] — Token效率提供了另一视角：在Token吞吐量最大化的竞赛之外，还存在一条效率竞赛的路线。高tps直接服务于吞吐量需求，而高token效率意味着在相同算力下可以实现更多推理，随着模型继续扩展，这对未来表现是"很好的兆头"
- [[ai-subscription-crisis]] — Agent高频调用导致成本飙升，订阅制失效
- [[1-n-agent调度]] — 多Agent并行调度进一步放大了Token效率的重要性