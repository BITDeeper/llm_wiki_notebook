---
type: concept
title: DMD2 分布匹配蒸馏
created: 2026-05-14
updated: 2026-05-14
tags: [模型蒸馏, 推理优化, 生成加速]
related: [sensenova-u1, neo-unify-架构]
sources: ["商汤sensenova-u1深度拆解，原生统一架构终结缝合时代.md"]
---
# DMD2 分布匹配蒸馏

DMD2（改进的分布匹配蒸馏，Improved Distribution Matching Distillation）是 [[sensenova-u1]] 采用的推理加速技术，用于将生成步数从实验室级压缩到工业级可用范围。

## 核心效果

- **蒸馏前**：约 100 步生成
- **蒸馏后**：8 步生成
- **质量保证**：在保证生成质量的前提下实现大幅加速

## 技术意义

DMD2 是跨越从实验室模型到工业级落地鸿沟的关键技术。将生成步数压缩一个数量级以上，使得原生统一架构的高质量生成能力能够在实际商用场景中高效部署。

## 在 SenseNova U1 中的位置

DMD2 与 [[flow-grpo]] 同属后期训练环节，在四步训练法完成后应用，确保模型在保持生成质量的同时满足工业级推理速度要求。