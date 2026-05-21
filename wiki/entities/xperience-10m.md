---
type: entity
title: Xperience-10M
tags: [dataset, human-experience, robotics, physical-ai]
related: [ropedia, homie, 4d-physical-world, egoscale]
created: 2026-03-17
updated: 2026-03-17
sources: ["openclaw不会蛋炒饭！ropedia放出人类经验，机器人「教科书」来了.md"]
---

# Xperience-10M

[[Xperience-10M]] 是由 [[Ropedia]] 发布的大规模人类经验数据集，包含约 1000 万条数据，累计时长超过 10,000 小时。该数据集已在 Hugging Face 上开源，旨在为 [[Physical AI]]、具身智能和世界模型的研究提供高质量的结构化训练数据。

## 数据特点

### 结构化与多维度
与传统的互联网视频数据集不同，Xperience-10M 提供了统一对齐的多维度数据：
- **视觉流**：RGB 第一视角连续观察，360° 采集。
- **空间信息**：深度、空间结构、环境拓扑。
- **动作信息**：全身动作、手部灵巧操作、交互轨迹。
- **交互信息**：人与物、人与场景、人与任务的作用关系。
- **语义信息**：任务描述、状态变化、原子动作、行为意图。

### 4D 物理世界框架
该数据集遵循 [[4D Physical World]] 标准，即 3D + Time + Interaction + Consequence。它不仅记录了“发生了什么”，还记录了“行为如何改变世界”，为机器人理解物理因果提供了基础。

## 应用价值
根据 [[EgoScale]] 等研究，人类第一视角数据的规模与模型性能存在对数线性关系。Xperience-10M 的大规模特性使其能够显著提升机器人策略在泛化与迁移任务上的成功率，支持从仿真环境到真实世界的有效迁移。