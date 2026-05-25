---
type: source
title: "Claude 通过率不到 4%，SaaS-Bench 撕碎了 Computer-Use 的「全自动办公」幻想"
created: 2026-05-25
updated: 2026-05-25
tags: [computer-use-agent, benchmark, saas-bench, agent-evaluation, anthropic]
related: [saas-bench, unipat-ai, computer-use-agent, claude-opus-4-7]
sources: ["claude-通过率不到-4%，saas-bench-撕碎了-computer-use-的「全自动办公」幻想.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/DZIzuzR7W0jZH0QFoBKQAA"
venue: 机器之心
---
# Claude 通过率不到 4%，SaaS-Bench 撕碎了 Computer-Use 的「全自动办公」幻想

## 摘要

本文报道了 [[unipat-ai|UniPat AI]] 发布的 [[saas-bench|SaaS-Bench]] 评测基准及其核心发现。SaaS-Bench 包含 23 个真实开源 SaaS 系统、106 个任务，直接在 Docker 中部署真实系统进行评测，揭示了当前 [[computer-use-agent|Computer-Use Agent]] 在真实办公场景中的严重不足。

## 核心发现

- 最强模型 [[claude-opus-4-7|Claude Opus 4.7]] 检查点分数 43.9%，但端到端完全通过率仅 3.8%（106 个任务仅完整通过 4 个）
- [[kimi-k2-5|Kimi K2.5]] 和 [[gemini-3-1-pro|Gemini 3.1 Pro]] 完全通过率为零
- 四种结构性失败模式：[[长程任务执行衰减]]、[[错误级联传播]]、[[意图-状态断层]]、[[路径依赖不稳定性]]
- 跨应用数从 1 增至 4 时，平均分从 53% 降至 20%
- 多次运行（pass@3）仅提升约 8 个百分点

## 关键论点

文章指出当前 Agent 评测使用仿真环境和简单任务，严重高估了 Agent 能力。四种结构性失败指向同一底层事实：当前 Agent 缺少对持久状态的有效推理能力、操作后的闭环验证机制、以及从错误中恢复的能力。文章末尾提出"软件要为 Agent 重做一遍"的方向性观点。

## 关联

- 论文链接：https://arxiv.org/abs/2605.15777
- GitHub 链接：https://github.com/UniPat-AI/SaaS-Bench
- Blog 链接：https://unipat.ai/blog/SaaS-Bench