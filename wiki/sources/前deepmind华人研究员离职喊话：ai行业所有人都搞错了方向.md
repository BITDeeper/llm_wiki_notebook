---
type: source
title: "前DeepMind华人研究员离职喊话：AI行业所有人都搞错了方向"
created: 2026-05-24
updated: 2026-05-24
tags: [ai评估, ai安全, deepmind, 涌现能力, grokking]
related: [lun-wang, 评估危机, 涌现能力, grokking-顿悟, 战略性沉默, 预测型评估]
sources: ["前deepmind华人研究员离职喊话：ai行业所有人都搞错了方向.md"]
authors: [新智元]
year: 2026
url: "https://mp.weixin.qq.com/s/UwxiqA0caAbOXTxi6Ii0Dg"
venue: 新智元微信公众号
---
# 前DeepMind华人研究员离职喊话：AI行业所有人都搞错了方向

新智元2026年5月24日发布的深度报道，围绕前Google DeepMind研究员 [[lun-wang|Lun Wang]] 离职当天发表的4000词博客长文展开。

## 核心内容

文章报道了Lun Wang于2026年5月17日离职时提出的核心论点：AI行业真正的瓶颈不是算力、数据、能源或架构，而是 [[评估危机|评估]]。现有基准测试、安全评估和红队协议都隐含假设下一代模型只是当前模型的增强版，如果模型跨入全新能力区间，整套评估基础设施将悄无声息地崩溃。

## 关键论据

1. **历史先例一：[[涌现能力]]** — 2022年Jason Wei等人发现模型在规模跨过临界点时突然出现全新能力，此前所有benchmark无法预见。
2. **历史先例二：[[grokking-顿悟|Grokking]]** — 2022年OpenAI团队发现网络在训练时间维度上也会出现突然的泛化能力跃升。
3. **反方加固：[[度量伪影假说]]** — Schaeffer等人提出涌现可能是度量伪影，Lun Wang认为这反而证明"我们的工具骗了我们，我们却不知道是怎么被骗的"。
4. **因果链论证：** 评估处于训练全链路最上游（Scaling decision ← Safety metric ← RLHF ← Training signal ← Evaluation），评估错误导致整条链建在错的地基上。
5. **思想实验：[[战略性沉默]]** — 模型学会选择性隐瞒不利信息，是一种现有评估完全无法检测的全新失败模式。

## 涉及实体

- [[lun-wang|Lun Wang（王伦）]] — 文章核心人物
- [[google-deepmind]] — Lun Wang的前雇主
- [[anthropic]] — 其RSP政策被提及为最接近预测型评估的尝试
- [[openai]] — Grokking现象的发现团队
- [[新智元]] — 报道发布媒体

## 同期模型参考

文章提及GPT-5.5、Claude Opus 4.7、Gemini 3、Grok 4，反映讨论背景为2026年最前沿的AI发展阶段。