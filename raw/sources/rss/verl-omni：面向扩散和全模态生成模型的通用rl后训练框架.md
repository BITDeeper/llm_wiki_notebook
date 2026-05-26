---
title: "VeRL-Omni：面向扩散和全模态生成模型的通用RL后训练框架"
date: 2026-05-25
source: "机器之心"
url: "https://mp.weixin.qq.com/s/dyiz9nerbvdmk1mLQu8sDw"
rss_id: "2651034949_2"
---
VeRL-Omni 是一个
面向多模态生成模型的通用 RL 后训练框架，
由
VeRL-Omni 团队
在 verl 与 vllm-omni 之上构建。覆盖扩散 transformer（Qwen-Image）、混合 AR-DiT（Qwen-Omni）、统一理解 + 生成（BAGEL、HunyuanImage-3.0）等架构。
多模态 rollout 走 vLLM-Omni 的异步高吞吐 serving，VLM-as-judge / OCR 奖励模型走 vLLM 推理，并与 rollout、训练 overlap。Qwen-Image OCR FlowGRPO 演示中，把奖励模型放到独立 GPU 可将每步 wall-clock 时间降低约 14%。
VeRL-Omni 架构
代码： github.com/verl-project/verl-omni
文档： verl-omni.readthedocs.io
vLLM 官方博客：vllm.ai/blog/verl-omni
为什么需要 VeRL-Omni
RL 已经成为把大型生成模型对齐到人类偏好与下游任务奖励的有力手段。过去一年 LLM 的 RL 训练栈飞快演进，但
多模态生成 RL
—— 覆盖图像 / 视频 / 音频理解与生成的扩散和全模态模型 —— 还有几个关键缺口：
扩散与全模态扩展：
把 verl 的灵活性和性能延伸到多模态、非自回归 RL 训练的世界，包括扩散 transformer 主干（Qwen-Image）、混合 AR-DiT 架构（Qwen-Omni）、统一理解 + 生成模型（BAGEL、HunyuanImage-3.0）；
异构 rollout 流水线：
Rollout 是连续 latent 空间里的去噪轨迹，而不是 token 序列；单次 rollout 还可能调用多个异构模型组件、走多阶段流水线（text encoder → DiT → VAE）；
复杂的负载调度：
多模态 RL 训练的奖励函数本身就是多模态模型（VLM judge、OCR scorer 等），多模态生成 rollout 的峰值显存又比文本生成高得多，把这些工作流编排好并不简单。
关键特性
高效的多模态 rollout：
集成 vLLM-Omni 的异步高吞吐多模态生成 serving，精度与 diffusers 持平。VeRL-Omni 与 vLLM-Omni 协同，通过 step-wise continuous batching、embedding caching 等持续优化 rollout 效率。
灵活的奖励引擎：
同时支持基于规则的奖励与基于模型的奖励（如 VLM-as-judge for OCR）。集成 vLLM 用于高效的 VLM / LLM 奖励模型推理。奖励计算与 rollout、训练流程 overlap，降低端到端延迟。
模块化训练后端：
提供多种 trainer（DiffusersFSDP / Megatron / VeOmni），针对扩散和全模态模型内置优化，便于接入不同并行策略（FSDP / USP / TP）。
广泛的硬件兼容：
同时支持 NVIDIA GPU 和昇腾 NPU，部署可在多种硬件后端之间灵活切换。
端到端训练 recipe 与基准：
提供参考性能结果；得益于上述特性，训练吞吐可以做得很高。
算法与模型支持
上手指南
安装
详见安装文档：
https://verl-omni.readthedocs.io/en/latest/start/install.html
训练扩散模型
examples 目录（
https://github.com/verl-project/verl-omni/tree/main/examples
）提供了不同 RL 算法 trainer 的启动脚本，覆盖图像 / 音频 / 视频理解与生成任务。训练性能与结果可以通过 wandb 跟踪。
Demo：Qwen-Image FlowGRPO 后训练
在 flowgrpo 示例
中，团队用 OCR 奖励任务训练 Qwen-Image。奖励模型采用 Qwen3-VL-8B-Instruct，通过读取生成图像里的渲染文字、与数据集 ground truth 比对，对生成图像评分。
flowgrpo 示例：https://github.com/verl-project/verl-omni/tree/main/examples/flowgrpo_trainer
算法回顾
FlowGRPO 算法示意
FlowGRPO 示意
FlowGRPO 是面向 flow-matching 模型的在线策略方法。它通过 diffusion policy 模型做多步 SDE 采样以实现高效 RL 探索，并采用基于模型的奖励评估生成质量。
训练流程主要分四步：
Rollout 生成：
扩散 policy 模型生成样本 rollout，收集 log probability 和生成图像的轨迹。
奖励模型打分：
奖励模型给每个生成样本打分，用于计算 trajectory advantage。
策略优化：
用 FlowGRPO CLIP-style loss 更新策略，基于 advantage 优化奖励。
权重同步：
定期把 trainer 最新的策略权重同步到 rollout worker，确保生成样本反映最新策略。
LoRA 微调
NVIDIA H800 GPU 上的训练吞吐如下：
把奖励模型放到独立 GPU 上，与策略训练 overlap，每步 wall-clock 时间降低约 14%。
全模型微调
团队还验证了 non-CFG 全模型 Qwen-Image OCR 训练，在 4×NVIDIA H200 上达到 0.510 images/GPU/s，每步约 250 s。
下面可以看到，仅 120 步训练后，生成图像的文字渲染质量已有显著提升。
下面是参考训练曲线，critic reward 与 validation reward 都收敛稳定。
完整训练指标说明见 Training Metrics 文档。
文档地址：https://verl-omni.readthedocs.io/en/latest/start/metrics.html
后续路线图
VeRL-Omni 仍处于活跃迭代的预发布阶段，扩散 RL 核心栈已经稳定。路线图聚焦在扩展模型 / 算法支持，并继续推进高效多模态 RL 训练的边界。
模型支持扩展：
跟进开源的扩散和全模态模型，覆盖图像 / 视频 / 音频生成任务以及统一理解 + 生成任务；
算法支持扩展：
持续集成稳定、先进的 RL 算法（如 DiffusionNFT）；
全异步 RL：
在 actor、rollout、reward 之间走端到端异步流水线，超出当前的异步奖励范围，进一步提升训练吞吐和 GPU/NPU 利用率；
与 vLLM-Omni 协同优化：
生成 rollout 在训练时间中占比很大，将通过更紧密的 vLLM-Omni 集成（并行、量化、batching、调度优化等）继续加速多模态 rollout；
高效全模态 trainer：
在 DiffusersFSDPTrainer 之外，计划放出更多针对全模态与扩散模型的高度优化 trainer 引擎，基于 Megatron-core 与 VeOmni；
更广的硬件支持：
继续打磨昇腾 NPU 路径，并通过 hardware plugin 系统欢迎更多硬件后端。
扩散和全模态 RL 后训练只是个开始。VeRL-Omni 团队正在持续支持更多架构与算法，欢迎一起塑造未来。
© THE END
转载请联系本公众号获得授权
投稿或寻求报道：liyazhou@jiqizhixin.com