---
type: entity
title: Gemma 4 26B-A4B
created: 2026-06-04
updated: 2026-06-04
tags: [开源模型, 多模态, 谷歌]
related: [gemma-4-12b, google-deepmind]
sources: ["谷歌gemma-4-12b震撼发布！全球下载破1.5亿，16g轻薄本封神.md"]
---
# Gemma 4 26B-A4B

Google DeepMind 发布的 Gemma 4 系列中更大参数量的模型。在 [[atomic-chat]] 的实测中：

- **显存占用**：15GB
- **生成速度**：138 tok/s（单张 RTX 4090）
- **代码生成量**：6.9k Token
- **表现**：在物理引擎代码生成测试的所有场景中完胜

作为 [[gemma-4-12b]] 的同家族对比基准，26B-A4B 展现了更大参数模型在绝对性能上的优势，但其显存需求（15GB vs 9GB）将许多消费级硬件用户拒之门外。