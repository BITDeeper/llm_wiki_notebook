---
type: entity
title: δ-mem
created: 2026-06-02
updated: 2026-06-02
tags: [记忆架构, lora, 持续学习, 在线记忆]
related: [mind-lab, mint-lora-infra, lora-as-memory, 持续学习, 增量规则学习]
sources: ["mind-lab连续发布lora最新进展，大模型「持续学习」新范式浮现.md"]
origin_date: 2026-06-01
---
# δ-mem

δ-mem是[[mind-lab|Mind Lab]]提出的基于LoRA的平行混合线性注意力架构，旨在为智能体提供可更新的持续记忆能力。

## 核心设计

传统Transformer的KV cache只是推理过程中的冻结缓存，记录当前上下文的中间状态，本身不会随着交互持续学习。δ-mem将冻结的全注意力主干网络与一个紧凑的在线关联记忆状态（Online State of Associative Memory）结合。

## 工作机制

- 随Token输入，利用[[增量规则学习|增量规则（delta-rule learning）]]持续更新一个固定大小的矩阵
- 生成时从该状态中读取信号，对主干网络的Attention Query和Output施加低秩校正（low-rank corrections）

## 性能数据

- 参数增加仅0.12%（8×8在线记忆状态）
- Memory Agent Bench性能提升1.31倍
- LoCoMo基准性能提升1.20倍
- 即使移除显式历史上下文，仍能恢复相关信息

## 与RAG的对比

与传统依赖扩展上下文窗口或外部文本检索的工程方式不同，δ-mem深入到参数层进行优化，将记忆内化到模型权重中，而非通过工程手段扩展上下文。

## 社区反响

Reddit网友已将δ-mem集成到本地模型中并获得记忆表现提升；X平台用户Dan评价其为"continual learning的未来"。