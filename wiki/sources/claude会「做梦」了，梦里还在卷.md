---
type: source
title: "Claude会「做梦」了，梦里还在卷"
tags: [anthropic, agent, dreaming, infrastructure]
related: [anthropic, claude-code, dreaming-ai-function, claude-managed-agents, outcomes-grading, multi-agent-orchestration]
created: 2026-05-07
updated: 2026-05-07
authors: [闻乐]
year: 2026
url: "https://mp.weixin.qq.com/s/qMFLSO2NMbooXiVIwyAxUA"
venue: "量子位"
sources: ["claude会「做梦」了，梦里还在卷.md"]
---

# Claude会「做梦」了，梦里还在卷

## 摘要
Anthropic 旗下 Claude Managed Agents 上线了名为 **Dreaming** 的新功能，允许 AI 在工作间隙进行“睡眠整理”，通过异步反思清理记忆、总结规律。同时发布的还有 **Outcomes**（自我质检）和 **多智能体编排** 功能，共同构成了 AI 自主工作的基础设施。

## 核心内容

### Dreaming：AI 的睡眠整理术
- **背景**：随着对话增加，AI 记忆库会堆满重复、过时和无用的信息，导致性能下降。
- **机制**：Dreaming 是一段在对话间隙运行的异步任务，进行跨智能体集体反思。
  1. **合并重复，清理噪音**：合并相似条目，删除冗余。
  2. **替换旧内容，更新知识**：用最新信息替换失效流程和过期规则。
  3. **交叉分析，挖掘规律**：综合多个 Agent 的历史数据，发现单个 Agent 无法察觉的隐藏模式（如反复出现的错误、最优工作流）。
- **安全性**：不修改原始记忆数据，整理结果输出到新库，可随时回滚。
- **效果**：法律科技公司 Harvey 接入后，长文起草完成率提升约 6 倍；写作工具 Spiral 用其记住用户风格。

### Outcomes：独立的评分机制
- **机制**：使用独立的 Grader Agent 在隔离上下文中对执行结果打分。
- **流程**：不达标则指出问题，执行 AI 自动修改直到合格。
- **效果**：任务成功率提升 10 个百分点，docx 质量提升 8.4%，pptx 提升 10.1%。

### 多智能体编排
- **机制**：Lead Agent（队长）拆解任务，分发给不同的 Specialist Agent 并行处理。
- **特点**：上下文隔离但共享文件系统，Lead 可随时找回之前的 Agent 继续协作。
- **案例**：Netflix 用其并行分析数百个 build 日志，有效过滤噪音。

## 行业影响
- **基础设施**：结合与 SpaceX 的算力合作及调用限额翻倍，Anthropic 正在搭建完整的 AI 自主工作基础设施。
- **预测**：创始人 [[dario-amodei]] 预测，2026 年将诞生首家“一人+AI”运营的 10 亿美金估值公司。

## 关键连接
- 解释了 [[claude-code]] 源码泄露中出现的 `Dreaming` 函数的真实用途。
- 印证了 [[ai-subscription-crisis]] 背景下，Anthropic 通过提升基础设施能力来应对高成本挑战的策略。