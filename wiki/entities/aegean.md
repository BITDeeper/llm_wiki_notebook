---
type: entity
title: Aegean
tags: [protocol, system, multi-agent]
related: [advaita-research, agentic-consensus, quorum-fast, streaming-consensus]
created: 2026-02-07
updated: 2026-02-07
sources: ["延迟下降20×，token减少4.4×！突破多智能体「共识」瓶颈.md"]
---

# Aegean

[[aegean]] 是由 [[advaita-research]] 提出的一套基于 [[agentic-consensus]] 理论框架的共识协议系统。其根本创新在于将多智能体推理从 workflow 编排问题重构为分布式共识过程。

## 核心机制
Aegean 包含三个关键机制，旨在解决传统多智能体系统中的同步开销和无效计算问题：

1.  **[[quorum-fast]]**：系统不再等待所有 agent 完成，只要达到法定人数即推进决策。这消除了“最慢 agent 决定整体延迟”的瓶颈。
2.  **稳定性窗口（β）**：要求一致性必须在时间维度上持续存在，从而过滤掉 [[decision-flip]]（暂时性一致）现象。
3.  **[[streaming-consensus]]**：在 token 生成过程中持续检测共识状态，一旦满足稳定条件，立即终止剩余生成，大幅削减收敛后的无效 token 消耗。

## 性能表现
在引入 Aegean 协议后，系统在多个基准测试中表现出显著优化：
-   **延迟**：P99 尾延迟最高改善 **11×**，平均延迟最高改善 **20×**（AIME 数据集）。
-   **成本**：Token 消耗最高减少 **4.4×**（GSM8K 数据集）。
-   **准确性**：Accuracy 波动控制在约 2.5% 以内。