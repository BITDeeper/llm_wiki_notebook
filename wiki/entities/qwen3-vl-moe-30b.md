---
type: entity
title: Qwen3-VL-MoE-30B
tags: [模型, 多模态, moe, qwen]
related: [modes, kimi-vl-a3b-instruct, moe-推理优化]
created: 2026-03-05
updated: 2026-03-05
sources: ["跳过88%专家，保住97%性能！moe推理的正确玩法-cvpr’26.md"]
---

# Qwen3-VL-MoE-30B

**Qwen3-VL-MoE-30B** 是 Qwen 系列中的一个大规模多模态混合专家模型，参数量为 300 亿。在 [[modes]] 框架的验证中，该模型展现了极高的专家冗余度。

## MoDES 优化效果

作为 [[modes]] 论文中的主要验证对象之一，Qwen3-VL-MoE-30B 被用于证明在高跳过比例下保持性能的可行性。

-   **跳过比例**：88%
-   **性能保留**：97.33%
-   **对比优势**：在相同跳过比例下，现有方法（如 MC-MoE 和 DiEP）仅能保留约 85%-86% 的性能，MoDES 显著优于它们。
-   **加速比**：在 H200 GPU 上，Prefill 阶段加速约 2×，Decoding 阶段加速约 1.2×。

这一结果表明，即便是 300 亿参数规模的大型多模态模型，其推理过程中也存在大量可以被安全跳过的冗余计算，只要跳过策略足够“聪明”（即 Output-aware 和 Modality-aware）。
