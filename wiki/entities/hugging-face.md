---
type: entity
title: Hugging Face
created: 2026-05-31
updated: 2026-05-31
tags: [平台, 模型托管, 开源ai]
related: [低比特模型, bitnet, bitnet-cpp]
sources: ["低比特模型会是推理降本的关键组件吗？.md"]
---
# Hugging Face

Hugging Face 是全球领先的 AI 模型托管平台和开源社区。在低比特模型领域，Hugging Face 平台上的相关模型说明明确提示：使用常规的 Transformers 路径仅适合用于快速测试，要想兑现低比特模型标称的效率收益，必须依赖专门的底层工程实现（如 [[bitnet-cpp]]）。

这一提示印证了 [[低比特模型]] 面临的核心工程现实：位宽下降的理论红利需要推理框架和硬件的原生支持才能真正兑现。