---
type: concept
title: Network SDE + Multi-Agent
tags: [synthetic-data, data-generation, multi-agent]
related: [streasoner, st-bench, 合成数据泛化]
created: 2026-04-27
updated: 2026-04-27
sources: ["首个时空时序推理框架：让大模型真正读懂时空数据-acl'26.md"]
---

# Network SDE + Multi-Agent

Network SDE + Multi-Agent 是一种用于生成高质量、严格对齐的时空时序数据的框架。它被用于 [[streasoner]] 的训练数据生成，旨在解决时空领域缺乏高质量标注数据的痛点。

## 工作原理
该系统通过多个智能体协同工作，模拟真实世界的动态系统：
1. **Scenario Generation Agent**：定义一个完整的场景（如交通系统），明确节点和连接关系。
2. **Scenario Parsing Agent**：将场景拆解为结构化信息（节点、边、时间模式）。
3. **SDE Parameters Agent**：利用随机微分方程（SDE）为每个节点设定时间动态（趋势、噪声、周期性）。
4. **Time-Varying Adjacency Agent**：设定节点间连接的影响强度、方向和传播延迟。
5. **Simulation Module**：基于上述参数生成最终的时空时间序列数据。

## 质量保证机制
为了确保生成的数据不仅数值合理，而且语义正确，系统引入了两个“法官”：
- **Scenario Judge**：检查生成的场景本身是否符合逻辑。
- **Parameter Judge**：检查生成的数据是否真的符合场景描述（即数据与语义的一致性）。

## 优势与意义
- **严格对齐**：解决了现有数据集中时序、图结构和文本描述往往不匹配的问题。
- **合成数据泛化**：实验证明，基于此框架生成的合成数据训练的模型（STReasoner）在真实世界数据上表现出色，证明了该机制能捕捉到可迁移的底层规律，而非过拟合合成分布。
- **可控性**：研究者可以精确控制数据的复杂度和特征，便于进行针对性的模型能力评估。