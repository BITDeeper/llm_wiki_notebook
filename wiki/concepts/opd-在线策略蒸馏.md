---
type: concept
title: OPD（在线策略蒸馏/轨迹级蒸馏）
created: 2026-06-13
updated: 2026-06-13
tags: [概念, 模型蒸馏, 基线方法]
related: [risd, z-reward]
sources: ["rss/阿里-z-image-提出奖励模型新范式：超越-opd，将大模型推理能力蒸馏进单-token-分数分布.md"]
---
# OPD（在线策略蒸馏/轨迹级蒸馏）

OPD（Online Policy Distillation）是一种蒸馏大模型推理轨迹的方法，在 [[z-reward|Z-Reward]] 研究中作为被超越的基线方法。

## 局限性

OPD 让学生模型沿着自己的生成轨迹采样，由教师对每个 token 或推理段落给出反馈。虽然能提升学生能力，但**推理时学生模型仍然需要生成长推理链**（平均约 750 个 token）。

对于需要在大规模训练流程中被反复调用的奖励模型而言，每次调用耗费数百个 token 意味着巨大的延迟和成本。[[risd|RISD]] 通过不蒸馏推理链而是蒸馏判断分布，在仅输出 1 个 token 的情况下实现了性能反超。