---
type: source
title: "Mind Lab连续发布LoRA最新进展，大模型「持续学习」新范式浮现"
created: 2026-06-02
updated: 2026-06-02
tags: [lora, peft, 持续学习, 记忆架构, 基础设施, scaling-law, 生成式ui]
related: [mind-lab, delta-mem, mint-lora-infra, peft-scaling-law, macaron-a2ui, lora-as-memory, 持续学习]
sources: ["mind-lab连续发布lora最新进展，大模型「持续学习」新范式浮现.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/D6yFk_aeuGQuAMaW1JRDdQ"
venue: 机器之心
---
# Mind Lab连续发布LoRA最新进展，大模型「持续学习」新范式浮现

本文由[[机器之心]]发布，系统报道了[[mind-lab|Mind Lab]]在2026年6月密集发布的一系列关于LoRA与PEFT的研究成果，描绘了大模型[[持续学习]]的新路径。

## 核心内容

文章涵盖四项核心技术成果：

1. **[[delta-mem|δ-mem]]**：基于LoRA的平行混合线性注意力架构，仅增加0.12%参数即可在Memory Agent Bench和LoCoMo基准上获得1.31倍和1.20倍性能提升。
2. **[[mint-lora-infra|MinT]]**：专为LoRA训练和在线服务打造的托管基础设施系统，支撑百万级LoRA适配器的训练、部署与在线服务。
3. **[[peft-scaling-law|PEFT Scaling Law]]**：提出Scale up、Scale down、Scale out三大扩展轴，发现基于模型数量的对数增长定律。
4. **[[macaron-a2ui|Macaron-A2UI]]**：基于MinT训练的生成式UI模型，在A2UI-Bench上获75.6分，超越输入27倍长度Schema提示的最强前沿模型基线。

## 核心主张

PEFT（尤其是LoRA）不应被视为全参数微调的廉价替代品，而是实现大模型持续学习、从通用基础模型向个性化智能体过渡的核心架构机制。

## 愿景

少数几个万亿参数基础模型，支撑数百万个参数量极小但具有独立个性、记忆和UI交互能力的可持续学习智能体。