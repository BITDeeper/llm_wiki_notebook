---
type: event
title: D2AR生成式压缩框架Exascale训练性能突破
created: 2026-05-28
updated: 2026-05-28
tags: [超算, 生成式压缩, 遥感, 里程碑, ai-for-science]
related: [d2ar, 灵晟超级计算机, 生成式压缩, 付昊桓, exascale训练]
sources: ["国产超算生成式压缩模型训练性能突破2.16-eflops，支撑全球遥感数据万倍级压缩.md"]
origin_date: 2026-05-01
participants: [清华大学, 中山大学, 国家超级计算深圳中心, 付昊桓]
causes: [灵晟超级计算机]
effects: [d2ar]
significance: high
---
# D2AR生成式压缩框架Exascale训练性能突破

## 概述

2026年5月，清华大学、中山大学、新加坡国立大学、国家超级计算深圳中心等机构联合发布 [[d2ar]] 生成式压缩框架，在 [[灵晟超级计算机]] 上完成 Exascale 级训练，标志着国产 CPU 超算在大模型训练领域取得里程碑式突破。

## 关键成果

- 在 20,480 个节点上实现 BFloat16 精度下 **2.16 EFLOP/s** 峰值训练性能
- 端到端持续性能 **1.54 EFLOP/s**
- 遥感数据压缩比高达 **10,000×**
- 国产 Armv9 CPU（[[lx2处理器]] + SME）单节点训练效率达到 NVIDIA A100 GPU 水平

## 因果链

- **起因**：[[灵晟超级计算机]] 的部署为 Exascale 级训练提供了硬件基础
- **过程**：研究团队围绕国产 Armv9 CPU 架构进行算法、模型和系统软件栈的协同设计
- **结果**：[[d2ar]] 框架验证了国产超算在 [[ai-for-science]] 场景中的系统支撑能力

## 意义

这一成果为遥感基础模型、科学数据智能压缩和国产高性能计算生态建设提供了新的实践路径，验证了国产 CPU 超算不仅能支撑传统科学计算任务，也能承载大规模生成式 AI 训练。

## 论文

- 标题：*Transforming the Use of Earth Observation Data: Exascale Training of a Generative Compression Model with Historical Priors for up to 10,000x Data Reduction*
- arXiv：2605.08633