---
type: source
title: "跳过88%专家，保住97%性能！MoE推理的正确玩法| CVPR'26"
tags: [moe, 推理优化, 多模态, cvpr, 论文解读]
related: [modes, qwen3-vl-moe-30b, kimi-vl-a3b-instruct, moe-推理优化, output-aware-skipping, modality-aware-skipping]
created: 2026-03-05
updated: 2026-03-05
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/dfnN-oL49SDd5v61UfX-jQ"
venue: "新智元"
sources: ["跳过88%专家，保住97%性能！moe推理的正确玩法-cvpr’26.md"]
---

# 跳过88%专家，保住97%性能！MoE推理的正确玩法

本文报道了香港科技大学、北航等单位被 CVPR 2026 接收的研究工作 [[modes]]（Multimodal Dynamic Expert Skipping）。该研究提出了一种无需训练的动态专家跳过框架，旨在解决多模态混合专家模型推理成本高昂的问题。

## 核心发现

研究指出，现有的专家跳过方法在多模态模型上失效，主要源于两个原因：
1.  **层级重要性差异**：浅层专家的减少会导致更显著的性能下降，误差会在后续层放大。
2.  **模态行为差异**：文本 Token 在 FFN 中的更新幅度更大，而视觉 Token 与专家权重更接近正交，存在更高冗余。

基于此，[[modes]] 引入了**输出感知**和**模态感知**机制，在 [[qwen3-vl-moe-30b]] 上实现了跳过 88% 专家仍保留 97.33% 性能的效果，推理速度提升约 2 倍。

## 关键技术

-   **Output-aware Skipping**：引入层级全局重要性因子，量化专家对最终输出分布的影响。
-   **Modality-aware Skipping**：为文本和视觉 Token 设定不同的跳过阈值。
-   **Frontier Search**：高效搜索算法，大幅降低寻找最优阈值组合的复杂度。

## 实验结果

-   在 [[qwen3-vl-moe-30b]] 上，跳过 88% 专家保留 97.33% 性能。
-   在 [[kimi-vl-a3b-instruct]] 上，跳过 83% 专家保留 96.25% 性能。
-   在 H200 GPU 上，Prefill 阶段加速约 2×，Decoding 阶段加速约 1.2×。
-   与混合精度量化兼容性良好。

## 参考链接
-   论文地址：https://arxiv.org/pdf/2511.15690
-   代码地址：https://github.com/ModelTC/MoDES