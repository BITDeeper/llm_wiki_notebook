---
type: entity
title: Gemini 3.0 Flash
created: 2026-05-25
updated: 2026-05-25
tags: [大语言模型, google, 评估模型]
related: [google-deepmind, alphaproof-nexus, gemini-3-1-pro]
sources: ["一个问题几百美元，deepmind智能体一次搞定了9个erdős问题.md"]
---
# Gemini 3.0 Flash

Google DeepMind 的高效模型，在 [[alphaproof-nexus]] 的全功能智能体架构中充当"裁判"角色。

## 在 AlphaProof Nexus 中的角色

- 对生成的证明草图进行清晰度、合理性和新颖性的 Elo 评分
- 引导系统在庞大的可能性库中进行优胜劣汰的采样
- 作为多智能体演化算法的评估组件

## 定位

作为全功能智能体架构的辅助组件，Gemini 3.0 Flash 提供证明质量的自动评估能力。然而实验表明，不使用该裁判机制的极简基础智能体同样能解决所有问题。
