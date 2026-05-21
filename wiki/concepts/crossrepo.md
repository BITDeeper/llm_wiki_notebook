---
type: concept
title: CrossRepo (跨仓库检索)
tags: [concept, coding, benchmark]
related: [beyondswe, domainfix]
created: 2026-03-20
updated: 2026-03-20
sources: ["ai取代程序员还远！新基准beyondswe：顶尖模型通过率暴跌至45%.md"]
---

# CrossRepo (跨仓库检索)

**CrossRepo** 是 [[beyondswe]] 基准中的四大任务类型之一，旨在考察 Code Agent 在修复 Bug 时从外部仓库或社区资源获取关键信息的能力。

## 任务特点
- **样例规模**：200 条，覆盖 67 个仓库。
- **外部依赖**：每道题平均包含 1.3 个外部链接。
- **考察重点**：虽然 Agent 仍在单一仓库中修改代码，但修复所需的关键信息（如根因分析、修复思路）存在于外部资源（上游 Issue、Stack Overflow、其他项目源码）中。

## 评测意义
这一任务测试的不是“多仓库协同开发”的能力，而是对**开源生态的广泛认知**。它区分了只会“闭门造车”的 Agent 和能够利用社区智慧的“工程智能体”。