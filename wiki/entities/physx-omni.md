---
type: entity
title: PhysX-Omni
created: 2026-06-03
updated: 2026-06-03
tags: [3d生成, 物理仿真, 框架, simulation-ready, 具身智能]
related: [大晓机器人, 南洋理工大学-刘子纬团队, physxverse, physx-bench, simulation-ready物理3d生成, template-based-rle]
sources: ["大晓机器人x南洋理工physx-omni统一物理3d生成！一个框架搞定刚体软体关节体.md"]
origin_date: 2026-06-03
---
# PhysX-Omni

PhysX-Omni是由 [[大晓机器人]] 联合 [[南洋理工大学-刘子纬团队]] 提出的首个统一的 [[simulation-ready物理3d生成]] 框架，一次性覆盖刚体、可形变物体与关节物体三大类别。

## 核心问题

现有3D生成方法生成的资产外观和几何质量越来越高，但大多只能"看"不能"用"——缺乏真实尺度、材料属性、运动能力和交互语义，无法直接用于仿真器训练机器人。更棘手的是，刚体、可形变物体、关节物体三大类别此前没有统一框架，且simulation-ready的物理3D数据极度稀缺。

## 技术方案

### Template-based RLE 几何表征
PhysX-Omni的核心创新是一种全新的几何表征方法 [[template-based-rle]]：

1. 将3D资产体素化（voxelization），按部件层级结构划分为part-level voxels
2. 每个部件级体素沿z-axis切分为二维二值mask，采用紧凑的二维RLE编码
3. 提出 **template layers** 概念：多个结构相似的切片共享同一个模板，仅记录残差变化
4. 在不引入special token的前提下显式建模高分辨率三维结构，降低预测误差累积

### 配套数据集与评测
- **[[physxverse]]** — 首个通用物理化3D数据集（8.7K+资产，2.9K+类别）
- **[[physx-bench]]** — 首个统一评测基准，基于Qwen3.5 VLM与物理仿真

## 实验结果

- 在几乎所有几何与物理属性指标上达到SOTA
- **Absolute Scale误差相比此前方法降低了两个数量级**
- 在Material、Affordance、Description、Kinematics维度均取得最优
- 运动学（Kinematics）提升尤为显著
- 生成的资产可直接部署到物理模拟器中用于机器人交互与策略学习

## 下游应用

- 机器人交互与策略学习
- 场景级simulation-ready生成
- Embodied AI world modeling

## 资源链接

- 论文：https://arxiv.org/abs/
- 项目主页：https://physx-omni.github.io/
- GitHub代码：https://github.com/physx-omni/PhysX-Omni