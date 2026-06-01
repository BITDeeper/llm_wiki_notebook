---
type: entity
title: CLIP
created: 2026-05-31
updated: 2026-05-31
tags: [模型, OpenAI, 视觉-语言, 对抗样本]
related: [对抗样本, 转移攻击, ai-权威清洗, openai]
sources: ["ai权威清洗：-一张肉眼难辨的图片，就能让gpt-5.4、claude-opus-4.6集体造谣.md"]
origin_date: 2021-01-05
---

# CLIP

[[openai|OpenAI]] 于2021年发布的视觉-语言预训练模型（Contrastive Language-Image Pre-training），能够将图像和文本映射到同一嵌入空间。

## 在AI权威清洗中的角色

在 [[ai-权威清洗论文发布-202605|AI权威清洗论文]] 中，攻击者利用公开的 CLIP 模型集成生成[[对抗样本]]，再通过[[转移攻击]]将这些对抗样本迁移到 GPT-5.4、Claude Opus 4.6 等商业黑盒模型上。CLIP 的公开可用性使得攻击者无需访问目标模型即可实施有效攻击。