---
type: entity
title: GenesisAgent
tags: [ai-agent, code-generation, fine-tuning]
related: [repo-genesis, ms-agent, qwen]
created: 2026-04-16
updated: 2026-04-16
sources: ["msra首测ai从零建仓库：能写、能跑，但不一定对丨acl'26.md"]
---

# GenesisAgent

[[genesis-agent]] 是由 [[微软亚洲研究院]]（MSRA）基于 [[ms-agent]] 架构扩展并开发的 AI 智能体模型，专门针对仓库级代码生成任务进行了优化。

## 技术背景
GenesisAgent 的诞生旨在验证 [[repo-genesis]] 数据集的训练价值。它利用 RepoGenesis 数据集中的成功轨迹，通过指令微调技术来提升模型从零构建代码仓库的能力。

## 训练方法
- **基础模型**：Qwen3-8B。
- **训练数据**：从 RepoGenesis 的成功轨迹中蒸馏出的 16,396 条高质量指令微调样本。
- **架构基础**：基于 MS-Agent 架构进行扩展，增加了对微服务仓库生成任务的支持。

## 性能表现
在 RepoGenesis 的 Verified 子集评测中，GenesisAgent-8B 在部署成功率（DSR）、接口覆盖率（AC）和功能正确率（Pass@1）等多个指标上与 GPT-5 mini 互有胜负，整体处于同一梯队。

## 意义
GenesisAgent 的成功证明了 RepoGenesis 不仅仅是一个评测基准，更是一份高质量的训练信号。它表明通过针对性的高质量数据训练，参数规模较小的模型（8B）也能在复杂的工程任务上取得与顶尖通用模型相媲美的成绩。