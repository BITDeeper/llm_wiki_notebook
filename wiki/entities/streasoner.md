---
type: entity
title: STReasoner
tags: [model, llm, time-series, spatial-reasoning, microsoft]
related: [时空时序推理, st-bench, s-grpo, network-sde-multi-agent, microsoft]
created: 2026-04-27
updated: 2026-04-27
sources: ["首个时空时序推理框架：让大模型真正读懂时空数据-acl'26.md"]
---

# STReasoner

STReasoner 是首个面向复杂时空时间序列推理的大语言模型（LLM）框架，由 Emory University、Microsoft 和 Griffith University 联合提出，收录于 ACL 2026。

## 核心能力
与专注于数值预测的传统时间序列模型不同，STReasoner 旨在解决需要结合时间动态、空间依赖和语义查询的复杂决策问题，例如：
- **因果溯源**：定位导致当前异常的源头节点。
- **影响追踪**：分析异常如何沿图结构传播。
- **关系理解**：解释不同节点间的因果关系和传播延迟。

## 技术架构
STReasoner 采用多模态解耦设计：
1. **Time Series Encoder**：专门用于编码时间序列数据，确保数值信息和整体形态的无损传输。
2. **Graph Prompting**：将空间图结构转换为自然语言描述，使 LLM 能够理解拓扑关系。
3. **LLM Backbone**：整合上述信息与用户查询，执行结构化推理。

## 训练策略
模型采用三阶段训练流程，逐步建立推理能力：
1. **Align (模态对齐)**：学习时序、图结构与文本的基础对应关系。
2. **SFT + CoT (监督微调)**：利用高质量思维链数据注入推理能力。
3. **S-GRPO (强化学习)**：通过 [[s-grpo]] 算法引入空间感知奖励机制，强制模型在推理中显式利用图结构，而非仅依赖时间模式。

## 性能与特点
- **低成本**：推理成本仅为闭源大模型的 0.004×。
- **强泛化**：在合成数据上训练，但在真实世界数据上实现零样本迁移成功。
- **结构化推理**：实验表明，模型确实学会了基于时空结构进行推理，而非简单的模式拟合。

## 关联概念
- [[st-bench]]：用于评估 STReasoner 性能的统一评测基准。
- [[时空时序推理]]：STReasoner 所针对的核心问题领域。
- [[network-sde-multi-agent]]：用于生成 STReasoner 训练数据的合成系统。