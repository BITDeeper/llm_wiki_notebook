---
type: concept
title: 云端LoRA训练
tags: [cloud-computing, machine-learning, lora]
related: [tinker-yun-ping-tai, metaclaw]
created: 2026-03-12
updated: 2026-03-12
sources: ["真·养虾！3步让龙虾边聊边进化，不用gpu不用数据集就能强化学习.md"]
---

# 云端LoRA训练

云端 LoRA 训练是指利用云平台提供的算力资源，对大语言模型进行低秩适应微调的技术。这种方式将繁重的计算任务从本地设备转移到云端，显著降低了硬件门槛。

## 优势
- **降低硬件门槛**：无需本地高性能 GPU，仅需普通网络连接即可运行。
- **易于维护**：无需用户自行维护复杂的训练集群和依赖环境。
- **按需使用**：通常通过 API 调用，灵活控制成本。

## 实现案例
[[Tinker云平台]] 提供了云端 LoRA 训练的 SDK (`tinker` 和 `tinker-cookbook`)，支持 [[MetaClaw]] 系统在后台自动完成模型优化，实现了“无 GPU”强化学习。