---
type: entity
title: ReplicaOcc
created: 2026-05-15
updated: 2026-05-15
tags: [数据集, 评测基准, 占据预测, 开放词汇]
related: [freeocc, 开放词汇三维占据预测, 港科大广州-peak-lab]
sources: ["rss-2026-港科大（广州）开源首个无需训练的开放词汇3d占据地图构建系统.md"]
---
# ReplicaOcc

ReplicaOcc 是由 [[港科大广州-peak-lab|港科大（广州）PEAK-Lab]] 团队构建的跨数据集泛化评测基准，用于评估开放词汇具身占据预测系统的零样本迁移能力。

## 构建动机

现有占据预测评测主要依赖 EmbodiedOcc-ScanNet 与 OccScanNet，但 OccScanNet 将大量类别合并为"furniture"与"objects"，难以真正量化开放词汇场景中的语义理解能力。ReplicaOcc 的构建旨在填补这一空白。

## 特性

- 基于 Replica 场景构建，采用与 ScanNet 类似的 RGB-D 序列组织方式。
- 提供全局占据真值。
- 引入比 EmbodiedOcc-ScanNet（11 个粗粒度类别）更细粒度的语义类别体系。
- 包含 8 个场景，支持开放词汇语义理解能力的有效检验。

## 开源地址

- https://huggingface.co/datasets/the-masses/ReplicaOcc

## 在 FreeOcc 中的角色

ReplicaOcc 主要用于验证 [[freeocc|FreeOcc]] 的零样本跨数据集泛化能力。实验表明，学习式方法从 EmbodiedOcc-ScanNet 迁移到 ReplicaOcc 后性能几乎完全崩溃，而 FreeOcc 保持稳定（RGB-D 55.65 IoU / 20.90 mIoU）。