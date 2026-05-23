---
type: entity
title: OpenVLA-OFT
created: 2026-05-16
updated: 2026-05-16
tags: [VLA, 具身智能, 模型]
related: [gipo, accerrl, vla-视觉-语言-动作]
sources: ["icml-2026-告别「利用率崩溃」：gipo开启大模型强化学习高效训练新方法.md"]
---
# OpenVLA-OFT

**OpenVLA-OFT** 是一个 7B 参数量的 [[vla-视觉-语言-动作]] 模型，在 GIPO/AcceRL 的工业级验证中作为骨干网络使用。

在 LIBERO 机器人多任务操作基准上的评估中，该模型配合 [[gipo]] 算法和 [[accerrl]] 框架，耗费超过 10,000 H200 GPU 小时，处理了超过 7.3 亿次交互采样，最终在 LIBERO-Long 任务中达到 99.1% 的成功率。