---
type: concept
title: "LoRA as Memory（LoRA即记忆）"
created: 2026-06-02
updated: 2026-06-02
tags: [lora, 记忆, peft, 持续学习]
related: [delta-mem, 持续学习, peft-scaling-law, mind-lab, 模型-技能分离架构]
sources: ["mind-lab连续发布lora最新进展，大模型「持续学习」新范式浮现.md"]
---
# LoRA as Memory（LoRA即记忆）

LoRA as Memory是[[mind-lab|Mind Lab]]提出的核心概念，将LoRA适配器重新定位为智能体的持久记忆介质，颠覆了LoRA仅作为微调工具的传统认知。

## 核心观点

- LoRA容量约100 tokens/param，是一种有限介质
- 应留给skill、persona等持久行为状态，而非可编辑事实
- 用于适应底座模型分布外的任务
- 持续学习由Context Learning完成，让不同的adapter沿不同路径分化

## 与传统LoRA定位的区别

传统上，LoRA被视为全参数微调的廉价替代方案，用于在有限算力下对模型进行领域适配。LoRA as Memory将其提升为记忆架构的核心组件，每个LoRA适配器承载一个智能体的独特记忆和个性。

## 与RAG的对比

LoRA as Memory走的是"参数层优化"路线，将记忆内化到模型权重中；RAG走的是"工程扩展上下文"路线，通过外部检索增强。两者是否互补而非互斥尚无定论。

## 行业验证

美团、阿里的同期研究也指向同一方向：LoRA RL内化的技能能够为困难任务奠定认知基础，表现显著优于skill或context方案，且LoRA能以极少参数高效装下结构化事实，形成差异化的稳定模型。