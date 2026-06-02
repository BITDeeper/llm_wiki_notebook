---
type: entity
title: UniLab
created: 2026-06-02
updated: 2026-06-02
tags: [具身智能, 强化学习, 开源框架, 机器人训练, 清华AIR]
related: [清华air-discover-lab, 异构并行训练, sim2real, 具身智能数据困境]
sources: ["机器人运控训练步入分钟级时代！清华air开源unilab：3分钟训好人形，速度暴涨10倍，mac上也能跑.md"]
origin_date: 2026-05-01
---

# UniLab

UniLab 是由 [[清华air-discover-lab]] 联合清华大学、上海交通大学、上海创智学院等多所高校，以及谋先飞技术、求之科技、原力灵机等企业共同推出的机器人强化学习训练架构。

## 核心定位

UniLab 定位为具身智能领域的全新一代训练底座，通过"CPU高效仿真+GPU策略训练"的 [[异构并行训练]] 范式，打破行业"GPU包揽全部"的惯例，实现机器人运控训练的量级效率提升。

## 架构创新

### 异构流水线重叠
- CPU侧利用多核算力并行运行 MuJoCo 或 MotrixSim 高保真物理引擎
- GPU侧专注于策略网络梯度更新
- 通过共享内存建立无锁运行时缓冲区，实现数据流高度重叠
- 当GPU执行当前Batch网络更新时，CPU阵列异步并发完成下一步环境仿真

### 跨平台后端兼容
- 原生支持 CUDA、Apple Silicon、AMD、Intel 等多种后端
- 无缝适配 PPO、APPO、SAC、TD3 等主流强化学习算法
- 不绑定 NVIDIA CUDA 生态

### Mac本地训练能力
- 借助 Apple 统一内存架构（UMA）的低延迟特性
- CPU仿真与GPU学习之间的数据传输无需跨越PCIe总线
- 使 Mac 本地训练人形机器人成为现实

## 性能数据

| 配置 | 任务 | 训练时间 |
|------|------|----------|
| 4090+9950X3D | 四足行走 | 12秒 |
| 4090+9950X3D | 人形G1学会走路 | 3分钟 |

- 相同硬件基准测试中，达到相同目标奖励的端到端训练速度比传统方案快 **3-10倍**

## 任务覆盖

- 四足行走
- 人形全身运动追踪（含翻跟头、攀爬）
- 高动态人形动作跟踪（G1 Flip、G1 WallFlip、Dance等）
- 高维接触灵巧手精细操作（Sharpa hand）
- 复杂全身手脚协同（Loco-Manipulation）

## 真机验证

已完成6类真机任务的 [[sim2real]] 闭环验证，覆盖四足行走、人形全身运动追踪（含翻跟头、攀爬）以及灵巧手操作。

## 开源信息

- **项目主页**：https://unilabsim.github.io
- **论文**：arXiv:2605.30313
- **代码仓库**：https://github.com/unilabsim/UniLab

## 未来规划

项目计划围绕以下方向持续迭代：
- 接触密集型灵巧操作的物理保真度评测
- 算法 benchmark
- 多模态触觉策略
- 从高效训练系统扩展为通用机器人学习研究平台

## 竞品框架

UniLab 明确对标 IsaacLab、MuJoCoPlayground、mjlab 等传统"GPU包揽全部"范式的训练框架，这些框架均深度绑定 NVIDIA 生态。