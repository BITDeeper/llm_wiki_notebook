---
type: concept
title: Can Say vs Can Do
created: 2026-05-11
updated: 2026-05-11
tags: [agent, 能力评估, 幻觉]
related: [执行轨迹审计, 业务编排瓶颈, claw-eval-live]
sources: ["agent评测的下半场：为什么需要一个「活的」benchmark？.md"]
---

# Can Say vs Can Do

区分模型「能说会道」（语言能力强、生成文本流畅）与「能干实事」（正确调用工具、闭环完成任务）之间巨大鸿沟的概念。

## 现象描述

在 [[claw-eval-live]] 的评测中，许多模型（如 [[mimo-v2-pro]], [[kimi-k2-5]], [[gemini-3-1-pro]]）虽然通过率相近，但「完成度」差异巨大。这表明模型往往能写出体面的报告或总结（Can Say），但在实际执行过程中遗漏关键步骤或未能闭环（Can Do）。

## 典型案例

在 HR 入职任务中，模型能生成流畅的入职文档，但未能真正把员工信息录入系统、完成必需的工具调用或补齐任务证据。这属于典型的「Can Say but Can't Do」。

## 评测意义

这一概念揭示了 Agent 评测不能仅依赖文本生成质量，必须引入 [[执行轨迹审计]] 来验证真实的行动闭环。