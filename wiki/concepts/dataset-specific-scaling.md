---
type: concept
title: "Dataset-specific Scaling"
created: 2026-05-20
updated: 2026-05-20
tags: [异常检测, scaling-law, 通用模型, 迁移学习]
related: [ofa-tad, scaling-law, one-for-all-异常检测]
sources: ["icml-2026｜表格异常检测能否告别「one-for-one」？ofa-tad迈向one-for-all通用异常检测新范式.md"]
---
# Dataset-specific Scaling

Dataset-specific Scaling 是 [[ofa-tad]] 实验中观察到的重要现象：随着源数据集数量增加，通用异常检测模型的迁移性能呈现稳定提升趋势。

## 与 Scaling Law 的关系

这一现象是大模型领域 [[scaling-law]] 在表格异常检测任务上的具体体现。正如大模型性能随训练数据量和参数规模增加而可预测地提升，通用异常检测器的迁移能力也随预训练数据集的丰富度增加而稳定增强。

## 实验证据

[[ofa-tad]] 在实验中逐步增加源数据集数量（从 1 个到 7 个），观察到目标域上的检测性能持续提升。这暗示通用表格异常检测具备类似「规模效应」的潜力：预训练数据越丰富，模型越可能学到跨领域的异常检测规律。

## 局限与展望

当前实验中源数据集仅 7 个，Dataset-specific Scaling 的潜力尚需更大规模验证。若该现象在更大规模下成立，将为构建工业级通用异常检测器提供重要的理论支撑和实践指导。