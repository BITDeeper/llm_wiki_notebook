---
type: entity
title: MoDES
tags: [算法, 推理优化, 多模态, moe]
related: [moe-推理优化, output-aware-skipping, modality-aware-skipping, qwen3-vl-moe-30b, kimi-vl-a3b-instruct]
created: 2026-03-05
updated: 2026-03-05
sources: ["跳过88%专家，保住97%性能！moe推理的正确玩法-cvpr’26.md"]
---

# MoDES

**MoDES** (Multimodal Dynamic Expert Skipping) 是一种由香港科技大学、北航等团队提出的无需训练的动态专家跳过框架，专门用于优化多模态混合专家模型的推理效率。该工作已被 CVPR 2026 接收。

## 核心特性

MoDES 的核心在于打破了“高比例专家跳过必然导致性能崩溃”的传统认知，通过精细化的分析实现了在极高跳过比例下的性能保持。

### 1. Output-aware Skipping (输出感知跳过)
传统方法通常仅依据当前层的路由概率判断专家重要性。MoDES 引入了**层级全局重要性因子**（Layer-wise Global Importance Factor），通过离线校准量化每一层专家对最终输出分布的全局贡献。

研究发现，**浅层专家**对模型性能影响远大于深层专家。浅层的误差会在后续层中被放大。因此，MoDES 会对浅层专家采取更保守的保留策略，而对深层专家进行更激进的跳过。

### 2. Modality-aware Skipping (模态感知跳过)
MoDES 区分了文本 Token 和视觉 Token 的行为差异：
-   **文本 Token**：在 FFN 中的更新幅度大，更依赖专家进行逻辑推理。
-   **视觉 Token**：与专家权重更接近正交，专家对其影响较小，冗余度更高。

基于此，MoDES 为不同模态设定了不同的专家跳过阈值，避免因统一阈值误删对文本理解至关重要的专家。

### 3. Frontier Search (边界搜索)
为了高效寻找文本和视觉 Token 的最优阈值组合，MoDES 设计了 Frontier Search 算法。该算法利用性能与跳过比例之间的单调性，将搜索复杂度从 $O(N^2)$ 降低至 $O(N)$，将搜索时间缩短了约 45 倍。

## 性能表现

-   **Qwen3-VL-MoE-30B**：跳过 88% 专家，保留 97.33% 原始性能。
-   **Kimi-VL-A3B-Instruct**：跳过 83% 专家，保留 96.25% 原始性能。
-   **推理加速**：在 H200 GPU 上，Prefill 阶段加速约 2×，Decoding 阶段加速约 1.2×。

## 优势

-   **Training-free**：无需对模型进行微调或重新训练，降低了部署门槛。
-   **即插即用**：通过离线校准即可应用于现有的黑盒模型。
-   **量化兼容**：与混合精度量化（如 W4A4/W3A3）兼容良好，可进一步降低计算成本。
