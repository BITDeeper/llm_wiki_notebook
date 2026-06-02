---
type: source
title: "400 tokens/秒！阶跃Step 3.7 Flash，把Agent任务成本打到Claude零头"
created: 2026-06-01
updated: 2026-06-01
tags: [大模型, agent, 多模态, 成本优化, 阶跃星辰, flash模型]
related: [step-3.7-flash, 阶跃星辰, advisor-策略, claw-eval, scaling-law]
sources: ["400-tokens秒！阶跃step-3.7-flash，把agent任务成本打到claude零头.md"]
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/mbhf1Ku2rfczVyJMfQqBQA"
venue: 新智元
---
# 400 tokens/秒！阶跃Step 3.7 Flash，把Agent任务成本打到Claude零头

新智元关于阶跃星辰发布 Step 3.7 Flash 模型的深度报道。文章核心论点是 Step 3.7 Flash 不是简单的模型迭代，而是为 Agent 烧钱时代准备的"降维打击"——以 1/9 成本实现 [[claude-opus-4.6|Claude Opus 4.6]] 97% 的编码能力。

## 关键数据

- **架构**：196B+1.8B(ViT) 稀疏 MoE，激活 11B 参数
- **速度**：400 TPS 生成速度
- **成本**：Advisor 模式下单任务 0.19 美元 vs Claude Opus 4.6 的 1.76 美元
- **性能**：[[claw-eval|ClawEval-1.1]] 达 67.1，超越 DeepSeek V4 Flash（57.8）和 Kimi K2.6（62.3），逼近 Claude Opus 4.6（70.8）
- **本地部署**：128GB Mac Studio 可跑 4-bit 量化版，支持 32K 上下文

## 核心概念

文章提出 [[advisor-策略|Advisor（顾问）策略]]——小模型作为执行官全程控制流程，仅在关键决策点请教大"顾问模型"，以 1/9 成本达到接近前沿模型的编码能力。同时提出 [[flash模型范式重构|Flash 模型范式重构]]——Flash 模型从"旗舰平替"转变为"生产级 Agent 地基"。

## 实测场景

涵盖六大场景：报销发票处理、Blender 3D 操作指导、App 设计分析、Deep Research、GUI/Computer Use、AGI 路线图压力测试。

## 注意事项

报道带有明显营销宣传色彩（"狠狠掀翻牌桌""终极降维打击"），需注意区分事实与营销。核心成本对比仅针对 Claude Opus 4.6，未提供与同级别模型的全面对比。"涌现行为"声称缺乏技术验证细节。