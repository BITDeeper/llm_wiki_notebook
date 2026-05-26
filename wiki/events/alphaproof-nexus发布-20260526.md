---
type: event
title: AlphaProof Nexus发布
created: 2026-05-26
updated: 2026-05-26
tags: [ai-mathematics, deepmind, milestone, formal-verification]
related: [alphaproof-nexus, google-deepmind, 埃尔德什问题, 形式化证明循环, ai-for-science, aletheia]
sources: ["留给人类数学家的悬赏不多了！谷歌deepmind一口气解决9道埃尔德什问题.md"]
origin_date: 2026-05-26
participants: [google-deepmind, aja-huang]
causes: [ai-for-science]
effects: [alphaproof-nexus]
significance: high
---
# AlphaProof Nexus发布

**2026年5月26日**，[[google-deepmind]] 发布 [[alphaproof-nexus]]，一套由Gemini驱动的数学证明智能体框架。

## 事件概述

这是AI首次批量解决顶级数学开放问题，标志着AI数学证明领域的里程碑事件。

## 核心成果

- 一次性解决 **9道 [[埃尔德什问题]]** 开放问题（挑战353道，成功率≈2.5%）
- 证明 **44个OEIS猜想**
- 解决 **1道代数几何15年悬案**
- 改进 **凸优化理论边界**
- 单题成本仅 **几百美元**

## 关键发现

论文最反直觉的结论：最简单的Agent A（纯LLM+[[lean]]编译器反馈循环）即可解出全部9题，无需进化算法或强化学习。这一发现对AI系统工程方向具有重要启示——随着模型能力提升，简单循环范式可能比复杂多工具系统更具普适价值。

## 竞争背景

[[openai]] 此前刚用内部模型突破埃尔德什80年单位距离问题，[[google-deepmind]] 随后发布AlphaProof Nexus，两大AI巨头在数学领域形成竞速格局。

## 技术谱系

AlphaProof Nexus 是 [[aletheia]]（DeepMind此前解决数学猜想的系统）的技术进化 successor，从通用数学猜想系统进化为专注形式化证明的智能体框架。

## 开源资源

- 论文：arXiv:2605.22763v1
- 代码：github.com/google-deepmind/alphaproof-nexus-results