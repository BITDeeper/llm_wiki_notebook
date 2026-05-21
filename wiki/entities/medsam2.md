---
type: entity
title: MedSAM2
tags: [tool, medical-imaging, segmentation]
related: [ibisagent, 交互式分割]
created: 2026-04-21
updated: 2026-04-21
sources: ["国产多模态agent拿下医学分割sota！不用改模型、不加token-浙大&上海ai-lab.md"]
---

# MedSAM2

[[MedSAM2]] 是一种用于医学图像的交互式分割工具。

在[[IBISAgent]]框架中，MedSAM2 作为外部执行组件被调用。它接收 Agent 产生的点击指令（坐标和正负属性），生成相应的分割 Mask，并将结果反馈给 Agent 进行下一步推理。这种“模型推理 + 工具执行”的解耦设计，使得 IBISAgent 能够在不修改底层分割模型架构的情况下实现复杂的迭代精化。