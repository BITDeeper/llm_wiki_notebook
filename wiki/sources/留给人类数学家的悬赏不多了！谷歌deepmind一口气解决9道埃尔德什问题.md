---
type: source
title: "留给人类数学家的悬赏不多了！谷歌DeepMind一口气解决9道埃尔德什问题"
created: 2026-05-26
updated: 2026-05-26
tags: [ai-mathematics, deepmind, formal-verification, erdos-problems, alphaproof-nexus]
related: [alphaproof-nexus, google-deepmind, 埃尔德什问题, 形式化证明循环, ai-for-science]
sources: ["留给人类数学家的悬赏不多了！谷歌deepmind一口气解决9道埃尔德什问题.md"]
authors: [闻乐, 量子位]
year: 2026
url: "https://mp.weixin.qq.com/s/0CE1M_lDkmVpCOYLe3HB4w"
venue: 量子位
---
# 留给人类数学家的悬赏不多了！谷歌DeepMind一口气解决9道埃尔德什问题

量子位报道，发表于2026年5月26日。

## 核心内容

本文报道了 [[google-deepmind]] 发布 [[alphaproof-nexus]] 的重大突破——一套由 Gemini 驱动的数学证明智能体框架，一次性解决了9道 [[埃尔德什问题]]、44个OEIS猜想、1道代数几何15年悬案，并改进了凸优化理论边界。

## 关键发现

- **Agent A 的简洁性优势**：最简单的Agent A（纯LLM+编译器反馈循环）即可解出全部9题，无需进化算法或强化学习辅助，挑战了"复杂系统更强"的工程直觉。
- **成本效益突破**：单题仅需几百美元算力，证明代码全部开源。
- **成功率验证**：挑战353道题，解开9道（≈2.5%），与菲尔兹奖得主 [[陶哲轩]] 此前预估的1-2%高度吻合。

## 技术架构

AlphaProof Nexus 设计了四类Agent：
- **Agent A**：Gemini 3.1 Pro + Lean编译器反馈循环（最简配置）
- **Agent B**：Agent A + AlphaProof强化学习树搜索
- **Agent C**：进化证明搜索，共享证明草图种群
- **Agent D**：全功能完全体，三股力量协同

## 典型证明案例

- **Erdős #12**（1970年，悬置56年）：利用中国剩余定理拆分问题
- **Erdős #125**（1996年，悬置30年）：利用log₄/log₃无理性构造归纳稀疏化论证
- **Erdős #846**（1992年，悬置34年）：将几何问题翻译为图论和逻辑语言

## 关联

- 与 [[aletheia]] 形成技术谱系，后者是DeepMind此前解决数学猜想的系统
- 与 [[openai]] 在数学领域形成竞速关系
- 核心机制基于 [[形式化验证]] 和 [[形式化证明循环]]