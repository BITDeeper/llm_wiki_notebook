---
type: concept
title: 隐式分割 token
tags: [nlp, llm, architecture]
related: [ibisagent, 多模态-agent]
created: 2026-04-21
updated: 2026-04-21
sources: ["国产多模态agent拿下医学分割sota！不用改模型、不加token-浙大&上海ai-lab.md"]
---

# 隐式分割 token

[[隐式分割 token]]（Implicit Segmentation Token）是指在多模态大模型（MLLM）中，为了赋予模型图像分割能力而引入的特殊标记（如 `<SEG>`）。

## 传统做法与问题
在早期的医学多模态模型中，为了将视觉特征转化为分割 Mask，通常会在文本输出空间中插入特殊的分割 token，并配合外部的 Pixel Decoder 进行微调。
然而，这种做法存在显著弊端：
1.  **侵占文本空间**：特殊 token 占用了原本用于语言推理的词汇表位置。
2.  **能力退化**：导致模型的语言推理能力出现退化，甚至发生灾难性遗忘。
3.  **不可解释**：隐式的特征映射往往缺乏直观的语义对应。

## IBISAgent 的替代方案
[[IBISAgent]] 摒弃了隐式分割 token，转而采用[[多模态-agent]]范式：
-   **保留语言能力**：不修改模型架构和输出空间，完整保留了文本推理能力。
-   **显式交互**：通过输出结构化的点击指令（自然语言或坐标）来调用外部工具（如[[MedSAM2]]）完成分割。
-   **迭代精化**：利用多步推理和视觉反馈循环，逐步逼近最优分割结果，而非依赖单次隐式输出。