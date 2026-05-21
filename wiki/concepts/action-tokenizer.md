---
type: concept
title: Action Tokenizer
tags: [编解码, 具身智能, 云边协同]
related: [knowinbrain, action-cot]
created: 2026-03-24
updated: 2026-03-24
sources: ["又一华为天才少年入局具身创业！用视频生成数据训家用机器人，首个模型登顶具身基模榜单.md"]
---

# Action Tokenizer

Action Tokenizer（生成式动作编解码器）是连接具身智能云端认知与边缘执行的关键组件。

## 功能
- **解码**：将云端大脑输出的抽象 Action Token 解码为可执行的 Action Chunk（动作片段）。
- **转化**：将离散的指令转化为边缘端机械臂可以执行的平滑、连续的操作序列。

## 架构意义
在云边协同架构中，Action Tokenizer 充当了“翻译官”的角色。它允许云端运行复杂的推理模型（如 [[KnowinBrain]]），而边缘端只需处理解码后的低维控制信号，降低了对边缘算力的要求。
