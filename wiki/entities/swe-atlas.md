---
type: entity
title: SWE Atlas
created: 2026-05-23
updated: 2026-05-23
tags: [评测基准, ai编程, 工程能力, scale-ai]
related: [scale-ai, gpt-5.4, opus-4.7, coding-agent-index, agentic-engineering, claude-code]
sources: ["ai编程进入下半场！新基准不测补丁，拷问真正的工程能力.md"]
origin_date: 2026-05-01
---

# SWE Atlas

**SWE Atlas** 是由 [[scale-ai|Scale AI]] 发布的AI编程智能体评测基准，旨在评估AI在真实软件工程中的全流程能力，而非仅限于修bug和加功能。论文编号：arxiv:2605.08366。

## 设计理念

SWE Atlas 的核心论点是：将软件工程等同于功能修复会制造关键盲区。传统基准（如 SWE-Bench）几乎只评估修bug和加feature，而真实世界中工程师的日常还包括阅读陌生代码库、为新功能写测试、对历史代码做重构、回答架构问题等。过度专注于功能解决，会让 Agent 被训练成"优秀的补丁工"（excellent patchers），却是"糟糕的工程师"（poor engineers）。

## 三大工作流

SWE Atlas 包含 **284道由资深工程师手写** 的考题，取材自18个活跃维护的开源仓库，覆盖三大工作流：

1. **Codebase Q&A（代码库问答，124题）：** 上游能力，深度理解陌生代码库，回答架构、运行时行为、安全相关问题。
2. **Test Writing（测试编写，90题）：** 下游能力，为指定行为撰写生产级测试，覆盖单元测试、集成测试和端到端验收测试。
3. **Refactoring（代码重构，70题）：** 横向能力，在不改变可观测行为的前提下重组代码，处理重复、迁移、模块化等问题。

## 评估方法创新

SWE Atlas 引入了 **rubric-based LLM-as-a-Judge** 评估方法，让LLM按照专家编写的结构化打分表对答案的工程严谨度逐项评分：

- Codebase Q&A：平均 10.5 条 rubric
- Test Writing：平均 17.1 条 rubric
- Refactoring：平均 17.4 条 rubric + 平均 18 条测试

所有任务经过独立专家三审，3位专家中至少2位认为有效，rubric 才会保留。数据集、评测脚本、judge prompt 已全部开源。

## 核心评测结果

| 模型 | Pass@1 | Pass³ |
|------|--------|-------|
| [[gpt-5.4]]（Codex） | 43.49% | 29.2% |
| [[opus-4.7]]（Claude Code） | 41.89% | 22.9% |
| GLM 5（开源最佳） | 24.03% | 个位数 |

## 关键发现

- **功能正确 ≠ 工程合格：** 重构任务中回归测试通过率60-80%，但 rubric 评分被腰斩。模型能保持行为不变但未完成结构性工作。
- **一致性差：** Pass³ 相对 Pass@1 普遍下滑30~50%，说明模型解决工程任务时运气成分大。
- **高分模型靠"跑代码"：** Codebase Q&A 高分模型平均代码执行次数最高，模拟资深工程师的运行时分析行为。
- **跨文件协调是致命弱点：** 所有模型解决率随改动规模增大显著下降，即便 Opus 4.7 也会漏掉跨文件调用点。
- **测试写得多 ≠ 写得好：** 弱模型堆数量但几乎不测边界条件；强模型写得少但精准。

## 外部验证

第三方评测机构 [[artificial-analysis|Artificial Analysis]] 的 [[coding-agent-index|Coding Agent Index]] 已将 SWE-Atlas-QnA 纳入三大评测基准之一。当前榜首组合 Cursor CLI + Claude Opus 4.7 综合 pass@1 仅61分，顶尖系统均聚集在40~60分区间，无一突破70分。