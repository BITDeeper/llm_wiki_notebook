---
type: event
title: VirBench与gget virus发布
created: 2026-06-09
updated: 2026-06-09
tags: [anthropic, 生物学, 基准测试, 工具发布, ai-for-science]
related: [virbench, gget-virus, anthropic, laura-luebbert, ncbi-virus, 生物学agent数据瓶颈]
origin_date: 2026-06-09
participants: [anthropic, laura-luebbert, ncbi-virus]
causes: [生物学agent数据瓶颈]
effects: [virbench, gget-virus]
significance: medium
sources: ["rss/anthropic最新博客：生物学agent的瓶颈不在模型，而在数据基础设施.md"]
---
# VirBench与gget virus发布

## 事件概述

2026年6月9日，[[anthropic|Anthropic]]发表科学博客《为生物学智能体铺平道路》，首次公开发布[[virbench|VirBench]]基准测试和[[gget-virus|gget virus]]确定性检索工具。这是首个系统量化生物学Agent数据检索瓶颈的基准+工具组合。

## 背景

生物学AI Agent发展远慢于编程领域Agent，根本原因不在模型推理能力，而在于生物数据基础设施为人类浏览器点击设计，不适合Agent程序化访问。

## 核心成果

### VirBench
- 120个真实风格病毒序列查询任务，覆盖40种病原体
- 6个前沿模型准确率从16.9%到91.3%，无一达到科学所需近100%标准
- 揭示同一模型相同提示词下结果高度不稳定的问题

### gget virus
- 与NCBI研究人员合作开发的确定性病毒数据检索工具
- 加入后所有模型准确率提升至90%以上，GPT-5.5最高达99.7%
- 验证"便宜模型+好工具 > 贵模型+无工具"的实用主义路线

## 影响

- 为[[ai-for-science|AI for Science]]领域提供了新的问题框架：瓶颈从模型层转移到数据基础设施层
- 首次用定量数据证明生物学Agent的不稳定性及其下游后果
- 为构建[[确定性执行层]]提供了首个验证案例