---
type: concept
title: 奖励计算与训练Overlap
created: 2026-05-25
updated: 2026-05-25
tags: [性能优化, 强化学习, 并行计算]
related: [verl-omni, 多模态生成rl后训练]
sources: ["verl-omni：面向扩散和全模态生成模型的通用rl后训练框架.md"]
---
# 奖励计算与训练Overlap

奖励计算与训练 Overlap 是一种将奖励模型推理与 rollout 生成、策略训练并行执行的优化策略，是 [[verl-omni]] 的关键性能优化手段。

## 优化原理

在传统的串行流程中，rollout 生成 → 奖励计算 → 策略训练是顺序执行的。通过将奖励模型放到独立 GPU 上运行，可以使其与策略训练并行执行，从而降低端到端的训练延迟。

## 实测效果

在 VeRL-Omni 的 Qwen-Image OCR [[flowgrpo]] LoRA 微调实验中，将奖励模型放到独立 GPU 与策略训练 overlap，每步 wall-clock 时间降低约14%。

## 扩展方向

VeRL-Omni 的路线图中计划进一步推进"全异步 RL"，在 actor、rollout、reward 之间实现端到端异步流水线，超出当前的异步奖励范围，进一步提升训练吞吐和 GPU/NPU 利用率。