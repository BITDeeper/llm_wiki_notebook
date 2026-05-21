---
type: entity
title: Kimi-VL-A3B-Instruct
tags: [模型, 多模态, moe, kimi]
related: [modes, qwen3-vl-moe-30b, moe-推理优化]
created: 2026-03-05
updated: 2026-03-05
sources: ["跳过88%专家，保住97%性能！moe推理的正确玩法-cvpr’26.md"]
---

# Kimi-VL-A3B-Instruct

**Kimi-VL-A3B-Instruct** 是 Kimi 系列中的一个较小规模的多模态混合专家模型。在 [[modes]] 研究中，它被用来验证该框架在不同参数规模下的鲁棒性。

## MoDES 优化效果

在 Kimi-VL-A3B-Instruct 上的实验表明，MoDES 对于较小参数量的模型同样有效。

-   **跳过比例**：83%
-   **性能保留**：96.25%
-   **对比优势**：在跳过 83% 专家时，多数现有 expert skipping 方法的平均性能下降超过 11%，而 MoDES 保持了极高的性能稳定性。

这一结果说明，专家冗余并非仅存在于超大规模模型中，较小模型同样可以通过精细化的专家管理来提升推理效率。
