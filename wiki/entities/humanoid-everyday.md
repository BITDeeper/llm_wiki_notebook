---
type: entity
title: Humanoid Everyday
created: 2026-06-09
updated: 2026-06-09
tags: [数据集, 评测基准, 人形机器人, 具身智能, psi-lab]
related: [psi-lab, psi-0, physworld, 具身智能数据困境]
origin_date: 2026-06-01
sources: ["rss/入职第三年，团队连斩cvpr三奖：南加州王越的psi-lab做对了什么？.md"]
---
# Humanoid Everyday

面向开放世界人形操作的综合数据集和评测平台，全称"A Comprehensive Robotic Dataset for Open-World Humanoid Manipulation"，由[[wang-yue|王越]]团队在[[psi-lab|PSI Lab]]开发。

## 数据规模

- **260个任务**，覆盖7类任务
- **1.03万条轨迹**
- **超过300万帧数据**
- 模态包括：RGB、深度、LiDAR、触觉和自然语言标注

## 任务类型

覆盖移动后操作、搬运、工具使用、柔性物体操作、铰链物体操作、人机交互和高精度操作等开放世界人形操作场景。

## 云端评测平台

Humanoid Everyday不仅提供训练数据，还提供**云端评测平台**，让不同方法可以在统一控制环境中部署和评估。

机器人学习长期面临评测难题：不同论文使用不同机器人、环境、物体和任务定义，方法间难以直接比较。对于开放世界人形操作，这个问题更突出——任务包含移动、接触、双臂协同和长程执行，任何环境差异都可能影响结果。

标准化评测的意义在于为模型能力提供稳定的比较坐标，让研究者能在统一设置下比较不同方法的泛化能力、鲁棒性和执行效果。

## 在系统链路中的位置

Humanoid Everyday是PSI Lab三篇工作中的**数据基础设施层**，为[[psi-0|Psi-0]]基础模型训练提供真实人形机器人轨迹数据，支撑从数据到模型到预测的系统闭环。

## 荣誉

- CVPR 2026 Embodied AI Workshop **Best Paper**
- ICRA 2026主会录用

## 链接

- 项目页：https://humanoideveryday.github.io/