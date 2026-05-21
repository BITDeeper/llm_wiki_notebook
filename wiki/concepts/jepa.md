---
type: concept
title: JEPA
tags: ["ai-architecture", "non-generative", "world-models", "architecture", "self-supervised-learning", "world-model", "meta-research"]
related: ["yann-lecun", "world-models", "llm", "leworldmodel", "i-jepa", "vijepa", "ami", "自监督学习", "sigreg"]
created: 2025-12-05
updated: 2026-05-08
sources: ["65岁lecun被卷回巴黎老家！与小扎一刀两断，曝光神秘ai初创.md", "lecun的世界模型单gpu就能跑了.md", "lecun三顾茅庐，谢赛宁终于入伙！新公司获投10亿美元.md"]
---

# JEPA

**JEPA** (Joint Embedding Predictive Architecture，联合嵌入预测架构) 是由 [[Yann LeCun]] 提出的一种用于 [[自监督学习]] 的神经网络架构范式。它是构建 [[世界模型]] 的核心方案，也是 [[leworldmodel]] 的基础架构，并构成了 [[AMI]] 公司技术路线的核心。

## 核心思想

与主流的生成式模型（如 GPT、GANs 或 Diffusion Models）不同，JEPA 不专注于生成像素或文本，而是学习抽象表征并预测潜在状态。

- **在表示空间预测**：模型不直接预测原始像素或下一个 token，而是在抽象的特征空间（表示空间）中进行预测。
- **忽略不可预测细节**：现实世界中存在许多随机噪声（如树叶的微小晃动），JEPA 允许模型忽略这些不可预测的细节，专注于高层语义和因果关系的理解。
- **工作流程**：
    1.  **输入**：观测数据（如图像）。
    2.  **编码**：通过编码器将输入映射为潜在特征。
    3.  **预测**：预测器根据当前特征和输入（如动作），预测未来的潜在特征，而非未来的像素。

这种方法避免了生成式模型在处理高维感官数据（如视频）时面临的计算困难和细节冗余问题。

## 优势

1.  **计算效率**：潜在特征的维度远低于像素维度，使得预测计算非常高效。
2.  **语义一致性**：JEPA 关注高层语义特征的变化，而非像素级的细节，这使得模型更能捕捉物理规律。
3.  **避免坍塌**：通过特定的架构设计（如 [[sigreg]] 或 Stop Gradient），防止模型输出恒定值。

LeCun 认为，JEPA 是解决 AI 理解物理世界、实现推理和规划能力的关键技术路径，也是对抗当前 LLM “Scaling Law” 范式的一种替代方案。

## 与主流 LLM 的区别

- **预测范式**：LLM 基于 "下一个 token 预测"（Autoregressive），而 JEPA 基于嵌入空间的预测。
- **训练目标**：JEPA 更强调学习世界的抽象模型和因果关系，而非仅仅拟合数据分布。

## 变体与应用

- **I-JEPA**：用于图像理解的 JEPA。
- **V-JEPA**：用于视频理解的 JEPA。
- **LeWorldModel**：用于具身智能规划和控制的极简 JEPA 实现。
- **AMI**：[[Yann LeCun]] 创立的 [[AMI]] 公司致力于将 JEPA 架构商业化，开发行动条件世界模型，用于机器人和复杂系统的规划与控制。

## 评价

尽管 JEPA 在理论上被认为更接近人类认知，但其成熟度目前仍落后于基于 Transformer 的 LLM。[[AMI]] CEO 承认，基于 JEPA 的替代方案需要时间才能真正成熟。