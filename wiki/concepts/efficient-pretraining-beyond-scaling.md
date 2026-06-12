---
type: concept
title: Efficient Pretraining Beyond Scaling
created: 2026-06-09
updated: 2026-06-09
tags: [高效预训练, 架构创新, scaling-law替代路径]
related: [hrm-text, hrm-分层递归架构, scaling-law, lean-general-intelligence]
sources: ["rss/新架构模型hrm-text创新纪录！1b参数、1000美元，图灵奖得主都亲自下场了.md"]
---
# Efficient Pretraining Beyond Scaling

[[hrm-text|HRM-Text]]论文的副标题，也是其试图挑战的研究方向：在有限数据和有限算力下，通过架构与训练目标的共同设计，提高每一次计算的产出。

## 核心问题

过去几年AI行业形成了近乎默认的增长逻辑：模型更大、数据更多、算力更强，智能能力就会继续提升。基础模型训练越来越像一项重工业。HRM-Text探索的是：能否通过改变计算结构与训练目标，让小模型以低成本进入大模型的性能区间？

## 与Scaling Law的关系

不是对Scaling的否定。文章明确表示"过去几年扩大参数、数据和算力规模已经反复证明有效性，未来模型进步大概率仍需要更高质量的数据、更充足的算力和更系统的工程投入"。HRM探索的是Scaling之外的**另一条增长轴**——计算过程本身。