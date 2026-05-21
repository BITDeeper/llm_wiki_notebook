---
type: concept
title: MoE (混合专家模型)
tags: [architecture, efficiency, inference, moe]
related: [deepseek-v4, kimi-k2, qwen3, gb200-nvl72]
created: 2026-01-06
updated: 2026-01-06
sources: ["老黄开年演讲「含华量」爆表！直接拿deepseek、kimi验货下一代芯片.md"]
---

# MoE (混合专家模型)

Mixture of Experts，一种神经网络架构，通过激活模型中的少量“专家”参数来处理特定输入任务，而非激活整个网络。

## 核心优势
- **计算效率**：大幅减少实际计算量和 HBM 显存带宽的压力。
- **推理平价**：是实现 AI 推理成本指数级下降的关键技术之一。

## 行业现状
- **主流选择**：据统计，自 2025 年以来，超过 60% 的开源 AI 采用了 MoE 架构。
- **榜单霸榜**：权威机构 Artificial Analysis 排行榜上，最智能的 Top 10 开源模型全部采用 MoE 结构。
- **代表模型**：[[DeepSeek V4]]、[[Kimi K2]]、[[Qwen3]] 等头部开源模型均采用此架构。

## 硬件协同
MoE 架构对硬件提出了特定要求，[[英伟达]] 的 [[GB200 NVL72]] 平台通过优化 NVLink 互连，专门破解了大规模 MoE 部署的通信瓶颈。