---
type: event
title: SWE Atlas 发布
created: 2026-05-23
updated: 2026-05-23
tags: [评测基准, ai编程, 事件, scale-ai]
related: [swe-atlas, scale-ai, gpt-5.4, opus-4.7, coding-agent-index, agentic-engineering]
sources: ["ai编程进入下半场！新基准不测补丁，拷问真正的工程能力.md"]
origin_date: 2026-05-01
participants: [scale-ai]
causes: [agentic-engineering]
effects: [coding-agent-index]
significance: high
---

# SWE Atlas 发布

**SWE Atlas 发布** 是 [[scale-ai|Scale AI]] 于2026年5月发布的AI编程评测基准事件，标志着AI编程评测从"补丁能力"向"全流程工程能力"的范式转移。

## 事件背景

过去两年，AI编程评测被 SWE-Bench 类基准主导，几乎所有主流基准都只评估修bug和加feature。这导致行业过度关注功能解决能力，而忽视了代码理解、测试编写、重构等真实软件工程核心能力。

## 事件内容

Scale AI 团队发布论文（arxiv:2605.08366），推出 SWE Atlas 评测基准：

- **284道手写考题**，取材自18个开源仓库
- **三大工作流：** 代码库问答（124题）、测试编写（90题）、代码重构（70题）
- **创新评估方法：** Rubric-based LLM-as-a-Judge，替代传统 Pass/Fail 判定
- **全面开源：** 数据集、评测脚本、judge prompt 全部公开

## 核心发现

- 前沿模型最高 Pass@1 仅 43.49%（[[gpt-5.4]]），不到一半
- Pass³ 一致性指标普遍下滑30~50%
- 功能正确 ≠ 工程合格，重构任务 rubric 评分被腰斩
- 跨文件协调是当前AI编程的致命弱点

## 影响

- [[artificial-analysis|Artificial Analysis]] 随即将 SWE-Atlas-QnA 纳入 [[coding-agent-index|Coding Agent Index]] 三大评测基准之一
- 为行业重新校准了AI编程能力的评估尺度
- 明确了"AI编程进入下半场"——从补丁能力竞争转向全流程工程能力竞争