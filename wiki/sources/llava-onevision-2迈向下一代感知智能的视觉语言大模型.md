---
type: source
title: "LLaVA-OneVision-2：迈向下一代感知智能的视觉语言大模型"
created: 2026-05-21
updated: 2026-05-21
tags: [多模态大模型, 视频理解, 码流原生, 视觉语言模型]
related: [llava-onevision-2, codec-native视觉建模, codec-stream-tokenization, ov-encoder, jumpscore]
sources: ["llava-onevision-2迈向下一代感知智能的视觉语言大模型.md"]
authors: ["我爱计算机视觉"]
year: 2026
url: "https://mp.weixin.qq.com/s/uv0oZX_De1Sfyy8XNUbFSQ"
venue: "我爱计算机视觉（微信公众号）"
---
# LLaVA-OneVision-2：迈向下一代感知智能的视觉语言大模型

本文介绍了 [[llava-onevision-2]] 多模态大模型，这是首个以"码流（Codec-Stream）"为视觉单元的视频多模态大模型。文章系统阐述了 [[codec-native视觉建模]] 的理论基础、[[codec-stream-tokenization]] 的四步流水线设计、[[ov-encoder]] 视觉骨干编码器的架构，以及 [[jumpscore]] 全新评测基准。

## 核心内容

- **码流作为视觉建模先验**：将视频压缩编解码器的预测式编码哲学上升为视觉建模先验——"能被上下文推出的不必重复编码，只编码真实增量"
- **Codec-Stream Tokenization**：四步流水线（GOP Partition → Scoring → Block Selection → Canvas Packing），让 Token 密度跟随码流真实事件强度分布
- **性能表现**：8B 参数量模型在 18 项视频任务（+4.3）、11 项空间推理任务（+5.3）、4 项跟踪任务（+15.6 J&F）上全面超越同体量模型
- **JumpScore 基准**：以 74.9 vs 30.1（+44.8）大幅领先 [[qwen3-vl-8b]]，证明"证据对齐到事件瞬间"的关键价值
- **五代演化路线图**：从早期帧采样到码流原生，本文处于第四代（码流对齐）向第五代（码流原生）过渡的关键节点

## 研究团队

Lmms Lab · Glint Lab · AIM for Health Lab · MVP Lab，技术报告发布于 2026-05-20。

## 开放资源

- 技术报告、GitHub 代码、HuggingFace 模型与数据、评测协议均已开源