---
type: entity
title: Tinker云平台
tags: [cloud-computing, infrastructure, lora, training]
related: [metaclaw, yun-duan-lora-xun-lian]
created: 2026-03-12
updated: 2026-03-12
sources: ["真·养虾！3步让龙虾边聊边进化，不用gpu不用数据集就能强化学习.md"]
---

# Tinker云平台

Tinker云平台是支持 [[MetaClaw]] 运行的关键基础设施，提供云端 LoRA 训练算力。它允许用户将所有训练任务“甩”给云端，从而实现训练和部署的彻底分离。

## 核心功能
- **云端 LoRA 训练**：提供 SDK (`tinker` 和 `tinker-cookbook`)，支持在云端进行低秩适应微调。
- **零本地依赖**：用户无需维护本地 GPU 集群，只需设备能联网即可运行复杂的强化学习任务。
- **热替换权重**：支持在训练过程中动态更新模型权重，实现无缝的持续学习。

## 在 MetaClaw 中的角色
Tinker云平台使得 [[MetaClaw]] 能够将 AI 持续学习的门槛降至极低。用户只需配置 `TINKER_API_KEY`，即可在后台自动完成数据收集、评分和模型优化，无需专门的工程团队维护。