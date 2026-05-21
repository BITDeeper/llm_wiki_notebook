---
type: entity
title: 方寸跃迁
tags: [ai-security, agent, startup, tsinghua-university]
related: [fangcun-observer, fangcun-guard, skill-ward, agent-biaoyan]
created: 2026-05-07
updated: 2026-05-07
sources: ["细思极恐！agent暗藏风险，清华团队打出组合拳，全链路一网打尽.md"]
---

# 方寸跃迁

**方寸跃迁** 是一个来自清华大学人工智能学院、交叉信息研究院背景的 AI 安全团队，专注于构建 Agent 时代的安全基础设施。

## 核心理念
团队主张 Agent 安全不应仅停留在“表层防护”（如提示词规则、日志审计），而应深入到操作系统层和运行时行为感知。他们提出了“别问 Agent 想做什么，看它到底做了什么”的设计哲学，旨在解决 [[Agent 表演]]（Agent 在监控下伪装行为）带来的安全盲区。

## 主要产品
方寸跃迁推出了覆盖 Agent 全生命周期的“组合拳”产品体系：

1.  **[[Fangcun Observer]]**：基于 OS 层的行为感知系统，用于监控 Agent 的真实系统调用，实现实时阻断和溯源。
2.  **[[Fangcun Guard]]**：高性能安全护栏大模型，主打 8ms 超低延迟和中文场景优化，旨在将安全审核基础设施化。
3.  **[[Skill Ward]]**：针对第三方 Agent Skill 的三阶段安全扫描器，引入了蜜罐沙箱实测技术以捕获动态威胁。

## 技术路径
*   **OS 层解耦**：技术实现不依赖特定的 Agent 框架或 SDK，直接在操作系统层面捕获行为，以适应快速迭代的 Agent 生态。
*   **安全基础设施化**：通过极致的性能优化（如 8ms 延迟），消除安全检查带来的“性能税”，使安全能力能默认开启。