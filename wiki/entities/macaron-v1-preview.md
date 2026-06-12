---
type: entity
title: Macaron-V1-Preview
created: 2026-06-08
updated: 2026-06-08
tags: [大模型, agent, 开源, lora, mind-lab]
related: [mind-lab, mixture-of-lora, agent-harness-后训练, mint-toolkit, livingbench, pinchbench, vitabench, dsa-稀疏注意力, mtp-多词元推理]
origin_date: 2026-06-08
sources: ["rss/刚刚，mind-lab开源v1系列模型preview，749b参数，专为agent-后训练.md"]
---
# Macaron-V1-Preview

[[mind-lab|Mind Lab]] 发布并开源的大模型，拥有749B参数（744+5B），激活参数40B，基于GLM5.1基座模型，专为 [[agent-harness-后训练|Agent Harness]] 场景深度后训练。

## 核心规格

| 属性 | 值 |
|------|-----|
| 总参数 | 749B（744+5B） |
| 激活参数 | 40B |
| 基座模型 | GLM5.1 |
| 训练GPU | 不到300张（大部分非最新芯片） |
| 训练成本 | 不到同尺寸模型的1% |
| 开源地址 | HuggingFace: mindlab-research/Macaron-V1-Preview-749B |

## 技术架构

- 采用 [[dsa-稀疏注意力|DSA（稀疏注意力）]] 机制，动态筛选重要token，避免传统Transformer全注意力机制的平方级计算复杂度
- 结合 [[mtp-多词元推理|MTP（多词元推理）]] 提高训练和推理效率
- 原生支持 [[mixture-of-lora|Mixture-of-LoRA]] 大规模持续学习架构
- 支持 Google A2UI（Agent to UI）协议，可在5秒内生成可操作的动态UI
- 基于 [[mint-toolkit|MinT]] 基础设施进行高效后训练

## 评测表现

- **[[livingbench|LivingBench]]**：SOTA（生活场景Agent评测）
- **[[vitabench|VitaBench]]**：SOTA（美团定义的生活任务评测）
- **[[pinchbench|PinchBench]]**：92.5分，开源模型最佳（面向 [[openclaw|OpenClaw]] 个人智能助理的多步任务评测）
- **A2UI 协议评测**：开源 SOTA
- **通用任务**：数学、代码等比肩同期头部开源模型
- **客服工具调用（Tau3）、代码修复（SWEVerified）、终端交互（Terminal2）**：接近SOTA水平

## 设计理念

Macaron-V1-Preview 不强调单项能力（数学、代码或长上下文），而是呈现更完整、更 Agent-native 的能力架构。模型从一开始就面向真实任务流、工具流、交互流和用户反馈优化，在训练阶段就与实际执行环境深度适配。

## 与其他模型对比

文中提供了与以下模型的实测对比视频：
- Seed 2.0 Pro
- Kimi K2-Thinking

## 技术传承

- 与 [[delta-mem|δ-mem]] 研究存在技术传承关系（模型可展示δ-mem论文内容）
- 四层缓存机制基于 [[deepseek-v4|DeepSeek V4]] 的三层缓存扩展
- 持续学习理念与 [[参数化记忆]] 和 [[体验智能]] 方向一致