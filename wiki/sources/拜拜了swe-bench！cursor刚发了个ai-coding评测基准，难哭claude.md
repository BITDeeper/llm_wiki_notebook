---
type: source
title: "拜拜了SWE-Bench！Cursor刚发了个AI Coding评测基准，难哭Claude"
created: 2026-03-14
updated: 2026-03-14
tags: [ai-coding, benchmark, cursor, evaluation, agent]
related: [cursor, cursorbench, swe-bench, claude-sonnet-4.5, claude-haiku-4.5, 智能体评测, token约束]
authors: [一水]
year: 2026
url: "https://mp.weixin.qq.com/s/VekXytzf9rEBHOr_W-3-hQ"
venue: "量子位"
sources: ["拜拜了swe-bench！cursor刚发了个ai-coding评测基准，难哭claude.md"]
---

# 拜拜了SWE-Bench！Cursor刚发了个AI Coding评测基准，难哭Claude

本文报道了 AI 编程工具平台 [[cursor]] 发布的新一代智能体评测基准 [[cursorbench]]。该基准旨在解决 [[swe-bench]] 等传统基准在衡量“高效执行”能力上的不足，强调在 [[token约束]] 下的真实开发场景表现。

## 核心发现

在新的 [[cursorbench]] 评测中，[[claude-haiku-4.5]] 和 [[claude-sonnet-4.5]] 的分数出现断崖式下跌：
- **Claude Haiku 4.5**：从 SWE-Bench 的 73.3 跌至 29.4。
- **Claude Sonnet 4.5**：从 SWE-Bench 的 77.2 跌至 37.9。

这一结果揭示了传统高分模型在真实开发场景（多文件修改、日志分析、Monorepo 等）和资源约束下的效率短板。

## 现有基准的三大缺陷

1.  **任务类型不真实**：[[swe-bench]] 仅关注 Bug 修复，[[terminal-bench]] 偏向解谜，均不符合日常开发的复杂需求。
2.  **评分机制不合理**：假设只有唯一正确答案，忽略了代码风格的多样性，导致误判或人为限制。
3.  **数据污染**：模型可能在训练时“背题”，导致评测结果虚高。

## CursorBench 的创新点

1.  **任务真实性**：基于 [[cursor-blame]] 追踪的真实用户请求和代码提交，数据源受控以降低污染风险。
2.  **任务规模大**：代码行数和文件数翻倍，涵盖 Monorepo、生产日志排查等复杂场景。
3.  **描述模糊性**：刻意保留现实世界中指令的模糊性，测试模型的澄清和理解能力。

## 评测方法

采用 **[[线上+线下混合评]]**：
- **线下**：从正确性、代码质量、效率、交互行为等维度打分。
- **线上**：通过 A/B Test 验证模型在真实用户环境中的表现（接受率、撤销率等）。

结果显示，[[cursorbench]] 的排名与线上真实用户体验高度一致，有效区分了前沿模型的能力差异。

## 未来展望

Cursor 预计未来一年开发工作将转向由 **[[长时运行智能体]]** 完成，并计划相应调整评测套件。