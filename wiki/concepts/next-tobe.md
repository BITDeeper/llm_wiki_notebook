---
type: concept
title: Next-ToBE
created: 2026-05-10
updated: 2026-05-10
tags: [训练目标, 损失函数, 推理优化]
related: [next-token-prediction, future-tokens-hit-rate, multi-token-prediction]
sources: ["大模型自信且短视！next-tobe破除next-token预测诅咒-iclr'26.md"]
---

# Next-ToBE (Next Token-Bag Exploitation)

**Next-ToBE** 是一种新的大模型训练目标函数，旨在解决传统 [[next-token-prediction]]（NTP）范式的“短视”问题。该方法由华东师范大学与复旦大学团队在 ICLR 2026 提出。

## 核心思想

传统的 NTP 训练强迫模型在每一步都追求局部最优（即对下一个 token 的预测置信度极高），这导致模型缺乏全局规划能力，在长程推理任务中表现不佳。Next-ToBE 的核心思想是：**让模型在预测当前 token 的同时，兼顾未来一段窗口内 token 的分布**。

## 技术原理

1.  **软目标分布**：
    Next-ToBE 将 NTP 中单一正确答案的 one-hot 分布替换为一个覆盖未来窗口的软目标分布。它不再要求模型把 100% 的概率质量都压在下一个 token 上，而是分出一部分“注意力”去覆盖未来 $k$ 个 token。

2.  **时空结构化加权**：
    未来 token 的权重由两类信号决定：
    -   **模型前瞻偏好 ($\alpha$)**：模型当前对该 token 的预测概率（保留预训练先验）。
    -   **时空关系 ($\beta$)**：通过交替随机游走建模，越接近当前、语义关联越强的 token 权重越高。

3.  **损失函数构成**：
    损失函数由“下一 token”主项与“未来窗口 token”软目标项辅助而成。通过最小化模型预测分布与该软目标分布之间的差异（如 KL 散度），训练模型形成对后续多步内容的感知。

## 优势与特点

-   **不改变模型结构**：与 [[multi-token-prediction]]（MTP）等方法不同，Next-ToBE 不需要增加额外的预测头（如 Medusa），推理仍是标准的单步自回归，工程实现更优雅。
-   **激活前瞻能力**：通过调节 **[[确定性分配]]**，适度降低对当前步骤的置信度，从而激活模型被 NTP 压制的潜在前瞻能力。
-   **性能提升**：在 36 组对比实验（涵盖数学、代码、常识推理）中，Next-ToBE 在 35 组中取得了最优结果。

## 置信度与推理的关系

研究发现，随着 Next-ToBE 中超参 $\lambda$ 增大，模型对下一 token 的预测置信度会下降，但推理准确率呈现 **先升后降的倒 U 型（A 形）曲线**。这表明“适度的不确定性”比“极度自信”更有利于长程推理。