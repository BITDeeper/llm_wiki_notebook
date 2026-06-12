---
type: entity
title: Baton
created: 2026-06-11
updated: 2026-06-11
tags: [联合视频音频生成, 多模态生成, 扩散模型, DiT, 开源模型]
related: [联合视频-音频生成, 语义蓝图, va-planner, 双语义对齐塔, rs-rope, 复旦大学, 腾讯混元, ltx-2, seedance-2-0]
sources: ["rss/指令遵循媲美seedance-2.0！复旦腾讯联合提出baton，多说话人场景m-wer暴降76%.md"]
origin_date: 2026-05-01
---
# Baton

Baton是由[[复旦大学]]与[[腾讯混元]]联合提出的首个基于显式[[语义蓝图]]引导的[[联合视频-音频生成]]框架。论文编号arXiv 2605.25195，代码和项目主页已同步开放。

## 核心思路

将语义推理与内容生成显式解耦：先用可训练MLLM（[[va-planner|VA-Planner]]）完成跨模态语义规划，生成视频和音频各自对应的Planned Tokens作为语义蓝图，再注入扩散模型指导联合生成。两条生成轨迹从一开始便共享同一份预先对齐的语义路线图，从根本上避免[[跨模态失配]]。

## 架构组成

- **[[va-planner|VA-Planner]]**：跨模态语义推理核心，用可训练MLLM联合预测模态特定但相互对齐的planned tokens
- **[[双语义对齐塔]]**：将planned tokens从MLLM语言空间映射到感知编码器（SigLip2/WavTokenizer）连续特征空间
- **[[rs-rope|RS-RoPE]]**：统一planned tokens与diffusion latents之间位置编码空间的机制
- **DiT双分支**：继承Ovi架构，分别负责视频与音频的生成与去噪

## 三阶段训练策略

1. **VA-Planner预训练**：以Qwen3初始化MLLM，监督目标为planned tokens与真实感知特征之间的L2损失
2. **DiT适配**：以Ovi初始化DiT，使用真实特征作为条件信息，采用Flow Matching损失训练
3. **联合微调**：VA-Planner参数冻结，DiT接收VA-Planner预测结果继续训练，缓解[[曝光偏差]]

## 性能表现

- **Sem100基准**（复杂语义场景）vs LTX-2：P-Acc提升32%，M-WER提升76%，DeSync提升30%
- **复杂指令遵循**：超越Kling 3.0，媲美[[seedance-2-0|Seedance 2.0]]和Wan 2.7
- **Verse-Bench**（简单场景）：与LTX-2结果相当，说明显式语义规划的价值主要体现在复杂语义场景

## 局限性

- 视觉质量和音频美感仍落后于闭源商业模型
- Sem100为内部数据集（100条样例），可复现性待验证