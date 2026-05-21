---
type: entity
title: LLM-as-a-Verifier
tags: [ai-research, agent, verification, framework]
related: [llm-as-a-judge, terminal-bench, scaling-law, long-horizon-tasks]
created: 2026-04-27
updated: 2026-04-27
sources: ["超越claude-mythos和gpt-5.5！斯坦福agent验证框架拿下sota，transformer作者转发.md"]
---

# LLM-as-a-Verifier

**LLM-as-a-Verifier** 是由斯坦福大学、UC 伯克利和英伟达联合开发的通用验证框架，旨在解决 AI 智能体在长时序任务中的验证与筛选难题。

## 核心原理

该框架基于一个关键观察：大多数 Agent 在多次运行中已经能够生成正确的解决方案，但缺乏识别正确方案的能力。传统的 **[[LLM-as-a-Judge]]** 方法往往因为评分粒度粗糙（如简单的 1-8 分打分）而导致大量平局，无法有效区分优劣轨迹。

LLM-as-a-Verifier 通过 **[[Scaling Verification Compute]]**（扩展验证计算量）来提升性能，具体包括三个维度：

1.  **评分粒度**：将评分 token 的数量从 1 个扩展到 20 个。研究表明，增加粒度能显著拉开正负样本之间的得分区分度，降低量化误差。
2.  **重复验证**：对同一条轨迹进行多次评估（K次），以获得更稳定的奖励估计。
3.  **标准分解**：将评估标准解构为三个具体维度：
    *   **规范合规性**：是否符合任务要求（如路径、命名）。
    *   **输出格式**：是否符合预期格式。
    *   **错误检测**：是否存在明显的错误信号。

## 技术实现

在比较候选轨迹时，框架采用 **[[Round-Robin Tournament]]**（循环赛）机制。对于每一对轨迹，验证器利用上述公式计算奖励，奖励更高的轨迹获胜，最终胜场数最多的轨迹被选中。

## 性能表现

在 **[[Terminal-Bench]]** 2.0 和 **[[SWE-Bench Verified]]** 等复杂基准测试中，LLM-as-a-Verifier 取得了 SOTA 性能，超越了 Claude Mythos 和 GPT-5.5。它完全消除了传统方法的平局现象，并将验证准确率提升了至少 7%。

## 团队

-   **负责人**：[[Jacky Kwok]]（斯坦福 CS 博士生）
-   **主要贡献者**：Shulu Li（伯克利 EECS 博士生）
-   **通讯作者**：[[Ion Stoica]]（伯克利教授/Databricks 创始人）、[[Azalia Mirhoseini]]（斯坦福教授）、[[Marco Pavone]]（英伟达研究总监）

## 相关链接

-   官方博客：llm-as-a-verifier.notion.site
-   代码仓库：llm-as-a-verifier.github.io