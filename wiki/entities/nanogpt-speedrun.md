---
type: entity
title: NanoGPT Speedrun
created: 2026-06-12
updated: 2026-06-12
tags: [基准测试, 训练速度优化, nanogpt]
related: [first-steps-toward-automated-ai-research, recursive-superintelligence, andrej-karpathy]
origin_date: 2024-06-01
sources: ["rss/anthropic警告的递归ai，田渊栋新公司刚刚走出了「第一步」.md"]
---
# NanoGPT Speedrun

## 简介

NanoGPT Speedrun 是由 [[andrej-karpathy|Andrej Karpathy]] 发起的基准测试，规则为：在 8 块 H100 GPU 上，将一个 GPT 模型训练到验证损失 3.28 所需的最短时间。

## 社区优化历史

自 2024 年中以来，社区通过 83 次有记录的贡献，将训练时间从约 45 分钟压缩到 79.7 秒。每个新方案都需要在极度优化的代码基础上再挤出时间。

## Recursive 系统成果

[[recursive-superintelligence|Recursive]] 的系统从现有最优解出发，将训练时间从 79.7 秒压缩到 77.5 秒，节省 2.2 秒，与近期人类贡献者的改进幅度相当甚至更好。

### 三项跨领域关键发现

1. **FP8 注意力计算**：将 FP8 精度从模型最后一层延伸至注意力层矩阵运算，前向用 FP8 获得双倍 Tensor Core 吞吐，反向保留 BF16 维持稳定性。
2. **优化器退火探索噪声**：在 NorMuon 优化器更新中注入零均值高斯噪声，噪声幅度随训练进度线性退火至零，实现"先探索后收敛"。
3. **精简融合 MLP 内核**：重写 Triton GPU 内核，前向只存储 ReLU 平方后激活值，反向在内核内部重算中间结果，省去一次完整激活张量的高带宽显存读写往返。

三项改进分属精度策略、优化器设计、GPU 内核编程三个不同专业领域。