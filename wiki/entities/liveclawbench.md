---
type: entity
title: LiveClawBench
created: 2026-05-27
updated: 2026-05-27
tags: [评测基准, physical-ai, 三星, benchmark]
related: [三星, ai-model-tf, 唐业辉, physical-ai, sim2real]
sources: ["从foundation-model到physical-ai，三星「杀入」大模型核心战场.md"]
origin_date: 2026-04-01
---
# LiveClawBench

LiveClawBench是[[三星]][[ai-model-tf|AI Model TF]]提出的面向[[physical-ai|Physical AI]]场景的评测基准，旨在解决传统Benchmark无法有效评测真实物理世界AI系统能力的问题。

## 核心问题

当AI开始真正进入设备、机器人与Physical AI场景后，传统Benchmark面临根本性挑战：

- 过去的大模型评测大多基于静态任务、固定环境与标准答案
- 真实世界中设备状态会变化、任务链路更长、环境更复杂
- 模型需要持续感知、规划、执行与调整
- 仅靠"刷题式Benchmark"已经远远不够

## 三维复杂度框架

LiveClawBench提出从三个维度系统评测模型能力：

1. **Environment Complexity（环境复杂度）**：评测模型面对复杂物理环境的能力
2. **Cognitive Demand（认知复杂度）**：评测模型处理高密度认知任务的能力
3. **Runtime Adaptability（运行时适应能力）**：评测模型在运行过程中动态适应的能力

## 与传统Benchmark的区别

相比传统Agent Benchmark，LiveClawBench更强调：

- 真实任务链路
- 多环境协同
- 复杂长期任务执行能力

## 论文信息

- 论文地址：https://arxiv.org/abs/2604.13072
- 发布时间：2026年4月