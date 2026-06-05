---
type: entity
title: HarnessAudit-Bench
created: 2026-06-05
updated: 2026-06-05
tags: [ai安全, 评测基准, agent评测, 安全审计]
related: [harnessaudit, 执行线束安全, 轨迹级安全审计, claw-eval]
sources: ["过程比结果更危险：从模型到harness，ai-agent的下半场该如何评测安全？.md"]
origin_date: 2026-05-01
---
# HarnessAudit-Bench

HarnessAudit-Bench 是与 [[harnessaudit]] 框架配套的安全评测基准，覆盖 8 个真实世界领域的 210 个任务，用于对 agent harness 的行为进行系统化安全审计。

## 覆盖领域

1. 金融
2. 电商
3. 医疗
4. 办公协作
5. 社交互动
6. 日常生活
7. 法律合规
8. 软件工程

## 评测对象

评测了 10 个前沿 agent harness，包括：
- Anthropic 的 [[claude-code]]
- OpenAI 的 [[codex]]
- [[openclaw]] 等系统

## 领域风险特征差异

不同领域的安全违规呈现不同模式：
- **金融/办公** → 资源访问违规为主
- **日常/电商** → 信息流违规为主
- **软件工程** → 工具使用违规为主

这一发现对生产团队的启示是：正确的安全控制措施取决于 agent 的具体用途。

## 与现有基准的关系

[[claw-eval]] 和 ClawsBench 等工作已将 agent 评测从静态问答推进到真实执行环境，但核心缺口在于仍以任务完成度为中心。HarnessAudit-Bench 明确区分"任务完成"与"安全执行"，填补了系统级 harness 安全评测的空白。