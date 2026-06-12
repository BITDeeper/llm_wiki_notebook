---
type: concept
title: Object-Centric Residual RL
created: 2026-06-09
updated: 2026-06-09
tags: [强化学习, 世界模型, 机器人学习, 具身智能]
related: [physworld, psi-lab, 物理可执行性]
sources: ["rss/入职第三年，团队连斩cvpr三奖：南加州王越的psi-lab做对了什么？.md"]
---
# Object-Centric Residual RL

[[physworld|PhysWorld]]提出的强化学习方法，将视觉预测转化为机器人可执行轨迹的关键技术。

## Object-Centric（以物体为中心）

围绕物体来组织场景和动作信息。在机器人操作中，真正重要的通常不是整张图，而是：

- 目标物体的位置、姿态、运动
- 物体与机器人之间的接触关系
- 物体与桌面、其他物体之间的关系

## Residual RL（残差强化学习）

在已有视觉指导的基础上，通过强化学习做物理层面的修正，让动作更符合机器人动力学和环境约束。可以理解为：视觉预测提供粗略的动作方向，残差RL负责精细的物理调整。

## 在PhysWorld中的角色

PhysWorld的三步流程（视频生成→物理重建→残差RL）中，Object-Centric Residual RL是最后一步，负责将视觉预测转化为可执行轨迹，是实现[[物理可执行性]]的关键技术环节。