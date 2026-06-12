---
type: entity
title: HRM-Text
created: 2026-06-09
updated: 2026-06-09
tags: [模型, 递归架构, 高效预训练, 推理, 开源]
related: [sapient-intelligence, hrm-分层递归架构, hrm-symbolic, gram-generative-recursive-reasoning, scaling-law]
sources: ["rss/新架构模型hrm-text创新纪录！1b参数、1000美元，图灵奖得主都亲自下场了.md"]
origin_date: 2026-05-18
---
# HRM-Text

[[sapient-intelligence|Sapient Intelligence]]于2026年5月18日发布的约1B参数文本模型，采用[[hrm-分层递归架构]]，从零预训练仅用约40B unique tokens（考虑重复采样后总训练量约60B tokens），训练成本约1500美元（16块H100不到两天）。

## 核心指标

| Benchmark | HRM-Text (1B) | Qwen3.5 2B | Llama 3.2 3B | Gemma3 4B | OLMo3 7B |
|-----------|:---:|:---:|:---:|:---:|:---:|
| MATH | **56.2** | — | — | — | — |
| GSM8K | **84.5** | — | — | — | — |
| ARC-Challenge | **81.9** | — | — | — | — |
| MMLU | 60.7 | 64.5 | — | — | 65.8 |

训练数据量约为Llama 3.2 3B（9T tokens）的1/225，Qwen3.5 2B（36T tokens）的1/900。

## 三项关键创新

1. **[[hrm-分层递归架构]]**：H/L双时间尺度递归，每次前向传播8次递归更新，配合[[magic-norm]]和[[warmup-deep-credit-assignment]]
2. **[[仅回答目标]]**：仅对回答部分计算损失，将训练信号集中于任务完成
3. **[[prefix-lm-注意力掩码]]**：指令部分双向可见，回答部分因果生成

## 消融实验

在相同训练FLOPs条件下，ARC-Challenge得分变化：51.91（基线）→62.88（+仅回答目标）→74.32（+PrefixLM）→81.91（+HRM架构）。

## 局限性

- **知识覆盖不足**：MMLU 60.7低于Qwen3.5 2B的64.5和OLMo3 7B的65.8
- **推理成本较高**：8次递归更新使推理FLOPs高于普通1B dense模型
- **规模未验证**：仅1B规模，10B+扩展性未知
- **数据长尾**：40B tokens不足以覆盖知识长尾

## 定位

团队将当前版本定义为**Proof of Concept**，而非已完成post-training的成熟聊天模型。其价值在于提供可检验的案例，说明基础模型预训练效率仍存在架构创新空间。

## 开源资源

- 论文：arXiv:2605.20613
- GitHub：github.com/sapientinc/HRM-Text
- Hugging Face：sapientinc/HRM-Text-1B

## 发展脉络

- 前身：[[hrm-symbolic|HRM-Symbolic]]（2025年7月开源，面向符号推理）
- 学术跟进：[[gram-generative-recursive-reasoning|GRAM]]（2026年5月19日，[[yoshua-bengio]]参与）