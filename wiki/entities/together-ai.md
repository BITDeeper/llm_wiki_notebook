---
type: entity
title: Together AI
tags: [company, platform, 公司, ai基础设施, 推理优化, 量化]
related: [tri-dao, berlin-chen, flashattention, oscar-kv-quantization, sglang]
created: 2026-03-19
updated: 2026-05-29
origin_date: 2022-06-01
sources: ["华人学生立大功！新王mamba-3直击transformer死穴，推理效率碾压7倍.md", "超越turboquant，面向长上下文推理的真2-bit-kv-quantization算法问世.md"]
---

# Together AI

**Together AI** 是一家 AI 基础设施公司，于 2022 年 6 月创立，致力于开发高效的 AI 基础设施和模型。联合创始人包括：

- **Vipul Ved Prakash** — 苹果前高管
- **Percy Liang** — 斯坦福大模型研究中心主任
- **Ce Zhang** — 芝加哥大学副教授
- **[[tri-dao]]** — [[flashattention]] 作者

## 核心贡献

Together AI 专注于高效机器学习系统研究，方向覆盖模型训推算法与系统协同设计、LLM 压缩与量化。其代表性成果包括：

- **[[oscar-kv-quantization]]** — 面向长上下文推理的真 2-bit [[kv-cache-量化]] 系统，首次在约 2.28 BPE 下稳定保持现代推理模型质量，已集成至 [[sglang]] 推理框架。

## 研究团队

核心研究科学家包括 Zhongzhu Zhou（悉尼大学博士，OSCAR 论文第一作者）等。论文合作者来自 Together AI、悉尼大学及伊利诺伊大学厄巴纳-香槟分校（UIUC）。

## 与 Mamba-3 的关联

- [[tri-dao]] 作为 Together AI 的联合创始人兼首席科学家，将公司的工程理念（如 FlashAttention 带来的效率优化）带入了 Mamba 系列的开发。
- [[mamba-3]] 的核心开发者之一 [[berlin-chen]] 也是 Together AI 的实习生。