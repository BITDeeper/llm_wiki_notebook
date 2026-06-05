---
type: source
title: "「这可能是人类写的最后一篇论文」Stanford、Michigan、CMU 等 37 位学者联手：把论文从 PDF 改写成 AI 能直接执行的研究包"
created: 2026-06-04
updated: 2026-06-04
tags: [学术出版, ai-for-science, 智能体, 论文复现, ara]
related: [agent-native-research-artifact, jiachen-liu, paperbench, 叙事税与工程税, ai-for-science, agentic-engineering, 机器之心]
sources: ["「这可能是人类写的最后一篇论文」stanford、michigan、cmu-等-37-位学者联手：把论文从-pdf-改写成-ai-能直接执行的研究包.md"]
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/3Nt_S1xweNOs4YlOzf1LRA"
venue: 机器之心
---

# 「这可能是人类写的最后一篇论文」Stanford、Michigan、CMU 等 37 位学者联手：把论文从 PDF 改写成 AI 能直接执行的研究包

## 摘要

本文报道了由 [[jiachen-liu|Jiachen Liu]] 牵头、联合 MIT、CMU、Michigan、Stanford 等机构共 37 位作者发表的论文《The Last Human-Written Paper: Agent-Native Research Artifacts》（arXiv:2604.24658）。论文提出 [[agent-native-research-artifact|ARA（Agent-Native Research Artifact）]] 框架，主张当 AI 智能体成为论文的主要作者和读者时，沿用三百年的 PDF 论文范式应被机器可执行的"研究包"取代。

## 核心内容

### 问题诊断
论文揭示了传统 PDF 论文格式的两笔"隐形税"：
- **[[叙事税与工程税|叙事税]]**：PDF 只汇报最终成功路径，丢弃失败实验、被驳回假设和临时决策，造成信息损失。
- **[[叙事税与工程税|工程税]]**：方法描述精度仅够说服审稿人，超参数缺失、数值稳定性技巧等关键信息不在 PDF 中。

基于 [[paperbench|PaperBench]] 8921 条专家标注的量化分析显示：PDF 中完整说明仅占 45.4%，缺失超参数 26.2%，描述含糊 21.9%。

### 解决方案
ARA 四层架构：认知层、物理层、探索图、证据层。配套三个机制：Live Research Manager（静默捕获研究轨迹）、ARA Compiler（存量 PDF 自动转换）、ARA-native Review System（自动化客观检查）。

### 实验验证
- **理解**：ARA 组准确率 93.7% vs PDF+GitHub 组 72.4%（+21.3pp，450 道题）
- **复现**：成功率从 57.4% 提升至 64.4%（+7.0pp，150 个子任务）
- **扩展**：5 个任务中 3 个获胜，全部任务中 agent 更早做出有用动作

### 重要反向发现
对最强能力的 agent，保留的 dead_end 信息反而限制其探索自由度，暴露了 ARA"保留多少"的核心设计张力，需要"忘记机制"但论文未给出具体方案。

## 关联
- 报道媒体：[[机器之心]]
- 核心概念：[[agent-native-research-artifact]]、[[叙事税与工程税]]
- 相关领域：[[ai-for-science]]、[[agentic-engineering]]、[[形式化验证]]
- 一作背景：[[jiachen-liu]]（本科毕业于[[上海交通大学]]）