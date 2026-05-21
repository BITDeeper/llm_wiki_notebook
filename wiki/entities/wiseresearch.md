---
type: entity
title: WiseResearch
created: 2026-02-28
updated: 2026-02-28
tags: [ai-agent, medical-workflow, tool-use]
related: [智诊科技, wisediag-v2, medocr, meddb, medsearch]
sources: ["杭州黑马登顶全球第一，引爆千亿医疗市场！14亿人把「三甲医生」塞进微信群.md"]
---
# WiseResearch

[[WiseResearch]] 是 [[智诊科技]] 开发的医疗智能体工作流系统，旨在赋予 AI 像医生一样会查文献、会串证据、会使用工具的能力。

## 核心组件
WiseResearch 集成了三大核心工具，以支持复杂的临床推理和证据校验：

### MedOCR
[[MedOCR]] 是医学信息抽取智能体，专注于对复杂医学报告（包括数值、单位、异常箭头等）进行高精度识别和结构化还原。据称在测试样本中实现了零失误，且已集成于 [[OpenClaw]] 智能体工具中。

### MedDB
[[MedDB]] 是智诊医学知识库，收录了超过 40 万条经过专家审核的条目，覆盖 1.2 万种疾病。它为模型提供了一个绝对可信的医学校验基准，防止输出偏离医学共识。

### MedSearch
[[MedSearch]] 是专业医学搜索引擎，采用权威优先和时效优先策略，确保模型的知识库能与全球最新的医疗指南、药物共识保持同步。

## 性能表现
在临床 Agent 测试榜单 AgentClinic-MedQA 上，WiseResearch 得分 64.8，整体比人类医生高出 10 分。