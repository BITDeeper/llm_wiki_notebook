---
type: entity
title: Sapient Intelligence
created: 2026-06-09
updated: 2026-06-09
tags: [公司, ai创业, 递归架构, 高效预训练]
related: [hrm-text, hrm-symbolic, hrm-分层递归架构, 王冠, 陈威廉]
sources: ["rss/新架构模型hrm-text创新纪录！1b参数、1000美元，图灵奖得主都亲自下场了.md"]
---
# Sapient Intelligence

AI创业公司，[[hrm-text|HRM-Text]]和[[hrm-分层递归架构|HRM]]架构的开发者。长期方向为"[[lean-general-intelligence|Lean General Intelligence]]"——不单纯追逐更大模型，寻找更高效、更可及、更具泛化能力的智能系统。

## 创始人

- **[[王冠]]**（创始人）：强化学习背景，清华大学脑与智能实验室经历，上海人工智能实验室和小马智行研究经历，OpenOrca核心开发者、OpenChat作者。
- **[[陈威廉]]**（联合创始人）：大疆创新、禾赛科技研发经历，清华大学科创中心成果转化。

## 发展历程

- **2020年**：王冠与陈威廉开始AGI探索，从强化学习切入自动驾驶和机器人场景
- **GPT-3/ChatGPT后**：转向强化学习与大语言模型结合，形成OpenChat
- **OpenChat之后**：思考底层架构问题，转向重新设计计算结构
- **2025年6月**：提出HRM架构（arXiv:2506.21734）
- **2025年7月**：开源[[hrm-symbolic|HRM-Symbolic]]，面向符号推理任务
- **2026年5月18日**：发布[[hrm-text|HRM-Text]]，将HRM架构迁移至开放语言环境

## 核心技术路线

从强化学习→OpenChat后训练优化→HRM底层架构创新，核心洞察是：如果基础架构仍是标准Transformer，能力增长将越来越依赖参数、数据和算力扩张。HRM试图让有限参数在潜空间中参与多轮分层递归计算，使"计算过程本身成为新的增长轴"。

## 后续方向

- [[推理-知识解耦]]：紧凑递归模型专注推理，事实覆盖交给外部系统
- 自适应计算时间
- 与MoE、检索系统、可学习记忆结合
- 更大规模扩展