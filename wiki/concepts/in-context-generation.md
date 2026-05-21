---
type: concept
title: In-Context Generation
tags: [video-generation, model-architecture, prompt-engineering]
related: [ic-world, gong-xiang-shi-jie-sheng-cheng]
created: 2026-03-28
updated: 2026-03-28
sources: ["ai「活在同一个世界里」了！首个共享世界生成模型ic-world登场.md"]
---

# In-Context Generation

**In-Context Generation**（上下文生成）是一种利用大模型固有的上下文处理能力来解决多视角一致性问题的技术策略，由 [[ic-world]] 团队提出。

## 工作原理

该策略的核心操作是将来自同一世界的多张不同视角的输入图像像“拼图”一样拼接成一张大图，并配合一个明确的共享世界文本提示词。

随后，视频生成模型会一次性生成一个包含所有视角的“视频合集”，最后再将其切分回独立的视频流。

## 优势

*   **强制一致性**：通过将多视角信息放入同一个上下文窗口，迫使模型在生成过程中建立视角间的关联，从底层架构上保证了它们属于“同一个世界”。
*   **效率提升**：相比于串行生成多个视频，这种并行生成方式显著缩短了总生成时间。
*   **挖掘潜力**：实验表明，仅使用此策略（不进行额外微调）也能显著提升一致性，说明现有的视频大模型本身具备未被充分利用的“世界级建模潜力”。