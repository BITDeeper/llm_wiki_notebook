---
type: event
title: Goedel-Architect框架发布
created: 2026-06-06
updated: 2026-06-06
tags: [形式化证明, ai-for-science, 智能体, 里程碑]
related: [goedel-architect, deepseek-v4, 蓝图策略, 蓝图精炼, putnam-bench, mini-f2f, sanjeev-arora, 陈丹琦]
sources: ["deepseek-v4做数学证明，500倍成本优势：智能体系统刷新多项纪录.md"]
origin_date: 2026-06-06
participants: [普林斯顿大学语言与智能研究中心]
causes: []
effects: []
significance: high
---
# Goedel-Architect框架发布

2026年6月，普林斯顿大学语言与智能研究中心（PLI）团队发布 [[goedel-architect]] 智能体框架，论文编号arxiv:2606.06468。

## 核心成果

- 以约500倍成本优势（294美元 vs 17万美元）在 [[putnam-bench]] 上达到更高通过率（75.6% vs 70.0%）
- 成为首个刷完 [[mini-f2f]]-test全部244道题的系统
- 在USAMO 2026（污染免疫测试）上解决3/6题

## 技术意义

- 证明**提升来自pipeline设计而非更好的模型**：相同骨干模型下，[[蓝图策略]]（99.2%）显著优于递归分解（84.4%）和单智能体（54.5%）
- 将形式化证明系统的访问门槛降低了约两个数量级
- 以国内开源大模型 [[deepseek-v4]]-Flash为核心，挑战了"更大模型=更好性能"的简单线性假设

## 研究团队

由 [[sanjeev-arora]] 和 [[陈丹琦]] 共同领导，属于Goedel系列的第三代产品。