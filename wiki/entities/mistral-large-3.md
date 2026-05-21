---
type: entity
title: Mistral Large 3
tags: [model, moe, open-source, multimodal]
related: [mistral-ai, ministral-3, deepseek-v4, kimi-k2, nvidia]
created: 2025-12-03
updated: 2025-12-03
sources: ["ai三国杀！openai狂卷，deepseek封神，却被mistral偷了家？.md"]
---

# Mistral Large 3

Mistral Large 3 是 [[Mistral AI]] 发布的新一代大语言模型，采用 [[MoE-混合专家]] 架构，并以 Apache 2.0 协议完全开源。它在开源模型中处于顶尖水平，但在通用能力上略逊于 GPT-5 和 Claude Opus 等顶级闭源模型。

## 技术规格
-   **架构**：MoE（混合专家），41B active parameters / 675B total parameters。
-   **上下文**：256k context。
-   **能力**：原生图像理解、多语言支持（在非英语和中文语种上表现强劲）。
-   **开源协议**：Apache 2.0，允许商业自由修改和部署。

## 性能表现
-   在 LMArena 排名中位列开源模型第 6。
-   在 MMLU、GPOA、SimpleQA 等基准测试中与 [[DeepSeek]] 37B 和 [[Kimi K2]] 127B 处于同一水平。
-   在真实人工评估中，对 DeepSeek V3.1 和 Kimi K2 的胜率在 53%–60% 之间（取决于任务类型）。

## 工程优化
为了解决 MoE 架构“吃算力”且难以部署的问题，Mistral 与 [[NVIDIA]] 进行了深度优化：
1.  **底层重写**：重写了 NVIDIA Blackwell 架构的注意力机制和 MoE 内核。
2.  **推理加速**：实现了 [[预填充/解码分离]] 和 [[投机解码]]，显著提升了长文本和高并发场景下的稳定性与速度。
3.  **量化支持**：采用 NVIDIA 的 FP4 量化技术，在保持精度的同时降低显存占用。

## 定位
Mistral Large 3 并非追求“跑分之王”，而是作为企业级应用的高性能基座。其开源策略旨在让企业能够完全掌控模型，进行微调和私有化部署。