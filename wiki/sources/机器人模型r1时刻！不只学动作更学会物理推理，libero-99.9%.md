---
type: source
title: "机器人模型R1时刻！不只学动作更学会物理推理，LIBERO 99.9%"
authors: ["新智元", "犀牛"]
year: 2026
url: "https://mp.weixin.qq.com/s/o-Y6Z2zhNSGUuiYUepIwhA"
venue: "新智元"
tags: [embodied-ai, reinforcement-learning, robotics, reasoning]
related: [last-r1, lapo, latent-cot, libero, vla-视觉-语言-动作]
created: 2026-05-11
updated: 2026-05-11
sources: ["机器人模型r1时刻！不只学动作更学会物理推理，libero-99.9%.md"]
---

# 机器人模型R1时刻！不只学动作更学会物理推理，LIBERO 99.9%

## 摘要
新智元关于 [[至简动力]] 联合北京大学与香港中文大学发布的具身大模型后训练框架 [[LaST-R1]] 的报道。该框架通过 [[LAPO]] 算法联合优化隐空间推理与动作生成，在 [[LIBERO]] 仿真基准上达到 99.9% 的成功率，并在真机实验中仅用 30 条轨迹将成功率从 52.5% 提升至 93.75%。

## 核心观点
文章指出，当前具身智能模型（如 OpenVLA, π0）多存在“会模仿不适应”的问题，即过度拟合训练数据的像素轨迹而缺乏物理因果理解。[[LaST-R1]] 提出的解决方案是让机器人“先想后动”，通过 [[Latent CoT]] 在隐空间进行物理推理，并利用强化学习环境反馈同时优化“思考过程”和“动作输出”。

## 关键技术
- **Latent Reasoning-before-Acting**: 在生成动作前，先生成隐空间推理嵌入，用于建模物体关系和物理动态。
- **LAPO (Latent-to-Action Policy Optimization)**: 将隐空间推理纳入强化学习目标，利用环境奖励联合优化推理和动作。
- **Adaptive Latent CoT**: 引入 `<latent_end>` token，使模型能根据任务难度动态调整推理长度。

## 实验数据
- **仿真 (LIBERO)**: 1 条轨迹预热，平均成功率 **99.9%**。
- **真机**: 30 条轨迹预热，成功率从 52.5% 提升至 **93.75%**，超越使用 100 条专家轨迹的 π0.5 (71.25%)。
- **泛化性**: 在未见物体、背景和光照变化下，性能下降显著小于基线模型。

## 意义
该工作标志着具身大模型从单纯的“行为模仿”向“物理推理”范式转移，通过少样本学习和自适应推理缓解了 [[具身智能数据困境]]。