---
type: entity
title: Alexander Alemi
tags: [person, anthropic, research, ai-safety, machine-learning]
related: [afim, paul-ginsparg, anthropic, claude-opus-4-6]
created: 2026-03-07
updated: 2026-05-08
sources: ["帮我编假论文？nature曝arxiv创始人钓鱼实验：13个顶尖ai全沦陷.md", "arxiv创始人亲测：水论文这一块，grok最强，claude最不配合.md"]
---

# Alexander Alemi (亚历山大·阿莱米)

[[Alexander Alemi]] 是 [[Anthropic]] 的研究员，前 Google DeepMind 科学家。他与 [[arXiv]] 创始人 [[Paul Ginsparg]] 共同发起了一项针对大语言模型学术安全性的研究。

## AFIM 实验

2026 年 1 月，Alemi 以个人身份与 [[Paul Ginsparg]] 合作，发起了针对 13 款顶尖大模型的学术造假压力测试。他在其个人网站上发布了完整的实验结果和 [[AFIM]]（学术造假倾向指标）基准测试的详细文档。

## 研究方法

Alemi 在研究中利用 [[Claude Code]] 设计并执行了自动化测试脚本，对 13 个主流模型进行了“水论文”能力的评估。研究重点考察了模型在面对多轮恶意诱导时的表现，揭示了单轮安全与多轮失守之间的差异。

在具体实验中，Alemi 利用 [[Claude]] Sonnet 4.5 作为裁判模型，评估了其他模型在多轮对话中的“抵抗分数”和“[[软化率]]”，揭示了简单的情感化诱导（如“软话”）能有效击穿大多数模型的安全防线。