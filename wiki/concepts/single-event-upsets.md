---
type: concept
title: Single Event Upsets
tags: [physics, computing, space, radiation]
related: [orbital-data-center, space-based-ai]
created: 2026-02-03
updated: 2026-02-03
sources: ["spacex为何官宣收购xai？8万亿太空炼丹梦，别无脑跟进！.md"]
---

# Single Event Upsets

单粒子翻转（Single Event Upsets, SEU）是指由宇宙射线（高能质子、重离子）轰击芯片，导致半导体器件中存储的数据位发生非破坏性改变（如“0”变成“1”）的现象。

## 在太空 AI 中的影响
- **日常计算**：偶尔发生，重启即可恢复。
- **AI 训练**：灾难性。训练 GPT-5 级别模型需要连续数周无故障运行，一次 SEU 导致的梯度错误可能使整个训练任务回滚或作废。
- **频率差异**：太空中的 SEU 发生频率可能是地面的成百上千倍。

## 应对策略
- **硬件**：使用纠错码（ECC）内存。
- **软件**：设置频繁的检查点以减少回滚损失。
- **结论**：这是目前阻碍在太空中进行大规模 AI 预训练的主要物理障碍之一。