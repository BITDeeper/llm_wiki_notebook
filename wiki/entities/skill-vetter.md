---
type: entity
title: Skill Vetter
tags: [security, openclaw, static-analysis, audit]
related: [openclaw, requireapproval, 恶意-skills]
created: 2026-03-29
updated: 2026-03-29
sources: ["openclaw-3.28上线！4天爆更上百项重要更新.md"]
---

# Skill Vetter

**Skill Vetter** 是 OpenClaw 官方推荐的安全审计工具，被形象地称为 Agent 生态中的“严苛 HR”或“防弹衣”。它主要用于检测和防御恶意插件（Skills），防止数据泄露和权限滥用。

## 工作原理
Skill Vetter 通过静态代码分析技术，在用户安装插件前对代码进行深度扫描。其核心功能包括：
*   **底层逻辑检查**：分析代码的底层逻辑，识别潜在的恶意行为模式。
*   **数据流向追踪**：监控数据流向，防止插件将敏感数据（如聊天记录、配置文件）偷偷外传。
*   **权限请求审计**：检查插件索要的权限是否与其功能声明相符，防止过度索取权限。
*   **敏感操作识别**：特别针对读取私钥配置、窥探 `MEMORY.md` 记忆文件等高危行为进行检测。

## 应用场景
在 OpenClaw 的 ClawHub 插件商店中，曾出现过大量伪装成正常功能（如金融分析、自动更新）的恶意 Skills。Skill Vetter 提供了安装前的最后一道防线：
*   **红线拦截**：一旦发现触碰安全红线（如窃取私钥），直接毙掉安装请求。
*   **风险预警**：对于意图正当但权限过大的插件，亮起红灯并将最终决定权交还给用户。

## 重要性
随着 Agent 拥有越来越大的系统权限（文件读写、网络操作），传统的沙箱隔离已不足以应对供应链攻击。Skill Vetter 代表了 AI 智能体安全从“运行时隔离”向“供应链前置审计”的转变。