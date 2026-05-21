---
type: concept
title: Agentic Consensus
tags: [multi-agent, distributed-systems, theory]
related: [advaita-research, aegean, decision-flip, barrier-synchronization]
created: 2026-02-07
updated: 2026-02-07
sources: ["延迟下降20×，token减少4.4×！突破多智能体「共识」瓶颈.md"]
---

# Agentic Consensus

[[agentic-consensus]]（智能体共识）是指在多个随机推理主体（AI Agents）并行工作时，系统用于判断何时达成稳定一致、何时可以安全停止以及如何控制延迟的一套明确语义。

## 背景与问题
当前主流的多智能体路线（如 OpenAI 的强化单体、Google DeepMind 的搜索式推理、Anthropic 的启发式辩论）主要关注“如何更好地推理”，往往忽视了“何时停止”这一生产级关键问题。缺乏明确的共识语义导致了以下系统性问题：
-   **[[decision-flip]]**：多数决策在相邻轮次发生反转，导致基于“当前多数”的决策不可靠。
-   **高尾延迟**：普遍采用 [[barrier-synchronization]]（等待所有 agent 完成），导致 P99 延迟由最慢 agent 决定。
-   **算力浪费**：在达成共识（收敛）后仍继续进行无效计算，消耗大量 token。

## 核心定义
Agentic Consensus 试图为多智能体系统建立可操作的工程标准，即系统必须能够明确回答：
1.  何时算达成一致？
2.  何时可以安全停止？
3.  延迟由谁决定？

如果一个多智能体系统无法回答这些问题，它在工程上仍停留在 workflow 编排阶段，而非真正的分布式系统。

## 实现机制
[[advaita-research]] 提出的 [[aegean]] 协议是该概念的一个具体实现，引入了 [[quorum-fast]]、稳定性窗口和 [[streaming-consensus]] 等机制来优化系统性能。