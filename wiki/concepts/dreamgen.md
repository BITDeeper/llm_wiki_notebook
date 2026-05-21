---
type: concept
title: DreamGen
tags: [robotics, data-generation, simulation]
related: [gr00t, video-world-model, sonic]
created: 2026-01-10
updated: 2026-01-10
sources: ["30人团队震撼英伟达！jim-fan自曝三个教训，重押世界模型.md"]
---

# DreamGen

DreamGen 是英伟达 GEAR 团队提出的一种利用 AI [[video-world-model]] 来生成合成训练数据的机器人学习框架。

## 工作原理
DreamGen 的核心思想是让机器人通过“做梦”来学习。具体流程如下：
1.  **数字梦境**：利用视频世界模型生成大量虚拟的机器人行为视频。
2.  **数据提取**：从生成的视频中提取动作数据。
3.  **策略训练**：使用提取的数据训练机器人的控制策略。

## 效果验证
实验表明，机器人即使在只有一个动作示例的场景中，也能通过 DreamGen 生成的“梦境”数据在新任务上实现极高的成功率。在 10 个新环境和 22 种新行为的测试中，机器人均成功泛化。

## 价值
DreamGen 直接解决了具身智能领域最棘手的数据稀缺问题。通过生成合成数据，它使得机器人能够以远超现实收集的速度进行学习，是实现 Scaling Law 在机器人领域落地的关键技术之一。