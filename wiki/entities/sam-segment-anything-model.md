---
type: entity
title: SAM（Segment Anything Model）
created: 2026-05-25
updated: 2026-05-25
tags: [视觉分割, 基础模型, 计算机视觉]
related: [conceptseg-r1, 概念分割]
sources: ["视觉分割进入下半场：conceptseg-r1-开启“分割任意概念”新范式.md"]
---
# SAM（Segment Anything Model）

SAM（Segment Anything Model）是视觉分割领域的里程碑式基础模型，支持通过点、框、文本等提示方式进行可提示分割（Promptable Segmentation）。SAM 的发布标志着视觉分割进入全新阶段，用户可以通过多种方式告诉模型"想分割什么"。

## SAM 3

SAM 3 是 SAM 系列的最新版本，在 [[conceptseg-r1]] 中作为核心分割骨干使用。ConceptSeg-R1 的概念翻译模块（CTM）将多模态大语言模型的推理特征注入 SAM 3 的提示空间，实现从概念理解到像素级分割的转化。

## 局限性

尽管 SAM 系列在"分割任意物体"方面取得了巨大进展，但其"Anything"主要指可见物体和开放词汇类别，无法处理由上下文、关系、功能、规则和推理共同定义的抽象概念。这正是 [[概念分割]] 范式试图解决的问题。