---
type: entity
title: Psi-0（Ψ₀）
created: 2026-06-09
updated: 2026-06-09
tags: [人形机器人, 基础模型, vla, 具身智能, psi-lab]
related: [psi-lab, physworld, humanoid-everyday, 人类视频预训练, vla-视觉-语言-动作, sim2real]
origin_date: 2026-06-01
sources: ["rss/入职第三年，团队连斩cvpr三奖：南加州王越的psi-lab做对了什么？.md"]
---
# Psi-0（Ψ₀）

面向通用人形移动操作（Universal Humanoid Loco-Manipulation）的开放基础模型框架，由[[wang-yue|王越]]团队在[[psi-lab|PSI Lab]]开发。

## 核心任务：Loco-Manipulation

Loco-Manipulation指移动和操作结合在一起的任务——推车、递送、倒水、清洁、开水龙头、拉椅子等。机器人不是固定在桌前抓取物体，而是要移动身体、协调双臂和手部动作，在长程任务中持续处理场景状态变化。比桌面操作更复杂，更接近人形机器人的真实应用。

## 三阶段训练方法

Psi-0的核心创新在于**分阶段组织不同来源数据**，而非简单混合所有数据：

1. **人类视频预训练**：约829小时EgoDex第一人称人类视频。学习宽泛的视觉、交互和任务过程先验。第一人称视频更接近操作视角，且天然易于规模化（不需要遥操作或专门采集设备）。
2. **机器人轨迹后训练**：约31小时[[humanoid-everyday|Humanoid Everyday]]人形机器人轨迹。将预训练学到的操作先验对齐到人形机器人的身体结构、动作空间和真实控制约束上，解决[[具身鸿沟]]问题。
3. **目标任务适配**：少量目标任务数据做微调。在已有的人类视频先验和机器人动作能力基础上，调整到具体任务。

## 核心理念

Psi-0关心的不是简单扩大机器人数据规模，而是**如何组织不同来源的数据**——人类视频提供规模化操作先验，真实机器人轨迹提供embodiment对齐，少量目标任务数据完成具体适配。

## 荣誉

- CVPR 2026 3D-LLM/VLA Workshop **Best Paper**
- RSS 2026主会录用

## 链接

- 项目页：https://psi-lab.ai/Psi0/