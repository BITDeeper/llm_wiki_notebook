---
type: concept
title: 多 Agent 并行思考
tags: [ai, agent, reasoning, parallelism]
related: [muse-spark, 沉思模式]
created: 2026-04-09
updated: 2026-04-09
sources: ["刚刚，小扎砸143亿的「牛油果」来了！硬刚gpt-5.4，硅谷最贵华人首作.md"]
---

# 多 Agent 并行思考

[[多 Agent 并行思考]]（Multi-Agent Parallel Thinking）是一种提升 AI 模型推理能力的技术范式，通过同时调度多个 Agent 独立处理同一任务并汇总结果，来提升准确率和鲁棒性。

## 工作原理
不同于传统模式中单个 Agent 延长思考时间（以时间为代价换取质量），多 Agent 并行模式让多个 Agent 同时工作。例如，在规划行程时，一个 Agent 负责美食路线，一个负责亲子活动，另一个负责物流住宿，最后汇总成完整方案。

## 优势
- **低延迟**：由于是并行计算，总延迟不会随着思考深度的增加而线性增长。
- **高准确率**：[[Muse Spark]] 的数据显示，将 Agent 数量从 1 个增加到 16 个，准确率从约 54% 提升至约 58%，且延迟几乎不变。

## 与传统扩展的区别
- **传统测试时扩展**：拿时间换质量。
- **多 Agent 扩展**：拿并行度换质量。