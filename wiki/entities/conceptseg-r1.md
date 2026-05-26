---
type: entity
title: ConceptSeg-R1
created: 2026-05-25
updated: 2026-05-25
tags: [视觉分割, 概念分割, 多模态大模型, 强化学习]
related: [概念分割, meta-grpo, sam-segment-anything-model, 南洋理工大学, 大连理工大学]
sources: ["视觉分割进入下半场：conceptseg-r1-开启“分割任意概念”新范式.md"]
origin_date: 2026-05-25
---
# ConceptSeg-R1

ConceptSeg-R1 是由[[南洋理工大学]]、[[大连理工大学]]、耶鲁大学、西北工业大学、湖南大学和工源三仟联合提出的新型视觉分割模型，旨在实现"分割任意概念"（Segment Any Concept）。

## 核心理念

与传统的类别分割或物体分割不同，ConceptSeg-R1 的目标不是让模型分割更多类别，而是让模型能够**理解概念的定义规则**，并将这种理解转化为可执行的像素级分割结果。这标志着视觉分割从"看见物体"向"理解概念"的范式转变。

## 架构设计

ConceptSeg-R1 采用"任务归纳 → 规则验证 → 概念翻译 → 可提示分割"的闭环流程，核心组件包括：

1. **[[meta-grpo|Meta-GRPO]]（元群组相对策略优化）**：元强化学习机制，迫使模型从参考图像中归纳通用规则，而非死记硬背。采用拆分参考策略，将参考图分为支持集（教规则）和代理查询集（考规则），配合元奖励机制确保规则泛化性。
2. **概念翻译模块（CTM）**：通过交叉注意力机制提取多模态大语言模型（MLLM）隐藏层的丰富特征，转换为"隐式概念组"，注入 [[sam-segment-anything-model|SAM 3]] 的提示空间，消除推理与分割之间的语义瓶颈。
3. **快捷路由（Shortcut Router）**：自适应计算机制，根据 SAM 3 原始置信度和指令复杂度判断任务难度，简单任务直接走 SAM 快速通道，复杂任务才激活全套推理流程。

## 性能表现

- **全频谱概念分割**：7B 版本在 CD（上下文相关）和 CR（上下文推理）任务上达到 **82.8 mIoU**，远超现有 MLLM+SAM 组合。
- **零样本迁移**：ConceptSeg-R1-3B 在 Cityscapes 上达到 **62.6 mIoU**，比原生 SAM 3 高出 2 个点。
- **推理分割**：在 ReasonSeg 测试集上刷新纪录。
- **评估覆盖**：在涵盖自然场景、工业、医疗等领域的 16 个基准测试上进行了全面评估。

## 开源信息

- 论文：https://arxiv.org/abs/2605.20385
- 代码：https://github.com/NTU-AI4X/ConceptSeg-R1
- 项目主页：https://ntu-ai4x.github.io/ConceptSeg-R1