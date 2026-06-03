---
type: entity
title: MLE-Bench Lite
tags: [benchmark, evaluation, machine-learning, 评测基准, 机器学习, 数据工程]
related: [aiscientist, 长程机器学习研究工程, datamaster]
created: 2026-04-20
updated: 2026-06-02
sources: ["agent不是关键！人大aiscientist实现23小时、74轮长程记忆.md", "datamaster：当ai开始成为自己的数据工程师.md"]
---

# MLE-Bench Lite

[[MLE-Bench Lite]] 是一个模拟传统机器学习工程的评测基准，侧重于考察系统在接近真实竞赛环境中的持续优化能力。它也是 [[datamaster|DataMaster]] 验证其 [[ai数据工程师]] 能力的核心实验场景之一。

## 任务设定

在该基准中，任务给定了初始数据和训练方案，智能体不能随意修改训练代码，只能围绕数据做选择、清洗、特征构造和格式适配。

## 测试案例

### AiScientist

在 Detecting Insults 任务中，[[aiscientist]] 展现了惊人的长程工作能力：
- **运行时长**：23 小时
- **实验轮次**：74 轮
- **性能提升**：Validation AUC 从 0.903 提升至 0.982
- **最佳更新**：实现了 18 次 best-so-far update

AiScientist 在该基准上达到了 **81.82%** 的 Any Medal 率，证明了其具备接手完整研究工程流程的潜力。

### DataMaster

DataMaster 在此基准上将奖牌率从 35.91% 提升至 **68.18%**，证明了自动化数据工程在传统 ML 场景中的有效性。

## 评测意义

MLE-Bench Lite 的结果不仅反映了系统的代码生成能力，更考验了其在面对实验反馈时的自我诊断、错误归因和策略调整能力。

## 消融发现

实验表明，仅增加交互轮次而不配合良好的状态管理（如 [[file-as-bus]]），并不能带来性能提升，反而可能增加成本和噪声。