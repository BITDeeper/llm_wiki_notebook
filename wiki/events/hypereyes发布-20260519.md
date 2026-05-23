---
type: event
title: HyperEyes 并行多模态搜索模型发布
created: 2026-05-21
updated: 2026-05-21
tags: [模型发布, 多模态搜索, 并行搜索, 开源]
related: [hypereyes, 小红书, 并行多模态搜索, imeb, 双粒度效率感知强化学习]
sources: ["hypereyes：从「搜得更深」到「搜得更宽」，并行多模态搜索智能体的效率革命.md"]
origin_date: 2026-05-19
participants: [小红书]
causes: []
effects: []
significance: medium
---
# HyperEyes 并行多模态搜索模型发布

2026 年 5 月 19 日，[[小红书]] 研究团队发布 [[hypereyes|HyperEyes]] 并行多模态搜索智能体模型，论文提交至 arxiv（编号 2605.07177），代码在 GitHub 开源。

## 发布背景

该发布紧接 [[第四届中国aigc产业峰会]]（2026年5月20日）和 [[karpathy加入anthropic-20260520]] 之前，属于同一周密集 AI 技术发布潮的一部分。此时 AIGC 行业正进入 [[产业深水区]]，行业焦点从参数竞赛转向应用闭环与生产力创造。

## 核心贡献

1. 提出 [[统一定位即搜索-ugs|UGS]] 动作空间重构，实现多目标并发搜索
2. 设计 [[双粒度效率感知强化学习]] 框架（TRACE + OPD），颠覆传统「唯结果论」RL 范式
3. 发布 [[imeb|IMEB]] 评测基准和 [[成本感知评分-cas|CAS]] 评分标准，将效率纳入核心评估维度

## 实验亮点

- HyperEyes-30B 以 64.0% 准确率超越 VDR 达 9.9%，工具调用轮次仅为 VDR 的不到 1/5
- 235B 版本以 1.1% 差距逼近闭源旗舰 Gemini-3.1-Pro
- CAS 成本效率评分为次优开源模型的 7.6 倍

## 意义

HyperEyes 代表了多模态搜索智能体从「搜得更深」到「搜得更宽」的范式跃迁节点，以「效率即智能」理念对行业暴力堆算力倾向提出了重要反思。