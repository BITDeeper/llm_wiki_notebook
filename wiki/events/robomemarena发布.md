---
type: event
title: RoboMemArena评测基准发布
created: 2026-05-27
updated: 2026-05-27
tags: [具身智能, 评测基准, 发布, 开源]
related: [robomemarena, predimem, 机器人记忆能力, 香港科技大学广州]
sources: ["具身智能迈入下半场，robomemarena全面评测机器人记忆系统.md"]
origin_date: 2026-05-27
participants: [香港科技大学广州, 清华大学, 浙江大学, 西湖大学, 上海交通大学, openhelix-team]
causes: [具身智能数据困境]
effects: [robomemarena, predimem]
significance: high
---
# RoboMemArena评测基准发布

2026年5月，[[香港科技大学广州]]联合[[清华大学]]、[[浙江大学]]、[[西湖大学]]、[[上海交通大学]]等多所高校，正式发布具身智能领域首个聚焦[[机器人记忆能力]]的系统性评测基准 [[robomemarena|RoboMemArena]]，并同步公开配套的最强基线模型 [[predimem|PrediMem]]。

## 背景

随着 VLA 和世界模型的快速进步，具身基座模型在单步操作上的能力已大幅提升。但长时程任务中的记忆瓶颈日益凸显——机器人很多时候不是"不会做"而是"记不住"。现有机器人 benchmark 对 memory-dependent long-horizon manipulation 的刻画远远不够，导致记忆机制研究缺乏标准化的评测平台。

## 发布内容

- **评测基准**：26项长时程任务、151个子任务、2600条专家演示轨迹，配套子任务级标注和关键帧标注
- **真机评测**：5个真实机器人记忆任务，开放 leaderboard 支持外部单位上传模型
- **基线模型**：PrediMem 双系统VLA模型，在仿真和真机评测中均取得最优表现
- **开放资源**：论文（arXiv:2605.10921）、代码（GitHub）、数据集（HuggingFace）全部开源

## 影响

RoboMemArena 的发布标志着具身智能评测从"操作能力"向"记忆与长时程规划能力"的焦点转移，为解决[[具身智能数据困境]]提供了重要的评测基础设施。PrediMem 的双系统VLA架构也为后续研究提供了有效的记忆管理基线。