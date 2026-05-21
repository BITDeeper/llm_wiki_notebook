---
type: concept
title: DomainFix (领域修复)
tags: [concept, coding, benchmark]
related: [beyondswe, crossrepo]
created: 2026-03-20
updated: 2026-03-20
sources: ["ai取代程序员还远！新基准beyondswe：顶尖模型通过率暴跌至45%.md"]
---

# DomainFix (领域修复)

**DomainFix** 是 [[beyondswe]] 基准中的四大任务类型之一，旨在考察 Code Agent 在缺乏特定领域专业知识背景下的代码修复能力。

## 任务特点
- **样例规模**：72 条。
- **覆盖领域**：量子物理、生物信息学、凸优化、天文学、等离子体物理等 11 个高门槛学科。
- **构建标准**：每道题需经三位领域专家审核，必须满足环境正确性、领域知识必要性和解法非平凡性。

## 核心难点
该任务构建了一个“让后端工程师修量子计算库 Bug”的场景。Agent 不仅需要读懂代码语法，更需要理解背后的物理公式、数学概念或生物学原理。**写对了语法，算错了物理，照样零分。**

## 评测结果
在所有 BeyondSWE 任务中，DomainFix 的通过率最低，几乎没有模型突破 36%。这证明了领域专业知识构成了当前 AI 编程模型难以逾越的认知壁垒。