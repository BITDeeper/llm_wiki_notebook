---
type: source
title: "龙虾也能养龙虾！UCSD发布AIBuildAI智能体，MLE-Bench榜单第一"
tags: [ai-agents, automation, machine-learning, openai, ucsd]
related: [aibuildai, ucsd, mle-bench, ruiyi-zhang, pengtao-xie, 端到端自动化-ai-开发, 多智能体协作]
created: 2026-03-23
updated: 2026-03-23
authors: ["新智元"]
year: 2026
url: "https://mp.weixin.qq.com/s/gfE4ev8UEd0dxfsVR5UVYg"
venue: "新智元"
sources: ["龙虾也能养龙虾！ucsd发布aibuildai智能体，mle-bench榜单第一.md"]
---
# 龙虾也能养龙虾！UCSD发布AIBuildAI智能体，MLE-Bench榜单第一

## 摘要
加州大学圣地亚哥分校（[[UCSD]]）团队推出了 [[AIBuildAI]] 智能体系统，该系统能够仅通过自然语言描述任务，自动完成模型设计、代码实现、训练、调参及性能评估的全过程。在 [[OpenAI]] 发布的 [[MLE-Bench]] 基准测试中，AIBuildAI 以 63.1% 的获奖率位居榜首，其性能媲美经验丰富的人类 AI 工程师。

## 核心内容

### 系统架构
AIBuildAI 模拟了真实 AI 研究团队的工作流程，将开发周期分解为四个专职智能体：
1.  **管理智能体 ([[Manager Agent]])**：扮演项目负责人角色，负责决策调度和资源分配。通过读取磁盘上的实验记录来决定下一步行动，并在筛选模式下依据训练信号保留有潜力的方案，终止无效方案。
2.  **研究员智能体 ([[Designer Agent]])**：负责提出和修订建模方案。在设计模式下探索数据集特征并提出计划；在修订模式下诊断失败原因（如过拟合、欠拟合）并提出改进方案。
3.  **编码智能体 ([[Coder Agent]])**：将设计方案转化为可运行的训练与推理流水线。重点在于确保代码正确完整，并在完成后进行短时验证运行。
4.  **调优器智能体 ([[Tuner Agent]])**：专注于性能提升。采用先快速校准（热身训练观察学习曲线）再决定是否投入更多资源的策略。

### 关键技术特征
*   **并行效率**：多条解决方案轨迹在独立工作空间中并发运行，避免干扰，允许系统同时探索多个方法。
*   **可复现性**：所有智能体通过读写磁盘上的产出物（方案文档、配置文件、日志、检查点）进行协调，而非依赖内存状态，确保每一步均可审查与复现。
*   **安全性**：智能体仅被允许写入自身轨迹目录，数据集只读挂载，每次调用均生成可审计的操作日志。

### 实验结果
在 [[MLE-Bench]] 的 75 个任务（涵盖图像分类、目标检测、NLP、时序信号建模等）中，AIBuildAI 实现了 63.1% 的综合获奖率，位居总榜第一。特别是在语言理解与生成任务（如 Billion Word Imputation）中，展现了完整的智能体协作轨迹和优异的泛化能力。

## 意义
AIBuildAI 证明了结构化 [[多智能体协作]] 在复杂工程工作自动化上的可行性，为迈向媲美人类专业工程师的自动 AI 系统提供了清晰的技术路线。它标志着 AI 开发范式从单纯的代码生成转向了包含动态监控、早停与资源调度的全流程自动化。

## 相关链接
*   项目地址：[https://github.com/aibuildai/AI-Build-AI](https://github.com/aibuildai/AI-Build-AI)
*   论文链接：[https://github.com/aibuildai/AIBuildAI/blob/main/AIBuildAI_Tech_Report.pdf](https://github.com/aibuildai/AIBuildAI/blob/main/AIBuildAI_Tech_Report.pdf)
*   MLE-Bench 评测结果：[https://github.com/openai/mle-bench/pull/126](https://github.com/openai/mle-bench/pull/126)