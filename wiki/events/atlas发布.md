---
type: event
title: ATLAS 发布
created: 2026-05-29
updated: 2026-05-29
tags: [自动形式化, 数学, meta, ai-for-science, 里程碑]
related: [atlas-lean, autoformbot, 自动形式化, 证明泛滥, tokenmaxxing]
sources: ["消耗1830亿token，meta用ai把数学教材翻译成了一个超大lean库.md"]
origin_date: 2026-05-01
participants: [meta, 纽约大学]
causes: [自动形式化, 形式化验证]
effects: [证明泛滥]
significance: high
---
# ATLAS 发布

2026 年 5 月，[[meta]] 联合 [[纽约大学]] 正式发布 [[atlas-lean]]（ATLAS）——迄今最大规模的自动化数学形式化代码库，论文和代码同步公开。

## 事件概要

ATLAS 基于 Lean 4，将 26 本数学教科书中的非正式定理自动翻译为计算机可验证的形式化代码。整个代码库共计 630,999 行代码、46,203 条声明、42,837 条完成证明（92.7% 通过率），消耗超过 1830 亿 token，零人工证明工程介入。

## 历史背景

此事件发生在 [[google-deepmind]] AlphaProof Nexus 解决 9 道 Erdős 开放问题之后数天，标志着 AI + [[形式化验证]] 在数学领域的应用从"解决单个开放问题"扩展到"系统性形式化整本教科书"的新阶段。

## 影响

- **规模突破**：数周内机器生成体量达到 Mathlib（全球数学家多年协作成果）约四分之一
- **工程验证**：证明了零人工介入的全自动形式化流水线在教科书级别任务上的可行性
- **认知转变**：呼应了 [[陶哲轩]] 关于数学从"证明匮乏"转向[[证明泛滥]]的判断
- **[[tokenmaxxing]] 新标杆**：1830 亿 token 的单项目消耗成为 AI 科研领域的新极端案例