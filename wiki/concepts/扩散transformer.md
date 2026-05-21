---
type: concept
title: 扩散Transformer
tags: [概念, 架构, 深度学习]
related: [lpm-1-0, 扩散模型]
created: 2026-04-11
updated: 2026-04-11
sources: ["米哈游蔡浩宇ai公司首个视频模型曝光了.md"]
---

# 扩散Transformer

扩散Transformer 是结合了扩散模型和 Transformer 架构优势的深度学习模型架构。

## 特点
- **时空建模**：利用强大的自注意力机制，能够有效处理视频数据中复杂的空间（画面内容）与时间（帧间连续）关联。
- **高表现力**：擅长捕捉人物表情、口型、动作以及前后帧之间的细微变化，适合用于高保真的视频生成。

## 实例
[[anuttacon]] 发布的 [[lpm-1-0]] 模型采用了拥有 170 亿参数的扩散 Transformer 架构，以支撑其高表现力的角色表演生成能力。