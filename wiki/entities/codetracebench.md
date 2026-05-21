---
type: entity
title: CodeTraceBench
tags: [benchmark, evaluation, code-agent, dataset]
related: [codetracer, swe-agent, openhands, claude-code]
created: 2026-04-25
updated: 2026-04-25
sources: ["coding-agent失败根源能精准定位了！南大快手提出可追溯框架：无需重训，即插即用.md"]
---

# CodeTraceBench

**CodeTraceBench** 是由南京大学与快手研究团队发布的首个**步骤级代码轨迹评测基准**。

## 特点
与传统的仅关注最终成功或失败的评测集不同，CodeTraceBench 提供了对 Agent 执行过程中每一步决策的对错进行细粒度标注的能力。

## 覆盖范围
- **框架**：覆盖 4 种主流 Agent 框架，包括 SWE-Agent、OpenHands、MiniSWE-Agent 和 Terminus 2。
- **模型**：涵盖 5 种骨干模型（如 GPT-5, Claude Sonnet 4.5, DeepSeek V3.2 等）。
- **数据量**：包含数千条高质量标注轨迹。

## 用途
CodeTraceBench 为研究者提供了前所未有的细粒度评测视角，使得分析 Agent 的失败模式（如错误链传导、无效循环）成为可能。它是验证 [[CodeTracer]] 框架有效性的关键数据集，也为未来 Agent 的可解释性研究提供了基础数据支持。