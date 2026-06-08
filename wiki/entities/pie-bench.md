---
type: entity
title: PIE-bench
created: 2026-06-07
updated: 2026-06-07
tags: [评测基准, 图像编辑, 扩散模型]
related: [chordedit, 免训练单步图像编辑]
sources: ["cvpr-2026-最佳学生论文提名奖-chordedit：基于最优传输理论的免训练单步图像编辑.md"]
---
# PIE-bench

PIE-bench 是主流的图像编辑基准测试数据集，用于定量评估图像编辑模型的综合表现。评测维度包括：

- **PSNR**（峰值信噪比）：衡量背景保持度，即非编辑区域与原图的一致性
- **CLIP Edited**：衡量语义对齐度，即编辑后图像与目标文本提示词的匹配程度
- **LPIPS**：感知相似度指标

[[chordedit|ChordEdit]] 在 PIE-bench 上展现了压倒性优势，在 NFE=1 的极速设定下，PSNR 达到 23.89，超越了许多需要迭代几十步的复杂方法。