---
type: concept
title: AC-WM (动作控制世界模型)
tags: [architecture, world-model, robotics, embodied-ai]
related: [gigaworld-1, 可微分物理引擎, embodieddreamer]
created: 2026-03-30
updated: 2026-03-30
sources: ["国产世界模型登顶全球第一！断层领先谷歌英伟达，3d准确度逼近满分.md"]
---

# AC-WM (动作控制世界模型)

[[AC-WM]] (Action-Conditioned World Model) 是一种专为具身场景设计的模型架构，强调在生成世界状态时显式地考虑动作输入。

## 核心思想
传统的世界模型可能仅关注视觉预测，而 [[AC-WM]] 将动作作为核心条件输入。这种架构旨在解决具身智能中“动作-效果”的因果关系建模问题。

## 技术优势
1. **几何一致性**：通过显式的动作建模机制，从根本上保证了视频生成过程中的几何一致性，避免了生成内容在空间上的错乱。
2. **物理准确性**：通常结合 [[可微分物理引擎]] 使用，能够精准模拟机械臂等执行器的物理参数和交互效果。

## 代表性应用
[[极佳视界]] 的 [[GigaWorld-1]] 是 [[AC-WM]] 架构的代表性实现，该模型在 [[WorldArena]] 评测中取得了 3D 准确度接近满分的成绩。