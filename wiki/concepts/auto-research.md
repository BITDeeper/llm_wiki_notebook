---
type: concept
title: Auto Research（自动化研究）
created: 2026-05-13
updated: 2026-05-22
tags: [ai-paradigm, research-automation, agent, engineering, ai-for-science, 科研自动化]
related: [递归式自我改进, agentic-engineering, ai-for-science, frontier-eng-bench, 任务执行范式, 生成式优化]
sources: ["auto-research时代，47个没有标准答案的任务成了agent能力必测榜.md", "auto-research最后一块拼图，frontier-eng-bench登场，在工程闭环里死磕最优.md"]
---

# Auto Research（自动化研究）

Auto Research 是一种新兴的 AI 研究范式：**人类提出目标和方向，AI 全程加速科学研究，24小时不间断进行仿真、实验、反馈读取和迭代优化**，涵盖读论文、找方向、写代码、跑实验、生成新假设等完整科研流程。

## 核心定义

在 Auto Research 模式下，AI 的角色从"答题者"转变为"工程优化者"：

- **人类职责**：提出方向和目标（如"把这个部件的能耗降低30%"、"让量子线路的保真度继续逼近极限"）
- **AI 职责**：围绕目标持续优化，自动运行仿真与实验、自动读取反馈、修改和优化，24小时不停迭代

## 核心挑战

过去两年，Auto Research 被寄予厚望，AI 仿佛要成为科研全能助手。但真正烧脑、耗时间的不是"能跑"，而是"够好"：调参数、改代码、看输出，再跑，再调……每一次优化都琐碎又重复，却几乎无法跳过。

[[frontier-eng-bench]] 被定位为 Auto Research 领域的"最后一块拼图"，因为它填补了从"可行方案"到"最优方案"这一关键迭代环节的评测空白。

## 技术基础

Auto Research 的实现依赖完整的工程闭环：

1. AI 提出方案
2. 接入仿真器（simulator）跑实验
3. 获取反馈和报错信息
4. 修改参数和代码
5. 重跑迭代，直到性能持续上涨

## 与相关概念的关系

- **[[递归式自我改进]]**：Auto Research 是递归式自我改进在工程优化领域的具体落地形态，其终极愿景与递归式自我改进高度重合——AI 能自主设计实验、优化参数、改进自身。[[frontier-eng-bench]] 首次为该能力提供了系统性评测基准
- **[[agentic-engineering]]**：Karpathy 提出的智能体工程概念，Agent 深度参与上游研发工作，是 Auto Research 的工程化实现路径
- **[[ai-for-science]]**：Auto Research 可视为 AI for Science 在工程优化领域的延伸，是其一个重要子方向，侧重于科研流程的全链条自动化
- **[[任务执行范式]]**：从"一次出答案"到"长程反馈迭代"的转变，是该范式转移的又一例证
- **[[生成式优化]]**：Auto Research 中最核心的持续迭代环节，正是生成式优化要评测的能力

## 当前状态

根据 [[frontier-eng-bench]] 的评测结果，当前最强模型（如 [[gpt-5-4]]）已能在一些工程任务上展现出明显的优化能力，但距离完全自动化的 Auto Research 仍处于非常早期的阶段。

## 应用前景

当 AI 接入工业软件、仿真环境、CAD 系统、芯片设计工具、科学计算平台后，Auto Research 将引发生产力模态的剧变。未来的实验室分工将变为：人类研究员负责方向判断，AI 负责路径死磕。