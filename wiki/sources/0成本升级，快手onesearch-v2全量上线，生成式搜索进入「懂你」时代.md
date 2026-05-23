---
type: source
title: "0成本升级，快手OneSearch-V2全量上线，生成式搜索进入「懂你」时代"
created: 2026-05-13
updated: 2026-05-13
tags: [生成式检索, 电商搜索, 自蒸馏, 强化学习, 快手]
related: [onesearch-v2, 生成式检索, 自蒸馏推理内化, tpma-grpo, 快手技术团队]
sources: ["0成本升级，快手onesearch-v2全量上线，生成式搜索进入「懂你」时代.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/dhjBRUxxQ1nAlsgoA7zkpQ"
venue: 机器之心
---
# 0成本升级，快手OneSearch-V2全量上线，生成式搜索进入「懂你」时代

## 摘要

本文报道了快手技术团队在工业级生成式搜索框架 [[onesearch-v2|OneSearch-V2]] 上的系统性升级。针对 V1 在复杂查询理解、个性化推理和奖励系统方面的三大瓶颈，V2 提出了以[[自蒸馏推理内化|潜空间推理增强自蒸馏]]为核心的端到端方案，包含三大创新模块：[[思维增强查询理解]]、推理内化自蒸馏和基于[[tpma-grpo|TPMA-GRPO]]的行为反馈偏好对齐。

## 核心发现

- **0成本升级**：不增加推理成本、不增加服务时延、不增加模型参数，实现商品CTR +3.98%、买家数 +2.07%、订单量 +2.11%
- **自蒸馏消融洞见**：学生模型（推理时无关键词）持续优于含关键词的教师模型，证明推理能力已内化进模型权重
- **反直觉结论**：单模态编码（[[khqe|KHQE]]）优于多模态编码，小规模 bge-base 优于大规模 Qwen3-VL
- **推理能力 > 推理结果**：V2_FULL 相关性低于 V2_RAG，但最终转化率更高

## 关键数据

- 在线A/B测试：商品CTR +3.98%，页面CTR +1.17%，页面转化率 +2.90%，买家数 +2.07%，订单量 +2.11%（p<0.05）
- 离线评测：相比baseline平均 HR@10 +2.68%、MRR@10 +1.66%
- 人工GSB评测：3,200个查询项对，页面良好率 +1.37%，相关性 +1.65%
- 复杂query占平台PV约1/3，但仅贡献8%转化

## 论文信息

- 标题：《OneSearch-V2: The Latent Reasoning Enhanced Self-distillation Generative Search Framework》
- arXiv：2603.24422
- 代码：https://github.com/benchen4395/onesearch-family