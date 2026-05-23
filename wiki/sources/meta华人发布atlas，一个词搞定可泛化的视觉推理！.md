---
type: source
title: "Meta华人发布ATLAS，一个词搞定可泛化的视觉推理！"
created: 2026-05-22
updated: 2026-05-22
tags: [视觉推理, 多模态, meta-ai, 强化学习, 论文报道]
related: [atlas-视觉推理, meta-ai, 香港中文大学, functional-token, la-grpo, 机器之心]
sources: ["meta华人发布atlas，一个词搞定可泛化的视觉推理！.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/TY2GluW_cySddtJF1ETOVw"
venue: 机器之心
---
# Meta华人发布ATLAS，一个词搞定可泛化的视觉推理！

机器之心发布的关于 [[meta-ai|Meta AI]] 与 [[香港中文大学]] 联合提出全新视觉推理范式 [[atlas-视觉推理|ATLAS]] 的报道。

## 核心内容

报道介绍了 ATLAS 范式的核心创新：用单一离散的 [[functional-token|Functional Token]] 同时充当 Agentic Operation 和 Latent Visual Reasoning Unit，无需外部工具或中间图像生成即可完成复杂视觉推理。

## 关键技术要点

- **Functional Token 机制**：嵌入标准自回归序列中的特殊离散 Token（如 `<|Line|>`、`<|Shape|>`），代表高阶视觉操作语义，既是操作也是思考。
- **两阶段训练**：SFT 阶段使用 ATLAS-178K 数据集学习推理轨迹；RL 阶段通过奖励合理使用、惩罚 Token Spam 防止滥用。
- **[[la-grpo|LA-GRPO]] 算法**：针对 [[梯度稀释]] 问题，在 GRPO 基础上引入 Token-level Anchor，精准强化关键 Token 生成概率。

## 实验验证

- 在几何推理、空间关系、多视角理解、计数等任务上取得竞争力表现。
- 注意力分析证明 Functional Token 确实触发了真实的内部视觉操作。
- 效率远超需生成中间图像的方法。

## 第一作者

[[ziyu-guo|郭子钰]]，香港中文大学博士生，北大本科毕业，曾在 Google DeepMind、Meta AI 等机构实习。