---
type: concept
title: Token效率
created: 2026-06-10
updated: 2026-06-10
tags: ["token", "效率", "模型性能", "技术栈", "agent", "推理", "成本", "ai成本", "效率优化"]
related: ["muse-spark", "token作为生产资料", "tokenmaxxing", "模型竞赛赛点转移", "ai-subscription-crisis", "step-3.7-flash", "1-n-agent调度", "claude-fable-5", "token末日"]
sources: ["亚历山大王回应一切：lecun、manus，“我的父母都是中国人”.md", "阶跃step-3.7-flash登顶aa榜：速度、性价比、端到端三项第一.md", "rss/刚刚，claude-mythos-5发布！5000万行代码1天搞定.md"]
---
# Token效率

指模型在长时间自主任务中单位 Token 产出价值的能力，是 Agent 化落地的成本关键。

## 核心问题

越是能长时间自主工作的模型，越会消耗大量 Token。如果模型一边很强一边很"费话"，成本很快会高到让企业难以承受。Token 效率本质上是在解决 Agent 化落地里的账本问题。

## Fable 5 的实践

[[claude-fable-5|Claude Fable 5]] 将 Token 效率作为这代模型的关键方向之一。在物理研究测试中，Fable 5 仅使用 1/3 的推理 Token，在 36 小时内逼近 GPT-5.5 耗时四天的成绩。

## 行业背景

- 与 [[tokenmaxxing]]（Token 消耗最大化竞赛）形成对照——行业从"烧 Token 证明实力"转向"省 Token 证明效率"
- [[token末日]] 标志着行业从 Token 消耗竞赛转向成本治理
- [[ai-subscription-crisis|AI 订阅制危机]] 中，Token 效率是缓解成本压力的技术路径