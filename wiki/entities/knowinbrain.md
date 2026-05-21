---
type: entity
title: KnowinBrain
tags: [具身基础模型, VLA, 评测]
related: [诺因智能, knowindream, embodied-arena, action-cot, action-tokenizer]
created: 2026-03-24
updated: 2026-03-24
sources: ["又一华为天才少年入局具身创业！用视频生成数据训家用机器人，首个模型登顶具身基模榜单.md"]
---

# KnowinBrain

KnowinBrain 是 [[诺因智能]] 自研的具身基础模型，旨在解决 ToC 场景下的复杂操作与推理任务。

## 核心机制
- **[[action-cot]] (Action Chain of Thought)**：模型在执行动作前先进行动作思考与策略规划，具备基于自回归逻辑的推理能力。
- **[[action-tokenizer]]**：生成式动作编解码器，负责将云端大脑输出的 Action Token 解码为可执行的 Action Chunk，实现从认知到物理操作的转化。

## 架构特点
采用云边协同架构：
- **云端**：作为核心大脑，处理视觉数据、文本指令和状态反馈（1-5Hz 同步频率）。
- **边缘端**：作为执行终端，将 Action Chunk 转化为平滑连贯的机械臂操作，并实时回传环境反馈。

## 评测表现
在 [[Embodied Arena]] 具身智能评测榜单中，KnowinBrain 取得了以下成绩：
- **总榜排名**：第一。
- **单项第一**：空间感知、物体感知、具身推理、具身任务规划。
- **单项第二**：具身知识（仅次于 Gemini-2.5-pro）。
