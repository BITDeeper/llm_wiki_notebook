---
type: entity
title: NVIDIA Isaac Sim
created: 2026-05-13
updated: 2026-05-13
tags: [仿真平台, 工具, NVIDIA, 机器人]
related: [realappliance, sim2real, 具身智能数据困境]
sources: ["cvpr-2026-highlight｜让家电「在仿真中运转起来」，北大正式发布realappliance！.md"]
---
# NVIDIA Isaac Sim

NVIDIA Isaac Sim 是 NVIDIA 提供的机器人仿真平台，基于 USD（Universal Scene Description）格式构建。

## 在 RealAppliance 中的应用

[[realappliance]] 数据集的资产构建流程中，研究团队将 3ds Max 中完成的模型与纹理导入 Isaac Sim，生成 USD 格式数字资产。在 Isaac Sim 中完成：

- 统一右手坐标系，以几何中心为原点
- 部件命名严格遵循说明书术语
- 关节参数配置（旋转关节、棱柱关节、固定关节）
- 材质参数调节（玻璃、塑料、金属等表面效果）