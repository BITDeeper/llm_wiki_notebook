---
type: entity
title: OneThinker-SFT-340k
tags: [数据集, 微调, 思维链]
related: [onethinker, onethinker-600k, seed1.5-vl]
created: 2025-12-12
updated: 2025-12-12
sources: ["港中文联手美团开源“视觉推理通才”！图像视频10类任务一网打尽.md"]
---

# OneThinker-SFT-340k

[[OneThinker-SFT-340k]] 是用于 [[onethinker]] 模型监督微调（SFT）阶段的数据集。

## 生成方式

该数据集包含 34 万个样本，是基于 [[seed1.5-vl]] 模型对 [[onethinker-600k]] 数据集中的样本生成高质量的思维链，并经过严格过滤后得到的。

## 作用

在强化学习训练开始之前，OneThinker-SFT-340k 用于模型的 SFT 冷启动。这一步骤旨在赋予模型基础的推理能力和指令遵循能力，为后续的强化学习训练奠定基础。