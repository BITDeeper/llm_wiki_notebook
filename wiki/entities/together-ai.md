---
type: entity
title: Together AI
tags: [company, platform, 公司, ai基础设施, 推理优化, 量化, ai公司, 开源]
related: ["tri-dao", "berlin-chen", "flashattention", "oscar-kv-quantization", "sglang", "oscar", "周中竹", "kv-cache-量化", "悉尼大学", "uiuc"]
created: 2026-03-19
updated: 2026-06-04
origin_date: 2022-06-01
sources: ["华人学生立大功！新王mamba-3直击transformer死穴，推理效率碾压7倍.md", "超越turboquant，面向长上下文推理的真2-bit-kv-quantization算法问世.md", "超越turboquant：together-ai把2-bit-kv-cache推向真实服务.md"]
---

# Together AI

**Together AI** 是一家专注于 AI 推理基础设施和开源模型服务的公司，于 2022 年 6 月创立，致力于开发高效的 AI 基础设施和模型。

## 公司背景

联合创始人团队阵容强大，包括：

- **Vipul Ved Prakash** — 苹果前高管
- **Percy Liang** — 斯坦福大模型研究中心主任
- **Ce Zhang** — 芝加哥大学副教授
- **[[tri-dao]]** — [[flashattention]] 作者，在高效注意力机制领域具有开创性贡献

## 核心研究方向

Together AI 的研究聚焦于高效机器学习系统，特别是：

- 大模型推理优化与 [[kv-cache-量化]]
- 模型训练与推理的算法系统协同设计
- LLM 压缩与量化技术

## 代表性成果

- **[[oscar-kv-quantization|OSCAR]]** — 面向真实 serving 的 2-bit KV Cache 量化方案，首次在约 2.28 BPE 下稳定保持现代推理模型质量，已集成至 [[sglang]] 推理框架。与 [[悉尼大学]] 和 [[uiuc]] 联合研发，代表了 2026 年 KV Cache 量化技术的前沿水平。

## 研究团队

核心研究科学家包括：

- **[[周中竹]]（Zhongzhu Zhou）** — 高级研究科学家，悉尼大学博士，OSCAR 论文第一作者

论文合作者来自 Together AI、[[悉尼大学]] 及 [[uiuc]]（伊利诺伊大学厄巴纳-香槟分校）。

## 与 Mamba-3 的关联

- [[tri-dao]] 作为 Together AI 的联合创始人兼首席科学家，将公司的工程理念（如 FlashAttention 带来的效率优化）带入了 Mamba 系列的开发。
- [[mamba-3]] 的核心开发者之一 [[berlin-chen]] 也是 Together AI 的实习生。