---
type: concept
title: Token使用效率
created: 2026-05-30
updated: 2026-05-30
tags: [token, 成本优化, agent, 企业级ai]
related: [tokenmaxxing, harness, ai-ready数据平台, 产业深水区]
sources: ["token贵只因你喂给模型的垃圾太多了丨亚马逊王晓野aigc2026.md"]
---
# Token使用效率

指在AI Agent调用中，通过优化喂给模型的信息质量和数量来降低Token消耗、提升性价比的理念。由 [[王晓野]] 在 [[第四届中国aigc产业峰会]] 上提出。

## 核心论点

Token成本高的主因往往不是单价贵，而是喂给模型的信息太多太杂：
- 把几千个skills一股脑扔给模型让它自己选
- 抽取和提取记忆时没有优化最终喂给模型的信息
- 这些都会导致Token使用量爆炸

## 优化方向

1. **信息过滤**：在调用模型前对输入信息进行筛选和精简
2. **记忆优化**：优化记忆提取策略，只喂给模型相关信息
3. **全链路可观测**：观察模型如何被调用，检测是否产生幻觉
4. **Skills精准匹配**：根据任务需求精准选择Skills，而非全量投喂

## 与Tokenmaxxing的对照

本概念与现有 [[tokenmaxxing]] 形成有趣对照：
- Tokenmaxxing追求Token吞吐量最大化，将Token消耗视为生产力和竞争力
- Token使用效率强调信息优化和成本控制，认为"少即是多"
- 两者分别代表了个人层面的Token消耗狂欢和企业层面的Token效率优化两种不同需求