---
type: source
title: "13人干翻Transformer！新架构SSA算力暴减千倍，成本仅Opus 5%"
tags: [ai-architecture, llm, transformer, ssa, subq, efficiency, controversy]
related: [subquadratic, subq, ssa, 亚二次方稀疏注意力, 二次方复杂度, justin-dangel, alexander-whedon]
created: 2026-05-06
updated: 2026-05-06
authors: ["新智元"]
year: 2026
url: "https://mp.weixin.qq.com/s/od_zv90JwoODJVGHNujQmg"
venue: "新智元"
sources: ["13人干翻transformer！新架构ssa算力暴减千倍，成本仅opus-5%.md"]
---

# 13人干翻Transformer！新架构SSA算力暴减千倍，成本仅Opus 5%

## 摘要
报道了初创公司 [[Subquadratic]] 发布的基于 [[SSA]]（亚二次方稀疏注意力）架构的 [[SubQ]] 模型。该模型声称在保持高性能（甚至在部分基准测试中超越 Claude Opus 4.6）的同时，将超长上下文（1200万 token）的处理成本降低至原来的 5% 以下，计算量减少最高达 1000 倍。文章同时记录了社区对该突破的兴奋与质疑（如“AI 版 Theranos”的指控）。

## 核心观点

### 1. Transformer 的“原罪”
文章指出，自 2017 年以来，Transformer 架构一直受困于 [[二次方复杂度]]：上下文长度每增加一倍，计算成本增加四倍。这导致现有模型在突破超长上下文时面临不可接受的成本和延迟。

### 2. SSA 架构的突破
[[SubQ]] 采用的 [[SSA]] 架构通过 [[内容依赖路由]] 机制，不再计算所有 Token 对之间的关系，而是基于语义动态选择少量相关 Token 进行精确计算。
- **线性扩展**：计算量随上下文长度线性增长（1倍长度=1倍成本）。
- **精确检索**：保留了从任意位置精确取回信息的能力，避免了循环模型的信息压缩损失。

### 3. 性能与成本数据
- **速度**：在 100 万 token 长度上比 FlashAttention-2 快 52.2 倍。
- **算力**：在 1200 万 token 下，注意力 FLOP 减少约 1000 倍。
- **成本**：RULER 128K 测试中，SubQ 耗费 $8，Opus 耗费 $2600（成本仅为 Opus 的 ~0.3%）。
- **性能**：
    - RULER 128K: 95% (Opus 4.6: 94.8%)
    - SWE-Bench: 81.8 (Opus 4.6: 80.8%)
    - MRCR v2: 65.9% (Opus 4.6: 78%，存在差距)

### 4. 公司背景
[[Subquadratic]] 成立于 2024 年，前身为 Aldea（语音模型），后转型专注注意力架构。团队仅 13 人（含 2 位创始人及 11 位全博士成员），获得 2900 万美元种子轮投资，估值 5 亿美元。

## 争议与质疑
尽管数据惊人，但社区存在大量质疑：
- **“AI 版 Theranos”**：部分观察者担心这是过度宣传或骗局。
- **套壳质疑**：OpenAI 前研究员 [[Will Depue]] 指出 SubQ 可能是基于 Kimi 或 DeepSeek 的微调版，而非全新架构。
- **缺乏验证**：截至发稿时，缺乏独立第三方复现和技术细节报告。

## 意义
若属实，这标志着 AI 竞赛从单纯堆砌算力（[[scaling-law]]）转向架构效率的极致优化，可能对 OpenAI 和 Anthropic 的估值构成挑战。