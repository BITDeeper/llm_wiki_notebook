---
type: entity
title: PaperBench
tags: [benchmark, evaluation, machine-learning, 评测基准, 论文复现, ai-for-science, 数据集]
related: [aiscientist, 长程机器学习研究工程, agent-native-research-artifact, 叙事税与工程税]
created: 2026-04-20
updated: 2026-06-04
sources: ["agent不是关键！人大aiscientist实现23小时、74轮长程记忆.md", "「这可能是人类写的最后一篇论文」stanford、michigan、cmu-等-37-位学者联手：把论文从-pdf-改写成-ai-能直接执行的研究包.md"]
---

# PaperBench

[[PaperBench]] 是一个用于评测 AI 系统从零复现论文能力的高难度基准测试，也是为数不多的专注于论文复现能力量化评测的标准化工具之一。该基准包含 **8921 条专家标注复现要求**，覆盖 15 篇论文、150 个子任务，为 [[ai-for-science]] 领域评估 AI 智能体的科研能力提供了标准化工具。

## 评测背景与基线表现

在 PaperBench 这类严苛的评测中，现有的顶尖 Agent 系统仅能达到约 **21%** 的复现率，而人类顶尖 ML 博士在 48 小时预算下可达到 **41%**。这揭示了当前 AI 系统在处理复杂、模糊的真实科研任务时与人类的巨大差距。

## 在 ARA 研究中的应用

### 信息缺失量化

基于 PaperBench 的 8921 条标注分析，揭示了 [[叙事税与工程税|工程税]] 的严重程度：

| 缺失类型 | 占比 |
|---|---|
| PDF 中完整说明 | 45.4% |
| 缺失超参数 | 26.2% |
| 描述含糊 | 21.9% |
| 仅靠交叉引用 | 13.4% |
| 缺少代码或 baseline 细节 | 21.7% |

### 复现能力评测

在 PaperBench 的 15 篇论文、150 个子任务上，[[agent-native-research-artifact|ARA]] 框架的复现成功率从 PDF+GitHub 的 **57.4%** 提升至 **64.4%**（+7.0pp）。关键发现：任务越难，ARA 的优势越大。

## AiScientist 的表现

[[aiscientist]] 在 PaperBench 上相比最佳匹配基线平均提升了约 **10.54 分**。这一结果不仅展示了 AiScientist 在代码实现和环境配置方面的能力，更证明了其在长程任务中保持状态连贯性和进行错误归因的优势。

## 对系统架构的启示

PaperBench 的测试结果直接支撑了关于 [[状态连续性]] 重要性的论点。消融实验显示，当移除 AiScientist 的外部记忆机制时，其 PaperBench 分数显著下降，说明在长程复现任务中，系统架构比单步推理能力更为关键。