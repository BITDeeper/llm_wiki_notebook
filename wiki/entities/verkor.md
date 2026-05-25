---
type: entity
title: Verkor
created: 2026-05-24
updated: 2026-05-24
tags: [ai芯片设计, 初创公司, eda]
related: [design-conductor, vercore, suresh-krishna, david-chin]
sources: ["ai首次独自跑完芯片设计！219词进7nm图纸出，工程师全程没碰键盘.md"]
---
# Verkor

AI芯片设计初创公司，开发了 [[design-conductor]] 系统和 [[vercore]] CPU。

## 核心理念

创始人 [[suresh-krishna]] 提出"让AI Agent把整个问题自己解决掉"的设计哲学，工程副总裁 [[david-chin]] 则以"用算力换经验"概括当前AI芯片设计的本质——Agent通过大量试错弥补人类工程师多年积累的直觉和经验。

## 里程碑

2026年3月，Verkor在arXiv发表技术报告（编号2603.08716），披露 [[design-conductor]] 系统首次独立完成从219词需求描述到7nm GDSII版图的完整芯片设计流程，全程无工程师参与。

## 愿景

Verkor设想未来芯片设计团队将从数百人缩减至5-10名跨领域专家，负责设定目标和审查关键决策，大量RTL、验证和后端迭代工作由Agent承接。整体流片周期有望从18-36个月压缩至3-6个月，使"以前连立项都立不了"的定制芯片成为可能。

## 局限与开放问题

- [[vercore]] 目前仅存在于仿真中，尚未实际流片
- 设计复杂度提升后AI是否还能独自完成尚无答案
- 简单CPU设计即消耗"数百亿个token"，算力成本可控性存疑