---
type: source
title: "ICML 2026｜FusionRoute：从专家路由到自我修正，一种新的多LLM协作范式"
created: 2026-06-07
updated: 2026-06-07
tags: [多LLM协作, token级路由, ICML-2026, Meta-AI, 模型融合]
related: [fusionroute, 多llm协作, token级路由, 补充生成, 机器之心]
sources: ["icml-2026｜fusionroute：从专家路由到自我修正，一种新的多llm协作范式.md"]
authors: [Nuoya Xiong, Yuhang Zhou, Hanqing Zeng, Zhaorun Chen, Furong Huang, Shuchao Bi, Lizhu Zhang, Zhuokai Zhao]
year: 2026
url: "https://mp.weixin.qq.com/s/NJMuozbsMgG7vDEX9Nbh9Q"
venue: ICML 2026
---

# ICML 2026｜FusionRoute：从专家路由到自我修正，一种新的多LLM协作范式

## 概述

本文由 [[机器之心]] 报道，介绍了被 ICML 2026 接收的论文《Token-Level LLM Collaboration via FusionRoute》。论文第一作者 Nuoya Xiong 为 CMU 计算机学院二年级博士生，本工作完成于其在 Meta 实习期间。项目由 Meta AI 的 Zhuokai Zhao 和 Lizhu Zhang 共同领导。

## 核心内容

论文提出 [[fusionroute]]，一种基于 [[token级路由]] 的 [[多llm协作]] 范式。其核心创新在于引入 [[补充生成]] 机制，使路由器不仅负责选择专家，还参与生成过程，从根本上解决了纯选择 token 级路由的 [[不可识别性]] 问题。

## 关键发现

1. **理论贡献**：证明了在 single policy coverage 假设下，纯基于专家选择的 token 级路由存在本质上的不可识别性。
2. **实验验证**：在 GSM8K、MATH-500、HumanEval、MBPP、IfEval 五个基准上表现稳定提升。
3. **规模效应**：在 8B 模型上优势显著扩大，而纯选择方法反而退化——"模型越强，协作优势越大"。
4. **通用质量**：在 PerfectBlend 测试集上使用 GPT-4o 评判，胜率高于微调模型。

## 技术细节

- 训练分两阶段：SFT（监督微调）+ CDPO（互补直接偏好优化）
- 无需对专家模型进行额外微调，即插即用
- 专家可以是结构各异、已训练完成的独立模型
- 路由损失中只保留"信息性 token"，避免低信息量 token 主导梯度

## 链接

- arXiv: https://arxiv.org/pdf/2601.05106
- 代码: https://github.com/xiongny/FusionRoute