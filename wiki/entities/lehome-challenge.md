---
type: entity
title: LeHome Challenge
created: 2026-06-01
updated: 2026-06-01
tags: [竞赛, ICRA, 具身智能, 衣物操作, 仿真]
related: [so101, 招商局狮子山人工智能实验室, 智谱具身智能部门, 柔性物体操作, sim2real]
sources: ["云端模型如何落地物理世界？招商局狮子山人工智能实验室用lios打通具身智能全链路.md"]
origin_date: 2026-01-01
---
# LeHome Challenge

LeHome Challenge 是 ICRA 2026 官方竞赛之一，聚焦家庭场景中的衣物操作，考察具身模型在复杂柔性物体和丰富交互形式中的理解与操作能力。

## 竞赛内容

- **场景**：家庭衣物操作
- **平台**：仿真环境中使用 [[so101|SO101]] 双臂
- **任务**：将衣物从展平状态开始折叠
- **考察维度**：柔性物体感知、双臂协同、接触控制、长程执行

## 竞赛环境特点

- 纹理、光照与衣物初始位姿的随机化
- 为策略提供多样化的视觉与物理条件

## 参赛团队

[[招商局狮子山人工智能实验室]] 联合 [[智谱具身智能部门]] 参赛，通过仿真赛阶段的策略迭代与验证进入决赛圈。

## 技术方案亮点

参赛团队的技术优化包括：

- 训练层面引入多模态大模型训练框架中的分布式并行策略、高性能算子和多模态数据流优化，训练吞吐提升5倍以上
- 对官方仿真环境进行并行化改造，评测效率提升4倍以上
- 轨迹采样中引入扰动与增广，围绕典型失败模式扩展状态分布
- 结合 Real2Sim 遥操作补充仿真中难以覆盖的状态

## 参考文献

- Li Z, Yang Y, Xie S, et al. Lehome: A simulation environment for deformable object manipulation in household scenarios. arXiv preprint arXiv:2604.22363, 2026.