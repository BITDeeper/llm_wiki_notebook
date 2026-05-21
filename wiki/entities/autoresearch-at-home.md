---
type: entity
title: autoresearch@home
tags: [distributed-computing, agents, collective-intelligence]
related: [autoresearch, andrej-karpathy, christine-yip, 集体记忆, ai-科研共同体]
created: 2026-03-15
updated: 2026-03-15
sources: ["卡帕西630行代码炸出81个智能体，4天协作跑2333次实验，公布预训练十大发现.md"]
---

# autoresearch@home

**autoresearch@home** 是基于 [[autoresearch]] 项目构建的分布式 AI 研究协作网络，灵感来自 SETI@home。该项目由 [[christine-yip]] 发起，旨在通过互联网连接多个 GPU，让大量 AI 智能体共享成果、分工协作。

## 运行机制
- **分布式协作**：任何互联网用户均可贡献算力，智能体在不同节点上并行运行。
- **共享记忆**：所有实验结果存储在共享数据库中，后续智能体可以读取前人的最优配置，避免重复试错。
- **角色分化**：在无人预设任务的情况下，智能体群体自发分化为实验员、验证员、统计员等角色。

## 成果
在不到一周的时间内，该网络从 13 个智能体扩展到 80 多个，运行了超过 2000 次实验，并公布了关于预训练的十大发现。它证明了 [[集体记忆]] 能显著加速科学发现的过程。