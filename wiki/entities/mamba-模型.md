---
type: entity
title: Mamba 模型
tags: [model, architecture, ssm, efficiency]
related: [后-transformer-架构, 状态空间模型, albert-gu, tri-dao]
created: 2026-03-16
updated: 2026-03-16
sources: ["奥特曼宣判transformer死刑！-agi两年内降临，下一代架构已在路上.md"]
---

# Mamba 模型

Mamba 是一种基于状态空间模型（SSM）的新型序列建模架构，被视为 [[transformer]] 架构的最强挑战者之一。它由 Albert Gu 和 Tri Dao 于 2023 年底提出。

## 核心特性

### 线性复杂度
与 Transformer 的自注意力机制不同，Mamba 不需要让序列中的每个词与其他所有词进行“对视”。它通过维护一个固定大小的记忆状态来处理信息，将计算复杂度从 $O(N^2)$ 降低至 $O(N)$。这意味着文本长度翻倍，计算量仅翻倍，而非翻四倍。

### 高效推理
得益于线性复杂度，Mamba 在推理时的吞吐量显著高于 Transformer，能够快 5 倍以上，且在处理长文本时不会面临显存爆炸的问题。

## 产业应用
Mamba 架构已引起产业界的广泛关注：
- **英伟达**: 在 Nemotron-H 系列模型中，将 92% 的注意力层替换为 Mamba 层，发现推理速度提升 3 倍且精度不降反升。
- **其他厂商**: AI21 Labs 的 Jamba、IBM 的 Bamba 以及微软的部分模型也纷纷采用了 Mamba-Transformer 混合架构。

## 演进
截至 2026 年初，Mamba 已进化至第三代，其相关论文已被 ICLR 2026 接收，标志着学术界对其有效性的认可。

## 相关条目
- [[后-transformer-架构]]
- [[状态空间模型]]
- [[albert-gu]]
- [[tri-dao]]