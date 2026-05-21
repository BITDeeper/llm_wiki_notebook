---
type: entity
title: MetaClaw-Bench
tags: [数据集, 评测基准, agent]
related: [metaclaw, autoresearchclaw]
created: 2026-03-30
updated: 2026-03-30
sources: ["人类一离座ai就进化！伯克利开源metaclaw，静态agent慌了.md"]
---

# MetaClaw-Bench

[[metaclaw-bench]] 是为了验证 [[metaclaw]] 框架效果而构建的评测基准。

## 规模与内容
-   包含 **934 道题目**。
-   模拟了 **44 个工作日** 的连续任务流。

## 测试结果
在该基准上的测试表明，使用 MetaClaw 框架后：
-   被评测模型的相对准确率最高提升 **32.2%**。
-   端到端任务完成率从 **2.0%** 提升至 **16.5%**（增长 **8.25 倍）。

## 意义
MetaClaw-Bench 专门用于评估 Agent 在连续任务流中“越用越强”的能力，填补了静态评测无法反映 Agent 动态进化能力的空白。