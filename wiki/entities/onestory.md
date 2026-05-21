---
type: entity
title: OneStory
created: 2026-04-10
updated: 2026-04-10
tags: [ai-model, video-generation, meta, cvpr-2026]
related: [next-shot-generation, adaptive-memory-modeling, frame-selection, meta, university-of-copenhagen]
sources: ["视频生成不再「断片」：onestory给模型装上「选择性记忆」，跨镜头讲故事人物场景始终如一丨cvpr'26.md"]
---
# OneStory

**OneStory** 是由 [[Meta]] 与 [[University of Copenhagen]] 联合提出的多镜头视频生成模型，相关论文被 CVPR 2026 收录。

## 核心特性
OneStory 专注于解决长视频生成中的叙事一致性问题，能够生成分钟级、十镜头的长视频故事。它支持 [[image-to-video]] 和 text-to-video 两种初始化方式，并在同一个模型中统一支持 text-to-multi-shot 和 image-to-multi-shot 生成。

## 技术架构
OneStory 基于 [[next-shot-generation]] 范式，采用自回归方式逐步生成视频。其核心创新在于引入了 [[adaptive-memory-modeling]] 机制，包含两个关键模块：
1. **[[frame-selection]]**：从历史镜头中筛选与当前 prompt 语义最相关的帧。
2. **[[adaptive-patchification]]**：根据重要性动态压缩历史信息，实现高效的条件注入。

## 能力表现
- **长程一致性**：在复杂叙事推进中保持人物外观和场景环境始终如一。
- **叙事理解**：不仅维持视觉连续性，还能理解并推进复杂的叙事逻辑（如交互发展、空间定位）。
- **泛化能力**：在 out-of-domain 场景中展现出良好的适应性。

## 应用价值
OneStory 为长视频生成和可控世界模型提供了一种有效的 [[adaptive-memory-modeling]] 方案，是视频生成从“画面制作”向“故事讲述”迈进的重要代表。