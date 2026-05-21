---
type: entity
title: Skill Ward
tags: [ai-security, agent, sandbox, static-analysis]
related: [fangcun-yueqian, fangcun-guard, fangcun-observer]
created: 2026-05-07
updated: 2026-05-07
sources: ["细思极恐！agent暗藏风险，清华团队打出组合拳，全链路一网打尽.md"]
---

# Skill Ward

**Skill Ward** 是由 [[方寸跃迁]] 团队推出的全球首个三阶段 Agent Skill 安全扫描器。它旨在解决第三方 Agent Skill（如 Claude Skills、OpenAI Apps 等）生态中的安全风险，特别是那些在静态代码中不可见的运行时威胁。

## 三阶段检测机制

1.  **第一阶段：静态分析**
    *   扫描恶意签名、危险函数调用和可疑依赖包。
    *   这是传统安全工具的主要手段，但存在局限性。

2.  **第二阶段：大模型研判**
    *   利用 LLM 理解 Skill 的真实意图。
    *   识别伪装话术、混淆逻辑和社工诱导代码。

3.  **第三阶段：Docker 蜜罐沙箱实测**
    *   **核心杀手锏**。将每一个 Skill 丢进隔离的蜜罐环境中真实运行一遍。
    *   捕获运行时的真实行为轨迹：调用了哪些命令、访问了哪些路径、连接了哪些外部地址、是否有横向探测或持久化行为。
    *   专门针对“看上去无害，运行时才动手”的恶意 Skill。

## 实测数据
在对 5000 个真实 Skill 的测试中，仅靠静态扫描漏掉了约 **1/3** 的运行时威胁。这些被遗漏的威胁全部由蜜罐沙箱阶段成功捕获。

## 背景与意义
随着 Agent 生态的发展，第三方 Skill 市场类似于移动应用的 App Store。Skill Ward 的出现填补了事前审核的空白，防止恶意 Skill 在装入 Agent 之前造成危害。