---
type: concept
title: Round-Robin Tournament
tags: [algorithm, selection-method]
related: [llm-as-a-verifier]
created: 2026-04-27
updated: 2026-04-27
sources: ["超越claude-mythos和gpt-5.5！斯坦福agent验证框架拿下sota，transformer作者转发.md"]
---

# Round-Robin Tournament

**Round-Robin Tournament**（循环赛）是 **[[LLM-as-a-Verifier]]** 框架用于从多条候选轨迹中选择最佳轨迹的算法机制。

## 工作原理

在给定一组候选轨迹后，系统会对每一对轨迹 $(i, j)$ 进行比较。验证器计算每条轨迹的奖励得分，得分较高的轨迹获得该场比较的胜利。

最终，在所有 pairwise 比较中胜场数最多的轨迹，将被选为最终输出结果。

## 优势

这种方法确保了选择的公平性和全局最优性，避免了简单的排序方法可能遗漏的局部最优解。