---
type: entity
title: Snorkel AI
created: 2026-06-06
updated: 2026-06-06
tags: [数据公司, 弱监督, ai训练数据, 斯坦福]
related: [anthropic, marlin项目, 过程数据, 数据军火商]
sources: ["280美元一单！1000名工程师教claude写好代码.md"]
origin_date: 2019-01-01
---
# Snorkel AI

Snorkel AI 是一家从斯坦福AI Lab拆分出来的数据公司，2019年正式成立，押注的方向是：真正决定机器学习成败的是数据，而不是模型或算力。2025年5月完成D轮融资，估值13亿美元。

## 创始人

- **Alex Ratner** — 联合创始人兼CEO，斯坦福博士。2015年Snorkel最初是其读博时的"下午项目"。
- **Chris Ré** — 联合创始人，斯坦福教授、麦克阿瑟天才奖得主、连续创业者。参与创办了估值一度达50亿美元的SambaNova，其项目曾被苹果收购。

## 核心技术

Snorkel的学术源头是 [[弱监督]]（weak supervision）：用程序和规则替代人工逐条标注，让模型不靠手工标注也能学习。公司积累了60多篇论文，开源工具被Google、Intel等公司使用。

## 商业模式转变

Snorkel的戏剧性转身具有象征意义：靠"少用人"起家的弱监督公司，如今最赚钱的生意是组织一支昂贵的专家大军去训练前沿AI。这反映了前沿模型时代最稀缺的资源又回到了人类专家的判断力上。

Snorkel的工作流：先定义任务、评分标准和验证器，再跑专家评审流水线（作者、多名评审、最终裁决者层层把关，全程留痕），并搭建可复现的评估环境。

## 客户与项目

客户名单包括Google、Mistral、Anthropic。最知名的项目是代号为"Marlin"的 [[marlin项目|Marlin项目]]，为 [[anthropic|Anthropic]] 的 [[claude-code|Claude Code]] 提供人类工程判断数据。

## 报价体系

- 法律方向合同岗：每个高质量任务10到100美元
- 软件工程任务（Marlin项目）：280美元/任务（约一小时），折合时薪约为同行（Scale AI、Mercor约110美元/小时）的2.5倍
- 顶尖专家周入可超过3000美元

Snorkel、Scale AI、Mercor等公司已从"标注平台"升级为前沿模型公司背后的隐形供应链，即 [[数据军火商]]。