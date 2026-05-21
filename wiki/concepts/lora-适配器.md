---
type: concept
title: LoRA 适配器
tags: [technique, fine-tuning, efficiency]
related: [prism, 模型微调]
created: 2026-03-23
updated: 2026-03-23
sources: ["「你是专家」竟成ai幻觉毒药？新论文一巴掌揭穿提示词最大骗局.md"]
---

# LoRA 适配器

**LoRA** (Low-Rank Adaptation) 是一种高效的模型微调技术。在 [[prism]] 算法的语境下，LoRA 适配器被用来“蒸馏”和存储特定的人设能力，从而实现低成本的动态切换。

## 在 PRISM 中的应用
PRISM 并非在推理时通过长 Prompt 来激活人设，而是将人设能力训练进一个轻量化的 LoRA 模块中。
- **门控机制**：系统根据意图判断，决定是否加载该 LoRA 适配器。
- **优势**：避免了在 Prompt 中加入冗长的人设描述，减少了推理时的 token 开销和潜在的干扰噪声，同时保留了人设在生成任务中的增益效果。