---
type: entity
title: ViT³ (ViTTT)
created: 2026-06-11
updated: 2026-06-11
tags: [vision-transformer, test-time-training, linear-complexity, cvpr-2026-oral, best-paper-finalist]
related: [测试时训练-ttt, 清华大学, cvpr-2026, dsa-稀疏注意力, rtpturbo-v2, vlm3, sam-3d]
sources: ["rss/cvpr-2026-oral-vit³：解锁视觉中的测试时训练，速度快了、显存省了，精度也依然在线.md"]
origin_date: 2025-12-02
---
# ViT³ (ViTTT)

清华大学与阿里巴巴集团联合提出的视觉测试时训练（Test-Time Training）架构，入围CVPR 2026 Best Paper决赛圈（16,092篇投稿中选15篇）。论文arXiv预印本编号2512.01643，代码已开源（github.com/LeapLabTHU/ViTTT）。

## 核心创新

ViT³将[[测试时训练-ttt|测试时训练（TTT）]]从语言模型领域系统性迁移至视觉任务。核心思路是将键值对视为"微型数据集"，在推理阶段通过几步自监督在线训练更新内部模块权重，实现线性复杂度的序列建模。

## 三个模型变体

| 变体 | 设计类型 | 对标架构 | 适用任务 |
|------|----------|----------|----------|
| ViT³ | 非层次化（等高） | DeiT | 图像分类 |
| H-ViT³ | 层次化4阶段 | Swin Transformer | 分类、检测、分割 |
| DiT³ | 扩散生成 | DiT | 图像生成 |

## 关键性能

- **ImageNet-1K分类**：H-ViT³-S达84.4%（+MESA达84.9%），超越VMamba-S（83.6%）和SOFT-M++（83.7%）
- **COCO检测/分割**：全面压制Mamba和线性注意力方法
- **ADE20K语义分割**：H-ViT³-B达51.7% mIoU，优于VMamba-B（51.0%）
- **图像生成**：DiT³-S/2 FID 62.65，优于原始DiT-S/2（68.40）
- **效率**：2048×2048分辨率下吞吐加速4.6倍，显存降低90.3%

## 六大设计见解

1. **损失函数选择**：混合二阶导数趋于零的损失函数（MAE/L1）不适用TTT，MSE/L2和点积损失有效
2. **训练策略**：视觉任务适合单Epoch全Batch内部训练（非因果性决定）
3. **学习率**：较大内部学习率（1.0）最有效
4. **宽度扩展**：增加内部模型宽度稳定提升性能
5. **深度瓶颈**：深层内部模型存在优化瓶颈（梯度消失/爆炸），是待解决的开放问题
6. **DWConv发现**：深度可分离卷积是理想的内部模型架构，将全局信息编码进卷积核权重，自然融合全局与局部信息

## 技术路线定位

ViT³属于"降低Transformer计算复杂度"技术家族，但路线不同于：
- [[dsa-稀疏注意力|DSA稀疏注意力]]：通过动态筛选重要token实现稀疏化
- [[rtpturbo-v2|RTPurboV2]]：通过释放内生稀疏性实现压缩
- ViT³：通过测试时训练实现线性复杂度，无需修改注意力结构本身

与[[vlm3|VLM³]]同为CVPR 2026期间发布的重要架构工作，VLM³聚焦三维视觉的Bitter Lesson，ViT³聚焦基础架构效率，两者互补。

## 开放问题

- TTT内部模型的深度优化瓶颈（Insight 5）是否有解决方案？
- ViT³在更大规模数据和模型上的Scaling表现如何？
- TTT范式能否与稀疏注意力、上下文压缩等技术结合？