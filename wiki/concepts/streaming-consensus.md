---
type: concept
title: Streaming Consensus
tags: [optimization, cost, distributed-systems]
related: [aegean, agentic-consensus]
created: 2026-02-07
updated: 2026-02-07
sources: ["延迟下降20×，token减少4.4×！突破多智能体「共识」瓶颈.md"]
---

# Streaming Consensus

[[streaming-consensus]]（流式共识）是一种降低多智能体系统计算成本的机制。

## 定义
在 token 生成过程中持续检测共识状态，一旦满足稳定条件（如 [[aegean]] 协议中的稳定性窗口），立即终止剩余 agent 的生成任务。

## 作用
该机制大幅削减了收敛后的无效 token 消耗。传统系统往往在达成共识后仍继续计算，而流式共识通过“即时取消”实现了资源节约。在 GSM8K 数据集上，相关优化实现了 **4.4×** 的 token 成本削减。