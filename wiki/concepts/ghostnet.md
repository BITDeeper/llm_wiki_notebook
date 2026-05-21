---
type: concept
title: GhostNet (轻量化网络)
tags: [computer-vision, model-compression, cnn]
related: [王云鹤]
created: 2026-03-28
updated: 2026-03-28
sources: ["华为盘古大模型负责人王云鹤离职，被曝agent创业.md"]
---

# GhostNet

GhostNet（幽灵网络）是一种轻量级的卷积神经网络架构，旨在解决在计算资源和内存受限的设备（如嵌入式设备、移动端）上部署深度学习模型的难题。

## 核心思想

GhostNet 的核心论文《Ghostnet: More features from cheap operations》由 [[王云鹤]] 与韩凯、田奇等人合作发表，是其被引数最高的学术贡献。

传统的卷积操作会产生大量冗余的特征图。GhostNet 提出了一种“幽灵模块”，通过使用廉价的线性运算来生成更多的特征图，从而以极低的计算成本模拟昂贵的卷积操作。这种机制使得网络在保持高性能的同时，大幅减少了参数量和计算量。

## 应用价值

GhostNet 对于边缘计算和端侧 AI 具有重要意义，它使得复杂的视觉任务能够在手机、IoT 设备等低功耗硬件上高效运行。这一工作也体现了 [[王云鹤]] 在模型效率优化方面的深厚积累。