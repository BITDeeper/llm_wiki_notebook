---
type: entity
title: Nemotron 3 Ultra
created: 2026-06-01
updated: 2026-06-11
tags: ["模型", "英伟达", "开源", "MoE", "nvidia", "开源模型", "旗舰模型", "开源生态"]
related: ["英伟达", "nvidia-agent-toolkit", "agent原生计算", "fable-5", "nathan-lambert", "可验证的信任"]
sources: ["刚刚，老黄重新发明pc！全球首个agent原生电脑问世.md", "rss/神话模型fable-5被曝降智，只为防蒸馏？ai大佬抗议.md"]
origin_date: 2026-06-01
---
# Nemotron 3 Ultra

**类型：** 大语言模型（开源旗舰）
**开发者：** NVIDIA
**发布时间：** 2026年GTC大会期间（约6月3日前后，[[fable-5|Fable 5]] 发布前一周推出）

## 概述

Nemotron 3 Ultra 是 [[英伟达]] 发布的最大开源模型，也是 NVIDIA 首款旗舰开源模型。[[nathan-lambert|Nathan Lambert]] 将其推出时间点（[[fable-5|Fable 5]] 发布前一周）视为耐人寻味的巧合，并将其定位为美国开源生态系统重要转折点的标志之一。

作为 [[nvidia-agent-toolkit]] 模型层的核心，Nemotron 3 Ultra 为 Agent 的"思考"能力提供基础。

## 核心规格

- 约5500亿总参数
- 每token激活550亿参数（MoE架构）
- 开源发布

## 战略意义

- 代表 NVIDIA 正式加入开源旗舰模型竞争
- 与 Llama、DeepSeek、Qwen 并列为 [[nathan-lambert|Lambert]] 推崇的开源生态核心力量
- 被视为对闭源模型隐性降智行为的开源反击
- 提供[[可验证的信任]]——本地运行时权重、参数、行为逻辑完全透明

## 定位

黄仁勋将 LLM 定位为"新时代的 DirectX"——Agent 时代的基础软件层。Nemotron 3 Ultra 作为英伟达 Agent 系统的模型底座，负责 Agent 的推理与规划能力。

## 应用实例

在英伟达与 Cadence 联合打造的芯片设计超级 Agent 中，Nemotron 作为底层模型运行，支撑 Agent 自主完成仿真、形式化验证、设计缺陷发现和代码 bug 修复，将验证周期从数周压缩至数小时，加速超过40倍。

## 待补充信息

- 性能基准测试数据
- 许可证类型
- 训练数据与架构细节