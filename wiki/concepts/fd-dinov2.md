---
type: concept
title: FD-DINOv2
created: 2026-05-30
updated: 2026-05-30
tags: [评测指标, 计算机视觉, 图像生成, DINOv2]
related: [gpic, dinov2, imagenet, 基准饱和]
sources: ["李飞飞造了imagenet，现在她又带人超越了它.md"]
---
# FD-DINOv2

**基于 DINOv2 特征的 Fréchet Distance 评估指标**，是 [[gpic]] 数据集配套的新评估协议，旨在替代已过时的 FID（Fréchet Inception Distance）指标。

## 与 FID 的对比
| 维度 | FID | FD-DINOv2 |
|------|-----|-----------|
| 特征提取网络 | Inception-v3（2015） | [[dinov2]]（Meta, 2023） |
| 与人类感知的一致性 | 脱节，容易被"刷榜" | 更一致 |
| 当前状态 | 已被刷穿，真实图片评分反而更高 | 所有主流模型仍有余量 |

## 关键设计
- 基于 [[dinov2]] 自监督视觉特征模型提取图片特征
- 与**独立百万张测试集**比较（而非训练集），防止模型通过记忆训练数据获得好分数
- 研究团队验证：目前所有主流生成模型（包括使用 DINOv2 特征训练的模型）在 FD-DINOv2 上的分数仍高于真实图片

## 参考基线
[[gpic]] 参考基线模型（JiT 架构，1.1B 参数）的 FD-DINOv2 评分为 76.25，研究团队承认"并不出色"，但为后续研究提供了公平比较的起点。

## 开放问题
FD-DINOv2 能维持多长时间的有效性？是否也会步 FID 后尘被刷穿？这取决于模型进步的速度和新评估方法的迭代。