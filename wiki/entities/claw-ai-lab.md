---
type: entity
title: Claw AI Lab
tags: [ai-for-science, multi-agent-system, research-tool, open-source]
related: [claude-code-harness, 金字塔式分层架构, lab讨论模式, liu-fayao, ye-deheng, chen-tianrun]
created: 2026-04-05
updated: 2026-04-05
sources: ["claude-code-harness+龙虾科研团来了！金字塔分层架构+多智能体讨论，单人也能跑出「实验室」科研.md"]
---

# Claw AI Lab

[[claw-ai-lab]] 是一个旨在模拟真实实验室协作流程的 AI 科研系统。它试图解决传统单人科研中“孤独试错”的痛点，通过多智能体协作将研究过程转变为类似实验室团队的协同工作模式。

## 核心架构

系统采用 [[金字塔式分层架构]]，将科研流程从方向设定到代码实现逐级细化。每一层由专属 Agent 负责，通过任务队列与上下文紧密连接，使系统既具备全局规划能力，又能高效执行细节任务。

## 运行模式

Claw AI Lab 支持三种主要模式：

1.  **[[lab讨论模式]]**：多方向并行调研，通过跨方向讨论达成共识并生成统一假设。
2.  **Lab 独立研究模式**：多方向并行调研，各方向共享知识库但独立生成假设，速度更快但缺乏跨方向共识。
3.  **论文复现模式**：单 Agent 全流程复现目标论文的方法与实验。

## 技术特点

系统的核心在于 [[claude-code-harness]]，它不仅负责生成代码，还通过注入 [[experiment-harness]] 来管理时间预算、指标上报和异常校验，确保生成的实验代码是可复现、可落地的。

## 团队背景

核心开发团队包括：
-   [[Liu Fayao]]（刘发耀）：新加坡 A*STAR 研究科学家。
-   [[Ye Deheng]]（叶德珩）：前腾讯 AI 合伙人 & 首席专家。
-   [[Chen Tianrun]]（陈天润）：魔芯科技创始人。

## 应用案例

文章展示了该系统在具身智能（VLM vs VLA vs World Model）方向讨论中的应用，以及在大模型幻觉量化和 PhyCustom 复现项目中的成果。

## 外部链接

-   项目主页：[clawailab.ai](https://clawailab.ai/)
-   代码仓库：[GitHub - Claw-AI-Lab](https://github.com/Claw-AI-Lab/Claw-AI-Lab)