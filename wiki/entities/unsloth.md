---
type: entity
title: Unsloth
created: 2026-06-11
updated: 2026-06-11
tags: [AI工具, 微调, 开源]
related: [diffusiongemma]
sources: ["rss/谷歌开源26b文本扩散moe，劈柴：生成速度像赛马一样快.md"]
---
# Unsloth

AI 模型微调团队/工具。在 [[diffusiongemma|DiffusionGemma]] 发布后，Unsloth 对其进行微调使其学会解数独，展示了文本扩散模型在非线性任务上的潜力。数独对自回归模型并不友好（每个 token 依赖后面的 token），而 DiffusionGemma 的[[双向注意力]]机制使这类任务变得更容易。