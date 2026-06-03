---
type: entity
title: Mind Lab（心洲实验室）
created: 2026-06-02
updated: 2026-06-02
tags: [ai实验室, 持续学习, lora, peft]
related: [delta-mem, mint-lora-infra, peft-scaling-law, macaron-a2ui, lora-as-memory, 持续学习, 机器之心]
sources: ["mind-lab连续发布lora最新进展，大模型「持续学习」新范式浮现.md"]
---
# Mind Lab（心洲实验室）

Mind Lab（心洲实验室）是一家前沿AI研究实验室，所属公司为Mindverse（心洲科技），定位为中国原生Neo Lab。

## 技术路线

Mind Lab专注于大模型[[持续学习]]技术栈的系统性研究，核心主张是PEFT（尤其是LoRA）不应被视为全参数微调的廉价平替，而是实现从"基础模型"向"可持续学习智能体"过渡的核心架构机制。

## 核心成果（2026年6月密集发布）

- **[[delta-mem|δ-mem]]**：基于LoRA的平行混合线性注意力在线记忆机制，仅增加0.12%参数即可实现显著的记忆性能提升。
- **[[mint-lora-infra|MinT]]**：百万级LoRA训练与在线服务托管基础设施系统。
- **[[peft-scaling-law|PEFT Scaling Law]]**：提出三大扩展轴（Scale up/down/out）及基于模型数量的对数增长定律。
- **[[macaron-a2ui|Macaron-A2UI]]**：基于MinT训练的生成式UI模型，验证持续学习理论的应用可行性。

## 技术链路

Mind Lab构建了一条完整的技术验证链路：记忆架构（δ-mem）→ 底层基础设施（MinT）→ 扩展定律（Scaling of PEFT）→ 应用验证（Macaron-A2UI），从理论到系统到应用形成闭环。

## 愿景

让极少数强大的万亿参数基础模型，支撑起数以百万计的、具备独立记忆和技能的可持续学习智能体。

## 所属公司

Mindverse（心洲科技），中国原生AI公司（Neo Lab）。