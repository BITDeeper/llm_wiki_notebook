---
type: source
title: "AI编程进入下半场！新基准不测补丁，拷问真正的工程能力"
created: 2026-05-23
updated: 2026-05-23
tags: [ai编程, 评测基准, swe-atlas, scale-ai, 工程能力]
related: [swe-atlas, scale-ai, gpt-5.4, opus-4.7, agentic-engineering]
sources: ["ai编程进入下半场！新基准不测补丁，拷问真正的工程能力.md"]
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/VE9KQowvCFd1oM-yv49O1Q"
venue: 新智元微信公众号
---

# AI编程进入下半场！新基准不测补丁，拷问真正的工程能力

**来源：** 新智元
**日期：** 2026-05-23

## 摘要

本文报道了 [[scale-ai|Scale AI]] 发布的 [[swe-atlas|SWE Atlas]] 评测基准，该基准首次系统性地评估AI编程智能体在代码理解、测试编写与代码重构三大核心工程能力上的表现。评测结果显示，当前最强的AI编程模型是"优秀的补丁工，糟糕的工程师"——能修bug加功能，但在代码健康、边界覆盖和跨文件协调上仍有明显不足。

## 核心发现

1. **前沿模型集体表现不佳：** [[gpt-5.4]] 以 43.49% Pass@1 摘冠，[[opus-4.7]] 以 41.89% 紧随其后，在284道手写题上不到一半通过率。
2. **一致性极差：** Pass³ 相对 Pass@1 下滑30~50%，GPT-5.4 的 Pass³ 仅 29.2%。
3. **功能正确 ≠ 工程合格：** 重构任务中回归测试通过率60-80%，但 rubric 评分被腰斩。
4. **跨文件协调是致命弱点：** 所有模型解决率随改动规模增大显著下降。
5. **高分模型靠"跑代码"而非"看代码"：** Codebase Q&A 高分模型平均代码执行次数最高。

## 关联实体

- [[swe-atlas]] — 核心评测基准
- [[scale-ai]] — 发布方
- [[gpt-5.4]] — 评测榜首模型
- [[opus-4.7]] — 评测第二名模型
- [[coding-agent-index]] — Artificial Analysis 综合评测指数
- [[agentic-engineering]] — 相关概念