---
type: source
title: "不用人类手写训练框架了！AI自己写代码，训出1B端侧「小钢炮」"
created: 2026-05-26
updated: 2026-05-26
tags: [端侧模型, ai制造ai, 训练框架, 开源模型, 面壁]
related: [面壁, minicpm5-1b, forgetrain, 密度定律, 锻造工程, ultradata]
sources: ["不用人类手写训练框架了！ai自己写代码，训出1b端侧「小钢炮」.md"]
authors: [机器之心编辑部]
year: 2026
url: "https://mp.weixin.qq.com/s/2tdHV01FL_YGUmZQ12DS2A"
venue: 机器之心
---
# 不用人类手写训练框架了！AI自己写代码，训出1B端侧「小钢炮」

机器之心发布的关于 [[面壁]] 开源 [[minicpm5-1b]] 端侧大模型的深度报道。文章核心报道了三个关键成果：

1. **MiniCPM5-1B**：1B 参数端侧模型，在 AA-Index 榜单以 17.9 分位列小尺寸模型第一，超越 Qwen3.5-2B（16.3 分），参数量减半性能更优。
2. **[[forgetrain|ForgeTrain]]**：全球首个完全由 AI 编写的生产级大模型训练框架，在 H100 上效果对齐 Megatron、速度领先 10%；在华为昇腾上对比 MindSpeed 加速 10%。
3. **[[ultradata|UltraData]]**：同步开源的高质量预训练数据集，含 L0-L4 分级数据治理体系。

文章还阐述了 [[密度定律]]（智能密度约每 3.5 个月翻一番）和 [[锻造工程]] 软件范式，并将 ForgeTrain 定位为 [[ai制造ai|AI 制造 AI]] 在生产级基础设施粒度上的首次验证。

## 关键数据

- MiniCPM5-1B 部署规格：FP16 约 2GB、INT8 约 1GB、INT4 约 0.5GB
- 支持 CPU 运行和浏览器部署
- 微调支持 LlamaFactory、ms-swift
- 推理支持 SGLang、vLLM、llama.cpp、Ollama 等