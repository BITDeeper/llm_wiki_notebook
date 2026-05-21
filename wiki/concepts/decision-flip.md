---
type: concept
title: Decision Flip
tags: [multi-agent, phenomenon, instability]
related: [agentic-consensus, aegean]
created: 2026-02-07
updated: 2026-02-07
sources: ["延迟下降20×，token减少4.4×！突破多智能体「共识」瓶颈.md"]
---

# Decision Flip

[[decision-flip]]（决策翻转）是指在多智能体系统的多轮推理过程中，多数决策在相邻轮次之间发生反转的现象。

## 现象描述
这种现象揭示了现有投票机制的脆弱性。例如，在 MMLU 测试的 100 个样本中，出现了 64 次 decision flip。这意味着系统在连续轮次中反复改变多数结论，处于一种“暂时性一致”的状态。

## 影响
如果缺乏稳定性约束（如 [[aegean]] 协议中的稳定性窗口），任何基于“当前多数”的提前停止或投票机制都可能建立在错误的共识之上。这表明问题不在于模型的推理能力，而在于系统缺乏明确的 [[agentic-consensus]] 定义。