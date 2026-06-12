---
type: entity
title: Gemma 4 26B-A4B
created: 2026-06-04
updated: 2026-06-12
tags: ["开源模型", "多模态", "谷歌", "自回归模型", "基准模型"]
related: ["gemma-4-12b", "google-deepmind", "谷歌", "diffusiongemma"]
sources: ["谷歌gemma-4-12b震撼发布！全球下载破1.5亿，16g轻薄本封神.md", "rss/mythos阴影里谷歌悄悄发模型，速度暴涨4倍.md"]
---
# Gemma 4 26B-A4B

Google DeepMind 发布的 Gemma 4 系列中更大参数量的自回归模型。在 [[diffusiongemma|DiffusionGemma]] 发布中作为速度和质量的对比基准。

## 性能表现

在 [[atomic-chat]] 的实测中：

- **显存占用**：15GB
- **生成速度**：138 tok/s（单张 RTX 4090）
- **代码生成量**：6.9k Token
- **表现**：在物理引擎代码生成测试的所有场景中完胜

采用 MTP（多词元推理）加速后，H100 上推理速度为 300+ tokens/s，约为 DiffusionGemma 的四分之一。但在多项基准测试中质量优于 DiffusionGemma，谷歌推荐生产环境使用标准 Gemma 4。

## 与 Gemma 4 12B 对比

作为 [[gemma-4-12b]] 的同家族对比基准，26B-A4B 展现了更大参数模型在绝对性能上的优势，但其显存需求（15GB vs 9GB）将许多消费级硬件用户拒之门外。