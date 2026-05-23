---
type: entity
title: GaussianPile
created: 2026-05-21
updated: 2026-05-21
tags: [3dgs, 医学影像, 容积重建, 算法框架, cvpr-2026]
related: [3d-gaussian-splatting, 切片式容积成像, 中关村学院, 清华大学, ai-for-science]
sources: ["cvpr-2026-让3dgs看见内部结构，中关村学院gaussianpile实现切片式容积影像快速重建.md"]
origin_date: 2026-03-01
---
# GaussianPile

GaussianPile 是由北京[[中关村学院]]与[[清华大学]]联合提出的面向[[切片式容积成像]]的稀疏高斯表示与重建框架，发表于 CVPR 2026（arXiv: 2603.20611）。

## 核心问题

标准 [[3d-gaussian-splatting|3DGS]] 主要面向自然场景的表面渲染，假设相机是 all-in-focus 的。当直接用于切片式医学/科学成像数据时，二维切片可能拟合良好，但三维内部结构并不可靠。GaussianPile 旨在解决这一问题。

## 技术架构

### Focus-Aware Physical Model

将成像系统在切片方向上的点扩散函数建模为有限厚度的 sensitivity map，与每个 3D Gaussian 的投影过程结合。距离当前切片较近的高斯对图像产生主要贡献，离焦区域的高斯被自然衰减。

### 渲染管线（Scan-Focus-Pile）

1. **Scan**：在三维高斯表示中采样不同深度的虚拟切片
2. **Focus**：根据切片厚度和系统焦深，对高斯进行轴向重参数化，调制离焦区域贡献
3. **Pile**：采用 additive rasterization 累积体积强度

### Additive Rasterization

区别于自然场景渲染中常用的 alpha blending（处理遮挡关系），GaussianPile 采用加性累积来描述不同高斯对同一像素的贡献，因为切片式医学成像中的像素强度更接近体积信号沿成像方向的积分。

### 3D Focus Gaussian Primitives

每个高斯包含位置、尺度、方向和强度参数，去除了标准 3DGS 中用于表面外观建模的球谐系数，因为医学切片强度更接近视角无关的体积密度。

## 实验表现

| 指标 | 表现 |
|------|------|
| 压缩率 | 相对 voxel grid 约 16 倍稳定压缩，部分数据集 20-26 倍 |
| 收敛时间 | 平均约 8 分钟，部分数据约 3 分钟 |
| 加速比 | 相比 INR/NeRF 类方法最高约 11 倍 |
| 重建质量 | 在 2D/3D PSNR/SSIM 上优于 HEVC、INR/NeRF 和直接 3DGS |

实验覆盖数据集：自动乳腺超声（ABUS）、光片显微（LSM）、细胞显微、电子显微。

## 应用前景

- 医学影像压缩存储与快速浏览
- 科学成像数据分析
- 机器人辅助手术中的实时三维感知
- 三维分割与可变形建模

## 研究团队

第一作者 [[孔迪]]，通讯作者 [[马骋]]、[[陈誉文]]。研究依托中关村学院学生自主立项"乳腺智能微创手术机器人系统及关键技术研究"项目。