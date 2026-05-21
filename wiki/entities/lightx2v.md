---
type: entity
title: LightX2V
created: 2026-05-03
updated: 2026-05-03
tags: [inference-engine, sensetime, image-generation]
related: [sensenova-u1, lightllm, 商汤科技]
sources: ["不卷参数卷架构-这个开源模型把图像理解和生成统一了-20260503.md"]
---

# LightX2V

LightX2V 是 [[商汤科技]] 自研的推理栈组件，专门负责 [[sensenova-u1]] 模型中的**生成**（Generation）任务加速，特别是文本到图像（X2V）的转换。

## 功能定位
在 SenseNova-U1 的推理架构中，处理流程被解耦为两条路径：
- [[LightLLM]]：负责处理文本理解。
- **LightX2V**：负责处理图像生成。

这种解耦设计允许针对图像生成的高计算量需求进行专门优化，是 U1 模型实现快速推理（H100 单卡 9 秒生成 2048x2048 图片）的关键基础设施之一。