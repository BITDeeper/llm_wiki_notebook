---
type: entity
title: IBM Research
created: 2026-05-30
updated: 2026-05-30
tags: [研究机构, AI研究, 推理优化]
related: [abstract-cot, 推理token危机]
sources: ["只需几个抽象符号替代思维链，就能将推理成本压缩11倍.md"]
---
# IBM Research

IBM 的核心研究机构，2026 年 4 月发布论文《Thinking Without Words: Efficient Latent Reasoning with Abstract Chain-of-Thought》（arXiv: 2604.22709），提出 [[abstract-cot|抽象推理链（Abstract-CoT）]] 方法。

## 主要贡献

- 提出 [[abstract-cot|Abstract-CoT]]：用抽象符号替代自然语言 [[思维链]] 进行推理
- 设计两阶段训练方案：[[策略迭代热启动]] + GRPO 强化学习
- 在 Qwen3-8B 基础上实现 11.6 倍推理 token 压缩，性能损失仅 1.8 个百分点
- 发现抽象符号使用频率自发形成 [[符号幂律分布]]

## 研究方向

该团队的工作聚焦于 AI 推理效率优化，挑战"AI 必须用人类语言思考"的基本假设，探索让模型"闭嘴思考"的新路径。