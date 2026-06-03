---
type: concept
title: PEFT Scaling Law（PEFT扩展定律）
created: 2026-06-02
updated: 2026-06-02
tags: [scaling-law, peft, lora, 扩展定律]
related: [mind-lab, mint-lora-infra, lora-as-memory, scaling-law, olora-tail]
sources: ["mind-lab连续发布lora最新进展，大模型「持续学习」新范式浮现.md"]
origin_date: 2026-06-01
---
# PEFT Scaling Law（PEFT扩展定律）

PEFT Scaling Law是[[mind-lab|Mind Lab]]在论文"On the Scaling of PEFT"中提出的三大扩展轴，为"少数万亿底座+百万LoRA"架构提供了理论可行性论证。

## 三大扩展轴

### Scale up（向上扩展）
强大的基础模型能让微小的更新产生巨大的杠杆效应。更大参数的模型拥有更强能力，其上训练的LoRA也会有更强表现。

在1T规模稀疏MoE上进行LoRA强化学习面临训推不一致的挑战：MoE在训练和推理过程中专家的激活路径不同。Mind Lab发现现有[[路由重放修正|路由重放（Router Replay）]]机制在前沿MoE模型上失效的原因并提出修正，消除训练和推理的差异。

### Scale down（向下扩展）
业界通常将LoRA rank设在16-32以求稳定训练和推理。但要同时服务上百万模型，rank需继续压缩到16以下且性能不能下降。

Mind Lab提出[[olora-tail|OLoRA-tail]]初始化方法，利用预训练权重的次要奇异向量进行初始化，移除可能导致强化学习不稳定的奇异值缩放因子，在不增加参数量的前提下大幅提升Rank-1适配器的稳定性与性能。

### Scale out（向外扩展）
[[mint-lora-infra|MinT]]让上百个LoRA adapter同时在线，"模型数量"成为可控的scaling变量。多数投票下准确率随模型数量k呈现出经验上的对数增长定律。这是在三个扩展轴上涌现出来的、基于模型数量的scaling law。

## 与传统Scaling Law的关系

传统[[scaling-law|Scaling Law]]关注算力、数据量和参数规模三个维度。PEFT Scaling Law扩展了模型数量这一新维度，发现基于模型数量的对数增长定律，是对Scaling Law知识的重要补充。