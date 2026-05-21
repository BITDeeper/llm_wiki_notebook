---
type: source
title: "生成视频总出物理bug？用VLM迁移+token级对齐，让燃烧在正确位置发生，碰撞遵循动量守恒丨CVPR 2026近满分接收"
tags: [video-generation, physics, world-model, cvpr, vlm]
related: [prophy, mope, token级物理对齐, 渐进式物理对齐, 中山大学, mbzuai, qwen2.5-vl]
created: 2026-03-19
updated: 2026-03-19
authors: [王子俊, 胡攀文]
year: 2026
url: "https://mp.weixin.qq.com/s/C8PHSlltRFnum912MEOFwA"
venue: "CVPR 2026"
sources: ["生成视频总出物理bug？用vlm迁移+token级对齐，让燃烧在正确位置发生，碰撞遵循动量守恒丨cvpr-2026近满分接收.md"]
---

# 源：生成视频总出物理bug？用VLM迁移+token级对齐

## 概述
本文报道了中山大学与 MBZUAI 联合发表的 CVPR 2026 论文《ProPhy: Progressive Physical Alignment for Dynamic World Simulation》。该研究针对现有视频生成模型（如 Wan, Cosmos）虽然视觉逼真但缺乏物理逻辑的问题，提出了 [[prophy]] 框架。通过引入 [[渐进式物理对齐]] 和 [[mope]] 机制，利用 [[qwen2.5-vl]] 等视觉语言模型（VLM）进行知识迁移，实现了在视频生成中对物理规律的精准定位和模拟。

## 核心观点
- **现状批判**：现有视频生成模型本质上是“外观拟合”，能模仿物理现象的视觉统计规律，但缺乏显式的物理建模和细粒度的空间对齐能力（如“无中生有的蜂蜜”、“劈柴不同步”）。
- **解决方案**：提出 ProPhy 框架，包含两个阶段：
  1. **语义专家块 (SEB)**：负责宏观理解，回答“涉及哪些物理规律”。
  2. **细化专家块 (REB)**：负责空间定位，回答“物理现象发生在哪里”。
- **VLM 迁移**：发现 VLM 在物理现象定位上优于生成模型，通过提取 VLM 的注意力图并构建 [[token级物理对齐]] 信号，指导生成模型。
- **实验结果**：在 VideoPhy2 基准上 Joint 指标提升 +19.7%，且物理常识 (PC) 与语义一致性 (SA) 同步提升。

## 关键技术
- **MoPE (Mixture of Physical Experts)**：物理专家混合机制，通过不同专家掌握不同物理规律（燃烧、流体、碰撞等）。
- **反转专家实验**：通过人为反转专家权重（如让车门像布料一样飘动），证明了模型内部形成了结构化、可分解的物理知识表示。

## 意义
该工作标志着视频生成模型从“视觉逼真”迈向“物理一致”，是通向“可控物理世界模型”的关键一步。

## 作者与机构
- **第一作者**：王子俊（中山大学一年级博士生）、胡攀文（MBZUAI 博士）。
- **通讯作者**：梁小丹教授、黎汉汇教授（中山大学智能工程学院）。