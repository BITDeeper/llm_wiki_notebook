---
type: entity
title: SAM 3D
created: 2026-06-06
updated: 2026-06-08
tags: ["3d重建", "计算机视觉", "meta", "cvpr最佳论文提名", "3d-reconstruction", "cvpr-2026", "computer-vision", "open-source"]
related: ["d4rt", "cvpr-2026", "人机协同数据管线", "meta", "sa-3dao", "3dgs-3d高斯溅射", "世界模型", "生成式解码器范式"]
sources: ["刚刚，何恺明resnet、yolo获时间检验奖！cvpr-2026奖项出炉.md", "rss/永远可以期待的meta！cvpr-2026-最佳论文提名奖作品“sam-3d”解读.md"]
origin_date: 2025-11-01
---
# SAM 3D

SAM 3D（Segment Anything 3D / 3Dfy Anything in Images）是[[meta|Meta]]超级智能实验室开发的从单张2D图像实现完整3D场景重建的生成式模型，继承SAM分割万物的精神并推向三维空间。获CVPR 2026**最佳论文提名奖**。

## 核心能力

SAM 3D是一个用于视觉基底3D物体重建（Visually Grounded 3D Object Reconstruction）的模型，核心能力包括：

- 从单张图像重建物体的精细几何形状与纹理
- 预测物体在相机坐标系下的三维布局（旋转、平移、缩放）
- 实现整张图像的完整3D场景重建
- 输出格式支持Mesh和[[3dgs-3d高斯溅射|3DGS]]

## 架构

- **几何模型**：1.2B参数，采用[[混合transformer]]（Mixture-of-Transformers）架构，联合预测粗糙形状和三维布局
- **纹理与精细化模型**：600M参数，采用[[稀疏潜流匹配]]（Sparse Latent Flow Matching）Transformer
- **3D解码器**：通过VAE解码器将潜表征解码为Mesh或3DGS

## 训练范式

采用[[多阶段训练范式]]，类比LLM训练流程，将合成数据预训练与真实世界对齐相结合，打破了3D领域的"数据壁垒"：

1. **预训练**：在Iso-3DO数据集（270万个独立3D物体）上学习形状和纹理的"基础词汇表"
2. **中期训练**：使用RP-3DO半合成数据集，应对遮挡和不完整掩码
3. **后期训练**：通过[[人机协同标注]]（MITL）数据引擎收集近100万张真实图像3D标注
4. **SFT + DPO**：监督微调后进行[[直接偏好优化]]
5. **蒸馏**：NFE从25降至4，实现亚秒级重建

## 性能指标

- 在自然真实图像（存在遮挡和凌乱场景）中表现优异
- [[sa-3dao|SA-3DAO]]基准F1@0.01：**0.2344**（Hi3DGen: 0.1629, Trellis: 0.1475）
- 场景级3D IoU：SA-3DAO **0.4254**，ADT **0.4970**
- 人类偏好测试：对所有对手保持至少**5:1**胜率
- 相较于近期其他工作取得显著提升

## 开源信息

- 论文：arxiv.org/abs/2511.16624
- 代码：github.com/facebookresearch/sam-3d-objects
- 在线Demo：aidemos.meta.com

## 方法论意义

SAM 3D的核心贡献不仅是模型本身，更重要的是为3D视觉领域探索出了一条"数据飞轮"路径：通过[[半合成数据生成]]和[[人机协同标注]]突破3D数据稀缺瓶颈，将LLM训练方法论（预训练→SFT→DPO→蒸馏）系统迁移至3D视觉领域。