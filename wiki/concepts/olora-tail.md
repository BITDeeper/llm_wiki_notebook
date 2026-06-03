---
type: concept
title: OLoRA-tail
created: 2026-06-02
updated: 2026-06-02
tags: [lora, 初始化方法, rank压缩, peft]
related: [peft-scaling-law, mind-lab, mint-lora-infra]
sources: ["mind-lab连续发布lora最新进展，大模型「持续学习」新范式浮现.md"]
---
# OLoRA-tail

OLoRA-tail是[[mind-lab|Mind Lab]]提出的一种原生于RL的LoRA初始化方法，用于实现极致rank压缩。

## 核心方法

利用预训练权重的次要奇异向量（minor singular vectors）进行初始化，并移除可能导致强化学习不稳定的奇异值缩放因子。

## 效果

在不增加参数量的前提下，大幅提升Rank-1适配器的稳定性与性能。这使得LoRA rank可以从业界常用的16-32压缩到极致的1，同时保持训练和推理的稳定性。

## 与业界认知的张力

业界通常将rank设在16-32以求更稳定的训练和推理。OLoRA-tail声称在rank-1极致压缩下保持稳定性，这与业界普遍认知形成张力，需关注社区复现结果。

## 在PEFT Scaling Law中的位置

OLoRA-tail是[[peft-scaling-law|PEFT Scaling Law]]中"Scale down"扩展轴的关键技术组件，使同时服务上百万模型成为可能。