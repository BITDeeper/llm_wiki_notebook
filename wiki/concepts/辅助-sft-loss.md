---
type: concept
title: 辅助 SFT Loss
tags: [machine-learning, training-stability, rl]
related: [mr-grpo, kl-正则化, deepgen-1-0]
created: 2026-03-18
updated: 2026-03-18
sources: ["5b参数+4060ti，10秒出图，全流程开源可复现！补齐统一多模态生成编辑的开源版图，让高质量图像生成真正变得更轻量、更普及.md"]
---

# 辅助 SFT Loss

[[辅助-sft-loss]] (Auxiliary Supervised Fine-Tuning Loss) 是在强化学习（RL）训练阶段引入的一种辅助损失函数。

## 目的
在纯强化学习训练中，模型容易出现性能退化或能力崩塌（Catastrophic Forgetting）。辅助 SFT Loss 的作用是作为**结果引导**，提供高质量生成的监督信号，锚定模型的输出，防止其在长程训练中发生能力漂移。

## 机制
它通过在 RL 目标函数中加入对原始监督微调（SFT）数据的约束，确保模型即使在探索新策略时，也不会遗忘在 SFT 阶段学到的核心能力。

## 实证效果
在 [[deepgen-1-0]] 的训练实验中，移除辅助 SFT Loss 后，模型在大约 300 步后性能开始崩塌，最终甚至不如 RL 训练前的基线水平。这证明了该机制对于维持 RL 训练稳定性的关键作用。