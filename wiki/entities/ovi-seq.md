---
type: entity
title: Ovi (Ovi-Seq)
created: 2026-05-24
updated: 2026-05-24
tags: [数字人, 扩散模型, 音视频联合生成]
related: [hallo-live, 异步双流扩散]
sources: ["hallo-live-让文本驱动音视频数字人迈入实时流式生成.md"]
---
# Ovi (Ovi-Seq)

Ovi 是一种双流扩散模型，已证明音频流和视频流分开建模、再做跨模态融合是音视频联合生成的有效路线。该模型偏向离线高质量生成，是 [[hallo-live]] 的教师模型。

Hallo-Live 通过蒸馏将 Ovi 的能力压缩到少步学生模型中，在保持接近教师模型视觉质量和音画同步效果的同时，实现了 16.0 倍的吞吐提升和 99.3% 的延迟下降。