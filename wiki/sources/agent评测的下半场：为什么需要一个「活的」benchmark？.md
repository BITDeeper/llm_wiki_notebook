---
type: source
title: "Agent评测的下半场：为什么需要一个「活的」Benchmark？"
created: 2026-05-11
updated: 2026-05-11
tags: [agent, benchmark, 评测, claw-eval, 工作流]
related: [claw-eval-live, claw-eval, 活的-benchmark, 执行轨迹审计, can-say-vs-can-do, 业务编排瓶颈]
sources: ["agent评测的下半场：为什么需要一个「活的」benchmark？.md"]
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/jWEC-33hf6LYL-KZDRrnfA"
venue: "新智元"
---

# Agent评测的下半场：为什么需要一个「活的」Benchmark？

本文介绍了 [[claw-eval-live]] 提出的「活的」Benchmark 概念，旨在解决 Agent 评测中的两个核心问题：如何确认 Agent 真的做成了任务，以及评测任务是否紧跟现实需求。

## 核心观点

1.  **从「看结果」到「看行动」**：传统的 Agent 评测只关注最终输出，容易被模型通过「捷径」欺骗。[[claw-eval]] 引入了基于执行轨迹、审计日志和环境快照的「执行轨迹审计」机制，确保评测的真实性。
2.  **从「静态题库」到「活的 Benchmark」**：[[claw-eval-live]] 通过信号层和发布层的分离，使 Benchmark 能够根据现实世界的工作流需求动态演进，避免评测内容过时。

## 关键发现

-   **整体天花板低**：在 13 个前沿模型的评测中，没有任何模型突破 70% 的通过率。
-   **业务编排瓶颈**：模型在终端操作等「硬技术」任务上表现优异（接近 100%），但在 HR、管理、跨系统工作流等「软业务」任务上全面溃败（通过率极低，甚至为 0）。
-   **成本与性能**：[[glm-5]] 以极低的成本（约为 [[claude-opus-4-6]] 的 7.8%）达到了相近的性能，展示了部署时的成本效益考量。

## 评测方法论

Claw-Eval-Live 的核心架构包括：
-   **信号层**：从 [[clawhub]] 等源头采集 Top-500 热门技能作为需求信号。
-   **发布层**：通过 [[milp-任务筛选]] 生成固定的、带时间戳的任务快照，确保可复现性。

这一系列工作标志着 Agent 评测进入「下半场」，不再只比较谁更会答题，而是比较谁更接近真实世界的业务需求。