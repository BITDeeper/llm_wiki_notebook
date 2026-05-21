---
type: entity
title: VILA-Lab
tags: [research-institution, ai-analysis]
related: [claude-code, 确定性工程基础设施]
created: 2026-05-01
updated: 2026-05-01
sources: ["撕开claude-code真相：让它好用的98.4%，是工程不是ai.md"]
---

# VILA-Lab

Mohamed bin Zayed AI 大学下属的研究机构。

## 关键研究
VILA-Lab 对 [[Claude Code]] v2.1.88 版本的 51.2 万行 TypeScript 源码进行了系统性逆向分析。

### 核心发现
研究得出了著名的 **“98.4% vs 1.6%”** 结论：
- **98.4%** 的代码是确定性工程基础设施（权限网关、上下文管理、工具路由、错误恢复）。
- 仅 **1.6%** 的代码涉及 AI 决策逻辑。

这一数据有力地支撑了 [[Harness Engineering]]（挽具工程）的理论，即 AI 产品在生产环境中的成功，主要取决于约束和引导模型的工程架构，而非模型本身的“智商”。