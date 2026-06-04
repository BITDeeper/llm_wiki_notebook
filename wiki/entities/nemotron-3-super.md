---
type: entity
title: Nemotron 3 Super
tags: ["llm", "open-source", "nvidia", "ai-agents", "mamba-moe", "moe", "agent", "英伟达", "大语言模型", "推理引擎"]
related: ["英伟达", "latentmoe", "mtp", "nvfp4", "blackwell", "openclaw", "nemoclaw", "pinchbench", "混合mamba-transformer架构", "latent-moe", "pivotrl", "hermes-agent", "openshell"]
created: 2026-03-12
updated: 2026-06-03
sources: ["老黄杀入openclaw战场！最强开源「龙虾」模型直逼opus-4.6.md", "老黄入局吃龙虾！英伟达发布最强开源agent推理模型.md", "老黄也来养马了！英伟达版hermes-agent发布.md"]
---

# Nemotron 3 Super

[[Nemotron 3 Super]]（120B-A12B）是 [[英伟达]] 自研的开源大语言模型，拥有 1200 亿参数（120 亿激活参数）。该模型专为大规模 [[agent]] 推理和多智能体协同设计，在 [[openclaw]] 任务中取得了 85.6% 的成功率，性能直逼 Claude Opus 4.6，被视为"最强开源 Agent 模型"。同时，它也是 [[nemoclaw]] 方案的默认底层推理引擎。

## 在 NemoClaw 架构中的角色

位于模型层，负责推理、选工具、起草回复。与 Harness 层（[[hermes-agent]]）和运行时层（[[openshell]]）共同构成三层架构。

## 核心特性

- **超长上下文**：原生支持 100 万 token 上下文窗口，旨在解决长周期 Agent 任务中的 [[goal-drift]]（目标偏移）问题，为复杂多步任务提供长期记忆能力。
- **高性能**：
  - 在 Pinchbench 基准上稳坐开源第一。
  - 推理速度提升 3 倍（尤其在代码和工具调用等结构化生成任务中）。
  - 吞吐量提升 5 倍（在 8k 输入与 64k 输出设置下，是 GPT-OSS-120B 的 2.2 倍）。
- **原生精度**：首个原生采用 [[nvfp4]] 精度进行预训练的模型，专为 [[blackwell]] 架构优化。实测显示，其在 B200 上的推理速度比 H100 快四倍，且内存需求更低。

## 多模态版本

Nemotron Omni 是其多模态版本，可直接处理视频、音频、图片和 PDF。

## 基准测试表现

| 基准测试 | 得分 | 备注 |
| :--- | :--- | :--- |
| **PinchBench** | 85.6% | 衡量 OpenClaw 智能体控制能力 |
| **SWE-Bench** | 60.47% | 搭配 OpenHands 框架，显著高于 GPT-OSS 的 41.9% |
| **Terminal Bench** | 25.78% | 困难子集得分，略高于 GPT-OSS 的 24.00% |
| **MMLU-Pro** | 83.73 | 高于 GPT-OSS 的 81.00 |
| **TauBench V2** | 61.15% | 航空、零售和电信领域的平均得分 |

## 技术架构

### 混合 Mamba-Transformer
为了解决百万级上下文下的效率与精度权衡，模型采用了 [[混合mamba-transformer架构]]。88层网络采用周期性交替排列：
- **Mamba-2 层**：负责高效的序列建模（线性时间复杂度）。
- **Transformer 层**：作为"全局锚点"负责长距离信息路由，确保精准的关联检索。

### LatentMoE
引入 [[latentmoe]]（隐式混合专家）架构。在路由决策前，先将 Token 投射到更小的潜在维度（低秩潜空间）进行降维。这使得模型能够"花1个专家的成本，激活4个专家"，在维持同等推理成本的前提下，实现更精细的专业化，大幅提升了参数利用率和算力利用率。

### MTP (Multi-Token Prediction)
引入 [[mtp]]（多Token预测）层，要求模型在每个位置预测未来的多个 Token。这不仅提升了模型对长程因果关系的理解，还实现了原生的投机解码，大幅降低生成延迟。

## 训练与优化

### 数据规模
- **预训练**：使用超过 25 万亿 Token 的文本数据，分为两个阶段（多样性阶段 + 高质量阶段）。
- **后训练**：
  - **SFT 阶段**：训练了超过 700 万样本，其中 Agent 相关任务占比高达 36%。采用两阶段工艺：第一阶段通过标记级平均损失建立推理基础；第二阶段切换为样本级平均损失，解决长输入场景下的性能降级。
  - **数据合成**：构建了包含 2 万个初始查询的种子任务集，经模型裁判过滤后沉淀出 1.5 万个核心合成任务，并从高性能模型蒸馏操作轨迹。

### 强化学习与 PivotRL
RL 阶段在 NeMo Gym 平台的 21 种环境、37 个数据集上进行了多环境训练。针对软件工程任务，模型经历了专门的 SWE-RL 阶段。为了防止长程任务中的推理漂移，英伟达引入了 [[pivotrl]] 技术，重点强化专家轨迹中不确定性较高的决策点。

## 应用场景

凭借高精度工具调用能力和超长上下文，Nemotron 3 Super 特别适合以下场景：
- **软件开发**：一次性加载整个代码库，实现端到端的代码生成与调试。
- **财务分析**：将数千页报告直接加载进内存，避免反复重新推理。
- **企业级 Agent**：作为 [[nemoclaw]] 平台的核心引擎，提供安全、可控的智能体服务。

## 战略背景

Nemotron 3 Super 的发布是英伟达 260 亿美元开源 AI 模型投资计划的一部分。英伟达通过运行此类大规模开源模型来压测硬件，利用数据反馈反哺硬件架构设计，实现"软件定义硬件进化"的闭环。

## 参考链接
- [GitHub Usage Cookbook](https://github.com/NVIDIA-NeMo/Nemotron/tree/main/usage-cookbook/Nemotron-3-Super)
- [Technical Report](https://research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3-Super-Technical-Report.pdf)