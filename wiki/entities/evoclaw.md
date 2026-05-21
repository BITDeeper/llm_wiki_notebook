---
type: entity
title: EvoClaw
tags: [benchmark, software-engineering, ai-agents, evaluation]
related: [deepcommit, 持续软件演进, 错误链, claude-opus-4-6, gemini-3-pro]
created: 2026-03-25
updated: 2026-03-25
sources: ["openclaw代码越改越崩？新研究evoclaw揭示：agents持续开发成功率仅13.37%.md"]
---

# EvoClaw

[[evoclaw]] 是一个由 USC、UCR、Stanford、Princeton 等高校联合发布的全新评估基准，专门用于测试 AI Agent 在长周期、持续软件演进场景下的能力。

## 核心特点

与传统的 SWE-bench 等关注“独立任务”的基准不同，EvoClaw 强调“开发环境持久化”，要求 AI 在同一个代码库中连续执行多个相互依赖的任务。它揭示了 AI 在连续自主迭代场景下的脆弱性。

## 评测指标

EvoClaw 引入了三个核心维度来评估 Agent 表现：
1.  **Recall（召回率）**：衡量功能实现的完备性。
2.  **Precision（精确率）**：衡量修改行为的可靠性（即不破坏旧代码）。
3.  **Score（综合得分）**：Recall 和 Precision 的 F1 加权平均。

## 主要发现

-   **性能断崖**：在持续演进场景下，顶尖模型综合得分最高仅为 38.03%（Claude Opus 4.6），远低于独立任务场景下的 80%~90%。
-   **演进停滞**：无论迭代多少次，所有模型的表现最终都会撞上天花板，陷入实质性的演进停滞。
-   **Precision 饱和**：模型能持续增加新功能（Recall 增长），但无法维持系统稳定性（Precision 饱和），导致技术债累积。

## 数据构成

EvoClaw 覆盖 5 种主流编程语言，选取横跨多个 release 区间的真实开发周期（最长 750 天），基于 [[deepcommit]] 生成的 [[里程碑任务依赖图]] 构建。