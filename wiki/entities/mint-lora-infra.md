---
type: entity
title: MinT
created: 2026-06-02
updated: 2026-06-02
tags: [基础设施, lora, 训练推理一体化, 在线服务]
related: [mind-lab, delta-mem, peft-scaling-law, macaron-a2ui, 二阶段rollout]
sources: ["mind-lab连续发布lora最新进展，大模型「持续学习」新范式浮现.md"]
origin_date: 2026-06-01
---
# MinT

MinT是[[mind-lab|Mind Lab]]开发的专为LoRA训练和在线服务打造的托管基础设施系统，旨在支撑百万级LoRA适配器的训练、部署与在线服务。

## 核心设计理念

管理LoRA并非管理单个模型，而是管理一大群模型的变体。每个LoRA都有自己的版本、训练曲线、回滚点，且可能正在被某个用户使用。支撑模型后训练在真实场景中持续学习，必须有一套基础设施能够管理海量风格各异的LoRA。

## 关键技术特性

### 轻量级Adapter管理
- 基础模型长期保留在训练和推理服务中
- 一步训练结束后导出的是很小的LoRA Adapter，而非完整模型
- Adapter文件大小通常不到基础模型的1%（rank-1配置下可降到约0.1%）
- 从训练完成到推理服务可用的交接时间最多缩短18.3倍

### 海量策略寻址
- 将持久化的策略目录（海量LoRA集）与CPU/GPU的热工作集分离
- 支持10^6以上级别的策略寻址

### 冷启动优化
- 通过打包MoE LoRA张量，去除大量小对象的读写风暴
- 实时加载速度提升8.5至8.7倍

### [[二阶段rollout]]
- 先在admission控制下完成预热，LoRA仅在就绪后才对用户流量可见
- 混合负载测试下，用户可见的LoRA加载p95降至0
- 首请求TTFT p95缩短2.3倍