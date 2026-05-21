---
type: source
title: "老黄入局吃龙虾！英伟达发布最强开源Agent推理模型"
tags: [nvidia, agent, open-source, llm, reasoning]
related: [英伟达, nemotron-3-super, pinchbench, 混合mamba-transformer架构, latent-moe, nvfp4, pivotrl]
created: 2026-03-12
updated: 2026-03-12
authors: [克雷西]
year: 2026
url: "https://mp.weixin.qq.com/s/98eGWRobJtsTS_1liuaxPg"
venue: "量子位"
sources: ["老黄入局吃龙虾！英伟达发布最强开源agent推理模型.md"]
---

# 老黄入局吃龙虾！英伟达发布最强开源Agent推理模型

## 概述
本文报道了英伟达（NVIDIA）发布并开源的 120B 参数 MoE 模型 [[nemotron-3-super]]。该模型专为 [[agent]] 推理设计，在 [[pinchbench]] 测试中表现优异，并宣布了未来五年 260 亿美元的开源 AI 模型投资计划。

## 核心要点

### 模型性能
- **PinchBench 得分**：85.6%（评估 OpenClaw 智能体控制能力）。
- **SWE-Bench 得分**：60.47%（搭配 OpenHands 框架），超过 GPT-OSS 的 41.9%。
- **上下文窗口**：原生支持 100 万 token。
- **吞吐量**：比上一代提升 5 倍，在特定设置下是 GPT-OSS-120B 的 2.2 倍。

### 架构创新
- **[[混合mamba-transformer架构]]**：结合 Mamba-2 的线性复杂度和 Transformer 的全局注意力，兼顾长序列效率与精度。
- **[[latent-moe]]**：通过低秩潜空间降维，在同等成本下调用更多专家，实现更细粒度专业化。
- **[[多token预测]]**：单次前向传递并行预测多个 token，提升速度并增强长程逻辑理解。
- **[[nvfp4]]**：原生低精度训练格式，从训练阶段适配 Blackwell 架构，而非事后量化。

### 训练策略
- **SFT 阶段**：两阶段训练（标记级平均损失 -> 样本级平均损失），解决长输入性能降级。
- **强化学习**：在 NeMo Gym 平台的 21 种环境中进行高强度训练，引入 [[pivotrl]] 技术强化高不确定性决策点，防止推理漂移。

### 战略意义
- **260 亿美元投资**：英伟达计划在未来五年投入巨资构建开源模型，通过软件压测反哺硬件设计（[[软件定义硬件进化]]）。
- **全面开源**：开放模型权重、训练配方及部署手册，旨在巩固其硬件生态护城河。

## 相关实体
- [[英伟达]]：发布方，硬件巨头。
- [[bryan-catanzaro]]：英伟达应用深度学习研究副总裁，为模型技术背书。
- [[blackwell]]：模型优化的底层硬件架构（B200 芯片）。