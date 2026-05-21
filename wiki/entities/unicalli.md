---
type: entity
title: UniCalli
created: 2026-03-23
updated: 2026-03-23
tags: [ai, calligraphy, diffusion-model, multimodal]
related: [mmdit, 书法生成, 游丝连笔, 列级排版, 香港科技大学广州, 陈颖聪, 许添硕]
sources: ["告别ai「鬼画符」！一行指令「复活」王羲之、苏轼，带连笔、懂排版，项目已开源丨iclr'26.md"]
---
# UniCalli

UniCalli 是一个由 [[香港科技大学广州]] 团队开发的统一扩散框架，专门用于高质量的书法生成与古籍识别。该项目已被 [[ICLR 2026]] 接收。

## 核心特性
UniCalli 旨在解决传统 AI 书法生成中“单字拼凑没行气”和“整页生成结构崩”的问题。它不仅能生成单字，还能实现 [[列级排版]] 和自然的 [[游丝连笔]]。

## 技术架构
-   **统一框架**：将“书法生成”和“古籍识别”统一在同一个模型中。识别任务约束生成器保持汉字骨架结构，生成任务提供风格先验。
-   **MMDiT**：采用 [[多模态扩散Transformer]] 作为基座，利用双向注意力机制在每一步去噪时统览全局画布。
-   **空间对齐**：引入 [[BoxMap]] (边界框图) 和 [[Duplicate RoPE]] (重复旋转位置编码) 来处理复杂的空间布局和多模态对齐。
-   **训练策略**：使用 [[非对称加噪]] 进行任务切换，并采用 [[条件随机失活]] 防止过拟合。

## 性能表现
在专家盲测中，UniCalli 在风格还原度、字形准确性和自然度上全面超越了 ChatGPT-4o、Doubao 等主流大模型及先前的 SOTA 模型。

## 泛化能力
除了常规的楷书、行书和草书，UniCalli 还展现了惊人的泛化能力：
-   能够“逆向”生成结构神似的甲骨文。
-   能够跨界处理古埃及象形文字。

## 开源资源
项目已全面开源，包括代码、模型和超大规模数据集。
-   HuggingFace 数据集：[TSXu/UniCalli_dataset](https://huggingface.co/datasets/TSXu/UniCalli_dataset)
-   在线 Demo：[TSXu/UniCalli_Dev](https://huggingface.co/spaces/TSXu/UniCalli_Dev)