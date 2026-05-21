---
type: entity
title: Agnes-Image-1.2
tags: [model, image-generation, multimodal]
related: [agnes, agnes-video-v1-2, pinchbench]
created: 2026-04-01
updated: 2026-04-01
sources: ["斯坦福mit天团出手！1美元养龙虾，图文视频全包，打工人神外挂.md"]
---

# Agnes-Image-1.2

Agnes-Image-1.2 是 [[Agnes]] 发布的 20B 参数图像编辑模型。

## 性能表现
根据官方测试数据，该模型综合评分达到 4.25 分（满分 5 分）。
- 在**开源模型**中排名第一。
- 在**闭源模型**中仅次于 NanoBananaPro（4.48 分），超越了 Seedream 4.0 和 4.5。

## 技术特点
- **人像优化**：针对人像场景进行了定向微调，显著增强了面部细节保真、局部编辑可控性以及与背景的自然融合能力（Portrait 指标从 3.98 提升至 4.30）。
- **结构稳定性**：在目标区域分离与结构/几何稳定性方面表现更可靠，有助于复杂编辑任务的一致性表现。