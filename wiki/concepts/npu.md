---
type: concept
title: NPU (神经处理单元)
tags: [hardware, chip, ai]
related: [gpu, ai-inference, rngd, furiosaai]
created: 2026-01-04
updated: 2026-01-04
sources: ["拒绝meta收购、本月量产gpu，这家韩国公司正猛攻英伟达护城河.md"]
---

# NPU (神经处理单元)

NPU（Neural Processing Unit，神经处理单元）是一种专为神经网络计算和深度学习任务设计的专用芯片架构。

## 核心特点
与通用的图形处理器（[[gpu]]）不同，NPU 针对矩阵运算和神经网络所需的特定数学操作进行了硬件层面的优化。这种专用化设计通常能带来以下优势：
- **更高的能效比**：在处理 AI 推理任务时，功耗通常低于 GPU。
- **更低的延迟**：针对特定负载优化，减少数据搬运时间。

## 应用场景
NPU 常见于对能效要求极高的场景，如边缘计算设备（手机、物联网设备）以及大规模数据中心的推理任务。随着 AI 模型部署成本的上升，NPU 被视为降低 [[ai-inference]] 成本的关键技术之一。

## 行业案例
- [[furiosaai]] 开发的 [[rngd]] 芯片即是一款专注于推理阶段的 NPU，旨在挑战英伟达 GPU 在推理市场的统治地位。