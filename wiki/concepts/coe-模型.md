---
type: concept
title: COE 模型
tags: [architecture, ai-agent, bio-manufacturing]
related: [saion-ai, vla-视觉-语言-动作, dbtl-闭环]
created: 2026-03-11
updated: 2026-03-11
sources: ["国产物理ai黑马杀出！超越gpt与斯坦福biomni，狂揽生物制造sota.md"]
---

# COE 模型

COE 模型（Cognition-Orchestration-Execution Model）即“认知-编排-执行”模型，是 [[恩和科技]] 为其 [[saion-ai]] 平台设计的协同进化架构。

## 架构组成
1.  **Cognition (认知层)**：
    -   负责多尺度理解（如基因、蛋白、代谢通路）。
    -   整合文献、数据库及底层 AI 模型（如 AlphaFold）。

2.  **Orchestration (控制层)**：
    -   负责任务分解与工具调度。
    -   核心是 [[agent-harness]] 引擎，将科研意图转化为可执行的工作流。

3.  **Execution (执行层)**：
    -   负责物理世界的操作。
    -   通过 [[bpl-生物标准协议语言]] 连接数字指令与自动化设备（如 [[cell2cloud]]）。

## 与 VLA 的类比
该架构与自动驾驶领域的 [[vla-视觉-语言-动作]] 模型高度相似，都强调在统一架构下实现从感知/认知到物理行动的闭环。