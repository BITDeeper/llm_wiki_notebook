---
type: source
title: "刚刚，Thinking Machines出手！首款交互模型来了，翁荔出镜实测"
created: 2026-05-12
updated: 2026-05-12
tags: [ai模型, 交互模型, thinking-machines, 多模态, 实时交互]
related: [thinking-machines-lab, tml-interaction-small, 翁荔, 交互模型, 微回合, encoder-free-early-fusion, 双模型协同架构]
sources: ["刚刚，thinking-machines出手！首款交互模型来了，翁荔出镜实测.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/0VNL5A9Bu3spdtbu91Ti0Q"
venue: 机器之心
---
# 刚刚，Thinking Machines出手！首款交互模型来了，翁荔出镜实测

## 摘要

本文报道了 [[thinking-machines-lab|Thinking Machines Lab]] 成立以来发布的首款自研大模型 [[tml-interaction-small]]，这是一款同时具备强智能、指令遵循和实时交互性的 [[交互模型]]。OpenAI 前应用研究 VP、Thinking Machines 联合创始人 [[翁荔]] 亲自出镜演示模型能力。

## 核心内容

### 三大架构创新
1. **200ms [[微回合]]（micro-turn）时间对齐**：将音频、视频、文本按 200ms 粒度切成连续 chunk，模型每 200ms 同时处理输入和输出，使沉默、重叠、打断成为模型原生行为。
2. **[[encoder-free-early-fusion]]**：抛弃独立音频/视觉编码器，所有模态从训练第一秒起在同一梯度流中联合训练。
3. **[[双模型协同架构]]**：交互模型负责实时响应，后台模型异步处理深度推理/检索/工具调用。

### 关键评测数据
- FD-bench v1.5 交互质量：TML 77.8 vs Gemini 54.3 vs GPT 46.8
- 端到端延迟：TML 0.40秒 vs GPT 1.18秒
- BigBench Audio（启用后台 agent）：96.5%，与 GPT-Realtime-2.0 xhigh 的 96.6% 持平
- 时间感知评测呈数量级领先：TimeSpeak 64.7 vs 4.3；CueSpeak 81.7 vs 2.9

### 工程亮点
- 实现了 trainer 与 sampler 的 bitwise 级对齐，做到 [[批次不变性]] 训练，端到端开销不到 5%
- 自研 streaming session 推理机制，已上游合入 SGLang
- MoE kernel 用 gather+gemv 替代标准 grouped gemm

### 融资背景
2025年7月完成约20亿美元种子轮，估值约120亿美元，由 a16z 领投，英伟达、Accel 等跟进。

## 关联条目
- [[批次不变性]] — TML 的 trainer-sampler bitwise 对齐是该概念的具体工程实现
- [[任务执行范式]] — 交互模型代表了从 turn-based 到实时协作的新范式
- [[原生理解生成统一]] — encoder-free early fusion 是另一种统一多模态的路径