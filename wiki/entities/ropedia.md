---
type: entity
title: Ropedia
tags: [data-science, physical-ai, robotics, dataset]
related: [xperience-10m, homie, human-experience, 4d-physical-world, egoscale]
created: 2026-03-17
updated: 2026-03-17
sources: ["openclaw不会蛋炒饭！ropedia放出人类经验，机器人「教科书」来了.md"]
---

# Ropedia

[[Ropedia]] 是一家专注于为 [[Physical AI]]（物理 AI）提供结构化人类经验数据的数据科学公司。其名称结合了 Robot（机器人）和 Encyclopedia（百科全书），旨在为机器构建一部通往物理世界的全景式“经验百科全书”。

## 核心产品与技术

### Xperience-10M 数据集
[[Ropedia]] 发布的大规模人类经验数据集，包含 1000 万条数据，总时长超过 10,000 小时。该数据集已在 Hugging Face 上开源，旨在为具身智能和世界模型提供高质量的训练燃料。

### 4D Physical World 标准
Ropedia 定义了一种新的数据标准，即 [[4D Physical World]]。该标准强调数据必须包含四个维度的闭环：
- **3D 空间**：环境结构与拓扑。
- **时间**：连续的观察与行动。
- **交互**：人与物、人与场景的作用关系。
- **后果**：动作带来的真实物理变化。

### HOMIE 采集系统
[[HOMIE]] 是 Ropedia 开发的端到端人类经验采集平台。其特点包括：
- **无感化采集**：用户佩戴轻量化头戴设备即可在日常生活和工作中自然采集数据。
- **去中心化**：不依赖专业动捕房或样板房，支持在千变万化的真实末端场景（如家庭厨房、工厂产线）中进行数据闭环。
- **多模态同步**：支持视觉、空间、动作等多维度的精准同步。

## 核心竞争力：数据飞轮
Ropedia 的核心壁垒在于其基于自研空间基础模型的自动标注管线。通过“数据采集 -> 模型训练 -> 标注质量提升 -> 模型能力增强”的飞轮效应，Ropedia 能够以远超传统人工标注的速度迭代数据质量，解决 Physical AI 数据复杂度高、结构化难度大的问题。

## 行业定位
Ropedia 不生产模型（如 [[VLA]] 或世界模型），也不制造机器人本体。它定位为 Physical AI 时代的基础设施提供商，类似于大语言模型时代的 Scale AI 或 Surge AI，专注于生产高辛烷值的结构化数据燃料。其客户包括北美和英国的科技大厂、明星机器人初创公司及视觉模型公司。

## 相关背景
随着 [[Yann LeCun]] 创办 [[AMI Labs]] 和 [[李飞飞]] 创办 [[World Labs]] 分别获得巨额融资，行业共识正转向物理智能。Ropedia 的出现解决了这一方向下“高质量数据从哪里来”的底层问题。