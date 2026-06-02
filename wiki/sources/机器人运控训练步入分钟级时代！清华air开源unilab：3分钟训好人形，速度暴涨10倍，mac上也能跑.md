---
type: source
title: "机器人运控训练步入分钟级时代！清华AIR开源UniLab：3分钟训好人形，速度暴涨10倍，Mac上也能跑"
created: 2026-06-02
updated: 2026-06-02
tags: [具身智能, 强化学习, 机器人运控, 开源框架, 清华AIR]
related: [unilab, 清华air-discover-lab, 异构并行训练, sim2real, 量子位]
sources: ["机器人运控训练步入分钟级时代！清华air开源unilab：3分钟训好人形，速度暴涨10倍，mac上也能跑.md"]
authors: [清华AIR DISCOVER Lab]
year: 2026
url: "https://mp.weixin.qq.com/s/LUzc5rDRpgfQT67XKtB9bg"
venue: 量子位
---

# 机器人运控训练步入分钟级时代！清华AIR开源UniLab

## 摘要

本文由清华AIR DISCOVER Lab投稿至量子位，报道了全新机器人强化学习训练架构 [[unilab]] 的正式开源。该框架打破"GPU包揽全部"的行业惯例，采用"CPU高效仿真+GPU策略训练"的 [[异构并行训练]] 范式，在多项运控任务上实现3-10倍端到端加速。

## 核心内容

### 架构创新
- **异构流水线重叠**：CPU侧多核并行运行MuJoCo/MotrixSim物理引擎，GPU专注策略网络梯度更新，通过共享内存无锁缓冲区消除资源闲置
- **跨平台后端兼容**：原生支持CUDA、Apple Silicon、AMD、Intel等多种后端，不绑定NVIDIA生态
- **Mac本地训练**：借助Apple统一内存架构（UMA），CPU仿真与GPU学习无需跨越PCIe总线

### 性能数据
- 4090+9950X3D系统：12秒训好四足行走，3分钟人形G1学会走路
- 相同硬件基准测试：达到相同目标奖励的速度提升3-10倍
- 6类真机任务验证闭环：四足行走、人形全身运动追踪（含翻跟头/攀爬）、灵巧手操作

### 开源信息
- 项目主页：https://unilabsim.github.io
- 论文：arXiv:2605.30313
- 代码仓库：https://github.com/unilabsim/UniLab

## 关联条目
- [[清华air-discover-lab]] — 主要研发方
- [[异构并行训练]] — 核心技术概念
- [[sim2real]] — 仿真到真机闭环验证
- [[具身智能数据困境]] — 训练效率提升的缓解路径