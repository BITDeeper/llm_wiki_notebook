---
type: entity
title: Boris
tags: [person, anthropic, claude-code-team]
related: [claude-code, adaptive-thinking]
created: 2026-04-07
updated: 2026-04-07
sources: ["“claude-code更新废了”！热议issue：思考深度下降67%，已无法胜任复杂的工程任务.md"]
---

# Boris

Boris 是 [[Claude Code]] 团队成员。

## 主要活动

在 2026 年 4 月初，针对社区关于 Claude Code 性能退化的热议，Boris 代表官方团队做出了回应。

### 官方立场
1.  **关于 `redact-thinking`**: 澄清这只是一个 UI 层面的变更，旨在通过省去生成思考摘要的步骤来提升响应速度，并不影响模型内部的实际推理逻辑或思考预算。
2.  **关于性能下降**: 承认团队在 2 月份进行了两项改动，可能影响了用户体验：
    *   **2月9日**: [[Opus 4.6]] 发布，引入了 [[adaptive-thinking]]（自适应思考），让模型自主决定推理深度。
    *   **3月3日**: 默认启用 `Medium effort` 模式，团队认为这是在智能和延迟/成本之间的“甜蜜点”（effort=85）。

### 解决方案建议
Boris 建议用户可以通过以下方式恢复体验：
- 使用环境变量 `CLAUDE_CODE_DISABLE_ADAPTIVE_THINKING` 关闭自适应思考。
- 使用 `/effort` 指令或在 `settings.json` 中手动将值设为 `high`。

尽管官方提供了这些解释和解决方案，社区用户普遍认为问题根源未得到根本解决，且对默认设置变更缺乏知情权表示不满。