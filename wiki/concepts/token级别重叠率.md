---
type: concept
title: Token 级别重叠率
created: 2026-05-14
updated: 2026-05-14
tags: [蒸馏, 大模型训练, 评估指标]
related: [on-policy-distillation, 思维模式一致性, 清华thunlp-opd研究-202605]
sources: ["名师一定出高徒？清华团队最新揭秘：别再迷信大模型蒸馏的「免费午餐」.md"]
---
# Token 级别重叠率（Overlap Ratio）

Token 级别重叠率是衡量 [[on-policy-distillation|On-Policy Distillation]] 蒸馏效果的动态核心指标，定义为 Student 和 Teacher 前 k 个预测 Token 的重叠比例。

## 核心作用

Overlap Ratio 是蒸馏优化的核心引擎。研究发现：

- **重叠区域即是全部**：被师生共同看好的高概率 Token 贡献了主要梯度和优势
- **剥离实验**：仅对 Overlap Token 计算损失，蒸馏性能几乎不打折扣
- **非重叠 Token**：对优化几乎毫无贡献

## 动态变化

- **成功蒸馏**：Overlap Ratio 从 72% 稳步攀升到 91% 以上，同时师生熵差距（Entropy Gap）迅速缩小
- **失败蒸馏**：Overlap Ratio 从头到尾基本无变化

## 与思维模式一致性的关系

Overlap Ratio 是 [[思维模式一致性]] 的量化度量。初始 Overlap Ratio 越高，说明师生思维模式越匹配，蒸馏越容易成功启动。