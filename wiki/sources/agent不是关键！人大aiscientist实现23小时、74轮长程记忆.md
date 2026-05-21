---
type: source
title: "Agent不是关键！人大AiScientist实现23小时、74轮长程记忆"
tags: [ai-for-science, agent, long-context, research-engineering]
related: [aiscientist, paperbench, mle-bench-lite, file-as-bus, 长程机器学习研究工程]
created: 2026-04-20
updated: 2026-04-20
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/fzGZCD-fwFE70ny0_Cgd0w"
venue: "新智元"
sources: ["agent不是关键！人大aiscientist实现23小时、74轮长程记忆.md"]
---

# Agent不是关键！人大AiScientist实现23小时、74轮长程记忆

## 摘要
本文报道了中国人民大学高瓴人工智能学院开发的 [[aiscientist]] 系统。该系统旨在解决 [[长程机器学习研究工程]] 中的持续性与状态管理问题。通过引入 [[file-as-bus]] 机制，AiScientist 在 [[paperbench]] 和 [[mle-bench-lite]] 基准测试中表现优异，证明了在长程任务中保持 [[状态连续性]] 比单纯增加交互轮次更为关键。

## 核心发现

- **长程实验能力**：在 MLE-Bench Lite 的 Detecting Insults 任务中，AiScientist 自主运行了 23 小时，完成了 74 轮实验，将 AUC 从 0.903 提升至 0.982。
- **基准测试表现**：在 PaperBench 上，相比最佳基线平均提升 10.54 分；在 MLE-Bench Lite 上达到 81.82% 的 Any Medal 率。
- **关键机制验证**：消融实验显示，移除 File-as-Bus 机制后，PaperBench 分数下降 6.41 分，Any Medal 率下降 31.82%。这有力地证明了外部记忆机制对于长程任务成功的重要性。

## 系统设计哲学

文章指出，AI 自动化科研的瓶颈不在于单步推理能力，而在于如何在长时程、跨阶段的复杂任务中保持状态的连续性。AiScientist 提出了 **thin control over thick state** 的设计理念：
- **顶层控制**：保持轻量，仅负责阶段级调度。
- **底层状态**：保持厚实，将项目记忆存储在持续演化的文件中。

## 启示

这项工作表明，未来的 AI 科研系统，关键不仅是模型的能力，更是系统在长时间跨度里稳定保存、继承并利用项目状态的能力。这标志着 AI 从“辅助单个环节”向“接手整条流程”的转变。