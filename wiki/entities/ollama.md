---
type: entity
title: Ollama
tags: [tool, deployment, standard, local-inference, 本地推理, llm]
related: [玄武-cli, 本地推理, clawdbot, apple-mlx, apple-silicon]
created: 2026-02-03
updated: 2026-05-08
sources: ["别跟风买mac-mini了！国产算力跑openclaw，只需5分钟.md", "国产双开源：让mac成为你的私人ai工作站.md"]
---

# Ollama

Ollama 是目前本地大模型部署的事实标准工具，以其极简的操作体验（一行命令运行模型）著称。

## 生态地位
- **主流支持**：主要支持 NVIDIA CUDA 生态和 MacBook（Apple Silicon）。
- **行业标杆**：其命令行操作模式（`ollama run`, `ollama pull`）已成为行业惯例，[[玄武-cli]] 等竞品均选择与其保持命令兼容。

## 技术演进
2026 年 3 月底，Ollama 发布更新，将其 Mac 版本的底层推理引擎从 llama.cpp 切换至苹果的 [[apple-mlx]] 框架。
- **性能提升**：在搭载 M5 芯片的 Mac 上，Prefill 速度提升超过 57%，生成速度接近翻倍。
- **行业信号**：这一举措被视为向开发者生态发出的信号：[[apple-silicon]] + MLX 正成为本地 AI 推理的主流路线。

## 局限性
在 [[clawdbot]] 引发的 AI Agent 热潮中，Ollama 对国产芯片（如华为昇腾、沐曦）缺乏支持成为了一个痛点，导致国产算力用户无法便捷地参与本地 AI Agent 的部署。