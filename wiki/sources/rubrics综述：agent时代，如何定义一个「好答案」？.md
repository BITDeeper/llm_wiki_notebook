---
type: source
title: "Rubrics综述：Agent时代，如何定义一个「好答案」？"
created: 2026-05-31
updated: 2026-05-31
tags: [rubrics, llm评测, 强化学习, agent, 奖励模型]
related: [rubrics-评价量规, llm-as-a-judge, reward-hacking, 医疗llm评审, 任务执行范式]
sources: ["rubrics综述：agent时代，如何定义一个「好答案」？.md"]
authors: [中国人民大学高瓴人工智能学院, RUC-NLPIR]
year: 2026
url: "https://mp.weixin.qq.com/s/m4vmMWxA7FbtB9DqSUqEpQ"
venue: 机器之心
---
# Rubrics综述：Agent时代，如何定义一个「好答案」？

## 摘要

本文是机器之心对中国人民大学高瓴人工智能学院 [[RUC-NLPIR]] 团队发布的综述论文《The Rules of the Game: A Survey of Rubrics for Large Language Models》的深度报道。论文共40页，系统梳理了 [[rubrics-评价量规|Rubrics]] 在大模型中的定义、构造方法、训练应用、评测场景与开放挑战。

## 核心论点

大模型训练与评测正从单一正确性信号转向多维度、可解释的质量标准。[[rubrics-评价量规|Rubrics]] 正在成为连接人类期望、任务要求和模型行为的重要接口——它将模糊的"好答案"拆解为一组明确的评价项，使评审者或 [[llm-as-a-judge|Judge Model]] 逐项检查和打分。

## 关键内容

### Rubrics的定义与区分
- [[rubrics-评价量规|Rubrics]]：一组自然语言形式的评价标准，解决"按什么标准评"
- [[llm-as-a-judge|LLM-as-a-Judge]]：解决"谁来评"
- Reward Model：输出标量分数，Rubrics将评价标准显式列出
- RLVR：依赖自动可验证答案，Rubrics适合开放式多维度任务

### 四类构造方法
1. **直接生成**：LLM一次性生成评价标准
2. **对比生成**：输入偏好对，提取有判别力的标准
3. **迭代优化**：验证、分解、过滤流程
4. **在线与共同演化**：Rubrics随policy rollouts更新

### 训练应用
- **Policy Training**：Rubrics逐项打分聚合为奖励，用于PPO、GRPO等算法；轨迹级Rubrics对Agent任务尤为关键
- **Reward Model Training**：提升可解释性、提供细粒度信号、构造高质量训练数据
- **生成过程指导**：Rubrics从"事后打分工具"推进为"生成过程中的指导"

### 开放挑战
- [[reward-hacking|Reward Hacking]]：模型学会利用评价标准表面特征
- 泛化困难：Rubrics过拟合特定任务
- 评测偏差：Rubric写法和Judge Model选取引入bias
- 个性化与安全冲突
- Rubrics作为攻击面

## 关联条目

- [[rubrics-评价量规]] — 核心概念
- [[llm-as-a-judge]] — 互补评价范式
- [[reward-hacking]] — 核心挑战
- [[医疗llm评审]] — 领域应用
- [[任务执行范式]] — Agent任务评测