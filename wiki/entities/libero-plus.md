---
type: entity
title: LIBERO-Plus
created: 2026-06-12
updated: 2026-06-12
tags: [评测基准, 具身智能, 机器人仿真]
related: [guidedvla]
sources: ["rss/rss-2026-别再让机器人看错重点，guidedvla给动作解码器装上可控可解释的注意力专家.md"]
---
# LIBERO-Plus

**LIBERO-Plus** 是一个专门用于评估机器人策略在分布偏移下鲁棒性的仿真基准。它包含 7 类扰动维度：相机视角、机器人初态、语言变化、光照、背景、噪声和布局。

在 [[guidedvla|GuidedVLA]] 的测试中，基线模型 [[pi-0|π0]] 的平均成功率为 68.2%，而引入注意力专家后，GuidedVLA 将成功率提升至 75.4%。