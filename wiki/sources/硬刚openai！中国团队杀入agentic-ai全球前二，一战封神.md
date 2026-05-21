---
type: source
title: "硬刚OpenAI！中国团队杀入Agentic AI全球前二，一战封神"
tags: [agentic-ai, benchmark, codebrain, feeling-ai, terminal-bench]
related: [feeling-ai, codebrain-1, terminal-bench-2-0, gpt-5-3-codex, simple-codex]
created: 2026-02-11
updated: 2026-02-11
authors: ["新智元"]
year: 2026
url: "https://mp.weixin.qq.com/s/x0Pe5IrWeH-hzDoAJ1qgMA"
venue: "新智元"
sources: ["硬刚openai！中国团队杀入agentic-ai全球前二，一战封神.md"]
---

# 硬刚OpenAI！中国团队杀入Agentic AI全球前二，一战封神

## 摘要
本文报道了中国 AI 初创团队 [[Feeling AI]] 在权威基准测试 [[Terminal-Bench 2.0]] 中取得全球第二名的成绩。其开发的 [[CodeBrain-1]] 框架基于 [[GPT-5.3-Codex]] 模型，通过精准的上下文检索和验证反馈机制，在真实 CLI 环境下的端到端任务执行能力上超越了 [[Anthropic]] 的 Claude Opus 4.6 组合，仅次于 [[OpenAI]] 的官方 [[Simple Codex]] 框架。这标志着中国团队在 [[Agentic AI]] 工程化领域已达到世界顶尖水平。

## 核心要点

### 竞赛格局的转变
- 全球大模型竞赛已从实验室里的“参数博弈”突变为残酷的“实战进化”。
- 竞争焦点从单纯的模型性能转向了架构的严谨性与自主工作流的长效续航。
- [[OpenAI]] 和 [[Anthropic]] 均选择 [[Terminal-Bench 2.0]] 作为其实力的背书标准。

### Feeling AI 的技术突破
- **排名成绩**：[[CodeBrain-1]] 在 [[Terminal-Bench 2.0]] 中以 72.9% (70.3%) 的成绩排名全球第二，仅次于 [[OpenAI]] 的 [[Simple Codex]] (77.3%)，超越了使用 [[Claude Opus 4.6]] 的 Droid 框架（第三名）。
- **技术核心**：并非训练更大的模型，而是通过更聪明的“调度”和“记忆”管理来获胜。
- **成本效率**：在 Python 任务子集中，[[CodeBrain-1]] 消耗的 Token 总量比 [[Claude Code]] 减少了超过 15%。

### CodeBrain-1 的关键技术
1.  **Useful Context Searching（有效上下文检索）**：
    - 利用 [[LSP]] (Language Server Protocol) 精准检索与当前任务相关的代码和文档，而非全量输入。
    - 减少噪音，有效避免 LLM 的幻觉问题。
2.  **Validation Feedback（验证反馈机制）**：
    - 利用 [[LSP Diagnostics]] 定位错误，并自动补充相关代码和文档以修复问题。
    - 有效缩短 Generate -> Validate 的循环过程，提高代码修复效率。

### 动态规划与策略调整
- [[CodeBrain-1]] 被定义为具备动态规划与策略调整能力的“进化大脑”。
- **个体层面**：角色可根据目标、记忆和观察结果，持续调整日程和行为。
- **群体层面**：组织可形成共享记忆，并基于外部条件变化调整整体规划（如游戏中的战术演化）。

### Feeling AI 的架构布局
- 团队提出了原创的 [[跨模态分层架构]]，包含三层核心能力：
    - [[InteractBrain]]：负责理解、记忆与规划（[[MemBrain]] 和 [[CodeBrain]] 均属于此层）。
    - [[InteractSkill]]：负责能力执行。
    - [[InteractRender]]：负责渲染呈现。
- 就在报道前 5 天，该团队还发布了 [[MemBrain 1.0]]，在多项 [[Agentic Memory]] 基准评测中拿下 SOTA。

## 行业意义
- **工程化能力的胜利**：证明了非巨头背景的团队可以通过优化中间层框架来打破垄断。
- **框架定义者**：在 [[OpenAI]] 与 [[Anthropic]] 构建的巨头生态中，中国团队选择以“框架定义者”的角色切入，展现了独特的创新路径。
- **商业落地标准**：模型和 Agent 框架的良好组合（如 [[Simple Codex]] + [[GPT-5.3-Codex]]）正成为未来大模型商业落地的标准形态。

## 引用数据
- **Terminal-Bench 2.0 排名（部分）**：
    1. Simple Codex (GPT-5.3-Codex): 77.3%
    2. **CodeBrain-1 (GPT-5.3-Codex): 72.9%**
    3. Droid (Claude Opus 4.6): 69.9%
- **Token 消耗对比**：在 Python 任务中，[[CodeBrain-1]] 相比 [[Claude Code]] 降低超 15%。