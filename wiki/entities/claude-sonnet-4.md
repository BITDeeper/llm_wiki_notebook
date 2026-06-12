---
type: entity
title: Claude Sonnet 4
created: 2026-06-09
updated: 2026-06-10
tags: ["ai模型", "anthropic", "claude", "生物信息学"]
related: ["anthropic", "virbench", "gget-virus", "ncbi-virus", "生物数据库机器不可访问性"]
sources: ["rss/anthropic最新博客：生物学agent的瓶颈不在模型，而在数据基础设施.md", "rss/claude把病毒起源算错90年，都是网页惹的祸？.md"]
---
# Claude Sonnet 4

[[anthropic|Anthropic]]推出的Claude系列大语言模型，在[[virbench|VirBench]]基准测试中作为被测模型之一，在生物数据库检索测试中暴露了严重的稳定性问题。

## VirBench评测表现

### 数据检索不稳定性

- 在无确定性工具辅助时，准确率处于较低水平
- 在从[[ncbi-virus|NCBI Virus]]检索埃博拉病毒序列的测试中，对同一查询三次运行分别返回106、15、5条结果（正确答案为266条），表现出高度不稳定性
- 同题三答差异巨大的根因是：它每次重建的过滤逻辑都不完全一样

### 疫情分析偏移

- 不完整数据集导致下游系统发育分析将埃博拉病毒TMRCA（最近共同祖先时间）从2014年1月错误推至1922年，偏差90余年
- 另一套数据漏掉几内亚序列，将起源时间挪至2014年4月
- 抗体疗法突变检测三次运行给出三种完全不同的图景

### 工具辅助改善

- 加入[[gget-virus|gget virus]]后准确率提升至90%以上

## 问题归因

表现不稳定并非模型推理能力不足，而是[[生物数据库机器不可访问性]]的系统性问题——NCBI Virus的过滤逻辑嵌在网页层，模型每次只能"猜"着重建。