---
type: event
title: HarnessAudit 框架发布
created: 2026-06-05
updated: 2026-06-05
tags: [ai安全, agent评测, 安全审计, 学术研究]
related: [harnessaudit, harnessaudit-bench, 执行线束安全, 轨迹级安全审计, 加州大学圣塔芭芭拉分校]
sources: ["过程比结果更危险：从模型到harness，ai-agent的下半场该如何评测安全？.md"]
origin_date: 2026-05-01
participants: [加州大学圣塔芭芭拉分校]
significance: high
causes: [任务执行范式]
effects: [轨迹级安全审计, 能力-安全权衡]
---
# HarnessAudit 框架发布

2026年5月，加州大学圣塔芭芭拉分校（UCSB）等机构发布了 HarnessAudit 框架及其配套基准 HarnessAudit-Bench（arXiv:2605.14271），开创了针对 AI Agent 完整执行轨迹进行系统化安全审计的研究方向。

## 背景

随着 AI 行业从单纯模型开发转向 [[任务执行范式|智能体工程化系统]]，多 agent harness 正在成为几乎所有严肃 agent 产品的基础架构。然而，当前安全评测仍聚焦模型层和最终输出，忽略了真正决定 agent 行为边界的执行线束层。

## 核心贡献

1. 首次系统化定义了 [[执行线束安全|执行线束（harness）安全]] 的三大审计维度：边界合规性、执行忠实性、扰动下的稳定性
2. 构建了覆盖 8 个真实世界领域、210 个任务的 [[harnessaudit-bench]] 评测基准
3. 对 10 个前沿 agent harness 进行了系统化安全审计，揭示了 [[能力-安全权衡]] 的普遍存在

## 关键发现

- 所有安全框架中，每个任务超 50% 的代理存在至少一项安全违规，[[openclaw]] 达 72%
- 多 agent 系统信息流合规性仅 0.58
- 间接提示注入导致扰动稳定性得分仅 0.15-0.22
- 违规行为随轨迹长度累积

## 影响

该工作将 AI 安全评测的焦点从"最终答案是否安全"转向"执行过程是否安全"，为多 agent 系统的安全设计提供了首个系统化的评估框架和量化基准。