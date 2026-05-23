---
type: entity
title: MetaWorld
created: 2026-05-16
updated: 2026-05-16
tags: [基准测试, 机器人, 具身智能]
related: [gipo, libero]
sources: ["icml-2026-告别「利用率崩溃」：gipo开启大模型强化学习高效训练新方法.md"]
---
# MetaWorld

**MetaWorld** 是一个机器人操控基准，包含 10 个不同的机器人操控任务，广泛用于评估强化学习算法的样本效率和稳定性。

## 在 GIPO 验证中的角色

研究团队在 MetaWorld 的陈旧数据环境（Stale Regime）下，对比了 8 种算法配置，覆盖 10 个任务，每个配置 5 个随机种子，总共运行 **400 个独立训练实例**。

关键结果：
- [[gipo]] 系列占据 IQM 排名前 6 名
- GIPO (1.0, 1.0) IQM 得分 0.730，达 [[PPO]]（0.180）的 4 倍
- 在新鲜场景下 GIPO 同样保持领先，IQM 得分达 PPO 的 2 倍以上