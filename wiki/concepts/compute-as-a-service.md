---
type: concept
title: 算力租赁商业模式
tags: [business-model, cloud-computing, ai-infrastructure]
related: [xai, colossus, cursor, vertical-integration]
created: 2026-05-07
updated: 2026-05-07
sources: ["马斯克变身「算力包租公」！砸数万gpu疯狂喂养cursor，联手反杀openai.md"]
---

# 算力租赁商业模式

算力租赁（Compute-as-a-Service）是指 AI 公司利用自建的闲置算力资源，向第三方客户提供云服务租赁的商业模式。这一模式类似于亚马逊 AWS、微软 Azure 和谷歌云，但在 AI 时代由专门的 AI 实验室主导。

## 运作逻辑
- **资源利用**：AI 公司（如 [[xai]]）为了追求 [[scaling-law]]，往往建设了超出自身模型训练需求的超级算力集群（如 [[colossus]]）。通过出租闲置算力，可以提高资产利用率。
- **数据获取**：除了租金收入，该模式更深层的逻辑在于“数据换算力”。客户（如 [[cursor]]）在使用租赁算力训练模型时产生的数据，可能会被算力提供商获取或学习，从而形成数据闭环。

## 案例分析
**xAI 与 Cursor**：
xAI 向 Cursor 提供数万张 GPU 用于训练 Composer 2.5 模型。这使得 xAI 从单纯的模型竞争对手转变为基础设施提供商，直接切入云服务市场，同时获取了宝贵的编程数据。

## 行业影响
这种模式模糊了 AI 实验室与云厂商的界限，加剧了 AI 行业的竞争维度，从单纯的模型能力竞争扩展到了算力基础设施和数据生态的竞争。