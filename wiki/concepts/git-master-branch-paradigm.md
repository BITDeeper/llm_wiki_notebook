---
type: concept
title: Git 主分支范式
tags: [software-engineering, version-control, critique]
related: [autoresearch, 分布式异步科研]
created: 2026-03-09
updated: 2026-03-09
sources: ["卡帕西开源agent自进化训练框架，5分钟一轮实验，48h内揽星9.5k.md"]
---

# Git 主分支范式

[[git-master-branch-paradigm]] 是指传统软件开发中基于 Git 的版本控制逻辑，其核心假设是存在一个唯一的、权威的 `master` 分支。

## 特征
-   所有分支和 Pull Request (PR) 都被视为临时的偏离。
-   最终目标是所有改动都必须合并回主干。
-   强调代码的线性集成和单一真理来源。

## 在 AI 科研中的局限性
[[andrej-karpathy]] 指出，这种范式限制了 AI 智能体的潜力。在 [[autoresearch]] 项目中，AI 可能会产生成千上万个有效的实验变体，强行要求它们合并回单一主分支不仅低效，而且可能丢失有价值的信息。他认为未来的 AI 科研应转向 [[分布式异步科研]] 模式，从“写软件”转向“攒经验”。