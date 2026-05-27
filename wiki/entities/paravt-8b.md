---
type: entity
title: ParaVT-8B
created: 2026-05-26
updated: 2026-05-26
tags: [模型, 视频理解, 开源, 8B]
related: [paravt, para-grpo, qwen3-vl-8b]
sources: ["paravt：走向并行-agentic-视频推理的多智能体强化学习训练框架.md"]
origin_date: 2026-05-26
---
# ParaVT-8B

ParaVT-8B 是基于 Qwen3-VL-8B 初始化权重、通过 [[para-grpo]] 强化学习训练得到的 8B 参数规模模型，是 [[paravt]] 框架的核心产物。

## 基准测试成绩

在 7 项长视频理解基准上的表现：

| 基准 | 成绩 |
|------|------|
| VideoMME w/sub | 69.4 |
| VideoMME w/o sub | 62.1 |
| LongVideoBench | 60.4 |
| LVBench | 39.8 |
| MMVU | 68.6 |
| Charades-STA mIoU | 50.1 |

- 在开源 7-8B 规模上取得 6/7 列 SOTA
- 平均比 Qwen3-VL-8B base 提升 +7.9%
- 大幅缩小与 GPT-4o / Gemini-1.5-Pro 等闭源模型的差距

## 训练配置

- 基座模型：Qwen3-VL-8B
- RL 训练样本量：4.4K
- 训练算法：[[para-grpo]]

## 开源资源

- 模型权重：https://huggingface.co/ParaVT/ParaVT-8B
- 训练数据：https://huggingface.co/datasets/ParaVT/ParaVT-Parquet