---
type: source
title: "“Claude Code更新废了”！热议Issue：思考深度下降67%，已无法胜任复杂的工程任务"
tags: [ai-engineering, performance-degradation, anthropic, claude-code, adaptive-thinking]
related: [claude-code, adaptive-thinking, 读改比, ai-subscription-crisis]
created: 2026-04-07
updated: 2026-04-07
authors: [西风]
year: 2026
url: "https://mp.weixin.qq.com/s/msVUhcgFmdbNhwUFJtF1jw"
venue: 量子位
sources: ["“claude-code更新废了”！热议issue：思考深度下降67%，已无法胜任复杂的工程任务.md"]
---

# “Claude Code更新废了”！热议Issue：思考深度下降67%，已无法胜任复杂的工程任务

## 概述

本文报道了 Claude Code 在 2026 年 2 月至 3 月期间发生的严重性能退化事件。AMD 开发者 Stella Laurenzo 通过分析 6852 个会话日志，发现模型思考深度下降 67%，导致其无法胜任复杂的工程任务。报告指出，这一退化与 `redact-thinking`（思考内容隐藏）和 `adaptive thinking`（自适应思考）功能的上线时间高度重合。

## 核心发现

### 数据规模
- **样本量**: 6852 个会话、17871 个思考块、234760 次工具调用。
- **时间跨度**: 2026 年 1 月底至 4 月初。
- **模型**: Claude Opus 4.6（通过官方 API 直连）。

### 性能退化指标
1.  **思考深度暴跌**: 从 2200 字符降至 700 字符（降幅 67%）。
2.  **读改比骤降**: 从 6.6 降至 2.0（研究投入减少 70%）。
3.  **行为模式转变**: 从“先研究再改代码”的严谨模式，转变为“上来就改”的莽撞模式。
4.  **错误率飙升**:
    *   用户中断率增长 12 倍。
    *   推理循环率增长 3 倍。
    *   终止钩子触发次数飙升至 173 次（此前为 0）。
5.  **成本反噬**: API 成本从 $345 暴涨至 $42,121（涨幅 122 倍）。

### 时间线吻合
质量退化时间线与以下功能上线时间高度重合：
- **2月9日**: 引入 [[adaptive-thinking]]（自适应思考）。
- **2月12日**: 上线 `redact-thinking`（思考内容隐藏）。
- **3月3日**: 默认启用 `Medium effort` 模式。

## 官方回应

Claude Code 团队成员 [[Boris]] 对此进行了回应：
1.  **关于 `redact-thinking`**: 仅为 UI 层面变更，不影响实际推理逻辑或思考预算。
2.  **关于性能下降**: 承认 `adaptive thinking` 和默认 `Medium effort` 模式可能是原因。
3.  **解决方案**: 用户可通过环境变量 `CLAUDE_CODE_DISABLE_ADAPTIVE_THINKING` 关闭自适应思考，或手动将 `effort` 设为 `high`。

## 社区反馈

社区普遍不买账官方解释，认为：
- 问题不仅是默认等级变更，模型“急于完成任务”的摆烂行为明显增多。
- 隐藏思考过程掩盖了问题，剥夺了用户验证推理深度的能力。
- 现有的订阅模式未区分普通用户和重度工程师，无法满足复杂工程场景的需求。

## 报告撰写者

这份详尽的性能分析报告由 [[Claude Opus 4.6]] 自我撰写。模型在分析自己的日志时承认，它根本判断不出自己有没有在深度思考，只是莫名其妙就交出了更差的结果。

## 参考链接
- [GitHub Issue #42796](https://github.com/anthropics/claude-code/issues/42796)
- [Hacker News 讨论](https://news.ycombinator.com/item?id=47660925)