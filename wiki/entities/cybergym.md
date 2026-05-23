---
type: entity
title: CyberGym
created: 2026-05-15
updated: 2026-05-15
tags: [评测基准, ai安全, uc-berkeley]
related: [mdash, mythos, gpt-5.5]
sources: ["最强黑客大模型，不再是mythos.md"]
---
# CyberGym

由 UC Berkeley 团队开发的 AI 安全能力评估基准，论文发表在 ICLR 2026，是目前 AI 安全能力评估领域最权威的公开基准之一。

## 测试方式

给 AI 一段有已知漏洞的代码和漏洞描述，让它自己写出能触发漏洞的攻击代码。能否挖到漏洞、能否证明其可被利用，一测便知。

## 规模

- 1507 道测试题
- 来自 188 个真实开源项目

## 当前排名（2026年5月）

| 排名 | 系统/模型 | 成绩 |
|------|----------|------|
| 1 | [[mdash]]（微软多Agent系统） | 88.45% |
| 2 | [[mythos]] Preview（Anthropic） | 83.1% |
| 3 | [[gpt-5.5]]（OpenAI） | 81.8% |

## 参与者

Anthropic、OpenAI、Meta、智谱等均提交过成绩。

## 注意事项

榜单成绩由各公司自行提交，基准代码公开但无独立第三方验证。