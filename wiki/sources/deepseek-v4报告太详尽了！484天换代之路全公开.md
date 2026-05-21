---
type: source
title: "DeepSeek V4报告太详尽了！484天换代之路全公开"
tags: [deepseek, llm, architecture, engineering, training]
related: [deepseek-v4, mhc, muon优化器, opd, csa, hca]
created: 2026-04-25
updated: 2026-04-25
authors: [量子位, henry]
year: 2026
url: "https://mp.weixin.qq.com/s/IED0AJ7p6LJoETNP7PlVAQ"
venue: "量子位"
sources: ["deepseek-v4报告太详尽了！484天换代之路全公开.md"]
---

# DeepSeek V4报告太详尽了！484天换代之路全公开

## 概述
本文详细解读了 DeepSeek V4 技术报告，揭示了其在百万 token 上下文、极致推理效率（KV cache 缩减至 10%）以及国产芯片适配方面的突破。文章深入分析了 V4 的三大核心架构升级：[[mHC]]（流形约束超连接）、混合注意力机制（[[CSA]] 与 [[HCA]]）以及 [[Muon优化器]] 的应用。

## 核心要点

### 1. 极致的成本效率
- **百万 Token 上下文**：V4-Pro 和 V4-Flash 均支持 1M 上下文。
- **资源优化**：在 1M 场景下，V4-Pro 的单 token FLOPs 仅为 V3.2 的 27%，KV cache 仅为 10%。
- **意义**：这使得长上下文应用（如 Agent 会话、跨仓库重构）在成本上变得可行，解决了 HBM 短缺带来的显存瓶颈。

### 2. 架构升级
- **[[mHC]] (Manifold-Constrained Hyper-Connections)**：通过将残差连接的混合矩阵约束到双随机矩阵流形上，解决了超深模型训练中的数值不稳定问题。
- **混合注意力机制**：
    - **[[CSA]] (Compressed Sparse Attention)**：先压缩 KV，再通过 top-k 机制进行稀疏选择，负责 token-level 的精细检索。
    - **[[HCA]] (Heavily Compressed Attention)**：每 128 个 token 压缩为一个，进行 dense attention，负责长距离的全局信号汇总。
- **[[Muon优化器]]**：替代了传统的 AdamW，接管绝大多数 2D 参数矩阵的优化，通过混合 Newton-Schulz 迭代稳定奇异值。

### 3. 训练与后训练
- **数据量翻倍**：预训练数据量从 V3 的 14.8T Token 增长至 32T/33T。
- **[[OPD]] (On-Policy Distillation)**：替代了传统的 Mixed RL 阶段。先训练领域专家（数学、代码等），再通过反向 KL 散度将这些专家的知识合并到一个统一的模型中。

### 4. 性能表现
- **开源领先**：在 SimpleQA-Verified 上领先所有开源模型 20 个百分点。
- **匹敌闭源**：Codeforces rating 3206，超过 GPT-5.4 和 Gemini-3.1-Pro。
- **差距仍在**：在 HLE（知识类和前沿推理）上仍落后最前沿闭源模型 3-6 个月。

### 5. 国产算力支持
- 已完成 [[华为昇腾950]] 适配，预计下半年昇腾 950 超节点批量上市。

## 关键洞察
- **工程妥协驱动创新**：[[OPD]] 方法的引入部分是因为显存限制（“装不下”十几个万亿级 teacher 的 logits）。
- **技术共享与演化**：DeepSeek 使用了竞争对手 [[Kimi]] 提出的 [[Muon优化器]]，但采用了不同的技术路径（DeepSeek 用 RMSNorm，Kimi 用 QK-Clip）。
- **未来方向**：探索新维度的 sparsity（如 [[Engram]]）、低延迟架构、长时程多轮 agentic 任务。