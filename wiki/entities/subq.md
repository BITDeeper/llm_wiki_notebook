---
type: entity
title: SubQ
tags: [llm, model, ssa, long-context, efficiency]
related: [subquadratic, ssa, claude-opus, transformer, claude-opus-4-6, flashattention, 功能上下文]
created: 2026-05-06
updated: 2026-05-08
sources: ["13人干翻transformer！新架构ssa算力暴减千倍，成本仅opus-5%.md", "领先于transformer！新架构首个1200万上下文模型subq，成本仅opus的5%.md"]
---

# SubQ

[[SubQ]] 是由 [[Subquadratic]] 公司开发的大语言模型，是全球首个声称基于完全 [[SSA]]（亚二次方稀疏注意力）架构的模型。它以极低的超长上下文处理成本和极高的计算效率著称。

## 核心特性
- **超长上下文**：支持最高 1200 万 token 的上下文窗口。
- **线性扩展**：基于 [[SSA]] 架构，计算量随序列长度线性增长（$O(N)$），而非传统 Transformer 的二次方增长（$O(N^2)$）。
- **极低成本**：在 RULER 128K 测试中，成本仅为 [[Claude Opus 4.6]] 的约 0.3%（$8 vs $2600），总体处理成本在 5% 以下。
- **高速度**：在 100 万 token 长度上，预填充速度比 [[FlashAttention]]-2 快 52.2 倍。

## 性能基准
与 Claude Opus 4.6 的对比：
- **[[RULER]] 128K**：95% (Opus: 94.8%) — 略胜。在多跳检索、变量跟踪等复杂任务上表现优异。
- **SWE-Bench Verified**：81.8 (Opus: 80.8%) — 略胜，展示了处理真实代码库和修复 Bug 的潜力。
- **[[MRCR v2]]**：65.9% (Opus: 78%) — 显著落后，但处于 Claude Opus 4.6 的性能区间，显著优于 GPT-5.4 和 Gemini 3.1 Pro。

## 训练方法
[[SubQ]] 采用了三阶段训练流程，其中特别引入了**强化学习（RL）**阶段。这一阶段专门用于优化模型在长上下文下的检索稳定性，防止模型因为“懒惰”而仅依赖局部上下文，确保其能够利用分布在任意位置的关键信息。

## 产品线与应用
1. **SubQ API**：提供 1200 万 token 全量上下文接口。
2. **SubQ Code**：命令行编码 Agent，可一次性处理整个代码库。
3. **SubQ Search**：深度研究工具，初期免费。

旨在解决企业级 AI 难题，包括但不限于：
- 大规模代码库分析与生成
- 复杂合同的审查与合规性检查
- 企业知识库的深度问答
- 长时间运行的智能体会话

## 质疑
尽管在部分基准上表现优异，但社区对其技术原创性存疑，怀疑其可能是基于其他模型（如 DeepSeek 或 Kimi）的微调版本。