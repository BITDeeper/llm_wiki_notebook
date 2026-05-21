---
type: concept
title: BPB (Bits Per Byte)
tags: [metrics, evaluation, information-theory]
related: [预训练十大发现, perplexity]
created: 2026-03-15
updated: 2026-03-15
sources: ["卡帕西630行代码炸出81个智能体，4天协作跑2333次实验，公布预训练十大发现.md"]
---

# BPB (Bits Per Byte)

**BPB (Bits Per Byte)** 是衡量语言模型预测性能的指标，数值越低表示模型对数据的预测越准确。它是 [[预训练十大发现]] 中所有实验优化的目标函数。

## 特性
- **尺度敏感**：在 [[autoresearch-at-home]] 的实验中，0.001 BPB 的改善被视为有效改进。
- **噪声基准**：实验测得种子方差约为 0.002 BPB，这意味着小于该量级的“改进”很可能是随机噪声。