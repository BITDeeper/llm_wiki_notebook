---
type: concept
title: FLARE
tags: [algorithm, reinforcement-learning, world-model]
related: [gr00t, vla-视觉-语言-动作, video-world-model]
created: 2026-01-10
updated: 2026-01-10
sources: ["30人团队震撼英伟达！jim-fan自曝三个教训，重押世界模型.md"]
---

# FLARE

FLARE 是一种隐式世界模型策略算法，被集成在 [[gr00t]] N1.5 及后续版本中。

## 核心思想
FLARE 并不直接预测未来的像素（这通常计算量巨大且难以优化），而是预测“对未来动作有用的潜在表示”。

## 实现机制
在标准的 [[vla-视觉-语言-动作]] 策略模型中，FLARE 引入了额外的“未来 token”。这些 token 在 Transformer 架构中作为辅助输入，帮助模型在推理时学会“提前想一想”，从而提高对未来动作预测的一致性和准确性。

## 性能表现
实验结果显示，在 4 个真实操作任务（每个任务 100 条轨迹）中，使用 FLARE 的 GR-1 机器人平均成功率达到 95.1%。这证明了通过隐式预测未来表示来增强当前决策的有效性。