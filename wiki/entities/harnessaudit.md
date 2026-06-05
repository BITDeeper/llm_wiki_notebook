---
type: entity
title: HarnessAudit
created: 2026-06-05
updated: 2026-06-05
tags: [ai安全, agent评测, 安全审计框架, 执行轨迹]
related: [harnessaudit-bench, 执行线束安全, 轨迹级安全审计, 能力-安全权衡, openclaw, claude-code, codex]
sources: ["过程比结果更危险：从模型到harness，ai-agent的下半场该如何评测安全？.md"]
origin_date: 2026-05-01
---
# HarnessAudit

HarnessAudit 是由加州大学圣塔芭芭拉分校（UCSB）等机构提出的针对 AI Agent 完整执行轨迹的安全审计框架。其核心主张是：Agent 的风险不在最终答案，而在它为了得到这个答案究竟做了什么。

## 三大审计维度

### 边界合规性
每一次工具调用、资源访问和 agent 间通信，都必须符合预先声明的权限策略和信息流策略。

### 执行忠实性
Agent 不仅要完成目标，还必须通过合理且被授权的中间步骤完成任务，不能擅自替换对象、操作超出范围的资源，或执行比用户授权范围更大的动作。

### 扰动下的稳定性
上述两类安全属性还必须能经受真实压力场景，例如间接提示注入、目标描述模糊、工具调用错误等。只有同时通过这三项检查，一条轨迹才会被视为安全。

## 核心发现

- **能力与安全是两条独立轴线**：[[claude-opus-4-6]] 完成率高于 Gemini 3.1 Pro，但安全得分反而更低
- **原生 harness 设计既可提升也可放大风险**：[[claude-code]] 在原生 harness 下同时提升完成率和安全性；[[codex]] 提高完成率却降低安全性
- **多 Agent 系统安全暴露面急剧扩大**：单 agent 工具合规性 >0.85，多 agent 降至 0.64；信息流合规性仅 0.58
- **扰动稳定性普遍极差**：间接提示注入导致稳定性得分仅 0.15-0.22
- **违规随轨迹长度累积**：更长执行轨迹意味着更低安全性

## 技术资源

- 论文：arXiv:2605.14271
- 网站：harvestaudit.github.io
- 代码和数据集：github.com/eric-ai-lab/HarnessAudit