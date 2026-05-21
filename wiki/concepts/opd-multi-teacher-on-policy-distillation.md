---
type: concept
title: OPD (Multi-teacher On-Policy Distillation)
tags: [algorithm, distillation, training, deepseek]
related: [specialist-training, deepseek-v4]
created: 2026-04-25
updated: 2026-04-25
sources: ["deepseek-v4报告亮了！v4发布延迟的秘密，终于曝光了.md"]
---

# OPD (Multi-teacher On-Policy Distillation)

OPD（Multi-teacher On-Policy Distillation，多教师在线策略蒸馏）是 DeepSeek 开发的一种用于模型融合的算法，主要用于将多个专家模型聚合为一个统一模型。

## 背景与挑战
在 [[Specialist Training]] 流程之后，需要将十多个万亿参数级别的教师模型融合。直接同时加载这些模型进行在线推理在显存上是不现实的，且缓存所有教师的 logits 也会超出显存容量。

## 解决方案
DeepSeek V4 采用了以下工程策略：
1. **仅缓存隐藏状态**：不缓存教师的 logits，而是只缓存教师模型最后一层的隐藏状态。
2. **按需重建**：训练时按需通过 prediction head 重建 logits。
3. **排序优化**：按教师索引排序训练样本，确保每个教师的 prediction head 只需加载一次。
4. **专用 Kernel 加速**：使用 TileLang 编写的专用 kernel 加速 KL 散度计算。

## 意义
OPD 展示了 DeepSeek 在工程实现上的精细控制能力，解决了大规模模型蒸馏中的显存和计算效率瓶颈，是支撑 V4 强大综合能力的关键技术之一。