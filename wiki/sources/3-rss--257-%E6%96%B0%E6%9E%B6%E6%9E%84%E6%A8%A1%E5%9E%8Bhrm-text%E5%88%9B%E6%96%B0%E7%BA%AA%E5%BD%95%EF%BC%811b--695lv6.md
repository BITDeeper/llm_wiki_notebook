---
type: source
title: "新架构模型HRM-Text创新纪录！1B参数、1000美元，图灵奖得主都亲自下场了"
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/Qliq7D5d0gzZnGNsAb8Omg"
venue: 机器之心
tags: [hrm, 递归架构, 高效预训练, 推理模型, sapient-intelligence]
related: [hrm-text, sapient-intelligence, hrm-分层递归架构, scaling-law, gram-generative-recursive-reasoning]
created: 2026-06-09
updated: 2026-06-09
sources: ["rss/新架构模型hrm-text创新纪录！1b参数、1000美元，图灵奖得主都亲自下场了.md"]
---
# 新架构模型HRM-Text创新纪录！1B参数、1000美元，图灵奖得主都亲自下场了

## 摘要

机器之心2026年6月9日发布的深度报道，介绍Sapient Intelligence于2026年5月18日发布的HRM-Text模型。该模型约1B参数，采用[[hrm-分层递归架构]]，从零预训练仅用约40B unique tokens，训练成本约1500美元（16块H100不到两天），在MATH 56.2、GSM8K 84.5、ARC-Challenge 81.9上取得突出成绩。

## 核心内容

### 三项关键创新
1. **分层递归架构（HRM）**：高层模块H（慢更新）与低层模块L（快更新）在同一潜空间中反复迭代，每次前向传播执行8次递归更新。配合[[magic-norm]]和[[warmup-deep-credit-assignment]]保证训练稳定性。
2. **仅回答目标（Answer-Only Objective）**：跳过大规摸原始文本预训练，直接用"指令-回答"数据对从零训练，仅对回答部分计算损失。
3. **PrefixLM注意力掩码**：指令部分token彼此双向可见，回答部分恢复因果生成，提升注意力熵和全局多样性。

### 消融实验
ARC-Challenge: 51.91→62.88→74.32→81.91，清晰展示三项创新的叠加效果。

### 局限性
- MMLU等知识覆盖型benchmark不领先（60.7 vs Qwen3.5 2B的64.5）
- 训练数据仅40B tokens远不足以覆盖知识长尾
- 推理成本因8次递归更新而高于普通1B dense模型
- 仅1B规模，更大规模扩展性未验证

### 后续方向
- [[推理-知识解耦]]：紧凑递归模型专注推理，事实覆盖交给检索/记忆模块
- 自适应计算时间
- 与MoE、检索系统、可学习记忆结合

### 学术验证
2026年5月19日，图灵奖得主[[yoshua-bengio]]作为共同作者发布[[gram-generative-recursive-reasoning|GRAM]]论文，沿HRM路线展开研究，引入概率化多轨迹推理机制。

## 关键人物
- [[王冠]]：Sapient创始人，强化学习背景，OpenOrca核心开发者、OpenChat作者
- [[陈威廉]]：Sapient联合创始人，大疆、禾赛研发经历

## 定位
文章明确指出HRM-Text是Proof of Concept而非成熟产品，"不是对Scaling的否定"，而是探索"计算过程本身能否成为新的增长轴"。