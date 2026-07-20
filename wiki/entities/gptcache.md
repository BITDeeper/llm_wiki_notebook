---
type: entity
title: GPTCache
created: 2026-06-13
updated: 2026-06-13
tags: [开源工具, 语义缓存, llm基础设施]
related: [语义缓存, cacheattack]
sources: ["rss/icml-2026｜一句无关问题也能劫持agent，港科大&复旦提出首个语义缓存键碰撞攻击.md"]
---
# GPTCache

开源语义缓存中间件，用于LLM部署场景。通过将用户查询转化为嵌入向量作为缓存键，对语义相似请求直接返回缓存结果，从而降低LLM推理成本和延迟。

## 安全风险

在[[cacheattack|CacheAttack]]研究中，GPTCache作为主要实验目标被测试。CacheAttack-1和CacheAttack-2在GPTCache上分别取得86.9%和83.1%的缓存碰撞命中率，揭示了[[语义缓存]]机制在完整性层面的固有漏洞。