---
type: entity
title: LightLLM
created: 2026-05-03
updated: 2026-05-03
tags: [inference-engine, sensetime, llm]
related: [sensenova-u1, lightx2v, 商汤科技]
sources: ["不卷参数卷架构-这个开源模型把图像理解和生成统一了-20260503.md"]
---

# LightLLM

LightLLM 是 [[商汤科技]] 自研的推理栈组件，专门负责 [[sensenova-u1]] 模型中的**理解**（Understanding）任务加速。

## 功能定位
在 SenseNova-U1 的推理架构中，处理流程被解耦为两条路径：
- **LightLLM**：负责处理文本理解和逻辑推理部分。
- [[LightX2V]]：负责处理图像生成部分。

这种解耦设计使得针对不同模态特性的性能优化成为可能，从而在 H100/H200 等硬件上实现了高效的端到端推理（生成 2048x2048 图片约 9 秒）。