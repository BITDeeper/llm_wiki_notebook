---
type: source
title: "CVPR 2026 | 让3DGS看见内部结构，中关村学院GaussianPile实现切片式容积影像快速重建"
created: 2026-05-21
updated: 2026-05-21
tags: [3dgs, 医学影像, 容积重建, cvpr-2026, ai-for-science]
related: [gaussianpile, 3d-gaussian-splatting, 切片式容积成像, 中关村学院, 清华大学]
sources: ["cvpr-2026-让3dgs看见内部结构，中关村学院gaussianpile实现切片式容积影像快速重建.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/K8Hnh3bp-mnzJRDZvbaShw"
venue: 机器之心
---
# CVPR 2026 | 让3DGS看见内部结构，中关村学院GaussianPile实现切片式容积影像快速重建

本文报道了北京[[中关村学院]]与[[清华大学]]联合提出的 [[gaussianpile|GaussianPile]] 框架，该工作发表于 CVPR 2026，arXiv 编号 2603.20611。

## 核心内容

GaussianPile 是一个面向[[切片式容积成像]]的稀疏高斯表示与重建框架，将传统 voxel grid 形式的三维体数据转换为 3D Focus Gaussian primitives，在保持内部结构可重建的同时实现压缩、快速渲染和三维体素化评估。

### 关键创新

1. **Focus-Aware Physical Model**：将成像系统在切片方向上的点扩散函数建模为有限厚度的 sensitivity map，与高斯投影过程结合
2. **Additive Rasterization**：采用加性累积而非 alpha blending，更符合切片式容积成像的物理含义
3. **3D Focus Gaussian Primitives**：去除球谐系数，保留位置、尺度、方向和强度参数

### 实验结果

- 相对 voxel grid 实现约 16 倍稳定压缩，部分数据集达 20-26 倍
- 平均收敛时间约 8 分钟，部分数据约 3 分钟
- 相比 INR/NeRF 类方法最高约 11 倍加速
- 在 ABUS、LSM、细胞显微、电子显微等多组数据上验证

### 作者信息

第一作者：[[孔迪]]（中关村学院 & 清华大学 2024 级联培博士生）
通讯作者：[[马骋]]（清华大学长聘副教授、中关村学院共建导师）、[[陈誉文]]（清华大学博士后）

该研究依托中关村学院学生自主立项"乳腺智能微创手术机器人系统及关键技术研究"项目开展。