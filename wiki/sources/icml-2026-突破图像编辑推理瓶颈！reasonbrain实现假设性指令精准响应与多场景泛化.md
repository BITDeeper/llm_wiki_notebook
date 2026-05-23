---
type: source
title: "ICML 2026 | 突破图像编辑推理瓶颈！ReasonBrain实现假设性指令精准响应与多场景泛化"
created: 2026-05-19
updated: 2026-05-21
tags: [图像编辑, 推理, ICML-2026, 多模态, 扩散模型]
related: [reasonbrain, reason50k, 假设性指令图像编辑, frce-module, cme-module]
sources: ["icml-2026-突破图像编辑推理瓶颈！reasonbrain实现假设性指令精准响应与多场景泛化.md"]
authors: [我爱计算机视觉]
year: 2026
url: "https://mp.weixin.qq.com/s/unRgO3eHKfT8kuPvgXubTw"
venue: ICML 2026
---
# ICML 2026 | 突破图像编辑推理瓶颈！ReasonBrain实现假设性指令精准响应与多场景泛化

本文介绍了被 ICML 2026 接收的论文《Reasoning to Edit: Hypothetical Instruction-Based Image Editing with Visual Reasoning》，提出了推理感知图像编辑框架 [[reasonbrain]] 和大规模假设性指令推理数据集 [[reason50k]]。

## 核心贡献

1. **数据集**：构建了包含 51,039 个样本的 [[reason50k]] 数据集，涵盖物理推理、时间推理、因果推理和故事推理四大场景，填补了假设性推理数据集的空白。
2. **框架**：提出 [[reasonbrain]] 框架，引入细粒度推理线索提取（[[frce-module|FRCE]]）模块和跨模态增强器（[[cme-module|CME]]），无需复杂架构调整即可实现推理能力大幅提升。
3. **性能**：在推理型和常规图像编辑任务中均全面超越现有 SOTA 方法，因果推理场景 Ins-Align 得分达 0.858（对比方法最高 0.501）。

## 关键技术

- **FRCE 模块**：双分支设计，视觉推理线索分支（VRCB）从局部和全局维度提取视觉特征，文本推理线索分支（TRCB）通过 ID 控制器实现物体令牌与视觉特征交互。
- **CME 模块**：双向交互机制，通过交叉注意力融合细粒度线索与编辑指导，强化语义一致性。
- **轻量融合策略**：仅通过 LoRA 微调即可适配现有架构，兼顾性能与计算效率。

## 实验结果

在 Reason50K、ReasonEdit、EditWorld、Complex-Edit、Emu Edit、MagicBrush 等多个数据集上进行了全面验证，定量和定性结果均显示显著优势。