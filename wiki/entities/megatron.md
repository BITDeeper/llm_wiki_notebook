---
type: entity
title: 英伟达 Megatron
created: 2026-05-26
updated: 2026-05-26
tags: [训练框架, 英伟达, 大模型基础设施]
related: [forgetrain, 大模型训练]
sources: ["不用人类手写训练框架了！ai自己写代码，训出1b端侧「小钢炮」.md"]
---
# 英伟达 Megatron

英伟达 Megatron 是业界主流的大模型分布式训练框架，支持大规模 Transformer 模型的并行训练，涵盖张量并行、流水线并行和数据并行等策略。

在 [[面壁]] 发布 [[forgetrain|ForgeTrain]] 时，Megatron 被作为核心对标基准。ForgeTrain 在 H100 GPU 上实现了与 Megatron 对齐的训练效果，同时速度领先 10%。