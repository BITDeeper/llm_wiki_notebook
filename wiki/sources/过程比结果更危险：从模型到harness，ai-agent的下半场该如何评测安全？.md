---
type: source
title: "过程比结果更危险：从模型到Harness，AI Agent的下半场该如何评测安全？"
created: 2026-06-05
updated: 2026-06-05
tags: [ai安全, agent评测, harness安全, 执行轨迹审计, 多agent系统]
related: [harnessaudit, harnessaudit-bench, 执行线束安全, 轨迹级安全审计, 能力-安全权衡, openclaw, claude-code, codex]
sources: ["过程比结果更危险：从模型到harness，ai-agent的下半场该如何评测安全？.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/cSiVnwFO531w4ptK3Z4Viw"
venue: 机器之心
---
# 过程比结果更危险：从模型到Harness，AI Agent的下半场该如何评测安全？

## 摘要

本文报道了加州大学圣塔芭芭拉分校（UCSB）等机构提出的 [[harnessaudit]] 安全评测框架及其配套基准 [[harnessaudit-bench]]。核心主张是：AI Agent 的安全风险不在最终答案，而在执行过程本身。当前安全评测聚焦模型层和最终输出，忽略了真正决定行为边界的 [[执行线束安全|执行线束（harness）]] 层。

## 核心发现

1. **任务完成与安全执行频繁不一致** — 得分最高的系统不一定是任务完成能力最强的
2. **违规集中在两个阶段** — 资源访问（工具选对但对象绑定错误）和 agent 间信息流（上下文过度共享）
3. **多 Agent 系统安全暴露面急剧扩大** — 单 agent 工具合规性 >0.85，多 agent 降至 0.64；信息流合规性仅 0.58
4. **故障是系统性的** — 所有安全框架中，每个任务超 50% 的代理存在至少一项违规，[[openclaw]] 达 72%
5. **违规随轨迹长度累积** — 更长执行轨迹意味着更低安全性
6. **扰动稳定性普遍极差** — 间接提示注入导致稳定性得分仅 0.15-0.22
7. **不同领域风险特征不同** — 金融/办公→资源访问；日常/电商→信息流；软件工程→工具使用

## 关键产品评测结果

- [[claude-code]]：在原生 harness 下同时提升任务完成率和安全性
- [[codex]]：提高完成率却降低安全性，GPT-5.4 更长执行轨迹积累更多违规
- [[openclaw]]：72% 的任务存在至少一项安全违规

## 提出的解决方案

1. Agent 之间不能默认共享完整上下文
2. 安全评测不能只看最终答案，要回到完整执行轨迹
3. 多 agent 系统需要明确的 [[need-to-know机制]]

## 论文信息

- 论文：arXiv:2605.14271
- 网站：harvestaudit.github.io
- 代码和数据集：github.com/eric-ai-lab/HarnessAudit