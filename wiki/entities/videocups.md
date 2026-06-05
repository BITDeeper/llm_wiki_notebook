---
type: entity
title: VideoCUPS
created: 2026-06-05
updated: 2026-06-05
tags: [计算机视觉, 视频全景分割, 无监督学习, CVPR-2026, 伪标签]
related: [无监督视频全景分割, video-droploss, 共同命运原则, 慕尼黑工业大学, 英伟达, cvpr-2026]
sources: ["cvpr-2026-highlight-慕尼黑工业大学&英伟达等提出-videocups：利用运动与深度线索,首个无监督视频全景分割框架，性能刷新-sota.md"]
origin_date: 2026-06-01
---
# VideoCUPS

VideoCUPS 是首个完全无监督的视频全景分割（VPS）框架，由 [[慕尼黑工业大学]]、[[英伟达]]、[[达姆施塔特工业大学]]、[[牛津大学]] 等机构联合提出，被 [[cvpr-2026|CVPR 2026]] 接收为 Highlight 论文。

## 核心思想

VideoCUPS 的核心逻辑分为两步：

1. **伪标签生成**：利用运动一致性和深度线索从单目视频自动生成全景伪标签，包含三个模块：
   - **实例标注**：基于无监督光流网络（SMURF）和单目深度网络（DynamoDepth），通过改进的区域生长算法将像素聚合为实例掩码。
   - **语义标注**：利用 DINO 自监督特征进行深度引导的语义聚类。
   - **时序一致性处理**：通过光流传播和匈牙利匹配确保同一 ID 跨帧稳定。

2. **模型训练**：使用 [[video-droploss|Video DropLoss]] 和自增强视频 Copy-Paste 策略训练 VPS 模型。

## 关键创新

- **单目输入**：相比前作 CUPS 依赖双目相机，VideoCUPS 仅需单目视频，大幅降低硬件门槛。
- **[[共同命运原则]]**：借鉴格式塔心理学，以"一起运动的像素属于同一物体"作为伪标签生成的理论基础。
- **[[video-droploss|Video DropLoss]]**：针对稀疏伪标签设计的损失函数，仅对高 IoU 预测施加强监督，为模型留出识别静止物体的自由度。
- **自增强视频 Copy-Paste**：将模型高置信度预测物体抠出并粘贴到其他视频中，提升小物体检测跟踪能力。

## 性能表现

| 数据集 | 指标 | 结果 |
|--------|------|------|
| Cityscapes-VPS 验证集 | STQ | 22.2%（无监督 SOTA） |
| Cityscapes-VPS（10% 标注微调） | STQ | 32.5% |
| KITTI-STEP / Waymo / MOTS | STQ | 跨域泛化优于所有基线 |

## 标签效率

VideoCUPS 最具工业价值的发现：作为预训练模型，仅用 **10% 标注** 微调即可超越从 DINO 初始化进行全量标注训练的效果，极大减少人工标注工作量。

## 技术演进

VideoCUPS 是此前图像级无监督分割方法（U2Seg、CUPS）向视频维度的直接扩展，代表了从静态图像理解到时序视频理解的技术跃迁。

## 资源

- 论文：arXiv 2606.04925
- 代码：https://github.com/visinf/cups/tree/main/videocups
- 项目主页：https://visinf.github.io/videocups