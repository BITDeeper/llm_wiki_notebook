---
type: entity
title: OcclusionFormer
created: 2026-05-24
updated: 2026-05-24
tags: [计算机视觉, 图像生成, 遮挡处理, 扩散模型, ICML-2026]
related: [fudan-cvl, sa-z-dataset, 布局到图像生成, z-order-遮挡, 实例解耦, 体渲染, 查询对齐损失]
sources: ["icml-2026：复旦大学新作，如何让布局条件模型生成出更精准的物体遮挡？.md"]
origin_date: 2026-05-24
---
# OcclusionFormer

OcclusionFormer 是由 [[fudan-cvl|复旦大学 FudanCVL 团队]]（Ziye Li, Henghui Ding）提出的 [[布局到图像生成]] 模型，旨在提升扩散模型准确处理复杂物体遮挡关系的能力。论文已被 ICML 2026 录用。

## 核心问题

现有布局条件生成方法缺乏显式 [[z-order-遮挡|Z 轴深度信息]]，在密集边界框重叠场景下无法确定准确遮挡关系，常在重叠区域生成粘连纹理或违背物理常识的分层。虽然已有工作（如 LaRender）尝试引入体积渲染进行无训练遮挡模拟，但对超参数极其敏感且难以保持空间精度。

## 技术架构

OcclusionFormer 基于 Flux.1-dev 作为基础 DiT 模型，通过三阶段训练框架解决遮挡问题：

### 1. 实例解耦（Instance Decoupling）
在局部视觉子集上利用低秩适配（LoRA）计算多模态注意力，减轻重叠区域背景特征的干扰，使模型具备独立的实例生成能力。

### 2. 体渲染（Volume Rendering）
借鉴 NeRF 中的体渲染原理，通过虚拟正交相机审视图像平面，将物体组合生成过程概念化为光线穿过按 Z-order 显式排列的像素空间，避免传统平面特征混合在密集交叉区域产生的严重特征纠缠。

### 3. 查询对齐损失（Queried Alignment Loss）
结合 [[sa-z-dataset|SA-Z 数据集]] 中的 amodal 标注，创新性地让每个实例的密度向量受扩散时间步和文本嵌入的动态调制。通过计算透射率动态调整不透明度来压制背景特征，确保模型按遮挡优先级渲染像素。

## 实验结果

在 [[overlaybench|OverLayBench]] 基准的三种重叠复杂度（Simple、Regular、Complex）和 SA-Z Eval 真实场景基准上：
- **O-mIoU**：最高空间准确度
- **Occ.（遮挡顺序）**：全面超越 SOTA 基线
- **Dep.（深度顺序）**：全面超越 SOTA 基线
- **FID**：保持生成图像真实感

对比基线包括 Eligen、Creatilayout、InstanceAssemble 等方法。

## 资源链接

- 论文：https://arxiv.org/pdf/2605.21343
- 项目主页：https://henghuiding.com/OcclusionFormer/
- Github：https://github.com/FudanCVL/OcclusionFormer
- Huggingface：https://huggingface.co/FudanCVL/OcclusionFormer