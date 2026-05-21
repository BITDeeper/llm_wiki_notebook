---
type: concept
title: AI 协调者
tags: [agent, system-role, management]
related: [agent-cluster, multi-agent-collaboration]
created: 2026-04-21
updated: 2026-04-21
sources: ["单agent时代结束，ai们开始组团上班.md"]
---

# AI 协调者

[[ai-coordinator]] 是指在多智能体系统中，负责规划任务、分配资源、监控进度并整合结果的中心模型或模块。它不仅是执行者，更是“管理者”。

## 职责

1. **任务规划**：将用户的高层意图拆解为可执行的子任务列表。
2. **动态分配**：根据子任务的性质（如搜索、编程、写作），将其分派给最合适的 Agent。
3. **错误修复**：监控执行过程，当某个子 Agent 失败或产出质量不达标时，自动触发重试或修正。
4. **交付管理**：确保所有子任务完成后，按照用户要求整合最终产出。

## 意义

AI 协调者的出现标志着模型角色的转变：从被动响应指令的“工具”，进化为能够主动管理复杂项目流程的“项目经理”。这是实现 [[agent-cluster]] 效能最大化的关键。