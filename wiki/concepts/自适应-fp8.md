---
type: concept
title: 自适应 FP8
created: 2026-05-21
updated: 2026-05-21
tags: [混合精度, FP8, 训练优化, 量化]
related: [loongforge, 全模态训练框架]
sources: ["百度百舸开源全模态训练框架-loongforge：一套代码跑通-gpu-与昆仑芯，多模态训练提速-45%.md"]
---
# 自适应 FP8

自适应 FP8（Selective FP8）是 [[loongforge|LoongForge]] 提出的混合精度训练优化机制，让混合精度训练从"全局统一配置"走向"按场景动态最优"。

## 问题背景

FP8 能显著提升训练效率，但在以下场景中，额外的量化开销可能导致性能回退：
- MoE 小专家
- 高并行度
- 短序列
- 视觉-语言混合的多模态场景

## 解决方案

- 基于离线 benchmark 生成动态精度策略
- 在模型初始化阶段按层、按组件自动选择 FP8 或 BF16
- 支持 ViT 与 LLM 分别采用独立策略
- 避免"一套配置套全模型"的低效

## 实测效果

Qwen3-VL 235B 的 16K 训练中，相比全量 FP8 进一步提升约 10%。