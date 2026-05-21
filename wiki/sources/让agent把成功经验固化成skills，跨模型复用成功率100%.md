---
type: source
title: "让Agent把成功经验固化成skills，跨模型复用成功率100%"
authors: [SkillCraft团队]
year: 2026
url: "https://mp.weixin.qq.com/s/7m64GEqZatJDP5Ya68MeEA"
venue: "量子位"
tags: [agent, skill-reuse, llm, tool-use, optimization]
related: [skillcraft, skill-library, cross-model-skill-transfer, claude, gpt-5-2]
created: 2026-04-01
updated: 2026-04-01
sources: ["让agent把成功经验固化成skills，跨模型复用成功率100%.md"]
---

# 让Agent把成功经验固化成skills，跨模型复用成功率100%

## 概述

本文介绍了由 NIPS 时间检验奖得主等参与的研究项目 [[skillcraft]]。该项目旨在解决现有 [[agent]] 在执行任务时缺乏“记忆”和“经验积累”的问题，通过将成功的工具链固化为可复用的 [[skill-library|技能]]，实现了显著的效率提升和成本降低。

## 核心机制

SkillCraft 的核心思路是让 Agent 在测试时一边做任务，一边把反复有用的工具链整理成 skill。这个过程分为四步：

1.  **检索**：检查库里是否有现成的 skill 可用。
2.  **执行**：若无，则按常规方式使用原子工具完成任务。
3.  **抽象**：将成功的执行轨迹抽象成一个带参数的 skill。
4.  **验证**：通过 [[verifier]] 验证后存入技能库。

## 关键发现

### 效率与成本
实验数据显示，引入 skill 保存与复用后，多数模型收益显著：
-   **Token 消耗降低**：以 [[gpt-5-2]] 为例，Token 从 1.23M 降至 0.26M。
-   **成本下降**：GPT-5.2 的成本从 1.77 美元降至 0.43 美元。
-   **成功率提升**：GPT-5.2 的成功率从 87% 提升至 90%。

### 跨模型复用
研究证实了 [[cross-model-skill-transfer]] 的可行性：
-   由强模型（如 [[claude]]）生成的 skill，在不同执行模型上均能保持 100% 的成功率。
-   高质量的 skill 具有强可迁移性，且能带来显著的 Token 节省。

### 层级组合的局限性
虽然测试了 [[hierarchical-skill-composition]]（允许 skill 内部调用其他 skill），但发现：
-   层级更深，未必更稳。
-   低层 bug 会向上级联，一个边界条件错误可能拖垮整棵技能树。
-   现阶段更实用的路线是构建高质量、浅层、可验证的技能库。

## 意义

SkillCraft 证明了 Agent 不应永远像第一次做任务那样工作，而应拥有自己的经验积累。这标志着 Agent 从“模型中心”向“技能/经验中心”的范式转移，对于解决 [[ai-subscription-crisis]] 中提到的成本问题具有重要参考价值。

## 链接

-   论文地址：https://arxiv.org/abs/2603.00718
-   项目主页：https://skillcraft-website.github.io/page/
-   源码：https://github.com/shiqichen17/SkillCraft