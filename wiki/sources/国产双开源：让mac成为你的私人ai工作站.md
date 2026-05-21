---
type: source
title: "国产双开源：让Mac成为你的私人AI工作站"
tags: [apple-silicon, mlx, private-ai, gui-agent, 量化, 本地推理]
related: [cider, mano-p, 明略科技, apple-mlx, apple-silicon, 赵晨旭]
created: 2026-05-06
updated: 2026-05-06
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/eLN0bUO-hGAxEwPFQ7zsjg"
venue: "机器之心"
sources: ["国产双开源：让mac成为你的私人ai工作站.md"]
---

# 国产双开源：让Mac成为你的私人AI工作站

本文详细报道了明略科技开源的 Cider 框架和 Mano-P 模型，这两项技术旨在利用 Apple Silicon 的硬件特性，将 Mac 打造成高性能的私人 AI 工作站。

## 核心内容

### Cider：端侧推理加速框架
Cider 是构建于 [[apple-mlx]] 之上的加速框架，旨在解决 MLX 原生量化模式（W4A16/W8A16）未充分利用 GPU Neural Accelerator 的问题。

- **技术原理**：引入 [[w8a8]] 和 [[w4a8]] 激活量化，利用 Metal 4 的 TensorOps API 调用专用硬件。
- **性能数据**：在 M5 Pro 上，W8A8 模式相比原生 MLX 提速约 1.8 倍（单算子）和 57%~61%（端到端 VLM）。
- **精度损失**：极小（Qwen3-8B PPL 仅增加 0.03）。
- **硬件门槛**：W8A8 模式需同时加载原始和 INT8 权重，内存占用翻倍，建议在 32GB+ 内存设备上使用以避免换页。
- **实验性功能**：尝试调用 [[ane-apple-neural-engine]] 与 GPU 异构并行，带来 3%~17% 的额外提升。

### Mano-P：GUI-VLA 智能体模型
Mano-P 是一个纯视觉的图形界面智能体，支持本地运行。

- **核心能力**：通过纯视觉理解屏幕并操作 GUI，不依赖 CDP 或 HTML 解析。
- **基准成绩**：OSWorld 基准测试成功率 58.2%，全球第一。
- **端侧性能**：4B 量化版在 M4 Pro 上可达 476 tokens/s prefill，内存占用仅 4.3GB。
- **应用场景**：与 [[claude-code]] 配合，实现全自动编程流水线（代码生成+GUI测试），无需云端 API。

### Private AI 理念
文章提出了 [[private-ai]] 的愿景，即 AI 模型在用户本地设备运行，实现数据私有、推理私有和能力私有。Cider 解决速度问题，Mano-P 解决场景问题，两者结合使“数据零上云”成为可落地的工程方案。

### 未来展望：Auto Agent Learning
明略科技副总裁 [[赵晨旭]] 提出了 [[auto-agent-learning]] 的概念，即本地模型通过自然语言持续更新参数，将私有信息（如密码）训练进权重而非明文存储，实现真正的“懂你”的专属 AI。

## 关键论点
- Mac 正借助 Apple Silicon 和 MLX 从终端转变为 AI 工作站。
- MLX 目前的量化方案存在硬件利用率瓶颈，Cider 通过激活量化补齐了这一短板。
- 端侧 AI（Private AI）不仅是隐私保护，更是 AI 所有权的转移。