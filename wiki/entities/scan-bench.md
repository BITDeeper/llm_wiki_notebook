---
type: entity
title: SCAN-bench
tags: [benchmark, medical-ai, evaluation]
related: [baichuan-m3, healthbench, osce]
created: 2026-01-13
updated: 2026-01-13
sources: ["世界最强医疗模型百川m3发布：ai医疗，奇点已至.md"]
---

# SCAN-bench

**SCAN-bench** 是由 [[百川智能]] 联合 150 多位一线医生构建的医疗 AI 评测体系。它借鉴了医学教育中经典的 [[OSCE]]（客观结构化临床考试）方法，旨在模拟真实的临床考场。

## 特点
- **动态考场**：不同于传统的静态问答集（如 [[HealthBench]]），SCAN-bench 包含病史采集、辅助检查、精准诊断的全流程。
- **多维度考核**：不仅考核最终的病名诊断，还考核“问诊思路是否清晰”、“检查开得是否合理”、“有没有漏掉高危风险”。

## 评测结果
在实验中，[[baichuan-m3]] 在 SCAN 的四个维度上均显著高于人类医生基线水平，并大幅领先于其他顶尖模型。数据显示，问诊准确度每增加 2%，最终诊疗结果的准确度就会提升 1%。