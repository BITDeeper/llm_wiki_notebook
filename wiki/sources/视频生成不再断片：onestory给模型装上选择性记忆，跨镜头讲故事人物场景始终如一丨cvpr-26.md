---
type: source
title: "视频生成不再「断片」：OneStory给模型装上「选择性记忆」，跨镜头讲故事人物场景始终如一丨CVPR'26"
created: 2026-04-10
updated: 2026-04-10
tags: [video-generation, multimodal, cvpr, meta, long-context, narrative]
related: [onestory, next-shot-generation, adaptive-memory-modeling, frame-selection, adaptive-patchification]
authors: [量子位, 非羊]
year: 2026
url: "https://mp.weixin.qq.com/s/j5v6IXqHokrORdid9AcMyQ"
venue: "量子位 (QbitAI)"
sources: ["视频生成不再「断片」：onestory给模型装上「选择性记忆」，跨镜头讲故事人物场景始终如一丨cvpr'26.md"]
---
# OneStory：多镜头视频生成的自适应记忆机制

本文报道了 Meta 与哥本哈根大学联合提出的 OneStory 模型（收录于 CVPR 2026），该模型旨在解决多镜头视频生成中的长程一致性问题。

## 核心挑战
多镜头视频生成要求模型同时处理两类信息：
1. **稳定信息**：在不同镜头之间保持人物身份、环境主体和故事主线的一致性。
2. **变化信息**：随着叙事自然推进视角切换、动作发展和场景转场。

现有方法（如固定窗口或单帧条件）难以有效保留长程上下文，导致叙事“断片”。

## OneStory 的解决方案

### 1. 任务重构：Next-Shot Generation
OneStory 将多镜头生成重构为自回归任务，即基于前序镜头生成下一个镜头（shot-by-shot），而非一次性生成整段视频。这种设定允许模型像讲故事一样逐步推进叙事。

### 2. 核心架构：自适应记忆建模
为了在计算效率和全局上下文之间取得平衡，OneStory 引入了两个关键模块：

- **[[frame-selection]]（帧选择）**：从所有历史镜头中自动挑选出与当前镜头 prompt 在语义上最相关的帧作为记忆。这避免了固定窗口滑动带来的遗忘问题，构建了全局的跨镜头上下文。
- **[[adaptive-patchification]]（自适应分块）**：根据内容重要性动态分配不同粒度的 token。重要信息保留高分辨率，次要信息进行高压缩，从而将历史上下文转化为紧凑的条件信号。

### 3. 数据构建
摒弃了传统的“总脚本+分镜头”模式，仅使用包含前文指代关系的分镜头 prompt。这种数据形式更贴近真实的故事讲述逻辑，促进了镜头间更自然的叙事流。

## 实验结果
OneStory 能够生成分钟级、十镜头的长视频，在以下场景中表现出色：
- **外观一致性**：在复杂提示变化下保持人物外观一致。
- **空间定位**：从大全景切换到局部特写时保持空间关系准确。
- **交互发展**：在人与物体交互过程中保持叙事连贯性。

## 意义
OneStory 证明了通过 [[adaptive-memory-modeling]]（自适应记忆建模），视频模型可以在不被冗余信息淹没的前提下有效利用长程上下文。这标志着视频生成从单纯的“画面制作”向具备 [[跨镜头叙事理解]] 能力的“故事讲述”质变。