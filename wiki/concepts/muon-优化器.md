---
type: concept
title: "Muon 优化器"
tags: [算法, 优化器, 训练技术]
related: [deepseek-v4, kimi-k2-6, moonshot-ai]
created: 2026-04-24
updated: 2026-04-24
sources: ["没想到！deepseek-v4里，竟还藏着一个中国万亿开源模型.md"]
---

# Muon 优化器

## 概述
[[Muon 优化器]] 是一种用于深度学习模型训练的新型优化算法。与主流的 AdamW 优化器对每个参数独立进行自适应缩放不同，Muon 对整个梯度矩阵进行 Newton-Schulz 正交化处理，旨在让更新方向在矩阵空间中更加均匀。

## 技术原理
- **核心机制**：利用 Newton-Schulz 迭代法对梯度矩阵进行正交化变换。
- **优势**：相比 AdamW，Muon 在相同算力下的计算效率约为其两倍，且能提供更好的训练稳定性。

## 发展与应用
- **起源**：最初由 Keller Jordan 等人提出，但仅在小模型上进行了验证。
- **大规模验证**：2025 年初，[[Moonshot AI]] 团队在 Moonlight 论文中首次将 [[Muon 优化器]] 扩展到大规模训练场景。
- **进一步改进**：[[Moonshot AI]] 在 [[Kimi K2.6]] 的训练中开发了 MuonClip，引入 QK-clip 来控制注意力 logits 的数值范围，实现了 15.5 万亿 token 预训练全程零 loss spike。
- **行业采用**：[[DeepSeek V4]] 在其技术报告中明确引用了 Kimi 团队的 Muon 论文，并对大部分参数使用了 Muon 优化器，以获得更快的收敛速度和稳定性。

## 参见
- [[DeepSeek V4]]：采用 Muon 优化器的代表性模型。
- [[技术互鉴]]：Kimi 与 DeepSeek 互相采用对方技术的典型案例。