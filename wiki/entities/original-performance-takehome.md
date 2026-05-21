---
type: entity
title: Original Performance Takehome
tags: [考题, 性能优化, 招聘, 开源]
related: [anthropic, tristan-hume, claude-opus-4.5, 性能工程]
created: 2026-01-23
updated: 2026-01-23
sources: ["刚刚，anthropic内部考题开源！年薪百万工程师，被ai秒了.md"]
---

# Original Performance Takehome

Anthropic 内部著名的性能优化笔试题，由 [[Tristan Hume]] 设计，曾用于筛选顶尖性能工程师。因 [[Claude Opus 4.5]] 的表现过于强大，该考题于 2026 年 1 月被正式开源。

## 考题内容
题目要求候选人为一个模拟的类 TPU 加速器优化代码，主要考察以下底层技术：
- **多核并行**：将树遍历任务分配到多个核心。
- **SIMD 向量化**：利用单指令多数据流加速计算。
- **VLIW 指令打包**：在超长指令字架构下高效调度指令。
- **内存管理**：手动管理 scratchpad 内存以优化带宽。

## 历史战绩
- **人类**：最高纪录为 1363 周期（由一位重度依赖 Claude 4 的候选人创造）。
- **Claude Opus 4**：2164 周期。
- **Claude Opus 4.5**：
    - 随手一跑：1790 周期。
    - 11.5 小时思考：1487 周期。
    - 改进框架后：1363 周期（追平人类最高纪录）。

## 开源原因
随着 Claude 模型能力的指数级提升，该考题已无法有效区分人类候选人的真实水平与 AI 辅助下的水平。Anthropic 决定将其作为公开挑战保留，邀请全球开发者尝试击败 Claude 的最佳成绩。