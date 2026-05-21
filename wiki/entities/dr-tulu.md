---
type: entity
title: DR Tulu
tags: [ai-model, reinforcement-learning, deep-research, open-source]
related: [openscholar, akari-asai, 演化评分规则的强化学习]
created: 2026-02-05
updated: 2026-02-05
sources: ["nature和science同时报道了一篇论文，试图根治ai幻觉.md"]
---

# DR Tulu

DR Tulu (Deep Research Tulu) 是 [[OpenScholar]] 的进阶版本，于 2025 年 11 月发布。它旨在解决长篇幅、多维度的“深度研究”任务，标志着 AI 从简单的“回答问题”向复杂的“科学研究”范式转变。

## 核心技术：RLER
DR Tulu 的核心突破在于引入了 **[[演化评分规则的强化学习]]**（RLER, Reinforcement Learning with Evolving Rubrics）。

- **动态评分**：在以往的训练中，AI 很难判断一篇长达数千字的文献综述的质量。DR Tulu 不依赖固定的评分标准，而是让模型在搜索和研究的过程中，动态生成针对当前问题的评分细则。
- **策略学习**：它既学习“什么是好的研究策略”（如挖掘冷门数据源），也学习“什么是坏的行为”（如为了凑字数而堆砌引用）。

## 能力表现
- **规划能力**：面对复杂的科学命题，它能像成熟的研究员一样，先制定大纲，再分头检索，最后综合多源信息撰写长篇报告。
- **性能对标**：在最新的测试中，DR Tulu-8B 的表现足以比肩甚至超越当时的旗舰专有模型。
- **开源**：代码和权重完全开源，延续了 [[Akari Asai]] 的“民主化”科研理念。