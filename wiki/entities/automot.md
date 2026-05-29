---
type: entity
title: AutoMoT
created: 2026-05-28
updated: 2026-05-28
tags: [自动驾驶, vla, 端到端驾驶, icml-2026, 模型]
related: [vla-视觉-语言-动作, 异步推理, 南洋理工大学-automan-lab, 小米汽车, lingbot-vla, u-drive]
sources: ["icml2026-automot-b2d-&-nuscense双sota-，重新思考vlm和端到端驾驶的结合.md"]
origin_date: 2026-03-01
---
# AutoMoT

AutoMoT 是一种面向端到端自动驾驶的统一 [[vla-视觉-语言-动作|VLA]] 模型，由 [[南洋理工大学-automan-lab|南洋理工大学 AutoMan Lab]]、哈佛大学和 [[小米汽车]] 联合提出，已被 ICML 2026 正式接收。

## 核心设计理念

AutoMoT 的核心不是让 VLM 直接接管驾驶，而是在自动驾驶 VLA 系统中重新组织"理解"和"行动"的关系。它通过 [[异步推理]] 实现"低频理解、高频行动"，解决了大模型推理延迟限制实时控制的矛盾。

## 架构

AutoMoT 由两个专家组成：

- **Understanding Expert (UE)**：4B级 Qwen3-VL backbone，输入多帧RGB图像和导航提示，生成 reasoning tokens，负责高层场景理解与语义建模
- **Action Expert (AE)**：约1.6B参数的动作专家，输入当前RGB、LiDAR BEV、decision queries、target points 和 planning queries，负责决策与轨迹规划

### 关键架构创新

1. **Layer-wise Shared Attention**：UE和AE在每一层通过共享注意力直接交互，AE可访问UE的中间表示，使场景理解直接参与动作生成
2. **Cross-task Causal Mask**：为Understanding、Decision、Planning三类任务建立明确信息流——Decision可读Understanding，Planning可同时读取前两者
3. **异步推理与KV Cache复用**：UE周期性更新高层理解并保存KV Cache，AE以更高频率生成动作，无需每步重新执行完整推理

### Action Refiner

在AutoMoT基础上可附加Action Refiner模块，进一步细化动作输出，将性能从87.34 DS提升至89.42 DS。

## 性能表现

### Bench2Drive闭环评测（基于CARLA）

| 模型 | DS | SR |
|------|-----|-----|
| AutoMoT | 87.34 | 70.00% |
| AutoMoT+ | 89.42 | 74.09% |
| SimLingo（对比） | 85.07 | 67.27% |

### nuScenes开环规划评测

- 平均L2误差：0.32
- 平均碰撞率：0.07%（安全指标SOTA）

### 通用能力保留

AutoMoT在不完全专门化backbone的情况下，保持了通用推理能力：
- LingoQA：67.00（接近ReCogDrive的67.20）
- OmniDrive：0.89（高于对比方法的0.82）
- TallyQA：81.40
- InfoVQA：89.30

## 核心论点

AutoMoT 论证了预训练基座模型进入自动驾驶领域时，应保留通用理解能力，仅由专门的动作专家进行动作层适配。整体微调会导致通用能力显著退化（如TallyQA从81.40降至52.40），而驾驶专用任务的提升并不均匀。

## 与其他技术路线的对比

- 与 [[u-drive]]（驭势科技模块化L4架构）相比，AutoMoT代表端到端VLA路线，目前仍在仿真/开环评测阶段，工程成熟度有差距
- 与 [[lingbot-vla]]（蚂蚁灵波机器人操作VLA）同属VLA范式，但面向不同应用领域
- AutoMoT名义上是统一VLA模型，但实际采用UE/AE双专家分离设计，是一种"部分统一"——理解与行动在潜在空间统一，但在模块层面保持分离

## 开放问题

- 是否已在实车部署？论文未提及
- Action Refiner的具体机制未在报道中详述
- 与特斯拉FSD V12+等端到端量产系统的对比缺失

## 资源链接

- 论文：https://arxiv.org/abs/2603.14851
- 代码：https://github.com/OscarHuangWind/AutoMoT
- 模型：https://huggingface.co/Oscar-Huang/AutoMoT
- 数据集（nuSync）：https://huggingface.co/datasets/Oscar-Huang/nuSync