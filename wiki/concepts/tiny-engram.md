---
type: concept
title: Tiny Engram
tags: [computer-vision, engram, fine-tuning]
related: [engram, autoark, stable-diffusion]
created: 2026-05-03
updated: 2026-05-03
sources: ["deepseek-v4最大的遗憾.md"]
---

# Tiny Engram

[[Tiny Engram]] 是 [[engram]] 架构在视觉模态的应用变体，由开源团队 [[AutoArk]] 开发。它成功地将原本为文本设计的条件记忆机制迁移到了图像生成模型（如 Stable Diffusion）上。

## 技术实现

在视觉模态中，图像 patch 经过分层编码（底层纹理、中层部件、高层风格）后，被送入哈希查表模块。这使得模型能够像检索文本实体一样检索视觉概念。

## 性能对比

与主流的参数高效微调（PEFT）方法 LoRA 相比，Tiny Engram 表现出显著优势：
- **参数效率**：达到同等效果，Tiny Engram 所需的额外参数仅为 LoRA 的 15% 到 30%。
- **概念稳定性**：在连续注入多个新概念时，LoRA 往往会出现明显的概念退化，而 Tiny Engram 能保持各概念的独立性。

Tiny Engram 的出现证明了 Engram 理念的通用性：凡是能离散化、能哈希的模态，都可以应用条件记忆机制。