---
type: source
title: "Agent学会自己「长」Skill了！从失败里长出经验，比人类写的更好用｜ICML 2026"
created: 2026-05-18
updated: 2026-05-18
tags: [agent, 自进化, 经验蒸馏, 强化学习, icml-2026, skill]
related: [evolver-agent, 认知对齐, 经验自蒸馏, 自进化架构, 办公技能框架, 递归式自我改进]
sources: ["agent学会自己「长」skill了！从失败里长出经验，比人类写的更好用｜icml-2026.md"]
authors: [量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/T2DOA1LM38PxRw0PRusTzA"
venue: 量子位公众号
---
# Agent学会自己「长」Skill了！从失败里长出经验，比人类写的更好用｜ICML 2026

量子位发布的关于上海人工智能实验室 KnowledgeXLab 团队论文 **EvolveR** 的深度报道。该论文被 ICML 2026 接收，提出了一种让 Agent 从自身成功与失败轨迹中自动蒸馏可复用经验的闭环系统。

## 核心内容

- **问题定位：** 现有 Agent 的 Skill 依赖人类编写，存在增长瓶颈、质量参差、策略不匹配三大问题。
- **EvolveR 方案：** 通过"在线交互→离线自蒸馏→经验库维护→策略进化"的闭环，让 Agent 自动生成"认知Skill"。
- **关键发现：** Agent 自己蒸馏的经验优于外部强教师（GPT-4o-mini）总结的经验，即"[[认知对齐]]"效应。
- **实验验证：** 在 7 个复杂问答基准上，EvolveR 在 Qwen2.5-3B 和 7B 上均取得最优平均表现，超越 CoT、RAG、SFT、Rejection Sampling 和 Search-R1。

## 作者信息

- 一作：[[吴荣]]（浙江大学与上海人工智能实验室联培博士）
- 通信作者：[[石博天]]（上海人工智能实验室青年科学家）
- 团队：[[knowledgexlab]]

## 关联概念

- [[经验自蒸馏]] — EvolveR 的核心机制
- [[复合奖励函数]] — 区分"做事"和"会做事"的奖励设计
- [[经验库动态维护]] — 语义去重、评分、剪枝机制
- [[自进化架构]] — EvolveR 是经验级自进化的新实例