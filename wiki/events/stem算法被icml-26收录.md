---
type: event
title: Stem 稀疏注意力算法被 ICML-26 收录
created: 2026-06-05
updated: 2026-06-05
tags: [学术会议, 稀疏注意力, ICML, 腾讯混元]
related: [stem-稀疏注意力, 腾讯混元, 稀疏注意力, 预填充瓶颈]
sources: ["首字延迟降低3.6倍！腾讯混元提出stem稀疏注意力算法，长文推理加速新sota.md"]
origin_date: 2026-06-05
participants: [腾讯混元]
causes: []
effects: []
significance: high
---
# Stem 稀疏注意力算法被 ICML-26 收录

## 事件概述

[[腾讯混元]] AI Infra 团队提出的 [[stem-稀疏注意力|Stem 稀疏注意力算法]]被机器学习顶级会议 ICML-26 收录。论文题目为"Stem: Rethinking Causal Information Flow in Sparse Attention"。

## 技术贡献

Stem 从"因果信息流"视角重新审视块级[[稀疏注意力]]，提出两大核心创新：
1. **[[token位置衰减|Token 位置衰减（TPD）]]**：重新分配稀疏预算，保护初始 token 的递归依赖链
2. **[[输出感知度量|输出感知度量（OAM）]]**：结合注意力分数与 Value 向量幅值评估 token 真实信息贡献

## 性能成果

- 仅用 25% 算力逼近稠密注意力精度
- 在 128K 上下文下实现 3.6 倍首字延迟降低
- 配套 [[hpc-stem-hpc-bsa算子|HPC 算子]]将理论加速比转化为端到端实测性能

## 意义

该成果标志着中国 AI 团队在[[预填充瓶颈|大模型推理优化]]领域取得重要突破，提出的"算法+算子协同设计"范式为长文本高效推理提供了新的技术路径。算法和算子均已开源（AngelSlim 和 hpc-ops）。