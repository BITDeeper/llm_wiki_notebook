---
type: source
title: "让大模型学会「自己教自己」！京东&中科院信工所连发三篇论文定义Self-Taught RLVR"
created: 2026-05-19
updated: 2026-05-19
tags: [强化学习, 自我改进, RLVR, 蒸馏, 后训练]
related: [self-taught-rlvr, rlsd, npo-近未来策略优化, copd-协同进化策略蒸馏, 京东探索研究院, 中科院信工所, 量子位]
sources: ["让大模型学会「自己教自己」！京东&中科院信工所连发三篇论文定义self-taught-rlvr.md"]
authors: [量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/YsyfW-FMGJ-p5mrEBKA_1g"
venue: 量子位公众号
---
# 让大模型学会「自己教自己」！京东&中科院信工所连发三篇论文定义Self-Taught RLVR

本文由京东和中科院信工所投稿，量子位于2026年5月19日发布，报道了双方联合开展的 [[self-taught-rlvr|Self-Taught RLVR]] 系列研究。

## 核心内容

该系列研究连发三篇后训练新作，核心命题为：**如何让大模型自我指导，实现迭代演化？** 研究者从三个互补维度探索了"自己教自己"的范式：

1. **[[rlsd|RLSD]]**（RLVR with Self-Distillation）：由特权信息增强的自身来教自己（informed self）
2. **[[npo-近未来策略优化|NPO]]**（Near-Future Policy Optimization）：由近未来的自身教自己（temporal self）
3. **[[copd-协同进化策略蒸馏|CoPD]]**（Co-Evolving Policy Distillation）：由走另一条路的自身教自己（parallel self）

三篇论文共同回答一个本质问题：**如何引入更好的学习信号并被模型有效吸收**。答案是让模型自己为自己提供贴合当前能力的、更易吸收的学习信号。

## 关键作者

- 第一作者：杨晨旭（RLSD）、秦川于（NPO）、顾佴彬（CoPD），均来自 [[中科院信工所]]
- Project Lead：[[佀庆一]]（[[京东探索研究院]]）

## 论文链接

- RLSD: arxiv.org/abs/2604.03128
- NPO: arxiv.org/abs/2604.20733
- CoPD: arxiv.org/abs/2604.27083