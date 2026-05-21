---
type: entity
title: PyramidDrop
tags: [pruning-method, vlm, efficiency]
related: [visual-token-pruning, attention-debiasing, fastv]
created: 2026-01-30
updated: 2026-01-30
sources: ["vlm剪枝新sota：无需重训练，注意力去偏置超越6大主流方案.md"]
---

# PyramidDrop

PyramidDrop 是一种针对视觉-语言模型的剪枝策略。与 [[FastV]] 类似，它依赖于模型内部的注意力分数来决定保留哪些视觉信息。

## 局限性与改进
作为基于注意力的剪枝方法，PyramidDrop 同样面临[[位置偏置]]导致的误判问题。上海大学曾丹团队的研究显示，应用[[注意力去偏]]修正后，PyramidDrop 在图像和视频理解基准上的表现得到了显著提升。