---
type: entity
title: MiniCPM-V 4.6
created: 2026-05-13
updated: 2026-05-13
tags: [端侧AI, 多模态模型, 开源模型, 视觉语言模型]
related: [面壁智能, llava-uhd-v4, 端侧多模态大模型, 密度定律, 本地推理]
sources: ["清华系团队出手！一张-4090-即可「爆改」，1.3b小钢炮震撼开源.md"]
origin_date: 2026-05-11
---
# MiniCPM-V 4.6

MiniCPM-V 4.6 是 [[面壁智能]] 联合 [[清华大学]]、OpenBMB 开源社区于2026年5月11日开源的新一代端侧多模态大模型，仅1.3B参数即实现越级性能，重新定义了1B级多模态模型的天花板。

## 核心特性

- **参数规模**：约1.3B，是 MiniCPM-V 系列史上参数规模最小的模型
- **智能密度**：同尺寸模型范围内智能密度最高，验证了 [[密度定律]]
- **版本**：提供 Instruct 版和 Thinking 版（推理版本）

## 性能表现

### 基准测试
- Artificial Analysis（AA）榜单得分领先同级模型，成为1B多模态赛道"新科状元"
- 全面超越阿里 Qwen3.5-0.8B 和谷歌 Gemma4-E2B-it
- 通用图文理解、数学题、文档OCR等任务全面领先

### 效率指标
- **Token消耗**：仅5.4M，为 Qwen3.5-0.8B 非推理版（101M）的 1/19、推理版（233M）的 1/43
- **推理吞吐量**：在4090上跑高并发，吞吐量为 Qwen3.5-0.8B 的 1.5 倍
- **首响延迟（TTFT）**：处理3136²超高清大图，比竞品快 2.2 倍
- **延迟曲线**：分辨率暴涨49倍时延迟增长不到2.5倍

## 技术架构

### LLaVA-UHD v4
采用 [[llava-uhd-v4|LLaVA-UHD v4]] ViT架构创新，通过"切片大法"和"提前压缩"（Intra-ViT Early Compressor）在ViT浅层完成视觉token压缩，算力节省约50%。这是"参数更大但跑得更快"的核心原因。

### 混合视觉token压缩
- **4倍模式**（精度更高）：适合文档解析、密集文字识别、医疗影像等高精度任务
- **16倍模式**（速度更快）：适合手机端实时交互、云端高并发API场景
- 同一模型支持两种模式，开发者无需做取舍，实现"端云两栖"部署

## 开发者生态

- **全量微调**：一张消费级 RTX 4090 即可完成全量微调，门槛从"服务器集群"降至"一台高性能PC"
- **兼容工具链**：LLaMA-Factory、ms-swift（微调）；vLLM、SGLang、llama.cpp、Ollama（推理）

## 资源链接

- Hugging Face：https://huggingface.co/openbmb/MiniCPM-V-4.6
- GitHub：https://github.com/OpenBMB/MiniCPM-V
- Modelscope：https://modelscope.cn/models/OpenBMB/MiniCPM-V-4.6