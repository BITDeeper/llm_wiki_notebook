---
type: entity
title: Macaron-A2UI
created: 2026-06-02
updated: 2026-06-02
tags: [生成式ui, a2ui, 持续学习, lora]
related: [mind-lab, mint-lora-infra, 生成式ui, 持续学习]
sources: ["mind-lab连续发布lora最新进展，大模型「持续学习」新范式浮现.md"]
origin_date: 2026-06-01
---
# Macaron-A2UI

Macaron-A2UI是[[mind-lab|Mind Lab]]基于[[mint-lora-infra|MinT]]平台训练的生成式UI模型，旨在验证持续学习理论的应用可行性。

## 核心理念

纯文本对话在处理复杂用户任务时存在认知负荷高、流程繁琐的瓶颈。Macaron-A2UI不仅能输出文本，还能在实时交互中生成结构化的A2UI可执行动作（如多选框、滑块、确认卡片等），根据用户专属习惯持续学习。

## 训练过程

1. 在30B、235B和754B的大语言模型底座上，基于MinT平台
2. 先使用基于LoRA的SFT（监督微调）建立文本到UI的对齐
3. 随后使用GRPO强化学习提升可执行交互的质量

## 性能表现

- 最佳模型Macaron-A2UI-Venti在A2UI-Bench上获75.6综合高分
- 超越输入了完整冗长Schema（长度约为27倍）提示的最强前沿模型基线
- 在极其轻量级的Schema提示下完成，证明复杂的UI生成能力可通过高效微调内化到模型权重中

## 意义

作为Mind Lab持续学习理论栈的应用层验证，Macaron-A2UI证明了"底座+轻量LoRA适配器"架构在实际产品场景中的可行性。