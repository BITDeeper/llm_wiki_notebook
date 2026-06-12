---
type: entity
title: PhysWorld
created: 2026-06-09
updated: 2026-06-09
tags: [世界模型, 物理仿真, 机器人学习, 具身智能, psi-lab]
related: [psi-lab, psi-0, humanoid-everyday, 世界模型, 物理可执行性]
origin_date: 2026-06-01
sources: ["rss/入职第三年，团队连斩cvpr三奖：南加州王越的psi-lab做对了什么？.md"]
---
# PhysWorld

物理世界模型框架，全称"Robot Learning from a Physical World Model"，由[[wang-yue|王越]]团队在[[psi-lab|PSI Lab]]开发。

## 核心判断：物理可执行性

PhysWorld的核心判断是：**世界模型的价值不在于视频质量，而在于预测的未来能否转化为机器人可执行轨迹**。

一个视频模型可以生成"手把杯子推走"的画面，但这不等于掌握了机器人真正需要的物理信息：杯子的位姿如何变化、接触点是否成立、摩擦和支撑关系是否合理、生成的运动能否由机器人自己的身体执行。

## 三步流程

1. **视频生成**：给定图像和任务指令，生成任务相关视频
2. **物理世界重建**：从视频中重建背后的物理世界，形成以物体为中心（object-centric）的场景表示
3. **残差强化学习**：通过object-centric residual RL，把视觉预测转化为机器人可执行的轨迹

## 关键技术

- **Object-Centric**：围绕物体组织场景和动作信息——目标物体的位置、姿态、运动，以及与机器人、桌面、其他物体之间的接触关系
- **Residual RL**：在已有视觉指导基础上，通过强化学习做物理层面修正，让动作更符合机器人动力学和环境约束

## 荣誉

- CVPR 2026 3D-LLM/VLA Workshop **Best Paper Runner-up**
- ICRA 2026主会录用

## 链接

- 论文：https://arxiv.org/abs/2511.07416