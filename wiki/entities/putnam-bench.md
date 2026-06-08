---
type: entity
title: PutnamBench
created: 2026-06-06
updated: 2026-06-06
tags: [评测基准, 数学, 形式化证明]
related: [goedel-architect, hilbert-证明系统, mini-f2f, lean-证明语言]
sources: ["deepseek-v4做数学证明，500倍成本优势：智能体系统刷新多项纪录.md"]
---
# PutnamBench

形式化定理证明领域的标准测试集，包含672道来自普特南大学生数学竞赛的题目。普特南竞赛是北美最具声望的大学生数学竞赛，题目以高难度著称。

## 关键结果

| 系统 | 通过率 | 成本 |
|------|--------|------|
| [[goedel-architect]] | 75.6% pass@1 | 294美元 |
| Goedel-Architect（+NL辅助） | 88.8%（597/672） | <1000美元 |
| [[hilbert-证明系统]] | 70.0% | ~17万美元 |

Goedel-Architect在PutnamBench上的表现标志着形式化证明系统的成本门槛降低了约两个数量级。