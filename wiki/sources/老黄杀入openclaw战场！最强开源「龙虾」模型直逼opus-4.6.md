---
type: source
title: "老黄杀入OpenClaw战场！最强开源「龙虾」模型直逼Opus 4.6"
tags: [nvidia, nemotron, openclaw, ai-agents, open-source]
related: [英伟达, nemotron-3-super, nemoclaw, latentmoe, mtp, nvfp4, openclaw]
created: 2026-03-12
updated: 2026-03-12
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/Zn8C0BvzM1E-l8nnYClEhA"
venue: "新智元"
sources: ["老黄杀入openclaw战场！最强开源「龙虾」模型直逼opus-4.6.md"]
---

# 源文档摘要

本文报道了英伟达发布新一代开源大模型 [[nemotron-3-super]]，该模型拥有1200亿参数，专为 AI 智能体设计。文章详细介绍了其采用的 Mamba-MoE 混合架构、[[latentmoe]]（隐式混合专家）和 [[mtp]]（多Token预测）等技术创新，以及原生 [[nvfp4]] 精度预训练带来的性能提升。

在 [[openclaw]] 任务中，该模型取得了 85.6% 的成功率，性能直逼 Claude Opus 4.6。此外，文章还披露了英伟达正在秘密打造企业级 AI 智能体平台 [[nemoclaw]]，旨在解决 OpenClaw 在企业市场的安全与隐私痛点。

## 核心要点

- **性能突破**：[[nemotron-3-super]] 在 Pinchbench 基准上稳坐开源第一，推理速度提升3倍，吞吐量提升5倍。
- **架构创新**：通过 [[latentmoe]] 实现了“花1个专家的成本，激活4个专家”的效率；通过 [[mtp]] 实现了原生投机解码。
- **软硬结合**：专为 [[blackwell]] 架构设计，利用 [[nvfp4]] 精度在保持准确率无损的前提下大幅降低显存需求。
- **战略布局**：英伟达推出 [[nemoclaw]] 平台，意图通过“模型+平台”战略锁定企业算力需求，解决 OpenClaw 的企业级安全问题。