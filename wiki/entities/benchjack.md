---
type: entity
title: BenchJack
tags: [tool, open-source, security-testing]
related: [berkeley-rdi, reward-hacking, ai-评测危机]
created: 2026-04-19
updated: 2026-04-19
sources: ["swe-bench满分，0个bug修复：伯克利造了个专门作弊的ai.md"]
---

# BenchJack

BenchJack 是由伯克利 RDI 团队开发的开源自动化渗透测试工具，专门用于检测 AI 评测基准中的安全漏洞。

## 功能
- **自动分析**：自动分析评测流水线的评分机制和隔离边界。
- **漏洞生成**：生成可运行的漏洞利用代码，验证基准是否容易被操纵。
- **零能力测试**：如果一个没有任何实际能力的智能体（或脚本）利用 BenchJack 能获得高于基线的分数，则证明该基准存在严重缺陷。

## 意义
BenchJack 的发布旨在推动行业建立更鲁棒的评测标准，强调“环境隔离”和“去 AI 化审查”的重要性，防止 [[reward-hacking]] 现象的泛滥。