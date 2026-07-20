---
type: entity
title: NanoChat Autoresearch
created: 2026-06-12
updated: 2026-06-12
tags: [基准测试, 模型训练优化, autoresearch]
related: [first-steps-toward-automated-ai-research, recursive-superintelligence, autoresearch, andrej-karpathy]
origin_date: 2025-06-01
sources: ["rss/anthropic警告的递归ai，田渊栋新公司刚刚走出了「第一步」.md"]
---
# NanoChat Autoresearch

## 简介

NanoChat Autoresearch 是由 [[andrej-karpathy|Andrej Karpathy]] 发起的 [[autoresearch|autoresearch]] 项目中的基准测试，规则为：在一块 GPU 上，给定五分钟固定训练预算，尽可能将一个小型语言模型训到最低的验证损失（以 BPB 衡量，越低越好）。

## 特点

该场景天然适合自动化研究：实验周期短、指标方差低、作弊行为相对容易检测。一个名为"autoresearch@home"的社区项目已在此基准上长期运行，数十名人类研究员加上数百个 AI 智能体协作持续优化。

## Recursive 系统成果

[[recursive-superintelligence|Recursive]] 的系统以相同初始代码出发，将验证 BPB 从社区最佳的 0.9372 推进到 0.9109，改善 0.0263 BPB，等效节省 1.3 倍训练时间。

### 关键发现

系统自主发现了一种 **短上下文记忆机制**：在注意力的 value 路径中，通过哈希表同时嵌入 bigram（相邻词对）和 trigram（三元组）信息，并用可学习门控加权混合。不同 Transformer 层使用不同哈希函数以降低跨层重复碰撞概率。该变体形式尚未见于公开文献。