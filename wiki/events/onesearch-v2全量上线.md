---
type: event
title: OneSearch-V2全量上线
created: 2026-05-13
updated: 2026-05-13
tags: [生成式检索, 电商搜索, 快手, 产品上线]
related: [onesearch-v2, 快手技术团队, 生成式检索, 自蒸馏推理内化, tpma-grpo]
sources: ["0成本升级，快手onesearch-v2全量上线，生成式搜索进入「懂你」时代.md"]
origin_date: 2026-05-13
participants: [快手技术团队]
causes: [onesearch-v2]
effects: []
significance: medium
---
# OneSearch-V2全量上线

## 事件概述

2026年5月，快手技术团队的[[onesearch-v2|OneSearch-V2]]生成式搜索框架在快手电商搜索平台全量上线。这是生成式检索在工业级电商搜索场景的标志性落地事件。

## 背景

[[onesearch-v2|OneSearch V1]]已规模化部署，但在复杂query理解、个性化推理和奖励系统方面存在三大瓶颈。V2通过[[自蒸馏推理内化]]、[[思维增强查询理解]]和[[tpma-grpo|TPMA-GRPO]]三大创新模块系统性解决了这些问题。

## 关键成果

在不增加任何推理成本与服务时延的前提下：
- 商品CTR +3.98%
- 买家数 +2.07%
- 订单量 +2.11%
- 有效缓解了搜索系统的信息茧房与长尾稀疏问题

## 部署过程

三个版本逐步启用，呈现清晰的单调递增趋势：
1. **V2_RAG**：RAG模式，将关键词作为query补充信息
2. **V2_Reason**：推理增强版本
3. **V2 (full)**：完整版，自蒸馏+TPMA-GRPO联合优化

## 意义

- 证明了"0成本升级"的可行性：通过算法创新而非规模扩展实现性能提升
- 标志着生成式搜索从"能用"（V1解决中高频query）到"懂你"（V2解决复杂/长尾query+个性化推理）的成熟阶段
- CTR提升曲线从V1的"倒U型"变为"U型"，首次在头部和长尾query上同时取得显著提升