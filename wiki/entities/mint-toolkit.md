---
type: entity
title: "MinT (MindLab Toolkit)"
created: 2026-06-08
updated: 2026-06-08
tags: [基础设施, lora, 强化学习, 工具, mind-lab]
related: [mind-lab, macaron-v1-preview, mixture-of-lora, deepseek-v4]
sources: ["rss/刚刚，mind-lab开源v1系列模型preview，749b参数，专为agent-后训练.md"]
---
# MinT (MindLab Toolkit)

[[mind-lab|Mind Lab]] 自研的万亿参数级 LoRA 管理基础设施，为以强化学习为核心的高效后训练提供支撑。

## 核心能力

- 管理上百万个 LoRA 模型
- 在训练、评估、部署和回滚过程中只传输极为轻量的 LoRA Adapter
- 实时加载速度提升近十倍
- 支持百万级个性化和多策略适配
- 具备进一步扩展到千万个适配器的能力

## 技术特点

- 基于 [[mixture-of-lora|Mixture-of-LoRA]] 架构
- 在 [[deepseek-v4|DeepSeek V4]] 三层缓存基础上扩展为四层缓存机制（增加对象存储系统 OSS）
- 适配 [[dsa-稀疏注意力|DSA（稀疏注意力）]] 和 [[mtp-多词元推理|MTP（多词元推理）]]
- 使用超低秩矩阵适配器、平行混合线性注意力等高效训练与推理技术

## 开源贡献

Mind Lab 将基础设施成果以 verl-mint 的形式贡献给字节发起的强化学习框架 verl-project。

## 合作生态

建设过程中与以下开源社区伙伴合作：
- 字节 verl
- 英伟达 Megatron-Bridge
- 加州大学伯克利分校 vllm

## 工程意义

MinT 使 [[macaron-v1-preview|Macaron-V1-Preview]] 这样的749B级模型能够在不到300张GPU的条件下完成训练，算力成本不到同尺寸模型的1%。万亿参数模型的强化学习基础设施是后训练实验室的试金石，此前除大厂外仅掌握在极少数海外 Neo Lab 手中。