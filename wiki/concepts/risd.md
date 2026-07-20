---
type: concept
title: RISD（推理内化分数蒸馏）
created: 2026-06-13
updated: 2026-06-13
tags: [概念, 模型蒸馏, 奖励模型, 视觉生成]
related: [z-reward, gdso, opd-在线策略蒸馏]
sources: ["rss/阿里-z-image-提出奖励模型新范式：超越-opd，将大模型推理能力蒸馏进单-token-分数分布.md"]
---
# RISD（推理内化分数蒸馏）

RISD（Reasoning-Internalized Score Distillation）是 [[z-reward|Z-Reward]] 范式中用于训练学生模型的核心蒸馏方法。

## 核心创新

RISD 是一种**结果级蒸馏**方法。传统轨迹级蒸馏（如 [[opd-在线策略蒸馏|OPD]]）让学生模型模仿教师的长推理链，导致推理时仍需生成大量 token（约 750 个），成本高昂。

RISD 则让学生模型直接学习教师模型推理后得出的**分数分布本身**：
- 训练时，学生模型使用 KL 散度损失对齐教师的推理条件分数分布。
- 推理时，学生模型不再生成推理文本，而是直接输出内化了判断能力的分数分布。

通过将推理过程“内化”进模型参数，学生模型最终只需输出 **1 个 token** 即可给出高质量的奖励信号，大幅降低了工业级部署成本。