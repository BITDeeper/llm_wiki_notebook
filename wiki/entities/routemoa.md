---
type: entity
title: RouteMoA
tags: [ai, model, framework, multi-agent, routing]
related: [dong-tai-lu-you, moa-mohe-zhi-neng-ti, yu-tui-li, ju-he-piao-yi]
created: 2026-05-02
updated: 2026-05-02
sources: ["acl-2026-routemoa：无需预推理的动态路由，实现高效多智能体混合.md"]
---

# RouteMoA

**RouteMoA** (Dynamic Routing without Pre-Inference) 是一种无需预推理的动态路由框架，由 [[上海交通大学]] 团队提出并发表于 ACL 2026。它旨在解决 [[Mixture-of-Agents]] (MoA) 系统中的效率瓶颈，通过智能调度实现低成本、低延迟的多智能体协作。

## 核心机制

RouteMoA 摒弃了传统 MoA 方法中“全量预推理”的假设，采用“先验预测 + 后验修正”的策略：

1.  **先验筛选**：在模型推理之前，利用轻量级 Scorer 根据 Query 特征预测模型能力匹配度，仅筛选出少数潜力模型进入后续流程。
2.  **后验修正**：利用 Mixture-of-Judges 机制（自我评估与交叉评估）对筛选出的模型输出进行打分和修正，不引入额外的推理成本。
3.  **多维优化**：在决策时综合考虑输出质量、Token 成本和推理延迟，而非单纯追求准确率。

## 性能表现

在包含 15 个模型的大规模测试中，RouteMoA 取得了显著的效率提升：
-   **成本降低**：89.8%
-   **延迟降低**：63.6%
-   **准确率**：相比基准 MoA 和 Sparse MoA 有所提升。

## 理论基础

RouteMoA 的有效性建立在多模型系统的**稀疏性**之上。实验数据显示，对于绝大多数 Query，Top-3 模型中包含正确答案的概率接近 98%。这意味着系统并不需要调用所有模型，只要不漏掉关键模型即可。

## 局限与挑战

尽管 RouteMoA 有效解决了“选谁”的问题，但研究指出当前多模型系统的主要错误来源（>50%）是**聚合漂移**，即最终答案融合阶段的错误。这表明未来的优化重点可能需要从模型选择转向答案融合算法。

## 关联人物

-   [[王骥泽]]：论文第一作者。
-   [[关新平]]：团队负责人。