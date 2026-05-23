---
type: event
title: LoongForge 开源发布
created: 2026-05-21
updated: 2026-05-21
tags: [开源, 训练框架, 多模态, 百度, 事件]
related: [loongforge, 百度百舸, 昆仑芯, 全模态训练框架]
sources: ["百度百舸开源全模态训练框架-loongforge：一套代码跑通-gpu-与昆仑芯，多模态训练提速-45%.md"]
origin_date: 2026-05-21
participants: [百度百舸]
causes: [多模态作为模型新底座, 算力多元异构]
effects: [loongforge]
significance: medium
---
# LoongForge 开源发布

2026 年 5 月 21 日，[[百度百舸]] 正式开源发布全模态训练框架 [[loongforge|LoongForge]]，采用 Apache 2.0 协议。

## 背景

过去三年，大模型领域的基础假设发生了两条主线的变化：
1. **模型侧**：[[多模态作为模型新底座|多模态正在成为大模型的新底座]]，从外挂视觉编码器演进为原生多模态预训练
2. **算力侧**：[[算力多元异构|算力从单一供给走向多元异构]]，以 [[昆仑芯]] P800 为代表的国产芯片进入规模化落地

现有训练框架（Megatron/FSDP）基于 LLM 时代假设，与新一代多模态模型形态出现结构性错位。

## 核心发布内容

- 全模态训练框架，覆盖 LLM、VLM、VLA、Diffusion 等场景
- 内置 20+ 模型族标准组件
- 支持 NVIDIA GPU 与昆仑芯 XPU 双平台
- 主流模型 15%~45% 端到端训练加速
- YAML 配置驱动，适配周期从数周压缩至天级

## 行业意义

LoongForge 的发布标志着国产 AI 训练基础设施从"能用"向"统一、高效、易用"的系统性升级，是应对多模态时代训练基础设施结构性错位的重要尝试。