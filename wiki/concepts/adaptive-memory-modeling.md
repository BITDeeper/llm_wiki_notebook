---
type: concept
title: Adaptive Memory Modeling
created: 2026-04-10
updated: 2026-04-10
tags: [ai-architecture, memory-management, video-generation]
related: [onestory, frame-selection, adaptive-patchification]
sources: ["视频生成不再「断片」：onestory给模型装上「选择性记忆」，跨镜头讲故事人物场景始终如一丨cvpr'26.md"]
---
# Adaptive Memory Modeling

**Adaptive Memory Modeling**（自适应记忆建模）是一种旨在长序列生成任务中平衡全局信息保留与计算效率的机制设计。

## 核心思想
在处理长视频或长序列时，模型需要记住早期的关键信息（如主角身份），同时忽略无关的冗余细节。自适应记忆建模通过动态选择和压缩历史信息，构建一个全局但紧凑的上下文表示。

## 关键组件
在 [[OneStory]] 模型中，该机制由两个核心部分实现：
1. **[[frame-selection]]**：负责从历史信息中筛选出与当前任务最相关的部分。
2. **[[adaptive-patchification]]**：负责根据信息的重要性动态调整存储粒度，压缩次要信息。

## 价值
这种机制解决了固定窗口方法会遗忘早期信息、而全量记忆方法计算成本过高的问题，是实现长程一致性和高推理效率的关键技术路径。