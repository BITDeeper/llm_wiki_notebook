---
type: concept
title: Off-Policy 冷启动
created: 2026-05-14
updated: 2026-05-14
tags: [蒸馏, 大模型训练, 训练策略]
related: [on-policy-distillation, 思维模式一致性, token级别重叠率, 清华thunlp-opd研究-202605]
sources: ["名师一定出高徒？清华团队最新揭秘：别再迷信大模型蒸馏的「免费午餐」.md"]
---
# Off-Policy 冷启动

Off-Policy 冷启动是拯救失败 [[on-policy-distillation|On-Policy Distillation]] 的实用配方之一，指在开始 OPD 之前，先让 Student 在 Teacher 生成的 rollout 上进行一轮轻量级 SFT。

## 核心思路

直接进行 On-Policy Distillation 容易因思维方式不匹配而失败。Off-Policy 冷启动通过"强行对齐"解决这一问题：

1. 先用 Teacher 生成的数据做 SFT，拉高初始 [[token级别重叠率|Overlap Ratio]]
2. 高初始 Overlap Ratio 意味着更高的 [[思维模式一致性]]
3. 随后的 OPD 训练能丝滑启动

## 效果

最终收敛的性能上限超越纯 OPD baseline，是手头只有思维模式不契合 Teacher 时的有效补救方案。