---
type: concept
title: 联合AR+Diffusion训练
created: 2026-05-22
updated: 2026-05-22
tags: [训练策略, 扩散模型, 自回归, 英伟达]
related: [三模式解码, nemotron-labs-diffusion, 扩散语言模型, 全局损失平均]
sources: ["首个三模式大语言模型：4倍token吞吐量，长文本秒级时代要来了？.md"]
---
# 联合AR+Diffusion训练

英伟达在 [[nemotron-labs-diffusion|Nemotron Labs Diffusion]] 中采用的训练策略，同时优化AR Loss和Diffusion Loss。这一策略被研究者称为"完全改变了[[扩散语言模型]]质量的游戏规则"。

## 训练流程

NLD的训练基于Ministral3基座，采用两阶段策略：

1. **第一阶段**：1T token的AR-only持续预训练，建立强大的语言理解基础
2. **第二阶段**：300B token的联合AR + Diffusion训练，使模型同时掌握两种生成范式
3. **后续**：SFT和VLM对齐

## 关键技术

- [[全局损失平均]]：解决扩散模型训练中因随机掩码导致的梯度激增问题
- DP-rank变化掩码：增强训练稳定性
- 严格因果干净流：防止标签泄漏

## 核心意义

联合训练使得单一模型同时具备AR的准确性和扩散的并行性，是实现[[三模式解码]]的基础。没有联合训练，模型无法在推理时自由切换解码模式。训练成本高于纯AR模型（需额外300B token的联合训练），但推理加速带来的效率提升可能覆盖额外训练成本。