---
type: concept
title: "Thinker-Talker 架构"
tags: [architecture, multimodal, system-design]
related: [qwen3-5-omni, hybrid-attention-moe]
created: 2026-03-31
updated: 2026-03-31
sources: ["实测拿215项sota的qwen3.5-omni：摄像头一开，ai给我现场讲论文、撸代码.md"]
---

# Thinker-Talker 架构

Thinker-Talker 架构是一种用于多模态实时交互的双系统模型结构。它将认知处理与表达生成分离，以实现高效的流式响应。

## 组成部分

- **Thinker（大脑）**：
  - **职责**：负责多模态理解与逻辑推理。
  - **输入**：处理图像、声音、文本的混合输入。
  - **机制**：使用特殊的位置编码方式理解不同模态间的时间关系，最终输出为文本。
- **Talker（嘴巴）**：
  - **职责**：负责将 Thinker 的推理结果转化为自然的语音输出。
  - **机制**：类似于“AI 配音演员”，将文本转换为语音流。

## 技术升级

在 [[qwen3-5-omni]] 中，Thinker 和 Talker 模块均升级为 [[hybrid-attention-moe]]（混合注意力机制的混合专家模型），显著提升了处理效率和性能。

## 优势

这种架构允许模型“边看边想边说”，实现了真正的实时对话体验，而不是传统的“输入-等待-输出”模式。