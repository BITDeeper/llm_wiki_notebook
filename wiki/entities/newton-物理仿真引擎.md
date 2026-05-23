---
type: entity
title: Newton 物理仿真引擎
created: 2026-05-12
updated: 2026-05-12
tags: [仿真, 物理AI, 开源, GPU加速, 基础设施]
related: [光轮智能, 物理ai, 仿真即基础设施, google-deepmind, nvidia]
sources: ["光轮智能与谷歌、英伟达共同定义物理ai仿真标准.md"]
origin_date: 2025-09-01
---
# Newton 物理仿真引擎

Newton 是由 NVIDIA、Google DeepMind 与 Disney Research 联合开源的 GPU 加速物理仿真引擎，于 2025 年 9 月发布 Beta 版。它标志着全球物理 AI 基础设施第一次走向统一。

## 核心特征

Newton 不是某一家公司的单点开源尝试，而是三家全球顶级机构投入数百名工程师与研究员、历时近两年持续开发的结果。它第一次尝试将以下能力整合进同一个开放架构：

- **GPU 并行计算：** 来自 NVIDIA 的 Warp 框架与 Isaac 生态
- **高精度接触动力学：** 来自 Google DeepMind 的 MuJoCo 积累
- **复杂机构求解：** 来自 Disney Research 的 Kamino 求解器
- **高可信动力学仿真：** 来自 TRI（Toyota Research Institute）的 Drake 底座

## 技术架构

- 模块化架构设计
- GPU 原生加速
- 自动微分能力
- 跨生态协作机制

Newton 不只是一个物理引擎，更是面向物理 AI 训练、评测与部署的统一仿真底座。

## 核心指导委员会（TSC）

Newton TSC 由五位全球仿真领域核心专家组成：

- **Miles Macklin Ph.D.**（NVIDIA）— Warp 框架联合创造者
- **Yuval Tassa Ph.D.**（Google DeepMind）— MuJoCo 联合创始人
- **[[谢晨]] Ph.D.**（[[光轮智能]]）— 创始人兼 CEO
- **Moritz Bächer Ph.D.**（Disney Research）— Kamino 求解器负责人
- **Michael Sherman Ph.D.**（TRI）— Drake 仿真平台核心贡献者

## 战略意义

Newton 被类比为物理 AI 时代的 CUDA——正如 CUDA 定义了"如何调用计算"，Newton 有望定义"如何生成世界"。它试图统一物理 AI 的底层世界模型，定义世界如何被建模、物理如何被表达、数据如何被生成、能力如何被评测。