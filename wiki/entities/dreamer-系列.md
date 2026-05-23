---
type: entity
title: Dreamer 系列
created: 2026-05-17
updated: 2026-05-17
tags: [强化学习, 世界模型, 机器人, DeepMind]
related: [基于模型的强化学习, 世界模型, danijar-hafner]
sources: ["「世界模型」究竟是什么？一文看懂其前世今生与百亿赌局.md"]
origin_date: 2020
time_span:
  start: 2020-01-01
  end: null
---
# Dreamer 系列

Dreamer 系列是基于模型的强化学习领域最具影响力的工作，由 Danijar Hafner 历时六年开发。它代表了世界模型「线索A：学会做梦」传统的核心成果。

## 版本演进

- **Dreamer V1**（2020）：简单连续控制，在想象中训练策略
- **Dreamer V2**（2021）：达到人类水平 Atari 性能
- **Dreamer V3**（2025，发表于 Nature）：以单一超参数集涵盖150余个基准测试，包括在 Minecraft 中从零开始挖取钻石
- **Dreamer V4**（2025年底）：用 Transformer 替换循环骨干，速度提升25倍

## 关键衍生工作

- **DayDreamer**（2022）：将 Dreamer 落地到真实机器人，四足机器人仅用一小时从零学会行走
- **PlaNet**（2019）：RSSM 架构，将确定性记忆与随机不确定性结合

## 核心贡献与局限

核心理念已被今日每一个视频世界模型继承：学习动力学、想象未来、从想象中训练策略、动作条件化、样本效率。

局限在于跨环境泛化——每个新任务需要从零开始训练，模型体量小（百万参数级），做的梦是人类无法解读的抽象向量。