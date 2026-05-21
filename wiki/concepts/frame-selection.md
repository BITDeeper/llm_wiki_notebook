---
type: concept
title: Frame Selection
created: 2026-04-10
updated: 2026-04-10
tags: [attention-mechanism, video-generation, memory]
related: [onestory, adaptive-memory-modeling]
sources: ["视频生成不再「断片」：onestory给模型装上「选择性记忆」，跨镜头讲故事人物场景始终如一丨cvpr'26.md"]
---
# Frame Selection

**Frame Selection**（帧选择）是一种用于多镜头视频生成的记忆检索机制。

## 功能
在生成新镜头时，模型并非机械地回顾所有历史帧，而是通过 Frame Selection 模块自动挑选出与当前镜头 prompt 在语义上最相关的帧作为记忆。

## 作用
- **实现选择性记忆**：模拟人类叙事逻辑，只关注对当前情节发展最重要的信息（例如主角回归时，优先回顾主角出场的镜头）。
- **避免遗忘**：不同于滑动窗口机制会物理丢弃早期数据，Frame Selection 始终保留全局视野，确保长程上下文不丢失。
- **提升一致性**：通过精准召回相关视觉特征，有效维持人物和场景的一致性。

该模块是 [[OneStory]] 实现 [[adaptive-memory-modeling]] 的关键组成部分。