---
type: entity
title: Abyss Falsifier
created: 2026-04-24
updated: 2026-04-24
tags: [ai-for-science, evaluation, testing]
related: [dases, mechanistic-causal-extractor, 反证前沿]
sources: ["ai科学家还在刷静态榜？基准主动反击，重塑自动科研评价标准.md"]
---

# Abyss Falsifier

**Abyss Falsifier**（深渊反证器）是 [[DASES]] 框架中的核心评测组件，负责对候选科学发现进行动态对抗性测试。

## 核心功能
与传统的静态评测基准不同，Abyss Falsifier 不再是被动的打分者，而是一个主动的“攻击者”。它的主要任务是围绕当前候选方案，动态构造新的反例环境，专门寻找候选方案的脆弱点。

## 工作机制
Abyss Falsifier 通过以下方式构造测试环境：
*   **反事实构造**：生成符合逻辑但与训练分布不同的样本（例如改变背景颜色但保留前景形状）。
*   **组合扰动**：将多种有效的扰动因素叠加，测试模型在极端情况下的稳定性。
*   **尾部压力测试**：针对数据分布的长尾部分进行高强度的测试。

## 约束条件
虽然 Abyss Falsifier 旨在“击穿”候选方案，但它必须遵守严格的科学约束：
*   **语义合法性**：不能通过篡改问题定义来强行打穿。任务的核心语义必须保持不变（例如，在图像分类中，不能通过让图片变得不可识别来降低准确率）。
*   **科学可接受性**：构造的反例必须是科学上合理的，能够反映模型在真实应用中可能遇到的挑战。

## 目标
Abyss Falsifier 的目标是建立[[反证前沿]]。只有那些在 Abyss Falsifier 构造的最强且合法的反证环境下依然能存活的候选方案，才被视为真正的科学发现。

## 参见
*   [[DASES]]：包含 Abyss Falsifier 的完整框架。
*   [[Mechanistic Causal Extractor]]：与 Abyss Falsifier 配合，分析失败原因的组件。