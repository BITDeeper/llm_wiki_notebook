---
type: entity
title: HPIC
tags: [security, privacy, harmonyos, ai-computing]
related: [鸿蒙操作系统, 小艺, coding-as-ai-safety-sandbox]
created: 2026-06-16
updated: 2026-06-16
sources: ["rss/和朱广权同台讲脱口秀，鸿蒙小艺这次把ai助手卷到新阶段了？！.md"]
---
# HPIC (HarmonyOS个人智能计算系统)

**HPIC**（HarmonyOS Personal Intelligent Computing）是[[鸿蒙操作系统]]为支撑[[小艺]]及智能体运行而打造的底层安全与算力框架。

## 核心原则

HPIC遵循鸿蒙智能体原生安全框架，坚持三大原则：
1.  **本地优先**：能在终端本地处理的数据和推理优先在本地完成。
2.  **数据最小化**：严格限制数据的采集和使用范围。
3.  **用户可控**：确保用户对自身数据和AI执行过程的掌控。

## 云端可信执行

当任务必须借助云端大模型的强大算力时，HPIC会将终端设备级的安全能力延伸至云服务器，确保云侧AI推理运行在可信、机密的执行环境中，防止用户数据泄露。