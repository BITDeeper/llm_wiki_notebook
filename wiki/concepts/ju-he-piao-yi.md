---
type: concept
title: 聚合漂移
tags: [ai, error-analysis, multi-agent]
related: [routemoa, moa-mohe-zhi-neng-ti, dong-tai-lu-you]
created: 2026-05-02
updated: 2026-05-02
sources: ["acl-2026-routemoa：无需预推理的动态路由，实现高效多智能体混合.md"]
---

# 聚合漂移

**聚合漂移** (Aggregation Drift) 是指在多模型协作系统中，最终答案的融合阶段产生的错误或偏差。

## 现象描述

在 [[Mixture-of-Agents]] 系统中，即使选对了正确的模型，如果融合算法（如加权平均、投票或基于 LLM 的综合）设计不当，仍可能导致最终输出偏离正确答案。

## 重要性

根据 [[RouteMoA]] 论文的实验分析，在系统失败的所有案例中，超过 50% 的错误归因于聚合漂移，而非模型选择错误。这一发现揭示了多模型系统瓶颈的转移：
-   **过去**：关注点在于“如何选出最好的模型”。
-   **现在/未来**：瓶颈在于“如何正确地整合多个模型的输出”。

这意味着，单纯优化路由策略可能存在天花板，提升融合算法的鲁棒性是提升系统上限的关键。