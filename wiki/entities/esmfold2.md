---
type: entity
title: ESMFold2
created: 2026-05-29
updated: 2026-05-29
tags: [蛋白质结构预测, 开源模型, ai-for-science, 生物医学]
related: [esm-atlas, biohub, alphafold, 蛋白质语言模型, google-deepmind]
sources: ["生物学变天：小扎的新开源模型，彻底掀翻谷歌alphafold王座！.md"]
origin_date: 2026-05-27
---
# ESMFold2

ESMFold2 是由 [[biohub]]（Chan Zuckerberg Biohub）开发的蛋白质结构预测 AI 模型，由 Biohub 科学负责人 Alex Rives 带队开发。该模型于 2026 年 5 月 27 日随 [[esm-atlas]] 数据库一同发布，号称在蛋白质结构预测领域全面超越 [[alphafold|AlphaFold3]]。

## 技术路线

ESMFold2 基于[[蛋白质语言模型]]构建，核心思路借鉴了 NLP 领域的做法——将蛋白质序列当作「语言」来理解，在数十亿条蛋白质数据上训练，让模型学会从序列直接预测三维结构。这与 AlphaFold 基于多序列比对（MSA）的技术路线形成鲜明对比。

训练数据覆盖范围是关键变量。ESMFold2 纳入了大量来自土壤、海洋等环境的微生物蛋白质数据，这部分在 AlphaFold 的数据库里是空白的。

## 性能声明

- 在预测蛋白质之间相互作用的复合结构方面，表现优于 AlphaFold3
- 团队用 ESMFold2 设计了全新蛋白质并在实验室合成测试，高比例设计按预期起效
- 实现了从「预测」到「设计」再到「验证」的完整链路

## 开源策略

ESMFold2 最锋利的竞争武器是**完全开源且不限商用**。这与 [[google-deepmind]] 旗下 AlphaFold3 的商业使用限制和 Isomorphic Labs 的完全闭源策略形成鲜明对比。开源策略与 Meta 的 Llama 系列在大语言模型赛道的打法一脉相承——用开源做基础设施，用生态做护城河。

## 学界评价

学界反应积极但保留意见明确：
- MIT 的 Ovchinnikov 认为更适合定位为 AlphaFold 的**补充**而非替代，领先幅度可能没有论文暗示的那么大
- 首尔国立大学 Martin Steinegger 关心其对全新结构的预测能力，其团队此前发现 ESMFold 第一版在这方面并不出色
- 伦敦大学学院 Christine Orengo 强调预测结果需要独立验证