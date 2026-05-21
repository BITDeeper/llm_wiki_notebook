---
type: concept
title: SCAN 原则
tags: [methodology, medical-ai, prompting]
related: [baichuan-m3, 严肃问诊, 红旗征]
created: 2026-01-13
updated: 2026-01-13
sources: ["世界最强医疗模型百川m3发布：ai医疗，奇点已至.md"]
---

# SCAN 原则

**SCAN 原则** 是 [[百川智能]] 提出的一套用于指导 AI 进行 [[严肃问诊]] 的方法论。它定义了 AI 在面对患者主诉时应遵循的逻辑步骤。

## 组成部分

1.  **S - Safety Stratification (安全分层)**
    优先排查危急重症（[[红旗征]]）。例如，针对“头晕”，首先判断是否为中风或耳石症风险。

2.  **C - Clarity Matters (信息澄清)**
    量化诱因，明确症状细节。例如，询问是否有熬夜史或测量过血压。

3.  **A - Association & Inquiry (关联追问)**
    基于初步回答，像侦探一样进行逻辑关联，锁定嫌疑病因。

4.  **N - (Implicit Next Steps)**
    虽然原文未明确展开 N 的具体单词，但在上下文中指代基于前述步骤得出的诊疗建议或进一步检查。

## 应用
该原则被应用于 [[baichuan-m3]] 及其应用 [[百小应]] 中，确保 AI 能够像经验丰富的医生一样进行抽丝剥茧的问诊，而非简单的关键词匹配。