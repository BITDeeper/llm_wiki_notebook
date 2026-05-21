---
type: entity
title: MLE-Bench Lite
tags: [benchmark, evaluation, machine-learning]
related: [aiscientist, 长程机器学习研究工程]
created: 2026-04-20
updated: 2026-04-20
sources: ["agent不是关键！人大aiscientist实现23小时、74轮长程记忆.md"]
---

# MLE-Bench Lite

[[MLE-Bench Lite]] 是一个用于评测机器学习实验迭代能力的基准测试，侧重于考察系统在接近真实竞赛环境中的持续优化能力。

## 测试案例

在 Detecting Insults 任务中，[[aiscientist]] 展现了惊人的长程工作能力：
- **运行时长**：23 小时
- **实验轮次**：74 轮
- **性能提升**：Validation AUC 从 0.903 提升至 0.982
- **最佳更新**：实现了 18 次 best-so-far update

## 评测意义

MLE-Bench Lite 的结果不仅反映了系统的代码生成能力，更考验了其在面对实验反馈时的自我诊断、错误归因和策略调整能力。AiScientist 在该基准上达到了 **81.82%** 的 Any Medal 率，证明了其具备接手完整研究工程流程的潜力。

## 消融发现

实验表明，仅增加交互轮次而不配合良好的状态管理（如 [[file-as-bus]]），并不能带来性能提升，反而可能增加成本和噪声。