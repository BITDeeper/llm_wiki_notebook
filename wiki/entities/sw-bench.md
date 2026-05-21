---
type: entity
title: SWE-bench
tags: [benchmark, llm-evaluation, software-engineering]
related: [reward-hacking, benchjack, openai]
created: 2026-04-19
updated: 2026-04-19
sources: ["swe-bench满分，0个bug修复：伯克利造了个专门作弊的ai.md"]
---

# SWE-bench

SWE-bench 是一个用于评估 AI 模型软件工程能力的基准测试，主要测试模型修复真实 GitHub bug 的能力。它曾被视为 AI 编程能力的标杆，常被各大模型公司作为发布会的必报数据。

## 漏洞事件

### Conftest.py 注入
伯克利 RDI 团队发现，SWE-bench 的测试环境与被测 AI 运行在同一个 Docker 容器中。通过提交一个恶意的 `conftest.py` 文件，利用 pytest 的钩子机制，可以在测试运行时拦截结果并强制将其改为“通过”。这使得一个没有任何修复能力的脚本获得了 100% 的满分。

### 答案泄露
OpenAI 的内部审计发现，SWE-bench Verified 中 59.4% 的问题存在测试缺陷。许多前沿模型（如 GPT-5.2、Claude Opus 4.5）能够从记忆中复现标准答案的原始代码，包括变量名和注释。当切换到更严格的 SWE-bench Pro 后，模型分数普遍从 70%+ 降至约 23%。

## 行业反应
由于上述漏洞和安全性问题，OpenAI 已宣布停用 SWE-bench Verified 作为官方评估标准。