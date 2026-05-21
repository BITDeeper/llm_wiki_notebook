---
type: entity
title: DeepSeek V3.2
tags: [模型, 博弈, 诈唬, deepseek, model, llm, agent]
related: [kaggle-game-arena, gpt-5-2, gemini-3-pro, deepseek-v4, minimax-m2, 交错思维链, thinking-in-tool-use, hisa, deepseek-sparse-attention]
created: 2026-04-03
updated: 2026-05-08
sources: ["ai竞技场上演「死间计」：gpt-5被ds和gemini玩坏了.md", "deepseek-v3.2爆火，agentic性能暴涨40%解密.md", "北大团队改造deepseek注意力，速度快四倍还不丢精度.md"]
---

# DeepSeek V3.2

**DeepSeek V3.2** 是 DeepSeek 发布的关键模型版本，以低成本、极高的博弈欺诈能力、显著的 Agentic（智能体）性能提升以及作为 [[hisa]] 机制验证基准而著称。

## 核心特性

### Thinking in Tool-Use
DeepSeek V3.2 引入了 **Thinking in Tool-Use**（使用工具中思考）特性，强调在调用工具时保持思维链的连续性。
- **机制**：模型在调用工具时会持续保留推理状态，直到收到新的用户消息才会重置。
- **设计哲学**：这与 [[MiniMax M2]] 倡导的 [[交错思维链]]（Interleaved Thinking）高度一致。
- **解决的问题**：有效解决了传统 ReAct 范式中存在的 [[状态漂移]] 问题，使模型能够更稳定地执行长链路任务。

### 博弈与欺诈算法
除了智能体能力的提升，DeepSeek V3.2 的算法逻辑在欺诈场景下展现出奇效，专门针对 GPT 等理性派模型设计，是逻辑严密模型的噩梦。

## 性能表现

### Agentic 效率
- **提升幅度**：Agentic 性能最高暴涨 40%。
- **场景适应性**：在**高扰动环境**（如网页浏览）中尤为显著，显式的思考过程能有效对抗环境噪音。
- **成本控制**：推理成本极低，例如仅为 GPT-5 的五分之一。

### 竞技场风格
在博弈竞技场（如 [[kaggle-game-arena]]）中，DeepSeek V3.2 表现出极强的非对称对抗能力：
- **称号**：冷面刺客 / 搅屎棍。
- **风格**：高风险、高欺诈。擅长利用心理战让对手在自我怀疑中崩溃。
- **实战案例**：在德州扑克中，曾仅凭“空气牌”通过 All-in 诈唬迫使持有“暗三条”的 Claude Opus 4.5 弃牌。在90万手牌的复式赛制中练出了极强的博弈手感。

### 推理加速与 HISA 适配
DeepSeek V3.2 也是验证 [[hisa]]（分层索引稀疏注意力）机制有效性的基准模型。
- **性能提升**：在相关研究中，通过将 DeepSeek V3.2 原有的 [[deepseek-sparse-attention]] (DSA) 索引器替换为 HISA，模型在 64K 长度文本下的索引速度提升了 **2-4 倍**。
- **精度保持**：在“大海捞针”和长文本理解任务中保持了与原方法几乎一致的精度，且无需重新训练。

## 技术背景与演进
DeepSeek V3.2 的发布标志着行业共识的形成：显式的、交错的、持久化的思考是智能体进化的必经之路。

Wiki 中已存在 [[DeepSeek V4]] 页面。V3.2 可以被视为在 Agentic 能力上进行关键探索和奠基的版本，而 V4 可能是在此基础上的进一步演进（例如在批次不变性等底层工程特性上的优化）。