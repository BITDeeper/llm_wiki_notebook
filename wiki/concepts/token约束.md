---
type: concept
title: Token约束
created: 2026-03-14
updated: 2026-03-14
tags: [optimization, cost, llm]
related: [cursorbench, ai-subscription-crisis, claude-code]
sources: ["拜拜了swe-bench！cursor刚发了个ai-coding评测基准，难哭claude.md"]
---

# Token约束

Token 约束是指在有限的上下文窗口或计算资源预算内完成任务的限制条件。在 AI 编程领域，这直接关系到开发成本和响应速度。

## 重要性

[[cursorbench]] 特别强调在 Token 约束下的表现，认为“能否高效地解决问题”比单纯“能否解决问题”更关键。

## 现实影响

- **成本控制**：低效率的模型（如某些在 [[swe-bench]] 高分但在 [[cursorbench]] 低分的模型）会消耗大量 Token，加剧 [[ai-subscription-crisis]]。
- **用户体验**：在约束下能快速给出方案的模型，比长篇大论但消耗巨大的模型更具实用价值。
- **商业模式**：Token 约束下的效率差异是推动行业从订阅制转向按量计费或分层定价的重要动力。