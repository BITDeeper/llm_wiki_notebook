---
type: entity
title: Thunder 引擎 (雷霆)
tags: [x-algorithm, infrastructure, real-time, social-media]
related: [x-algorithm-open-source, phoenix-engine, grok]
created: 2026-01-20
updated: 2026-01-20
sources: ["马斯克兑现承诺，开源x推荐算法！100%-ai驱动，0人工规则.md"]
---

# Thunder 引擎 (雷霆)

**Thunder (雷霆)** 是 X 平台推荐系统中的“关注圈”内容实时存储与分发引擎。它与 [[phoenix-engine]] 共同构成了 X 平台的双引擎推荐架构。

## 功能定位
Thunder 专门负责处理用户已关注的人发布的内容。其核心任务是确保用户能以最快的速度看到关注者的动态。

## 技术特性
- **实时消费**：从 Kafka 消息队列中消费帖子的发布和删除事件。
- **内容库维护**：为每个用户维护最近的内容库，涵盖原创帖、回复、转发和视频。
- **高性能查询**：提供亚毫秒级的快速查询能力，确保信息流的刷新速度。

## 在推荐流程中的作用
当用户刷新“为你推荐”信息流时，Thunder 负责提供基于社交关系的确定性内容。这部分内容通常具有更高的时效性和相关性权重，因为它们来自用户主动选择的连接。