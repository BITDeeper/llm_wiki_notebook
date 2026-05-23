---
type: entity
title: Thariq (trq212)
created: 2026-05-12
updated: 2026-05-12
tags: [人物, anthropic, 工程师, html]
related: [anthropic, html替代markdown论, claude-code, vibe-coding]
sources: ["markdown要凉…卡帕西也站html了.md"]
---
# Thariq (trq212)

[[anthropic]] 工程师，2026年5月发表引发全网热议的长文，主张在 AI 原生工作流中 [[html替代markdown论|HTML 应全面取代 Markdown]]。

## 核心观点

Thariq 认为自己已经几乎不再亲手编辑文件，更多是将文件作为规范、参考文档或头脑风暴的产出。即使需要修改，也直接交给 [[claude-code]] 处理。在这种工作模式下，HTML 的信息密度、可读性、交互性和分享便利性全面优于 Markdown。

## 实践场景

- **规划和探索** — 不再写 plan.md，而是让 Claude Code 生成一组 HTML 文件，做可视化对比页面
- **代码审查** — 每个PR附一个 HTML 格式的代码说明，渲染真正的 diff 视图
- **设计和原型** — 利用 HTML 天生的交互优势做前端原型
- **报告和研究** — 整合 Slack、代码库、git 历史等生成可读性极高的 HTML 报告
- **一次性编辑器** — 让 Claude 为特定任务生成专用 HTML 交互工具，用完即弃

## 对批评的回应

Thariq 承认 HTML 在 token 成本（约为 MD 的 1.7 倍）和生成时间（2-4 倍）上的劣势，但认为信息获取效率的提升远超额外开销。对于版本控制问题，他坦率表示"现阶段确实无解"，建议在一次性文档场景中使用 HTML 以规避此问题。