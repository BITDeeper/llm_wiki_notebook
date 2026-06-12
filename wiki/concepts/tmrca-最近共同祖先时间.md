---
type: concept
title: TMRCA（最近共同祖先时间）
created: 2026-06-10
updated: 2026-06-10
tags: [生物信息学, 系统发育, 流行病学]
related: [ncbi-virus, ai-for-science]
sources: ["rss/claude把病毒起源算错90年，都是网页惹的祸？.md"]
---
# TMRCA（最近共同祖先时间）

Time to Most Recent Common Ancestor，通过系统发育树推断疫情起源时间的关键量。数据不完整可导致起源时间偏差数十年。

## 本文案例

在2026年刚果（金）邦地布焦型埃博拉疫情分析中，人工精校数据集给出的TMRCA为2014年1月，与既往报告一致。而Claude Sonnet 4因数据检索不完整构建的数据集，将TMRCA推至1922年，偏差90余年；另一套数据漏掉几内亚序列，将起源时间挪至2014年4月。

## 对AI科研的启示

TMRCA对输入数据完整性极度敏感，少几条序列就可能导致结论严重偏移。这揭示了AI智能体在科研场景中"及格线实际上是100%"的严苛要求。