---
type: source
title: "CVPR 2026 最佳论文公布！D4RT 动态4D重建，出自谷歌DeepMind & UCL & 牛津"
created: 2026-06-05
updated: 2026-06-05
tags: [cvpr, 4d重建, 计算机视觉, 最佳论文, deepmind]
related: [d4rt, google-deepmind, cvpr-2026, 动态4d重建与追踪, 点查询范式]
sources: ["cvpr-2026-最佳论文公布！d4rt-动态4d重建，出自谷歌deepmind-&-ucl-&-牛津.md"]
authors: [我爱计算机视觉]
year: 2026
url: "https://mp.weixin.qq.com/s/VvQVdgmjBTypcbvjjwQADQ"
venue: 我爱计算机视觉
---
# CVPR 2026 最佳论文公布！D4RT 动态4D重建，出自谷歌DeepMind & UCL & 牛津

本文是 [[我爱计算机视觉]] 对 CVPR 2026 最佳论文 [[d4rt]] 的深度技术报道。

## 核心内容

报道详细介绍了由 [[google-deepmind]]、[[ucl-伦敦大学学院]] 和 [[牛津大学]] 联合提出的 D4RT（Dynamic 4D Reconstruction and Tracking）模型。该模型通过统一的"五元组"[[点查询范式]]接口，在单一前馈模型中同时解决 [[动态4d重建与追踪]] 的所有核心子任务。

## 关键技术亮点

- **全局场景表示（GSR）**：通过 ViT 编码器交替使用帧内局部自注意力和全局自注意力层构建固定全局特征矩阵
- **五元组查询接口**：(x, y, t_src, t_tgt, t_cam) 实现按需解码
- **局部 RGB 补丁**：嵌入以目标点为中心的局部图像块，保留边缘和纹理细节
- **占用网格算法**：维护时空占用状态表，为密集追踪带来 5-15 倍加速

## 性能数据

- 姿态估计：A100 上 200+ FPS，比 VGGT 快 9 倍，比 MegaSaM 快 100 倍
- 3D 追踪吞吐量：24 FPS 下同时输出 1,570 条全视频 3D 轨迹，比 SpatialTrackerV2 高约 18 倍，比 DELTA 高约 300 倍
- 训练：64 个 TPU 芯片上训练约 2 天

## 评测数据集

MPI Sintel、ScanNet、KITTI、Bonn、TAPVid-3D

## 备注

截至报道发布时，代码及模型权重尚未发现官方开源源。