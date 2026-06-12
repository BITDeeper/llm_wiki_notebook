---
type: concept
title: LivingBench
created: 2026-06-08
updated: 2026-06-08
tags: [评测基准, agent, 生活场景, mind-lab]
related: [macaron-v1-preview, mind-lab, vitabench, pinchbench]
sources: ["rss/刚刚，mind-lab开源v1系列模型preview，749b参数，专为agent-后训练.md"]
---
# LivingBench

[[mind-lab|Mind Lab]] 围绕真实产品体验构建的 Agent 评测基准，用于评估 Agent 在真实生活场景中的表现。

## 设计理念

正如姚顺雨在「智能下半场」中所说，构造有意义的 Benchmark 是当下打造模型最重要的任务。LivingBench 构建了一个包含动态噪声、动态生活环境和动态用户反应的拟真沙盒。

## 核心特征

- **动态噪声**：任务环境存在真实世界的干扰信息
- **动态生活环境**：任务条件在互动中变化
- **动态用户反应**：用户偏好和反馈在任务执行过程中动态变化

任务可以像真实生活一样在互动中变化，以此观察模型能否持续理解用户、处理突发变化、保护隐私，并在用户耐心有限的情况下把事情真正办好。

## 与静态评测的区别

静态的能力评测并不能真实反映 Agent 带给用户的价值——这一理念在 CursorBench V3 中首次提出，已成为生产级 Agent 模型后训练的共识。

## 评测结果

[[macaron-v1-preview|Macaron-V1-Preview]] 在 LivingBench 中取得 SOTA。