---
type: concept
title: Vision-Language Mixture-of-Transformers
created: 2026-03-25
updated: 2026-03-25
tags: [概念, 架构, vla]
related: [deepvision-vla, action-guided-visual-pruning, dinov3]
sources: ["vla别再「走神」：即插即用提升视觉泛化，相对pi0.5提升18%.md"]
---
# Vision-Language Mixture-of-Transformers

[[Vision-Language Mixture-of-Transformers]] (VL-MoT) 是 [[DeepVision-VLA]] 框架提出的核心架构创新。

## 设计理念
传统的 VLA 模型通常采用早期融合，即视觉特征仅在输入层与语言模型结合。VL-MoT 则主张在 VLA 主干网络的**深层**引入视觉专家模型，并通过共享注意力机制进行交互。

## 工作原理
1.  **深层对齐**：将视觉专家（如 [[DINOv3]]）的多层特征与 VLA 深层进行对齐。
2.  **共享注意力**：在深层模块中，VLA 和视觉专家共享注意力计算，使得动作预测层可以直接访问高质量的视觉表征。
3.  **保留表征能力**：视觉专家分支保持双向注意力，保留其预训练的表征能力，不被简单的拼接操作淹没。

## 优势
*   **精准增强**：将视觉增强精准地放在最需要它的深层动作预测阶段，而非浅层输入。
*   **缓解退化**：直接解决了 VLA 模型在深层推理中视觉信息利用率下降的问题。