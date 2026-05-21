---
type: entity
title: ReCALL框架
tags: [ai, framework, multimodal, retrieval, cvpr-2026]
related: [范式冲突, 组合图像检索, 最小编辑合成, 分组对比学习, 紫东太初团队]
created: 2026-04-06
updated: 2026-04-06
sources: ["让大模型多模态检索全面超越sota！recall框架化解生成式与判别式的范式冲突｜cvpr'26.md"]
---

# ReCALL框架

**ReCALL**（全称暂未在文中明确，可能指 Retrieval with Calibration and Learning）是一个由紫东太初团队联合新加坡国立大学提出的多模态检索框架，旨在解决多模态大模型（MLLM）在检索任务中的能力退化问题。该成果发表于 CVPR 2026。

## 核心机制
ReCALL 的核心在于利用大模型原生的推理信号来纠正检索空间的盲区，通过“诊断-生成-校准”的闭环体系，化解生成式与判别式的范式冲突。

## 四阶段流程
1.  **Stage 1: Baseline Adaptation (基础适配)**
    使用标准的 InfoNCE 损失函数将原生生成式模型微调为判别式检索器。这一步虽然赋予了基础检索能力，但也诱发了能力退化。

2.  **Stage 2: Diagnose (自我诊断)**
    让基础检索器在训练集上运行，专门筛选出检索错误的样本。这些高分负样本代表了模型认知模糊的盲区。

3.  **Stage 3: Generate (生成校正)**
    利用原生模型的推理能力生成纠错数据。
    -   **Intent Decomposition & Verification**：将修改指令拆解为原子意图，并对照参考图和错图进行核查。
    -   **Minimal Edit Synthesis**：仅重写与错图相违背的部分，生成新的纠错指令。这保证了数据分布的一致性。

4.  **Stage 4: Refine (针对性打磨)**
    通过**分组对比学习**（Grouped Contrastive Refinement），将原始查询和纠错查询打包训练，逼迫模型明确区分细微的视觉-语义边界，从而内化推理能力。

## 性能表现
- 在 **CIRR** 数据集上达到 **55.52%** R@1（SOTA）。
- 在 **FashionIQ** 数据集上平均 R@10 达到 **57.04%**。
- 在细粒度子集上表现尤为突出，解决了传统方法“智能倒退”的问题。

## 关联概念
- [[范式冲突]]：ReCALL 试图解决的核心问题。
- [[最小编辑合成]]：ReCALL 中生成高质量纠错数据的关键技术。