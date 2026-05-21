---
type: source
title: "1人顶1个Infra团队！OpenAI前CTO新招，让大模型训练跌成白菜价"
tags: [后训练, 强化学习, 算力云, serverless, tinker]
related: [thinking-machines-lab, tinker, 潞晨云, 按token计费, 后训练, deepseek-r1]
created: 2026-01-07
updated: 2026-01-07
authors: [好困]
year: 2026
url: "https://mp.weixin.qq.com/s/diUzDWP6ZYGkz4Fxh4fVGQ"
venue: "新智元"
sources: ["1人顶1个infra团队！openai前cto新招，让大模型训练跌成白菜价.md"]
---

# 1人顶1个Infra团队！OpenAI前CTO新招，让大模型训练跌成白菜价

## 摘要
本文报道了由 OpenAI 前 CTO [[Mira Murati]] 创立的 [[Thinking Machines Lab]] 提出的 [[Tinker]] 范式，以及国内算力云厂商 [[潞晨云]] 对该范式的跟进实现。文章指出，大模型竞争焦点已从预训练转向 [[后训练]]（特别是强化学习），而传统的算力租赁模式存在大量资源浪费。[[潞晨云]] 推出的微调 SDK 通过 [[算法与基础设施解耦]] 和 [[按Token计费]] 的 Serverless 模式，大幅降低了模型微调与强化学习的试错成本，实现了“1人顶1个 Infra 团队”的人效提升。

## 核心观点

### 行业重心转移
随着 [[OpenAI o1]] 和 [[DeepSeek-R1]] 的发布，业界共识认为大模型的能力突破不再单纯依赖预训练的参数堆砌，[[后训练]]（Post-Training）特别是强化学习（RL）已成为决定模型实用价值的核心战场。[[DeepSeek-R1]] 仅靠强化学习训练，在 AIME 数学推理基准上的 pass@1 从 15.6% 提升至 77.9%，证明了 RL 在低数据量下的有效性。

### Tinker 范式与解耦
[[Tinker]] 将复杂的训练流程拆解为 [[forward]]、[[backward]]、[[optimizer step]] 等 [[函数原语]]。这种范式将算法设计与底层基础设施（集群调度、并行策略、容错运维）彻底解耦，使算法工程师能够像调用函数一样控制训练逻辑，无需关注底层 Infra 细节。

### 潞晨云微调 SDK
[[潞晨云]] 推出的微调 SDK 兼容 [[Tinker]] 接口，支持 [[Qwen3]] 系列模型（4B-32B）。其核心特性包括：
- **零门槛**：开发者无需囤积显卡，本地写码，云端计算。
- **全透明**：Rollout → Reward → Update 全流程按 [[按Token计费|Token]] 计价。
- **极高效**：队列等待期间 0 计费，仅对实际计算（Prefill/Sample/Train）收费。

### 成本革命
文章对比了传统“包机/时租”模式与 Serverless 按需计费模式。传统模式下，大量预算浪费在调试、排队等非计算环节。[[潞晨云]] 的模式让用户只为“产生梯度”的计算付费。实测跑通包含 Rollout、Reward 和 PPO 更新的完整 RL 流程（约 300 steps），成本仅 8.61 元。

## 技术细节
- **架构设计**：采用控制面与计算面分离，支持多云部署与异步 API 调用。
- **支持算法**：涵盖 SFT、PPO、GRPO、DPO 等强化学习算法。
- **应用场景**：
  - **科研**：降低实验复现成本，支持白盒级探索。
  - **创业**：极速验证 MVP，低成本试错。
  - **工业**：支持复杂架构的端到端定制。

## 相关条目
- [[Thinking Machines Lab]]：Tinker 范式的提出者。
- [[DeepSeek-R1]]：后训练范式的成功案例。
- [[按Token计费]]：颠覆性的算力计费模式。
- [[后训练]]：当前 AI 竞争的核心阶段。