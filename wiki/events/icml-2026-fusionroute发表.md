---
type: event
title: FusionRoute 被 ICML 2026 接收
created: 2026-06-07
updated: 2026-06-07
tags: [ICML-2026, 学术会议, 多LLM协作]
related: [fusionroute, meta-ai, nuoya-xiong, 多llm协作]
sources: ["icml-2026｜fusionroute：从专家路由到自我修正，一种新的多llm协作范式.md"]
origin_date: 2026-06-07
participants: [meta-ai, nuoya-xiong]
causes: []
effects: []
significance: medium
---

# FusionRoute 被 ICML 2026 接收

2026年6月，由 Meta AI 团队主导、CMU 博士生 Nuoya Xiong 作为第一作者的论文《Token-Level LLM Collaboration via FusionRoute》被 ICML 2026 接收，[[机器之心]] 于6月7日发布报道。

## 背景

该研究代表了2026年学术界对"单纯扩大模型参数"这一 Scaling Law 路径的反思，标志着多模型高效协同推理技术从概念走向成熟的理论与工程验证阶段。

## 核心贡献

1. **理论层面**：证明了纯选择 token 级路由的 [[不可识别性]]，为该方向提供了指导性理论结果
2. **方法层面**：首次将"专家选择"与"[[补充生成]]"统一在同一个轻量级路由模块中
3. **工程层面**：即插即用设计，专家可以是结构各异的独立模型，无需额外微调

## 因果关系

因为发现了纯选择 [[token级路由]] 存在理论上的不可识别性缺陷，所以引入了 [[补充生成]] 机制来扩大策略表达空间，最终实现了性能与稳定性的双提升。