---
type: entity
title: Laura Luebbert
created: 2026-06-09
updated: 2026-06-09
tags: [生物学家, 机器学习研究员, anthropic, ai-for-science]
related: [anthropic, virbench, gget-virus, ai-for-science]
sources: ["rss/anthropic最新博客：生物学agent的瓶颈不在模型，而在数据基础设施.md"]
---
# Laura Luebbert

生物学家与机器学习研究员，就职于[[anthropic|Anthropic]]。

## 主要贡献

- 撰写Anthropic科学博客《为生物学智能体铺平道路》（Paving the way for agents in biology），系统论证生物学AI Agent的瓶颈在于数据基础设施而非模型推理能力
- 主导构建[[virbench|VirBench]]基准测试（120个病毒序列查询任务）
- 与NCBI研究人员合作开发[[gget-virus|gget virus]]确定性病毒数据检索工具

## 有趣细节

Luebbert透露，博客初稿在[[andrej-karpathy|Karpathy]]官宣加入Anthropic之前一周完成，因文中涉及Karpathy观点，担心Anthropic会觉得"Karpathy味太重"。结果提交初稿当天，Anthropic就官宣了Karpathy入职。

## 核心观点

- 生物学Agent的瓶颈不在模型推理能力，而在于生物数据基础设施为人类浏览器点击设计，不适合Agent程序化访问
- 模型在生成假设、设计实验时应有创造力，但底层基础设施（基因标识符、schema、检索逻辑）必须稳定、确定、可复现
- "便宜模型+好工具 > 贵模型+无工具"