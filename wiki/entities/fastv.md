---
type: entity
title: FastV
tags: [pruning-method, vlm, efficiency]
related: [visual-token-pruning, attention-debiasing, pyramid-drop]
created: 2026-01-30
updated: 2026-01-30
sources: ["vlm剪枝新sota：无需重训练，注意力去偏置超越6大主流方案.md"]
---

# FastV

FastV 是一种主流的视觉-语言模型（VLM）剪枝方法，旨在通过丢弃不重要的视觉 token 来降低推理成本。该方法通常基于注意力机制来判断 token 的重要性。

## 局限性与改进
研究表明，FastV 的性能受到注意力机制中[[位置偏置]]和 [[attention-sink]] 的影响。通过集成[[注意力去偏]]技术，FastV 在保持无需重训练特性的同时，实现了更准确的剪枝结果和更好的模型性能。