---
type: entity
title: MiniF2F
created: 2026-06-06
updated: 2026-06-06
tags: [评测基准, 数学, 形式化证明]
related: [goedel-architect, putnam-bench, lean-证明语言]
sources: ["deepseek-v4做数学证明，500倍成本优势：智能体系统刷新多项纪录.md"]
---
# MiniF2F

包含244道高中竞赛数学题的标准测试集（MiniF2F-test），是形式化定理证明领域最成熟的基准之一。

## 关键里程碑

- [[goedel-architect]] 在pass@1下解决了242道（99.2%），与此前最强开源系统持平
- 借助自然语言辅助后解决全部244道，成为**首个刷完MiniF2F-test全部题目的系统**
- Goedel系列在此基准上的演进：60% → 90% → 99.2% → 100%