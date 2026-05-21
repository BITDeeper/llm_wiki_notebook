---
type: concept
title: Modality-aware Skipping (模态感知跳过)
tags: [算法, 多模态, moe]
related: [modes, output-aware-skipping, moe-推理优化]
created: 2026-03-05
updated: 2026-03-05
sources: ["跳过88%专家，保住97%性能！moe推理的正确玩法-cvpr’26.md"]
---

# Modality-aware Skipping (模态感知跳过)

**Modality-aware Skipping** 是针对多模态混合专家模型的一种优化策略，它区分不同模态（如文本和视觉）Token 的行为差异，并为它们设定不同的专家跳过阈值。

## 理论基础

[[modes]] 研究团队通过实验发现，文本 Token 和视觉 Token 在专家网络中的表现存在显著差异：
-   **文本 Token**：在 FFN（前馈网络）中的更新幅度显著更大，高度依赖专家进行逻辑推理和知识检索。
-   **视觉 Token**：与专家权重更接近正交，意味着专家对视觉 Token 的改变相对较小，视觉专家存在更高的冗余度。

## 策略价值

如果采用统一的跳过阈值，很容易在视觉 Token 上“跳得不够”（浪费算力），或者在文本 Token 上“跳得太多”（导致逻辑能力下降）。Modality-aware Skipping 通过为视觉 Token 设定更激进的阈值，为文本 Token 设定更保守的阈值，实现了更精细化的计算资源分配。
