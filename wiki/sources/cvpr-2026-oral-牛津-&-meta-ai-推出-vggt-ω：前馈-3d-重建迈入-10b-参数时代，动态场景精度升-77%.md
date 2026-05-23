---
type: source
title: "CVPR 2026 Oral | 牛津 & Meta AI 推出 VGGT-Ω：前馈 3D 重建迈入 10B 参数时代，动态场景精度升 77%"
created: 2026-05-17
updated: 2026-05-17
tags: [3d重建, 前馈模型, scaling-law, cvpr-2026, 牛津大学, meta-ai, 计算机视觉]
related: [vggt-omega, 牛津大学视觉几何组, meta-ai, 前馈3d重建, 寄存器注意力, scaling-law]
sources: ["cvpr-2026-oral-牛津-&-meta-ai-推出-vggt-ω：前馈-3d-重建迈入-10b-参数时代，动态场景精度升-77%.md"]
authors: [我爱计算机视觉]
year: 2026
url: "https://mp.weixin.qq.com/s/4-schz_SOIDnnHpROzrUjw"
venue: 我爱计算机视觉
---
# CVPR 2026 Oral | 牛津 & Meta AI 推出 VGGT-Ω：前馈 3D 重建迈入 10B 参数时代，动态场景精度升 77%

## 摘要

本文报道了牛津大学视觉几何组（VGG）与 Meta AI 联合发布的前馈3D重建大模型 [[vggt-omega|VGGT-Ω]]。该模型参数量达100亿（10B），被 CVPR 2026 接收为 Oral 论文，核心贡献在于验证了 [[scaling-law|Scaling Law]] 在3D重建领域同样成立——将模型从2亿参数扩展到100亿、训练数据从数千序列增加到400万，性能提升曲线接近完美线性。

## 核心发现

1. **Scaling Law 验证**：在 Sintel 数据集上，相机姿态估计 AUC@3° 从此前 SOTA 的 22.5 提升至 40.0，相对提升 77%。
2. **架构创新**：引入 [[寄存器注意力]]（Register Attention）降低约70%训练显存，使用 [[像素打乱上采样]] 替代传统 DPT 密集预测头。
3. **数据工程**：从4000万互联网视频中通过 [[vlm预过滤数据流水线]] 筛选出80万高质量序列，结合合成数据扩充至400万训练序列。
4. **涌现能力**：10B模型在无显式运动监督的情况下，内部特征自发区分运动物体与静止背景（[[涌现运动感知]]）。
5. **语义通用性**：寄存器特征可提升 [[vla-视觉-语言-动作|VLA]] 模型在 LIBERO 基准上的成功率（97.1%→98.5%），并可实现语言-3D对齐。

## 关键技术组件

- 视觉骨干网络：DINOv3（16-pixel patch size）
- 动态掩码提取：Grounding DINO
- 对比基线：[[depth-anything-3]]、[[megasam]]

## 技术局限

- 数据质量问题：前景泄露、薄结构失效、[[圆顶效应]]等噪声会导致模型幻觉。
- 部署成本：10B参数模型的推理算力需求未被讨论。