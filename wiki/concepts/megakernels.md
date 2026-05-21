---
type: concept
title: Megakernels
tags: [optimization, gpu, kernel-fusion]
related: [flapping-airplanes, 智力肥胖症]
created: 2026-03-29
updated: 2026-03-29
sources: ["karpathy紧急叫停！别再喂数据了，曝agi方向全错.md"]
---

# Megakernels

## 定义
[[megakernels]] 是一种极致的 GPU 内核优化技术，由 [[flapping-airplanes]] 团队开发并应用。

## 技术原理
- **融合计算与通信**：将 LLM 推理过程中的所有计算操作与数据传输操作融合进单个 GPU 核中。
- **消除间隙**：传统 GPU 推理过程中，计算与数据传输往往交替进行，存在指令流转的空隙（类似“显存红绿灯”）。Megakernels 旨在消除这些停顿，让数据在计算单元间无缝流动。

## 性能表现
- **6.7 倍提升**：据报道，该技术实现了推理速度 6.7 倍的提升。
- **硬件压榨**：这种优化被视为对硬件潜力的“降维压榨”，在不增加硬件数量的前提下大幅提升了效率。

## 意义
Megakernels 是解决 [[智力肥胖症]] 的具体技术手段之一，代表了 AI 发展从“堆料”转向“优化底层数学”的趋势。