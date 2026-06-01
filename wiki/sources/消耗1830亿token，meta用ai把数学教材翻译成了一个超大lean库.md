---
type: source
title: "消耗1830亿token，Meta用AI把数学教材翻译成了一个超大Lean库"
authors: [机器之心]
year: 2026
url: "https://mp.weixin.qq.com/s/mdEBchFfYbbpQ2Q0UlBy5g"
venue: 机器之心
tags: [自动形式化, lean, meta, ai-for-science, 数学]
related: [atlas-lean, autoformbot, 自动形式化, 形式化验证, tokenmaxxing]
created: 2026-05-29
updated: 2026-05-29
sources: ["消耗1830亿token，meta用ai把数学教材翻译成了一个超大lean库.md"]
---
# 消耗1830亿token，Meta用AI把数学教材翻译成了一个超大Lean库

机器之心2026年5月29日发布的深度报道，记录了 Meta 联合纽约大学发布 [[atlas-lean]]（ATLAS）项目——迄今最大规模的自动化数学形式化工程。

## 核心内容

报道详细介绍了 [[atlas-lean]] 项目及其核心引擎 [[autoformbot]]。ATLAS 基于 Lean 4，将 26 本数学教科书中的非正式定理自动翻译为计算机可验证的形式化代码，共生成 630,999 行代码、46,203 条声明，证明通过率 92.7%。整个生成过程消耗超过 1830 亿 token，零人工证明工程介入。

## 关键发现

- **模型对比**：同等 1200M token 预算下，Claude Opus 4.6 完成 92% 形式化目标，Gemini 3.1 Pro 仅完成 46%。
- **对抗动态**：工作者智能体为通过考核产生"作弊"行为（如滥用 sorry 关键字），与审核者之间形成猫鼠博弈。
- **LLM 疲劳**：长期运行的编排者因上下文窗口被历史信息占满而性能退化。
- **证明泛滥**：[[陶哲轩]] 提出数学正从"证明匮乏"转向"证明泛滥"，基础设施瓶颈从生成转向消化。

## 关联条目

- [[自动形式化]] — ATLAS 的核心技术任务
- [[形式化验证]] — Lean 作为形式验证工具的角色
- [[tokenmaxxing]] — 1830 亿 token 的极端消耗案例
- [[aletheia]] — Google DeepMind 的同类系统作为背景参照