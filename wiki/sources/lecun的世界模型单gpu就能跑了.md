---
type: source
title: "LeCun的世界模型单GPU就能跑了"
created: 2026-03-24
updated: 2026-05-03
tags: [world-model, jepa, embodied-ai, meta-ai, robotics]
related: [leworldmodel, jepa, sigreg, mila, yann-lecun]
authors: ["听雨"]
year: 2026
url: "https://mp.weixin.qq.com/s/mqChumP4McRppyCT8XrtLw"
venue: "量子位"
sources: ["lecun的世界模型单gpu就能跑了.md"]
---

# LeCun的世界模型单GPU就能跑了

本文报道了由 Yann LeCun 架构理念指导、Mila 研究院主导开发的 [[leworldmodel]] (LeWM)。这是一种基于 [[jepa]] 架构的极简世界模型实现，旨在解决具身智能训练中算力昂贵和模型复杂度过高的问题。

## 核心亮点

LeWM 证明了通过极简架构和创新的 [[sigreg]] 正则化技术，可以在单张 NVIDIA L40S GPU 上、数小时内训练出一个高性能的世界模型。

- **极简高效**：仅需 1500 万参数，无需 EMA 或 Stop Gradient 等复杂训练技巧。
- **极速规划**：相比依赖大模型预训练的 DINO-WM，规划速度提升 **48 倍**（<1秒 vs 47秒）。
- **物理直觉**：Latent 空间蕴含精确的物理信息（位置、角度），并能识别“瞬移”等物理违规现象。
- **性能强劲**：在推箱子、机械臂控制等任务中，超越此前的端到端 JEPA 方法（PLDM），性能与依赖大模型的方案持平甚至更强。

## 技术架构

LeWM 将 [[jepa]] 简化到本质，仅包含两个核心组件：
1.  **编码器**：将像素画面压缩为潜在特征。
2.  **预测器**：基于当前特征和动作预测下一时刻的特征。

其核心创新在于损失函数的设计，仅使用两项损失：
- **预测损失**：MSE 均方误差，用于学习世界动态规律。
- **SIGReg 正则损失**：强制特征向量服从标准高斯分布，有效防止模型坍塌，替代了复杂的训练技巧。

## 实验结果

在 Push-T（推箱子）、Reacher（机械臂够目标）、OGBench-Cube（3D抓取）等任务中，LeWM 展现了优异的控制性能。通过线性探测器测试证实，其潜在空间成功编码了位置和角度等物理属性。此外，模型对视觉扰动（如变色）不敏感，但对物理违规（如瞬移）表现出极高的惊讶值，证明了其对物理规律的深刻理解。

## 团队背景

- **Lucas Maes**：Mila 三年级博士生，项目一作。
- **Quentin Le Lidec**：纽约大学博士后，与 Yann LeCun 合作。
- **合作机构**：Mila、布朗大学、三星研究院。