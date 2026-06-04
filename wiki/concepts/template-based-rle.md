---
type: concept
title: Template-based RLE（基于模板的游程编码）
created: 2026-06-03
updated: 2026-06-03
tags: [3d生成, 几何表征, 编码方法, 技术概念]
related: [physx-omni, simulation-ready物理3d生成]
sources: ["大晓机器人x南洋理工physx-omni统一物理3d生成！一个框架搞定刚体软体关节体.md"]
---
# Template-based RLE（基于模板的游程编码）

Template-based RLE是 [[physx-omni]] 提出的一种全新几何表征方法，受经典二维Run-Length Encoding（RLE）启发，用于显式、高效地建模高分辨率三维结构。

## 核心思想

### 基本流程

1. **体素化**：将3D资产体素化（voxelization），根据部件层级结构划分为part-level voxels
2. **切片编码**：每个部件级体素沿z-axis切分为一系列二维二值mask，对每一层采用紧凑的二维RLE编码，将占据区域高效转换为文本token表示

### Template Layers 创新

三维结构在相邻切片之间通常具有较强的空间冗余性，尤其在平滑区域或重复结构中。Template-based RLE提出了 **template layers** 概念：

- 多个结构相似的切片可以共享同一个模板
- 仅记录它们相对于模板的残差变化
- 无需对每一层进行独立编码
- 通过复用跨层结构模式，大幅减少token数目

## 技术优势

1. **不引入special token**：在标准文本token空间内完成三维结构编码
2. **显式三维结构**：整个生成过程始终保持显式三维结构信息
3. **降低误差累积**：相比传统autoregressive geometry generation方法具有更强鲁棒性
4. **高分辨率友好**：适用于复杂高分辨率三维结构建模

## 意义

这一表征方法是PhysX-Omni实现统一物理3D生成的关键技术基础，使得VLM能够直接理解和生成具备物理属性的三维资产。