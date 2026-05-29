---
type: entity
title: Meki
created: 2026-05-27
updated: 2026-05-27
tags: [模型架构, 端侧AI, memory-based, 三星]
related: [三星, ai-model-tf, 唐业辉, physical-ai, scaling-law, 量化, 本地推理]
sources: ["从foundation-model到physical-ai，三星「杀入」大模型核心战场.md"]
origin_date: 2026-02-01
---
# Meki

Meki是[[三星]][[ai-model-tf|AI Model TF]]提出的Memory-Based大模型新架构，旨在解决端侧设备资源受限条件下的模型Scaling问题。

## 核心创新

传统大模型的发展逻辑是更大的参数规模、更大的训练数据和更强的算力。但当AI进入真实设备与物理世界后，端侧设备的RAM、带宽与功耗十分有限，传统Transformer要求大量参数常驻内存运行，模型规模难以持续扩大。

Meki的核心思路是利用端侧设备远大于RAM的存储空间（ROM）：

- **RAM负责实时计算**
- **ROM负责知识存储**
- 通过参数化Memory Bank的方式，将大量知识存储在ROM中，推理时动态读取

## 技术意义

- 突破端侧容量限制，为端侧AI和[[physical-ai|Physical AI]]场景提供新的Scaling路径
- 相比传统Transformer，更适合长期运行的端侧AI与Physical AI场景
- 在机器人等Physical AI系统中，满足低延迟、实时交互与长期在线运行等要求

## 与现有概念的关系

- 对[[scaling-law]]形成补充：在资源受限条件下探索替代Scaling路径
- 与[[量化]]、[[本地推理]]同属端侧AI优化方向，但从架构层面而非压缩层面解决问题
- 为[[sim2real]]场景中的端侧部署提供架构基础

## 论文信息

- 论文地址：https://arxiv.org/pdf/2602.03359
- 项目链接：https://github.com/ningding-o/MeKi
- 发布时间：2026年2月