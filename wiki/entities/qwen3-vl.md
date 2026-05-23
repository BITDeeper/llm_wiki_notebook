---
type: entity
title: Qwen3-VL
created: 2026-05-17
updated: 2026-05-22
tags: ["model", "vlm", "qwen", "alibaba", "multimodal", "baseline", "模型", "基础模型", "multimodal-llm", "vision-language-model", "ai-models", "vision-language", "多模态大模型", "基座模型", "阿里云", "视觉语言模型", "评审模型", "阿里"]
related: ["starvla", "vla-视觉-语言-动作", "moss-vl", "spatial-point", "promptecho", "qwenimage-2512", "qianwen-3-5-plus", "alibaba-cloud", "prism-分布对齐方法", "sft-分布漂移问题", "sft-rl后训练范式", "world-r1", "四维复合奖励函数"]
sources: ["统一vla范式！港科大开源starvla乐高式架构，复现成本大幅降低.md", "准确回答视频细节！11b模型挑战视频理解「证据级」任务，开源可商用.md", "将深度信息作为vlm核心输入！视启未来×清华×idea帮机器人看懂物理世界.md", "阿里开源promptecho：用冻结多模态大模型为文生图训练提供高质量reward.md", "最强开源大模型除夕登场！397b参数千问3.5超越gemini-3，百万tokens低至8毛.md", "sft别急着接rl！你的多模态大模型可能一直在“带伤训练”.md", "解决视频生成穿帮问题！浙大&微软3000条纯文本让模型理解3d.md"]
---
# Qwen3-VL

Qwen3-VL 是阿里巴巴开源的视觉-语言模型（多模态大模型），有 4B 和 8B 两个规模。在多个研究中作为核心实验基座和评审模型被广泛使用。

## 在 PRISM 实验中的角色

在 [[prism-分布对齐方法|PRISM]] 研究中作为核心实验基座，用于验证分布对齐方法的有效性。

### 关键数据

7 个主流多模态 benchmark 平均准确率：

| 阶段 | 4B | 8B |
|---|---|---|
| 原始 Instruct 模型 | 59.7% | 63.3% |
| SFT 之后 | 56.8%（-3.0） | 58.1%（-5.2） |
| SFT → GRPO | 61.8% | 63.3% |
| SFT → PRISM → GRPO | ~64.1（+4.4） | ~69.3（+6.0） |

8B 模型 SFT 后掉了 5.2 个点，做完 GRPO 才回到基线——这一数据成为 [[sft-分布漂移问题|SFT 分布漂移问题]] 的核心证据。

PRISM 在 4 个数学推理基准（MathVista、MathVerse、MathVision、WeMath）和 3 个通用多模态基准（MMMU、MMMU-Pro、HallusionBench）上进行了全面验证。

## 在 World-R1 中的角色

在 [[world-r1]] 中担任"评审员"角色，专门用于检测生成视频中的"纸片人"等 3D 不一致问题。作为 [[四维复合奖励函数]] 中元视角评分的一部分，Qwen3-VL 从多角度审视 3D 重建结果，识别几何幻觉。