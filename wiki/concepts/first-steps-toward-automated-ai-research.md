---
type: concept
title: First Steps Toward Automated AI Research
created: 2026-06-12
updated: 2026-06-12
tags: [自动化ai研究, 递归自我改进, 开放式知识发现, recursive-superintelligence]
related: [recursive-superintelligence, 递归式自我改进, 自动化ai研究员, nanochat-autoresearch, nanogpt-speedrun, sol-execbench, autoresearch]
origin_date: 2026-06-12
sources: ["rss/anthropic警告的递归ai，田渊栋新公司刚刚走出了「第一步」.md"]
---
# First Steps Toward Automated AI Research

## 简介

「First Steps Toward Automated AI Research」（迈向自动化 AI 研究的第一步）是 [[recursive-superintelligence|Recursive Superintelligence]] 于 2026 年 6 月发布的首个公开技术成果。该成果构建了一套开放式自动化知识发现系统，在三个差异显著的基准测试上均刷新 SOTA 纪录，标志着 [[递归式自我改进]] 从理论讨论进入可复现的工程验证阶段。

## 系统架构

传统 AI 研究流程是一个高度依赖人的闭环：提想法 → 写代码 → 跑实验 → 分析结果 → 再提想法。效率瓶颈不在算力，而在人——全球能设计前沿训练流程的研究员屈指可数。

Recursive 的系统将这一闭环自动化：

1. **自动提出实验想法**：针对明确优化目标，系统自主生成实验方案
2. **自动实现代码**：将想法转化为可执行代码
3. **自动运行验证**：执行实验并收集结果
4. **自动学习决策**：从结果中学习，决定下一步搜索方向
5. **多线路并行**：多条研究线路可同时推进
6. **跨任务复用**：有效发现可被自动迁移到其他任务
7. **奖励作弊检测**：内嵌机制防止系统"走捷径"刷指标而非真正改进

## 三个基准成果

| 基准 | 领域 | 此前最佳 | Recursive 成果 | 关键发现 |
|------|------|----------|---------------|---------|
| [[nanochat-autoresearch|NanoChat Autoresearch]] | 小模型训练优化 | BPB 0.9372 | BPB 0.9109 | 哈希表 n-gram 短上下文记忆 |
| [[nanogpt-speedrun|NanoGPT Speedrun]] | 训练速度竞速 | 79.7s | 77.5s | FP8 注意力、退火噪声、融合内核 |
| [[sol-execbench|SOL-ExecBench]] | GPU 内核优化 | SOL 0.699 | SOL 0.754 | 跨 235 任务复用优化模式 |

## 核心创新

系统自主发现的关键技术包括：

- **短上下文记忆机制**：哈希表 bigram/trigram 嵌入 + 可学习门控加权混合
- **FP8 注意力计算**：前向 FP8 双倍吞吐，反向 BF16 维持稳定
- **优化器退火探索噪声**：随训练进度线性退火的高斯噪声注入
- **跨任务优化模式复用**：在一个任务中发现的策略自动迁移到其他任务

## 当前局限

Recursive 自承当前系统仅在以下条件效果最好：

- 指标明确可量化
- 反馈快速
- 作弊行为可检测

距离自主推进开放性科学问题还有相当距离。奖励作弊防控将是规模化路上持续面对的核心挑战。

## 行业意义

该成果是递归自我改进赛道首个可复现的公开技术展示，与 [[anthropic|Anthropic]] 同期发布的《When AI Builds Itself》形成"警示 vs 实践"的对照叙事。它证明 [[自动化ai研究员|自动化 AI 研究]] 不再是理论设想，而是已经可以在封闭场景中产出超越人类社区长期积累的 SOTA 结果。