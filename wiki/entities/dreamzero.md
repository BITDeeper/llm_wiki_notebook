---
type: entity
title: DreamZero
created: 2026-05-17
updated: 2026-05-17
tags: [世界模型, NVIDIA, 机器人, 零样本泛化]
related: [nvidia, 世界模型, 视频世界模型, dreamdojo]
sources: ["「世界模型」究竟是什么？一文看懂其前世今生与百亿赌局.md"]
origin_date: 2026-02-01
---
# DreamZero

DreamZero 是 NVIDIA 于2026年2月发布的集大成系统，在单次前向传播中联合预测未来视频和机器人电机动作。

## 关键特性

- 联合预测视频与动作，而非分别预测
- 在未见任务上实现零样本泛化
- 报告比 VLA 基准有2倍泛化提升
- 以7Hz运行，但只能在 Blackwell GB200 上实现实时

## 局限

这是一篇来自构建该系统团队本身的论文，尚无独立复现。作为直接机器人控制的主张，它是最大胆但也最缺乏验证的。