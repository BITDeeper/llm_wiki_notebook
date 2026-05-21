---
type: entity
title: DreamBooth
created: 2026-01-18
updated: 2026-01-18
tags: [ai, model, diffusion, fine-tuning]
related: [controllable-generation, conditional-score-prediction]
sources: ["任意条件，「可控」文生图扩散模型综述-tpami'25.md"]
---

# DreamBooth

DreamBooth 是一种用于图像个性化的微调方法，属于 [[conditional-score-prediction]] 技术路线中的 Tuning-based 方法。

它通过更新预训练扩散模型的部分参数或嵌入，将特定的主体、概念或风格内化为模型的去噪策略。这使得模型能够精确生成特定主体的图像，但同时也带来了训练成本较高和可能产生过拟合或遗忘的挑战。