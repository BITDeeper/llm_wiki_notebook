---
type: entity
title: Genie Envisioner-Sim 2.0
created: 2026-05-29
updated: 2026-05-29
tags: [世界模型, 具身智能, 仿真, 智元]
related: [智元, worldarena, 世界模型, sim2real, 闭环评测, 数据回流反哺机制, 长时序生成]
sources: ["刚刚，智元拿下worldarena世界模型总分冠军！.md"]
origin_date: 2026-04-01
---
# Genie Envisioner-Sim 2.0 (GE 2.0)

智元自研的世界模型，在 CVPR 2026 [[worldarena|WorldArena]] 世界模型赛道中以总分冠军成绩登顶。

## 核心技术特性

### 功能矩阵
GE 2.0 首次全面覆盖了以下核心环节：
- **[[长时序生成]]** — 连续推演40-50秒仍保持画面稳定和物理逻辑精准
- 多视角生成
- 本体状态生成
- 近实时推理
- 奖励判别

### 长时序推演能力突破
在长时序推理任务中，GE 2.0 画面质量随推理时长的衰减显著弱于行业基线方案。即使在连续推演40-50秒的长视频片段时，其生成质量依然超越了基线模型前10秒内的表现。

### 闭环评测验证
团队通过逐案（Case-by-case）rollout 结果对比分析，并使用混淆矩阵提供量化佐证，证明 GE 2.0 在多项任务上与真实世界保持强相关性。

### 数据回流反哺机制
在奖励模型加持下，GE 2.0 能够对闭环评测的 rollout 过程进行自动化筛选，将世界模型中产出的有效高质量数据精准回流给策略模型，助力策略模型实现显著性能涨点。

## WorldArena 成绩

GE 2.0 以"裸考"方式参赛——未针对赛题进行特殊设计优化，仅基于榜单数据进行了基础微调（Finetune），即获得总分冠军。

## 技术资源
- 项目链接：https://ge-sim-v2.github.io/
- Arxiv：2605.27491
- Github：https://github.com/AgibotTech/GE-Sim-V2