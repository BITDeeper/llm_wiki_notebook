---
type: concept
title: CA-TTS
tags: [multimodal, test-time-scaling, inference-optimization]
related: [cdrl, 感知钝化, perceive-then-reason, scaling-law]
created: 2026-03-22
updated: 2026-03-22
sources: ["浙大团队破解多模态模型「盲目自信」：先校准置信度，再分配算力丨cvpr'26.md"]
---

# CA-TTS (Confidence-Aware Test-Time Scaling)

CA-TTS（置信度感知的测试时扩展）是一个由浙江大学团队提出的多模态模型推理框架，旨在解决模型的 [[感知钝化]] 问题，通过动态分配算力来提升推理效率和准确性。

## 核心机制
CA-TTS 框架包含三个协同工作的模块，由专家模型根据置信度信号动态调度：

1.  **Self-Consistency（自洽性）**：
    -   不再使用简单的多数投票，而是采用置信度加权投票。
    -   引入专家模型作为外部校准器，对候选答案进行二次评估。

2.  **Self-Reflection（自反思）**：
    -   当初步结果置信度不足时，专家模型以 Critic 角色生成批评意见。
    -   引导基础模型跳出原有错误路径，重新进行推理。

3.  **Self-Check（自检查）**：
    -   在视觉层面对答案进行验证。
    -   通过对比解码，比较原始图像与噪声图像下的输出概率分布，确认答案是否真正依赖视觉证据。

## 性能表现
- **准确率提升**：在 Math-Vision 基准上，将准确率从 23.0% 提升至 42.4%。
- **扩展效率**：Test-Time Scaling 斜率（β）达到 3.65，显著高于 Majority Voting（1.64）和 DeepConf（1.19）。这意味着 CA-TTS 能更有效地将额外算力转化为性能提升。

## 理论意义
CA-TTS 实现了 [[Perceive-then-Reason]]（先感知后推理）的范式转变。它强调在进行复杂推理之前，必须先建立可靠的置信度评估，从而将算力集中在模型真正不确定的问题上。