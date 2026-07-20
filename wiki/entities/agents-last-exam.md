---
type: entity
title: "Agents' Last Exam (ALE)"
created: 2026-06-13
updated: 2026-06-13
tags: [ai评测, agent基准, 真实场景]
related: [claude-fable-5, gpt-5-5, 能力-安全悖论]
sources: ["rss/交白卷也排第一？fable-5二百题全部拒答，却登顶最严ai编程基准.md"]
---
# Agents' Last Exam (ALE)

Agents' Last Exam（ALE）是 UC Berkeley RDI 实验室（负责人 Dawn Song 教授）发布的 AI Agent 评测基准，论文编号 arXiv:2606.05405，发布当天登上 Hugging Face Daily Papers 第一名。

## 核心特征

- **对齐真实劳动力市场**：覆盖 55 个职业方向、1500+ 道真实工作场景题目
- **专家贡献**：来自 100 余家机构的 300 余位行业专家出题
- **可验证计分**：全部按可验证的结果计分，而非主观评判
- **定位**：让 AI Agent 考一场"职场模拟高考"

## 难度分档

ALE 包含不同难度级别，其中最高难度档 **Last-Exam** 专为"前沿 Agent 挑战极限"设计。

## Fable 5 评测结果

| 模型 | 得分 | 单题成本 |
|------|------|----------|
| [[gpt-5-5|GPT-5.5 (Codex)]] | 24.0% | $3.80 |
| [[claude-fable-5|Fable 5]] | 22.0% | $15.70 |
| Composer 2.5 | — | $1.33 |

关键发现：
- Fable 5 单题成本约为 GPT-5.5 的 **4 倍**，Composer 2.5 的近 **12 倍**
- Last-Exam 最高难度档：除 GPT-5.5 外，**所有模型通过率均为 0%**
- Fable 5 在 ProgramBench 拒答是 0%，ALE 最难档努力作答也是 0%——"不同的姿态，一样的结局"

## 意义

ALE 基准揭示了 AI Agent 在真实工作场景中的能力天花板和成本效益差异，为 [[能力-安全悖论]] 提供了量化数据支撑。