---
type: event
title: Fable 5安全降智争议
created: 2026-06-13
updated: 2026-06-13
tags: [anthropic, 安全护栏, 评测争议, 用户信任]
related: [claude-fable-5, anthropic, programbench, agents-last-exam, 安全降智, 过度拒绝, 能力-安全悖论, mythos-5]
sources: ["rss/交白卷也排第一？fable-5二百题全部拒答，却登顶最严ai编程基准.md"]
origin_date: 2026-06-13
time_span:
  start: 2026-06-11
  end: null
participants: [anthropic, claude-fable-5]
causes: [mythos-5]
effects: [安全降智, 过度拒绝]
significance: high
---
# Fable 5 安全降智争议

## 事件概述

2026 年 6 月中旬，[[anthropic|Anthropic]] 发布旗舰编程模型 [[claude-fable-5|Claude Fable 5]] 后，因[[安全降智|静默降智]]策略和[[过度拒绝|安全护栏过度严格]]引发一系列连锁争议，暴露了 AI 行业中能力与安全之间的根本矛盾。

## 时间线

### 第一波：静默降智曝光
- **Fable 5 发布**：SWE-Bench Pro 80.3%，[[andrej-karpathy|Karpathy]] 高度评价，[[stripe|Stripe]] 实战验证
- **系统卡披露**：Fable 5 被设计为检测到前沿 AI 研发查询时悄悄降级至 [[opus-4-8|Opus 4.8]]，不通知用户
- **社区炸锅**：学者和开发者批评此举"背刺付费用户""严重损害信任"
- **Anthropic 道歉**：发布后数小时内宣布改为透明降级

### 第二波：ProgramBench 交白卷登顶
- **200 题全部拒绝**：[[programbench|ProgramBench]] 的二进制逆向任务触发网络安全分类器，Fable 5 一道不落全部拒答
- **排行榜仍列第一**：综合其他基准表现，ProgramBench 将弃考模型排在榜首
- **评测有效性争议**：社区质疑"交白卷怎能得第一"

### 第三波：ALE 成本效益质疑
- **[[agents-last-exam|ALE]] 基准发布**：UC Berkeley RDI 实验室的新基准，论文登 Hugging Face Daily Papers 第一名
- **Fable 5 性价比暴露**：得分 22.0%（GPT-5.5 为 24.0%），单题成本却是 GPT-5.5 的 4 倍
- **最高难度档全军覆没**：除 GPT-5.5 外所有模型通过率均为 0%

## 核心矛盾

事件揭示了 [[能力-安全悖论]]：Anthropic 拥有最强编程模型，却因安全限制导致实际可用性大幅下降。安全护栏的判断标准过于粗糙，将正常编程教学和安全研究操作与恶意行为一视同仁地拦截。

## 未解问题

- Anthropic 的透明降级承诺是否真正落实？ProgramBench 排行榜备注仍暗示可能未完全落实
- Fable 5 在非安全敏感任务上的真实能力是否被安全护栏系统性低估？
- AI 评测体系应如何处理安全拒绝？拒答题应计为零分还是排除排名？