---
type: entity
title: KAIROS
tags: [anthropic, agent, autonomous, claude-code, leak]
related: [claude-code, openclaw, claw-形态, 心跳机制, autodream, andrej-karpathy]
created: 2026-04-01
updated: 2026-04-01
sources: ["anthropic被逼急了！亲生龙虾意外曝光，karpathy：这就是claude-claw.md"]
---

# KAIROS

**KAIROS** 是 Anthropic 内部开发的代号为“亲生龙虾”的自主智能体系统。该系统在 2026 年 4 月的 [[claude-code]] 源码泄露事件中被意外曝光，被视为 Anthropic 对标开源框架 [[OpenClaw]] 的核心战略产品。

## 核心特性

### 主动性
KAIROS 最大的特征是具备高度的主动性，能够全天候在后台运行。它通过 [[心跳机制]]（Heartbeat Mechanism）每隔几秒被唤醒一次，检查环境状态（如任务、通知、代码变动），并自主决定是否采取行动。这与传统等待用户指令的 AI 模式有本质区别。

### 个性化与记忆
系统具备详细的日志记录功能，每天生成“日报”，记录其观察到的信息、判断逻辑及执行的操作。这些记忆是跨会话持续累积的，理论上使用时间越长，智能体对用户习惯和项目背景的理解越深。

### 技术实现
- **autoDream**：为了解决长期记忆导致的上下文窗口指数级膨胀问题，KAIROS 引入了 `autoDream` 机制。该机制在夜间或系统空闲时运行，对白天积累的海量交互数据进行整合、压缩和重新整理，以优化 Token 使用效率。
- **主动交互能力**：支持推送通知、文件投递和 PR 订阅等功能，能主动向用户汇报工作结果或请求指示。

## 曝光背景
KAIROS 的存在是开发者 Ole Lehmann 在泄露的 51 万行 Claude Code 源代码中发现的。这一发现得到了 [[Andrej-Karpathy]] 的关注，他认为这证实了其关于“Claw 是 AI 下一个进化方向”的预言。

## 竞争与挑战
KAIROS 被视为 [[OpenClaw]] 的直接竞品。OpenClaw 引以为傲的主动性、个性化和 Skill 扩展能力，KAIROS 均已实现。然而，KAIROS 的高频运行模式带来了巨大的 Token 消耗成本，现有的 Claude Pro 订阅模式难以支撑，这暗示了未来可能转向按量计费或企业级定价。