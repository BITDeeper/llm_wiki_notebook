---
type: entity
title: RLinf
created: 2026-05-12
updated: 2026-05-26
tags: ["强化学习", "分布式", "具身智能", "框架", "强化学习框架", "训练优化", "开源框架"]
related: ["dexbotic", "dm0", "sft-plus-rl黄金范式", "dreamzero", "无问芯穹", "清华大学", "世界动作模型"]
sources: ["一个框架，重塑具身研发流程：dexbotic走向具身pytorch.md", "一个月的活一周干完！英伟达世界模型训练速度飙升400%.md"]
---
# RLinf

RLinf 是由 [[无问芯穹]] 与 [[清华大学]] 联合推出的大规模分布式强化学习框架，专注于对大模型训练管线进行系统级重构与加速。RLinf 同时作为 [[dexbotic]] 的 RL 后端，实现了具身智能领域 SFT+RL 闭环的工程化突破。

## 核心能力

RLinf 的核心定位是具身智能领域的高效迭代加速器，通过对训练管线的深度重构实现数量级的性能提升。目前已正式上线对英伟达 [[dreamzero|DreamZero]] 世界动作模型训练的深度支持。

### 分布式架构组件

- **Cluster**：分布式集群管理
- **HybridComponentPlacement**：混合组件部署
- **Actor/Rollout/Env Worker 组**：多角色工作器编排
- **EmbodiedRunner**：具身任务运行器

## 三大优化维度

### 1. 算子/计算图优化
- 深度融合 **Torch Compile** 和 **CUDA Graph** 技术
- 通过 Kernel Fusion 优化 WanRMSNorm、adaLN-zero 等 Diffusion 架构中的低效算子
- CUDA Graph 固化计算图，消除 GPU launch 的 CPU 调度瓶颈
- 对 CausalWanSelfAttention 等密集 kernel launch 部分效果显著

### 2. FSDP2 并行优化与全局参数调优
- 用 PyTorch 官方 **FSDP2** 替代 DeepSpeed，解决 ZeRO3 与 VAE causal conv 的兼容性冲突
- 支持任意 **Microbatch Size** 配置，解除官方代码的 mbs=1 限制
- 实现 **Recompute（激活重计算）** 与 CUDA Graph、FSDP2 的稳定解耦与协同
- 以微小计算耗时换取显著显存释放，支持更大规模并行任务

### 3. 视频数据处理管线优化
- 用 **Torchcodec** 替代 PyAV，在解码速度与 CPU 占用间取得最优平衡
- 单视频解码时间缩短近 400ms，三视角训练场景累计节省 1.2s
- 支持更多 num_workers 并发处理数据，预留充足计算余量给训练主线程

## DreamZero 加速成果

| 模型 | 官方基线吞吐 | RLinf 优化后吞吐 | 加速比 |
|------|-------------|-----------------|--------|
| DreamZero-5B | 1.1 samples/sec/gpu | 4.44 samples/sec/gpu | ~4x |
| DreamZero-14B | DeepSpeed 基线 | — | 2.7x |

- 收敛验证：在 LIBERO Spatial Benchmark 上达到 **96.68%** 成功率，与官方基线一致
- 训练周期从 25 天缩短至约 1 周

## 技术亮点

- **Step 粒度随机采样**：相比官方 Episode 粒度读取，实现更平滑的 Loss 曲线和更稳定的梯度更新
- 全部优化在 8×H100 配置下验证

## 与 Dexbotic 的整合

2026年2月10日，RLinf 与 [[dexbotic]] 官宣战略合作。双方采用"乐高式协作"模式：

- **Dexbotic 稳守前端**：机器人策略定义、模型注册、Checkpoint 管理、专属数据变换与用户侧实验入口
- **RLinf 稳守后端**：分布式 Rollout、优化、Worker 调度、日志记录与 Runner 编排

双方拒绝粗暴的代码融合（Fork 强行揉合），而是通过标准接口实现模块化拼装。整合已在 LIBERO 系列任务套件中完成端到端验证，支持 PPO 等算法完成后训练。

## 意义

此次整合标志着具身智能领域长期存在的"SFT 与 RL 割裂"问题被真正打通，开发者可在同一开发流中自然完成从模型开发到 RL 后训练的全流程。

## 链接

- 代码：https://github.com/RLinf/RLinf
- Hugging Face：https://huggingface.co/RLinf
- 文档：https://rlinf.readthedocs.io/zh-cn/latest/rst_source/examples/embodied/sft_dreamzero.html