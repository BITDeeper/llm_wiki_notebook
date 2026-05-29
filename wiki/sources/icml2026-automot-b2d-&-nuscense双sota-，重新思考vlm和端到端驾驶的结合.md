---
type: source
title: "ICML2026 | AutoMoT: B2D & nuScenes双SOTA，重新思考VLM和端到端驾驶的结合"
created: 2026-05-28
updated: 2026-05-28
tags: [自动驾驶, vla, 端到端驾驶, icml-2026, 异步推理]
related: [automot, vla-视觉-语言-动作, 异步推理, 南洋理工大学-automan-lab]
sources: ["icml2026-automot-b2d-&-nuscense双sota-，重新思考vlm和端到端驾驶的结合.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/pUgb1Kd-G0Y93eqohKXv4w"
venue: 机器之心
---
# ICML2026 | AutoMoT: B2D & nuScenes双SOTA，重新思考VLM和端到端驾驶的结合

本文由 [[机器之心]] 发布，报道了 [[南洋理工大学-automan-lab|南洋理工大学 AutoMan Lab]]、哈佛大学和小米汽车联合提出的 [[automot|AutoMoT]] 模型，该工作已被 ICML 2026 正式接收。

## 核心内容

AutoMoT 是一种面向端到端自动驾驶的统一 [[vla-视觉-语言-动作|VLA]] 模型，通过 [[异步推理]] 实现"低频理解、高频行动"，解决了大模型推理延迟限制实时控制的矛盾。

### 关键技术贡献

1. **双专家架构**：Understanding Expert（4B Qwen3-VL）负责高层场景理解，Action Expert（~1.6B）负责决策与轨迹规划
2. **Layer-wise Shared Attention**：UE和AE在每一层通过共享注意力直接交互，场景理解直接参与动作生成
3. **Cross-task Causal Mask**：为Understanding、Decision、Planning建立明确信息流
4. **异步推理与KV Cache复用**：UE低频更新并保存KV Cache，AE高频生成动作

### 核心实验结果

- **Bench2Drive闭环评测**：AutoMoT 87.34 DS / 70.00% SR；AutoMoT+ 89.42 DS / 74.09% SR（SOTA）
- **nuScenes开环评测**：平均L2为0.32，平均碰撞率仅0.07%（SOTA）
- **通用能力保留**：UE在未整体微调情况下，TallyQA达81.40、InfoVQA达89.30，证明通用能力未退化
- **微调退化实验**：整体微调后TallyQA从81.40降至52.40，InfoVQA从89.30降至50.20

### 核心论点

预训练基座模型进入自动驾驶领域时，不应被完全微调为驾驶专用模型。应保留通用理解能力（UE），仅由专门的动作专家（AE）进行动作层适配，避免通用能力退化。

## 论文信息

- 论文标题：AutoMoT: A Unified Vision-Language-Action Model with Asynchronous Mixture-of-Transformers for End-to-End Autonomous Driving
- arXiv：2603.14851
- 代码：https://github.com/OscarHuangWind/AutoMoT
- 模型：https://huggingface.co/Oscar-Huang/AutoMoT
- 数据集：nuSync（https://huggingface.co/datasets/Oscar-Huang/nuSync）