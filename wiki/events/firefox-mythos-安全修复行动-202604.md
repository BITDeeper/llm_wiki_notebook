---
type: event
title: "Firefox Mythos 安全修复行动（2026年4月）"
created: 2026-05-20
updated: 2026-05-20
tags: [security, milestone, firefox, anthropic, vulnerability]
related: [claude-mythos, agentic-harness, mozilla-firefox, ai安全漏洞挖掘, anthropic]
sources: ["1个月干完15个月！claude-mythos猎杀271个漏洞，有的藏了20年.md"]
origin_date: 2026-04-01
significance: high
time_span:
  start: 2026-02-01
  end: 2026-04-30
participants: [mozilla-firefox, anthropic, claude-mythos, brian-grinstead]
causes: [claude-mythos, agentic-harness, 动态验证]
effects: [ai安全漏洞挖掘, project-glasswing, gpt-5-5-cyber]
---
# Firefox Mythos 安全修复行动（2026年4月）

2026 年 4 月，[[mozilla-firefox|Firefox]] 团队利用 [[claude-mythos|Claude Mythos Preview]] 配合 [[agentic-harness]] 流水线，完成了 Firefox 历史上最大规模的安全修复行动，标志着 AI 安全漏洞挖掘从实验走向生产级规模化的里程碑。

## 时间线

- **2026 年 2 月：** Firefox 团队开始与 [[anthropic]] 合作，使用 Claude Opus 4.6，在 Firefox 148 中修复 22 个漏洞
- **2026 年 4 月初：** [[claude-mythos|Claude Mythos Preview]] 发布，Firefox 团队切换模型
- **2026 年 4 月：** 单月修复 **423 个**安全漏洞，超过此前 15 个月总和

## 漏洞构成

| 来源 | 数量 |
|------|------|
| Mythos 直接发现 | 271 个（180 高危、80 中危、11 低危） |
| 外部安全研究员 | 41 个 |
| 内部其他方式 | 111 个 |

## 重大发现

- 多个 [[沙箱逃逸]] 漏洞（最高难度，赏金 2 万美元级别）
- 潜伏 **20 年**的 XSLT 相关漏洞
- 潜伏 **15 年**的 HTML legend 元素漏洞

## 影响

- 诞生了"有史以来最安全的 Firefox 版本"
- 超过 100 名工程师参与修复，揭示了 AI 发现能力远超自动修复能力的产能瓶颈
- 直接触发 [[anthropic]] 推出 [[project-glasswing|Project Glasswing]]，[[openai]] 火速发布 GPT-5.4-Cyber
- 标志着 [[ai安全漏洞挖掘|AI 安全漏洞挖掘]] 从实验阶段进入生产级规模化