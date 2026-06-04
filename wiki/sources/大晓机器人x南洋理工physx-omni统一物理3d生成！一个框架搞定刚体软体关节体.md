---
type: source
title: "大晓机器人x南洋理工PhysX-Omni统一物理3D生成！一个框架搞定刚体/软体/关节体"
created: 2026-06-03
updated: 2026-06-03
tags: [3d生成, 物理仿真, 具身智能, simulation-ready, 数据集]
related: [physx-omni, 大晓机器人, 南洋理工大学-刘子纬团队, simulation-ready物理3d生成, 量子位]
sources: ["大晓机器人x南洋理工physx-omni统一物理3d生成！一个框架搞定刚体软体关节体.md"]
authors: [曹子昂, 量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/lhzwJY92jPnNwYwif2ZAjQ"
venue: 量子位公众号
---
# 大晓机器人x南洋理工PhysX-Omni统一物理3D生成！一个框架搞定刚体/软体/关节体

本文由曹子昂投稿、量子位发布，报道了大晓机器人联合南洋理工大学刘子纬教授团队提出的 [[physx-omni]]——首个统一的simulation-ready物理3D生成框架。

## 核心内容

文章指出3D生成领域的核心矛盾：现有方法生成的3D资产外观和几何质量越来越高，但大多只能"看"不能"用"——缺乏真实尺度、材料属性、运动能力和交互语义，无法直接用于仿真器训练机器人。此外，刚体、可形变物体、关节物体三大类别此前没有统一框架。

## 关键技术贡献

1. **Template-based RLE几何表征**：受二维RLE启发，将3D资产体素化后按部件层级切分为二维mask，通过template layers共享结构相似切片、仅记录残差，实现高分辨率三维结构的高效文本token编码。
2. **[[physxverse]] 数据集**：首个通用物理化3D数据集，包含8.7K+高质量资产，覆盖2.9K+类别。
3. **[[physx-bench]] 评测基准**：首个统一评测基准，基于Qwen3.5 VLM与物理仿真，从Geometry、Absolute Scale、Material、Affordance、Kinematics、Description六个维度进行ground-truth-free评测。

## 实验结果

- PhysX-Omni在几乎所有几何与物理属性指标上达到SOTA
- Absolute Scale误差相比此前方法（PhysXGen、PhysX-Anything）降低了两个数量级
- 在Material、Affordance、Description、Kinematics维度均取得最优
- 生成的资产可直接部署到物理模拟器中用于机器人交互与策略学习

## 团队信息

论文第一作者为曹子昂，研究方向为3D AIGC、Physical AI与具身智能。通讯作者为南洋理工大学刘子纬教授。[[大晓机器人]] 此前曾发布ACE具身研发范式。