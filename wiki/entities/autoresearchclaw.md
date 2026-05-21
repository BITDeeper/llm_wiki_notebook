---
type: entity
title: AutoResearchClaw
tags: [工作流, agent, 科研自动化]
related: [metaclaw, metaclaw-bench]
created: 2026-03-30
updated: 2026-03-30
sources: ["人类一离座ai就进化！伯克利开源metaclaw，静态agent慌了.md"]
---

# AutoResearchClaw

[[autoresearchclaw]] 是一个包含 **23 个阶段**的自主研究流水线，用于测试 [[metaclaw]] 框架在复杂长链任务中的鲁棒性。

## 任务流程
该流水线涵盖了科研工作的全流程，包括：
-   文献综述
-   实验设计
-   代码生成
-   结果分析
-   论文写作

## 测试效果
在仅依赖技能注入（不进行权重训练）的情况下，AutoResearchClaw 的表现显著提升：
-   综合鲁棒性提升 **18.3%**。
-   阶段重试率下降 **24.8%**。
-   迭代优化轮次减少 **40%**。

这证明了 MetaClaw 的技能提炼机制在复杂任务中能有效减少错误和返工。