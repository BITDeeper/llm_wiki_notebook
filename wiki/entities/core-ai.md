---
type: entity
title: Core AI
created: 2026-06-10
updated: 2026-06-10
tags: [苹果, 端侧推理, ai框架, 大模型]
related: [苹果, afm-3, foundation-models框架, core-ml]
sources: ["rss/库克最后一届wwdc，把苹果ai九年的地基掀了.md"]
origin_date: 2026-06-09
---
# Core AI

苹果在WWDC 2026上发布的**全新端侧AI推理框架**，专为大模型时代从第一行代码重写，取代服役9年的Core ML。

## 核心特性

- **统一调度**：CPU、GPU和Neural Engine三颗芯片协同工作
- **原生LLM支持**：自回归生成、流式响应、多轮对话等大模型基础能力
- **全平台覆盖**：iOS 27、macOS 27、watchOS 27等全平台统一
- **配套工具链**：
  - `.aimodel`原生模型格式
  - `coreai-torch`开源PyTorch转换工具包（5行Python完成转换）
  - `coreai-models`官方预优化模型仓库（含Qwen、Mistral、SAM3等）
  - Xcode性能调优和提前编译功能

## 与Core ML的区别

| 维度 | Core ML | Core AI |
|------|---------|---------|
| 时代 | 传统机器学习 | 大语言模型 |
| 架构 | 为小模型设计 | 为大模型从零重写 |
| 能力 | 分类、检测等 | 自回归生成、流式响应、多轮对话 |
| 模型格式 | .mlmodel | .aimodel |

## 端侧能力演示

语言学习App示例：SAM3在端侧完成物体识别和分割 → 0.6B参数Qwen模型生成结构化单词卡 → 全部本地运行，不联网、不调API。

## 开源资源

- 模型仓库：https://github.com/apple/coreai-models
- 转换工具：https://github.com/apple/coreai-torch