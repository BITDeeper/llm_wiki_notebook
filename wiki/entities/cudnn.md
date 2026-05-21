---
type: entity
title: cuDNN
tags: [nvidia, library, gpu, software]
related: [avo, flashattention, blackwell-b200]
created: 2026-03-28
updated: 2026-03-28
sources: ["英伟达agent超越人类gpu专家！连续7天自主进化，优化算子性能碾压flashattention-4.md"]
---

# cuDNN

[[cudnn]] (CUDA Deep Neural Network library) 是英伟达提供的官方闭源 GPU 加速库，专门用于深度神经网络的原语加速。

## 地位

- **官方标准**：作为英伟达官方引擎，cuDNN 代表了 GPU 厂商内部专家的优化水平。
- **对比基线**：在 [[avo]] 的测试中，cuDNN 9.19.1 版本被用作对比基线之一。

## 性能对比

在 [[blackwell-b200]] GPU 上的测试显示，[[avo]] 优化的算子性能比 cuDNN 快了 **3.5%**。这一结果具有重要意义，因为它表明 AI 智能体能够发现连硬件原厂专家都未利用的微架构优化空间。