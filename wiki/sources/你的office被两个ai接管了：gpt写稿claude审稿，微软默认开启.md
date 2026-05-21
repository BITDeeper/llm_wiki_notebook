---
type: source
title: "你的Office被两个AI接管了：GPT写稿Claude审稿，微软默认开启"
tags: [microsoft, copilot, multi-model, anthropic, openai, agent]
related: [microsoft-365-copilot, copilot-cowork, 多模型编排, 批判模式, 智囊团模式, draco]
created: 2026-03-31
updated: 2026-03-31
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/AouAOpuwhrgnD3Z02zDtqg"
venue: "新智元"
---

# 你的Office被两个AI接管了：GPT写稿Claude审稿，微软默认开启

## 摘要
微软对 Microsoft 365 Copilot 进行了重大架构升级，引入了 [[多模型编排]] 机制。新功能 [[Researcher]] 默认采用 [[批判模式]]（Critique），让 [[GPT]] 负责生成初稿，[[Claude]] 负责同行评审。此外，微软还推出了基于 Anthropic 技术构建的 [[Copilot Cowork]]，标志着微软从单一模型依赖转向多模型“指挥中心”的战略转型。

## 核心发现

### 1. 战略转型：从“绑定”到“编排”
微软不再押注单一模型（如仅依赖 OpenAI），而是转型为多模型编排平台。Copilot 同时引入 GPT 和 Claude，甚至直接基于 Anthropic 的技术构建 [[Copilot Cowork]]。这暗示了微软与 OpenAI 的关系正在发生微妙转变，OpenAI 不再是“唯一的王牌”。

### 2. 架构创新：批判模式
[[批判模式]] 将“生成”与“评估”解耦。
- **GPT 角色**：负责任务规划、迭代检索、起草初稿（“冲锋”）。
- **Claude 角色**：基于结构化评价量表进行同行评审（“挑刺”）。
- **评审维度**：来源可靠性、报告完整性、证据溯源。

这种机制通过架构设计而非单纯提升模型能力来压制幻觉，模拟了学术界的同行评审制度。

### 3. 性能提升：DRACO 基准测试
在 [[DRACO]]（深度研究准确性、完整性和客观性）基准测试中，搭载 Critique 的 Researcher 综合得分比 [[Perplexity]] Deep Research 高出 **13.8%**。
- **分析深度**：提升最明显（+3.33），说明 Critique 能逼出更全面的分析视角。
- **事实准确性**：+2.58。
- **表达质量**：+3.04。
- **引用质量**：亦有提升。

### 4. 决策辅助：智囊团模式
[[智囊团模式]]（Model Council）允许 GPT 和 Claude 各自独立生成报告并排展示，由评委模型生成综述分析异同。这解决了复杂决策场景下的信息盲区，强调视角的多样性和辩论而非单一答案。

### 5. 深度整合：Copilot Cowork
[[Copilot Cowork]] 直接基于 Anthropic 的 Claude Cowork 技术平台构建，而非简单的 API 调用。它具备以下特点：
- **自主规划**：根据目标自动制定计划。
- **跨工具执行**：在推进过程中跨工具和文件进行逻辑推理。
- **实时进度**：展示执行进度，允许随时介入。
- **企业整合**：与 Work IQ、企业权限和治理体系深度整合。

## 行业影响
- **模型厂商议价权下降**：当平台方（微软）开始将模型视为可替换的“模块”时，模型能力本身或许不再是唯一的护城河。
- **企业级 AI 演进**：竞争焦点从“谁的模型 Benchmark 最高”转向“谁能把模型编排成可靠、可审计的工作流”。
- **成本挑战**：多模型架构虽然效果更好，但调用两个顶尖模型的成本极高，企业是否愿意为质量提升买单仍是未知数。

## 原文链接
[新智元原文](https://mp.weixin.qq.com/s/AouAOpuwhrgnD3Z02zDtqg)