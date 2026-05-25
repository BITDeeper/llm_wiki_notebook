---
type: entity
title: Tianfu Agent
created: 2026-05-25
updated: 2026-05-25
tags: [agent, 术数, harness工程, 垂直领域, 多agent协作]
related: [destinylinker, mingli-bench, 四级可见性控制, 规则函数化封装, 三层不确定性量化, 多agent协作架构, 任务执行范式]
sources: ["胜率直逼人类大师！这套agent揭开中国ai「玄学真相」.md"]
---

# Tianfu Agent

[[destinylinker]] 研究团队开发的专为传统术数领域设计的多Sub-Agent协作系统，是 [[harness工程]] 范式在非编程垂直领域的代表性实践。

## 核心架构

### 多Sub-Agent协作
采用渐进式发现策略：多个Sub-Agent各自维护独立的工具集和上下文，根据环境反馈逐步展开推理。与通用 [[多agent协作架构]] 不同，Tianfu Agent的每个Sub-Agent对应不同的术数流派和推理阶段。

### 工具体系
- **200+原子工具**：覆盖刑冲查询、飞宫路径、数据逻辑运算等
- **3大流派规则函数库**：将繁杂的术数规则封装为可调用函数
- **[[四级可见性控制]]**：动态管理工具可见范围，避免选项过载导致的选择退化

### 置信度机制
采用 [[三层不确定性量化]]，在工具输出层、Sub-Agent层、多流派合参层分别进行置信度评估，作为缺乏单元测试环境下的务实替代方案。

## 评测结果

在 [[mingli-bench]] 评测集上达到 **50%截尾准确率**，逼近本届术数大赛人类Top 20选手的53.5%平均水平，比最强通用模型高出约10个百分点。

## 设计哲学

> 工具不仅是计算函数，它还包括规则、子推理流程，乃至Sub-Agent本身。

这一理念将 [[任务执行范式]] 中的Harness工程从编程领域扩展到"规则密集+语料稀缺"的垂直领域，证明该范式在足够结构化的专业领域同样成立。

## 技术报告

- 开源仓库：https://github.com/DestinyLinker/MingLi-Bench
- 技术报告：https://destinylinker.github.io/MingLi-Bench/