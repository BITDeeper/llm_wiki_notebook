---
type: source
title: "CVPR 2026 Highlight | GOR-IS：在内在空间重塑3D高斯物体移除，物理一致性大幅领先"
created: 2026-05-15
updated: 2026-05-15
tags: [3dgs, 物体移除, cvpr-2026, pbr, 全局光照, 场景编辑]
related: [gor-is, 3d高斯溅射, cvpr-2026, 内在空间编辑]
sources: ["cvpr-2026-highlight-gor-is：在"内在空间"重塑-3d-高斯物体移除，物理一致性大幅领先.md"]
authors: [南开大学, 南京大学]
year: 2026
url: "https://mp.weixin.qq.com/s/2MoPdbrvV6Mj-GcgB2fLEQ"
venue: "我爱计算机视觉"
---
# CVPR 2026 Highlight | GOR-IS：在内在空间重塑3D高斯物体移除，物理一致性大幅领先

本文介绍了来自南开大学和南京大学的研究团队提出的 [[gor-is]] 框架，全称为"内在空间中的3D高斯物体移除"（3D Gaussian Object Removal in the Intrinsic Space）。该工作被录用为 CVPR 2026 Highlight 论文。

## 核心问题

现有3D物体移除技术（如3DGIC、GScream）只关注物体本身的"消失"，却忽略了全局光照效应（反射、阴影、溢色），导致移除后出现"物理灵异"现象——物体没了，倒影还在。此外，非朗伯体表面的视角相关颜色特性也导致传统方法出现模糊和重影。

## 核心方案

GOR-IS 将场景操作从 RGB 颜色空间转移到"内在空间"（材质与光照属性空间）：

1. **材质与光照深度解耦**：扩展 [[3d高斯溅射]] 表示，为每个高斯点赋予 [[基于物理渲染]] 属性（漫反射、菲涅耳项、粗糙度），采用 [[延迟着色]] 策略渲染。
2. **[[光照感知掩码]]**：通过光线追踪识别受被移除物体反射影响的区域，强制重新生成，彻底根除残留倒影。
3. **[[屏幕空间滤波器]]**：对理想镜面反射进行 Mipmap 滤波，以极低计算成本模拟不同粗糙度下的光泽感。

## 实验结果

- 在 GOR-IS-Synthetic、GOR-IS-Real 和 SPIn-NeRF 数据集上全面领先。
- 合成数据集 PSNR 达 31.91，较 GScream 提升约 2dB。
- LPIPS 提升约 13%，感知质量显著改善。
- 蒸馏版本推理速度达 301 FPS（完整版约 15 FPS）。

## 局限性

作者坦诚目前无法完美处理多次反弹的漫反射全局光照（如彩色物体间的相互溢色）。

## 资源

- 论文地址：https://arxiv.org/abs/2605.00498
- 项目主页：https://applezyh.github.io/GOR-IS-project-page
- 代码仓库：https://github.com/applezyh/gor-is（已开源）