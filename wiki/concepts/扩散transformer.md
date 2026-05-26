---
type: concept
title: 扩散Transformer
tags: [概念, 架构, 深度学习, 扩散模型, transformer, 生成模型]
related: [lpm-1-0, 扩散模型, verl-omni, 多模态生成rl后训练, 异构rollout流水线]
created: 2026-04-11
updated: 2026-05-25
sources: ["米哈游蔡浩宇ai公司首个视频模型曝光了.md", "verl-omni：面向扩散和全模态生成模型的通用rl后训练框架.md"]
---

# 扩散Transformer（DiT）

扩散 Transformer（Diffusion Transformer，简称 DiT）是结合了扩散模型和 Transformer 架构优势的深度学习模型架构，是基于 Transformer 架构的扩散模型主干，也是当前图像/视频生成领域的主流架构选择。

## 特点

- **时空建模**：利用强大的自注意力机制，能够有效处理视频数据中复杂的空间（画面内容）与时间（帧间连续）关联。
- **高表现力**：擅长捕捉人物表情、口型、动作以及前后帧之间的细微变化，适合用于高保真的视频生成。

## 在 VeRL-Omni 中的角色

DiT 是 [[verl-omni]] 支持的核心模型架构类型之一。在 [[异构rollout流水线]] 中，DiT 负责在连续 latent 空间中进行多步去噪，是生成过程的核心计算组件。

## 相关架构变体

- **纯 DiT 架构**：如 Qwen-Image，专注于图像生成
- **混合 AR-DiT 架构**：如 Qwen-Omni，结合自回归与扩散 Transformer 的混合生成架构，代表全模态模型的发展方向

## 实例

[[anuttacon]] 发布的 [[lpm-1-0]] 模型采用了拥有 170 亿参数的扩散 Transformer 架构，以支撑其高表现力的角色表演生成能力。