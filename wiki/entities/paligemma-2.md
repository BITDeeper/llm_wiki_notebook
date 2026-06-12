---
type: entity
title: PaliGemma-2
created: 2026-06-08
updated: 2026-06-08
tags: [模型, vlm, 视觉语言模型]
related: [vitra, vla-视觉-语言-动作]
sources: ["rss/首次！纯人类视频预训练vla灵巧操作，少量数据微调就能部署成功.md"]
---
# PaliGemma-2

PaliGemma-2是一个视觉语言模型（VLM），在[[vitra|VITRA]]框架中作为VLA模型的骨干网络使用。

## 在VITRA中的角色

- 接收视觉观察、语言指令和相机视场角（FoV）信息
- 输出"认知特征"（Cognition Feature）
- 该认知特征被传递给扩散动作专家（DiT）进行动作预测