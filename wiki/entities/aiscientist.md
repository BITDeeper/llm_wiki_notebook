---
type: entity
title: AiScientist
tags: [ai-for-science, agent, system, automation]
related: [长程机器学习研究工程, file-as-bus, paperbench, mle-bench-lite, 中国人民大学]
created: 2026-04-20
updated: 2026-04-20
sources: ["agent不是关键！人大aiscientist实现23小时、74轮长程记忆.md"]
---

# AiScientist

[[AiScientist]] 是由 [[中国人民大学]] 高瓴人工智能学院开发的自动化科研系统，旨在解决 [[长程机器学习研究工程]] 中的持续性与状态管理难题。

## 核心特性

AiScientist 不仅仅是一个代码助手或论文生成工具，它试图接手从论文理解、环境配置、代码实现到实验迭代的完整科研流程。其核心设计理念是 **thin control over thick state**（对厚状态的薄控制），即通过轻量的顶层调度器管理任务，而将复杂的项目记忆和状态持久化存储在文件系统中。

## 技术机制

### File-as-Bus
系统通过 [[file-as-bus]] 机制实现长程协作。文件系统不仅是存储介质，更是协作的底座。论文分析、任务计划、代码、日志和实验结果都被作为 **durable artifacts**（持久化工件）持续写回工作区，供后续阶段读取和利用。这解决了长程任务中反馈延迟和错误归因难的问题。

## 性能表现

- **MLE-Bench Lite**：在 Detecting Insults 任务上，系统自主运行 23 小时，完成 74 轮实验，将 AUC 从 0.903 提升至 0.982。
- **PaperBench**：相比最佳基线平均提升 10.54 分，显著优于现有的 Agent 系统。
- **消融实验**：移除 File-as-Bus 机制后，性能大幅下降（PaperBench 下降 6.41 分），证明了状态连续性的关键作用。

## 意义

AiScientist 的成功表明，在 AI for Research 领域，单纯的模型推理能力或增加 Agent 数量并非瓶颈，真正的挑战在于如何构建能够保持 [[状态连续性]] 的系统架构。