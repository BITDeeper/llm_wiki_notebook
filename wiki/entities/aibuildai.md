---
type: entity
title: AIBuildAI
tags: [ai-agents, automation, machine-learning, open-source]
related: [端到端自动化-ai-开发, 多智能体协作, manager-agent, designer-agent, coder-agent, tuner-agent, mle-bench, ucsd]
created: 2026-03-23
updated: 2026-03-23
sources: ["龙虾也能养龙虾！ucsd发布aibuildai智能体，mle-bench榜单第一.md"]
---
# AIBuildAI

[[AIBuildAI]] 是由 [[UCSD]] 团队开发的一个多智能体 AI 开发系统，旨在通过模拟人类 AI 研究团队的工作流程，实现端到端的自动化 AI 模型构建。

## 核心功能
用户仅需使用自然语言描述任务，AIBuildAI 即可自动完成以下流程：
*   模型设计
*   代码实现
*   模型训练
*   超参数调优
*   性能评估与迭代优化

## 系统架构
AIBuildAI 将开发周期抽象为四个专职智能体的协作过程：

### [[Manager Agent]] (管理智能体)
*   **角色**：项目运行负责人。
*   **职责**：不直接编写代码或执行训练，而是通过读取磁盘上的实验记录进行决策。负责在“协调模式”下调度子智能体，在“筛选模式”下保留有潜力的方案并终止无效方案（早停机制）。

### [[Designer Agent]] (研究员智能体)
*   **角色**：架构师与策略制定者。
*   **职责**：
    *   **设计模式**：探索数据集特征，提出多个差异化的建模计划。
    *   **修订模式**：诊断失败原因（过拟合、欠拟合、数据异常等），并提出具体的改进方案。

### [[Coder Agent]] (编码智能体)
*   **角色**：工程师。
*   **职责**：将设计方案转化为可运行的训练与推理流水线。重点在于确保代码的正确性和完整性，并在完成后执行短时验证运行。

### [[Tuner Agent]] (调优器智能体)
*   **角色**：性能优化专家。
*   **职责**：在已有代码基础上专注于性能提升。采用“快速校准”策略（先跑热身训练观察学习曲线），再决定是延长训练时间还是调整超参数。

## 技术特点
*   **基于产出物的状态管理**：智能体之间通过读写磁盘文件（日志、配置、检查点）进行协调，而非依赖内存状态。这确保了系统的可复现性和可审计性。
*   **并行探索**：支持多条解决方案轨迹在独立工作空间中并发运行，避免互相干扰。
*   **安全性**：严格的文件权限控制（仅写入自身目录，数据集只读挂载）。

## 性能表现
在 [[OpenAI]] 的 [[MLE-Bench]] 基准测试中，AIBuildAI 在 75 个真实 Kaggle 任务上以 **63.1%** 的获奖率位居榜首，证明了其在 [[端到端自动化-ai-开发]] 领域的卓越能力。

## 开源信息
*   **GitHub**: [aibuildai/AI-Build-AI](https://github.com/aibuildai/AI-Build-AI)
*   **论文**: [AIBuildAI Tech Report](https://github.com/aibuildai/AIBuildAI/blob/main/AIBuildAI_Tech_Report.pdf)