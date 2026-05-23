---
type: entity
title: VBench
created: 2026-05-18
updated: 2026-05-22
tags: [评测基准, 视频生成, benchmark, 基准测试]
related: [anyflow, wan2.1, 视频扩散模型, forcing-kv, 自回归视频扩散模型]
sources: ["4-步生成高质量视频，还能越采样越好！nvidia、nus-show-lab、mit-提出-anyflow：迈向“步数自由”的视频扩散生成.md", "浙大等提出forcing-kv，利用注意力头分工，让自回归视频生成提速50%，显存降30%！.md"]
---
# VBench / VBenchLong

VBench 是视频生成领域的权威评测基准，用于系统评估文生视频（T2V）和图生视频（I2V）等视频生成模型的质量。VBenchLong 是其针对长视频生成的扩展版本，专门评估长时视频的连贯性、动态程度和整体质量。

## 在本 Wiki 中的角色

VBench 和 VBenchLong 是多篇论文中用于验证生成质量的主要评测基准：

- **[[anyflow]]** 在 VBench 上报告了其主要实验结果，验证少步采样下的生成质量。
- **[[forcing-kv]]** 在 VBenchLong 基准下验证其压缩策略的质量保持能力。

## 关键评测数据

### AnyFlow（VBench）

- AnyFlow-FAR-Wan2.1-14B 在 4 NFEs 下 I2V 达 **87.87**
- Wan2.1-I2V-14B 在 50×2 NFEs 下 I2V 达 **87.71**
- AnyFlow 在少步采样下即可接近甚至超越原始模型在多步采样下的表现

### Forcing-KV（VBenchLong）

- Forcing-KV 在 60 秒长视频生成中的总分（**80.43**）甚至超过了无压缩基线（**80.23**），证明了其压缩策略的质量保持能力