---
type: entity
title: SafeAgentBench
created: 2026-01-20
updated: 2026-06-16
tags: ["基准", "评测", "具身智能", "安全", "评测基准"]
related: ["具身安全", "agentsafe", "eirad", "robosafe", "ai2-thor"]
sources: ["首篇具身智能机器人「安全」综述：llm如何跨越物理鸿沟？.md", "rss/给机器人装安全护栏，北航联合团队提出robosafe，让具身智能体在物理世界中安全行动.md"]
---

# SafeAgentBench

**SafeAgentBench** 是一个专门针对具身智能体安全性的标准化评测基准。区别于传统的任务完成度评测，该基准聚焦于智能体在执行任务时识别和规避物理危险的能力，旨在提供一个统一的评估标准，用于测试和比较不同智能体在处理潜在危险指令或处于危险环境时的反应能力。它强调在长时程任务中保持系统稳健性的重要性。

## 应用实例

在 [[robosafe|RoboSafe]] 的实验中，SafeAgentBench 被用于全面量化评估防护框架在应对 [[情境风险]] 和 [[时序风险]] 时的表现。实验数据显示，RoboSafe 将整体危险执行率降低了 36.8%。