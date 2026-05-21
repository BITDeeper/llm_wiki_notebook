---
type: concept
title: GPU 空闲时间
tags: [operations, efficiency, ai-training]
related: [mfu, ai-infrastructure-bottleneck, utilization-theater]
created: 2026-05-05
updated: 2026-05-05
sources: ["大型挂机现场：马斯克的55万英伟达gpu，利用率才11%.md"]
---

# GPU 空闲时间

GPU 空闲时间是指 GPU 在其生命周期中未进行有效浮点运算的时间段。它是导致 [[mfU]]（模型算力利用率）低下的直接原因。

## 产生原因
1.  **技术性等待**：由于 [[ai-infrastructure-bottleneck]]（如网络延迟、HBM 读写慢），GPU 被迫等待数据加载。
2.  **流程性停顿**：AI 训练并非连续进行。研究人员需要时间分析训练结果、调整超参数或处理数据管道，在此期间 GPU 处于闲置状态。
3.  **故障与维护**：硬件故障或系统维护导致的停机。

## 组织行为学影响
为了掩盖 GPU 空闲时间或避免闲置资源被回收，行业内存在 [[utilization-theater]]（利用率剧场）现象，即故意运行无意义任务来“刷”利用率数据。