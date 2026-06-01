---
type: concept
title: Tokenizer通胀（暗涨）
created: 2026-05-31
updated: 2026-05-31
tags: [ai定价, tokenizer, 商业策略, anthropic]
related: [opus-4-7, anthropic, ai-subscription-crisis, ai计费模式大转向-202604]
sources: ["openai明升，anthropic暗涨：ai包月折扣没了.md"]
---
# Tokenizer通胀（暗涨）

通过更换模型分词器（tokenizer）使同一文本被切分为更多token，从而在名义单价不变的情况下提高有效成本的定价策略。

## 典型案例

[[anthropic]]在推出[[opus-4-7]]时采用了这一策略：
- 名义单价与Opus 4.6完全相同（输入5美元/输出25美元每百万token）
- 新tokenizer使同一固定文本最多多计35%的token
- 有效成本约上涨40%

## 与OpenAI"明涨"的对比

- **OpenAI明涨**：[[gpt-5.5]] API价格较GPT-5.4直接翻倍，价格写在台面上
- **Anthropic暗涨**：成本藏进tokenizer里，标价没涨但账单涨了

## 潜在影响

这种策略可能引发开发者社区的信任危机——与Anthropic一贯强调的安全、透明形象存在张力。用户需要自行测算新tokenizer对实际工作负载的影响，增加了成本预测的难度。