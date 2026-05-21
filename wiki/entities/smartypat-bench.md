---
type: entity
title: SMARTYPAT-BENCH
created: 2026-05-04
updated: 2026-05-04
tags: [dataset, benchmark, logical-fallacies, nlp, reddit]
related: [smartypat, r-shittyaskscience, guo-du-si-kao, deepseek-v4]
sources: ["首个英文原生「弱智吧」！逻辑谬误数据集与生成框架来了-aaai'26.md"]
---
# SMARTYPAT-BENCH

[[SMARTYPAT-BENCH]] 是首个高质量英文原生逻辑谬误基准数据集，灵感来源于中文社区的“弱智吧”，其数据源自英文 Reddit 社区的 [[r-ShittyAskScience]] 板块。

## 数据集构建

该数据集的构建过程非常严谨，旨在解决现有逻辑评测基准在自然度、真实性和细粒度标注上的不足：

1.  **数据源筛选**：从 Arctic Shift 数据集中抓取目标子版块的全部历史内容（共 251,052 条帖子）。
2.  **高互动筛选**：按点赞数排序，选取历史前 2500 条高互动帖子作为候选。
3.  **人工清洗**：由 5 位作者人工清洗、筛选出真正包含逻辑陷阱的句子，最终保留 502 条。
4.  **细粒度标注**：结合两本经典逻辑谬误教材，对每条句子打上可多选的细粒度逻辑谬误标签，最终形成包含 14 类谬误类型的标注体系。

## 谬误类型分布

数据集中最常见的三种谬误类型占据了总量的 79.7%：
-   [[False Premise]]（错误前提）
-   [[Equivocation]]（偷换概念 / 一词多义）
-   [[False Analogy]]（错误类比）

而像 [[Improper Transposition]]（换质不换位）、[[Fallacy of Composition]]（合成谬误）等少数类，加起来还不到 2%。这揭示了真实世界中逻辑错误的高度长尾分布特征。

## 评测发现

基于 [[SMARTYPAT-BENCH]] 的评测揭示了 [[guo-du-si-kao]]（过度思考）现象：推理模型在判断“是否有谬误”时容易误报，但在细粒度分类任务上表现优于非推理模型。