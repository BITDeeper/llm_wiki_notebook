---
type: concept
title: Template-based RLE 表征
created: 2026-06-06
updated: 2026-06-06
tags: [3d表征, 几何编码, 压缩, vlm]
related: [physx-omni, physical-ai]
sources: ["大晓机器人联合南洋理工打通physical-ai全链路！physx-omni补齐物理ai基建.md"]
---
# Template-based RLE 表征

Template-based RLE Representation 是 [[physx-omni]] 提出的一种专门面向视觉语言模型（VLM）的全新三维几何表征方法，受经典二维行程编码（Run-Length Encoding, RLE）启发。

## 核心思想

### 基本流程
1. 将 3D 资产体素化（voxelization）
2. 根据部件层级结构划分为 part-level voxels
3. 每个部件级体素沿 z-axis 切分为一系列二维二值 mask
4. 对每一层采用紧凑的二维 RLE 编码，将占据区域高效转换为文本 token 表示

### 模板层创新
三维结构在相邻切片之间通常具有较强的空间冗余性。Template-based RLE 提出了**模板层（template layers）**概念：
- 多个结构相似的切片共享同一个模板
- 仅记录相对于模板的残差变化
- 无需对每一层进行独立编码

## 技术优势
- **高效压缩：** 通过复用跨层结构模式，在保留精细几何信息的同时大幅减少 token 数目
- **无需额外 special token：** 可直接使用现有 VLM 的 token 体系
- **鲁棒性强：** 始终保持显式三维结构信息，相比传统自回归方法有效降低预测误差累积
- **避免 segmentation 误差：** 不依赖分割步骤，避免误差传播

## 适用场景
- 高分辨率三维结构建模
- 复杂关节物体和可形变物体的几何表征
- 面向 VLM 的 3D 生成任务