---
type: entity
title: Covenant-72B
created: 2026-03-30
updated: 2026-03-30
tags: [分布式训练, 区块链, 开源模型]
related: [sparseloco, bittensor, ai-takeoff]
sources: ["anthropic联创：两年内，ai将像孢子一样自我繁殖！.md"]
---

# Covenant-72B

由 [[Covenant AI]] 团队通过去中心化分布式训练方式发布的 720 亿参数 dense Transformer 模型。这被视为去中心化 AI 训练领域的一个里程碑事件。

## 技术特点
- **算力来源**：约 20 个独立节点，每个节点运行 8 张 B200 GPU（总计约 160 张卡）。
- **网络环境**：使用普通家庭宽带连接，而非数据中心级网络。
- **通信优化**：采用 [[SparseLoCo]] 优化器，通过稀疏化、2-bit 量化和误差反馈，将通信开销压缩了 146 倍。
- **协调机制**：由 Gauntlet 软件在 Bittensor 区块链 Subnet 3 上运行，贡献通过损失评估和排名上链记录。

## 性能表现
- **训练数据**：约 1.1 万亿 token（约为 LLaMA-2-70B 的一半）。
- **MMLU (Zero-shot)**：得分 67.1，优于 LLaMA-2-70B 的 65.7。
- **MATH (Chat版)**：得分 26.3，远超 LLaMA-2-70B-Chat 的 10.7。

## 行业意义
虽然其绝对水平仅相当于 2023 年中旬的主流模型，但它证明了**去中心化、无许可参与的分布式训练在非 trivial 规模上是可行的**。这被称为“Bittensor 的 DeepSeek 时刻”，意味着算力平民化可能挑战现有的中心化 AI 基础设施。